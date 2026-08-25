#!/usr/bin/env node
/**
 * Validator for the HyVay template registry.
 *
 * Runs in CI on every PR and again server-side before a template is applied, so
 * the rules here are the security boundary as much as a style gate: a template is
 * a CONTENT overlay dropped onto a HyVay scaffold, never a build-config change.
 * A file that can influence the build (package.json, astro.config.mjs, scripts/)
 * would execute with the builder's privileges, so those paths are refused
 * outright rather than reviewed by hand.
 *
 * No dependencies on purpose — `node scripts/validate.mjs` must work on a bare
 * checkout with no install step.
 */
import { readdirSync, readFileSync, statSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const WRITE_INDEX = process.argv.includes('--write-index');

/** Manifest contract version understood by this validator and by core-api. */
const CONTRACT = 1;

const CATEGORIES = ['Undangan', 'Bisnis', 'Toko', 'Portofolio', 'Acara', 'Kuliner', 'Pendidikan', 'Lainnya'];
const BADGES = ['popular', 'new', 'featured'];
const SCAFFOLDS = ['astro-static'];

/** Overlay files may only carry content. Anything that runs at build time is out. */
const ALLOWED_EXT = new Set([
    '.astro', '.ts', '.css',
    '.svg', '.png', '.jpg', '.jpeg', '.webp', '.avif',
    '.woff2',
]);

/** Overlays live under these roots only — nothing else may be written. */
const ALLOWED_ROOTS = ['src/', 'public/'];

/**
 * Paths the platform owns. Letting a template replace any of these turns a
 * content contribution into arbitrary code execution during `npm run build`
 * (.astro frontmatter and every config file run as Node), or silently breaks
 * the favicon / layout contract every generated app depends on.
 */
const DENY_EXACT = new Set([
    'package.json', 'package-lock.json', 'tsconfig.json',
    'astro.config.mjs', 'tailwind.config.mjs', 'postcss.config.js', 'postcss.config.mjs',
    'AGENTS.md',
    'src/layouts/Base.astro',
    'src/config/site.ts',
    'public/favicon.svg',
]);
const DENY_PREFIX = ['scripts/', 'node_modules/', 'dist/', '.git/', '.github/', '.astro/'];

const LIMITS = { files: 60, fileBytes: 300 * 1024, totalBytes: 3 * 1024 * 1024, seedPrompt: 800 };

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const walk = (dir, base = '') => {
    const out = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const rel = base ? `${base}/${entry.name}` : entry.name;
        if (entry.isDirectory()) out.push(...walk(path.join(dir, entry.name), rel));
        else if (entry.isFile()) out.push(rel);
    }
    return out;
};

// ---------------------------------------------------------------- manifest

const isKebab = (s) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s);

const checkManifest = (id, m, where) => {
    const need = (k, type) => {
        if (m[k] === undefined || m[k] === null || m[k] === '') return err(where, `field "${k}" wajib ada`), false;
        if (type === 'string' && typeof m[k] !== 'string') return err(where, `field "${k}" harus string`), false;
        return true;
    };

    if (need('id', 'string')) {
        if (m.id !== id) err(where, `id "${m.id}" harus sama dengan nama folder "${id}"`);
        if (!isKebab(m.id) || m.id.length > 40) err(where, 'id harus kebab-case, maks 40 karakter');
    }
    if (need('name', 'string') && m.name.length > 60) err(where, 'name maks 60 karakter');
    if (need('description', 'string') && m.description.length > 220) err(where, 'description maks 220 karakter');
    if (need('category', 'string') && !CATEGORIES.includes(m.category)) {
        err(where, `category "${m.category}" tidak dikenal (pilih: ${CATEGORIES.join(', ')})`);
    }
    if (need('scaffold', 'string') && !SCAFFOLDS.includes(m.scaffold)) {
        err(where, `scaffold harus salah satu dari: ${SCAFFOLDS.join(', ')}`);
    }
    if (m.contract !== CONTRACT) err(where, `contract harus ${CONTRACT} (dapat: ${JSON.stringify(m.contract)})`);
    if (need('seedPrompt', 'string') && m.seedPrompt.length > LIMITS.seedPrompt) {
        err(where, `seedPrompt maks ${LIMITS.seedPrompt} karakter`);
    }
    need('author', 'string');
    need('license', 'string');

    if (m.tags !== undefined) {
        if (!Array.isArray(m.tags) || m.tags.length > 6) err(where, 'tags harus array maks 6 item');
        else for (const t of m.tags) if (typeof t !== 'string' || !isKebab(t)) err(where, `tag "${t}" harus kebab-case`);
    }
    if (m.badge !== undefined && !BADGES.includes(m.badge)) {
        err(where, `badge harus salah satu dari: ${BADGES.join(', ')}`);
    }

    const known = new Set([
        'id', 'name', 'description', 'category', 'tags', 'scaffold', 'contract',
        'badge', 'seedPrompt', 'author', 'license',
    ]);
    for (const k of Object.keys(m)) if (!known.has(k)) warn(where, `field "${k}" tidak dikenal, diabaikan platform`);
};

// ------------------------------------------------------------- overlay paths

const checkPath = (rel, where) => {
    if (rel.includes('\\')) return err(where, 'gunakan "/" sebagai pemisah path');
    if (rel.startsWith('/') || path.isAbsolute(rel)) return err(where, 'path tidak boleh absolut');
    if (rel.split('/').some((s) => s === '..' || s === '.')) return err(where, 'path tidak boleh mengandung "." atau ".."');
    if (rel.length > 160) return err(where, 'path terlalu panjang (maks 160 karakter)');
    if (/[^A-Za-z0-9._/-]/.test(rel)) return err(where, 'path hanya boleh huruf, angka, ".", "_", "-", "/"');

    if (DENY_EXACT.has(rel)) return err(where, 'file ini dikelola platform dan tidak boleh ditimpa template');
    for (const p of DENY_PREFIX) if (rel.startsWith(p)) return err(where, `folder "${p}" tidak boleh diisi template`);
    if (rel.startsWith('.env')) return err(where, 'file .env tidak boleh ada di template');

    if (!ALLOWED_ROOTS.some((r) => rel.startsWith(r))) {
        return err(where, `file harus berada di ${ALLOWED_ROOTS.join(' atau ')}`);
    }
    const ext = path.extname(rel).toLowerCase();
    if (!ALLOWED_EXT.has(ext)) {
        return err(where, `ekstensi "${ext || '(kosong)'}" tidak diizinkan (boleh: ${[...ALLOWED_EXT].join(' ')})`);
    }
    if (rel.endsWith('.tsx') || rel.endsWith('.jsx')) err(where, 'tidak ada React di scaffold ini');
};

// ----------------------------------------------------------- astro contents

/** Strip comments and script/style bodies so markup scans see only markup. */
const markupOnly = (src) =>
    src
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '');

const frontmatterOf = (src) => {
    if (!src.startsWith('---')) return '';
    const end = src.indexOf('\n---', 3);
    return end === -1 ? '' : src.slice(3, end);
};

const checkAstro = (rel, src, where) => {
    const fm = frontmatterOf(src);
    const body = markupOnly(src.slice(fm ? src.indexOf('\n---', 3) + 4 : 0));

    // #1 cause of broken generated pages: a component used but never imported.
    const imported = new Set();
    for (const m of fm.matchAll(/import\s+([A-Za-z0-9_$]+)\s*(?:,\s*\{[^}]*\})?\s*from/g)) imported.add(m[1]);
    for (const m of fm.matchAll(/import\s*\{([^}]*)\}\s*from/g)) {
        for (const part of m[1].split(',')) {
            const name = part.split(/\s+as\s+/).pop().trim();
            if (name) imported.add(name);
        }
    }
    // Components can also be values defined in the fence itself.
    for (const m of fm.matchAll(/(?:const|let|var|function|class)\s+([A-Z][A-Za-z0-9_$]*)/g)) imported.add(m[1]);

    const used = new Set();
    for (const m of body.matchAll(/<([A-Z][A-Za-z0-9_$.]*)/g)) used.add(m[1].split('.')[0]);
    for (const name of used) {
        if (!imported.has(name)) {
            err(where, `<${name}> dipakai tapi tidak di-import di frontmatter file ini ("${name} is not defined")`);
        }
    }

    if (/\bclassName\s*=/.test(src)) err(where, 'gunakan class= (bukan className=) di file .astro');
    if (/\bclient:(load|idle|visible|only|media)\b/.test(src)) err(where, 'client:* directive tidak berlaku, tidak ada React');
    if (/from\s+['"]react(-dom)?['"]/.test(src)) err(where, 'import react tidak diizinkan');
    if (/from\s+['"][^'"]+\.(tsx|jsx)['"]/.test(src)) err(where, 'import .tsx/.jsx tidak diizinkan');

    // An SVG stored as a string and rendered with {…} shows up as escaped source text.
    if (/(icon|svg)\s*:\s*['"`]\s*<svg/i.test(src)) err(where, 'jangan simpan markup <svg> sebagai string, tulis inline');

    // Mobile-first: a multi-column layout must state its phone fallback.
    for (const m of body.matchAll(/class="([^"]*)"/g)) {
        const cls = m[1];
        // 2 columns always fits 390px; 3+ needs an explicit phone fallback.
        if (/(^|\s)grid-cols-([3-9]|1[0-2])(\s|$)/.test(cls) && !/(^|\s)grid-cols-[12](\s|$)/.test(cls)) {
            err(where, `class "${cls.trim().slice(0, 70)}…" pakai grid-cols-N tanpa grid-cols-1 untuk layar HP`);
        }
        if (/(^|\s)h-screen(\s|$)/.test(cls)) warn(where, 'h-screen bermasalah di browser mobile, pakai min-h-[100dvh]');
        if (/w-\[\d{4,}px\]/.test(cls)) err(where, 'lebar piksel tetap menyebabkan scroll horizontal di HP');
    }

    if (rel.startsWith('src/pages/') && !/<Base[\s>]/.test(body)) {
        err(where, 'setiap halaman harus dibungkus layout <Base title=… description=…>');
    }
};

// ------------------------------------------------------------------- main

if (!existsSync(TEMPLATES_DIR)) {
    console.error('FATAL: folder templates/ tidak ditemukan');
    process.exit(1);
}

const ids = readdirSync(TEMPLATES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

if (ids.length === 0) errors.push('templates/: belum ada template sama sekali');

const index = [];

for (const id of ids) {
    const dir = path.join(TEMPLATES_DIR, id);
    const where0 = `templates/${id}`;

    if (!isKebab(id)) err(where0, 'nama folder harus kebab-case');

    const manifestPath = path.join(dir, 'template.json');
    if (!existsSync(manifestPath)) {
        err(where0, 'template.json tidak ada');
        continue;
    }

    let manifest;
    try {
        manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    } catch (e) {
        err(`${where0}/template.json`, `JSON tidak valid: ${e.message}`);
        continue;
    }
    checkManifest(id, manifest, `${where0}/template.json`);

    const filesDir = path.join(dir, 'files');
    if (!existsSync(filesDir)) {
        err(where0, 'folder files/ tidak ada');
        continue;
    }

    const files = walk(filesDir).sort();
    if (!files.includes('src/pages/index.astro')) err(`${where0}/files`, 'wajib punya src/pages/index.astro');
    if (files.length > LIMITS.files) err(`${where0}/files`, `maks ${LIMITS.files} file (dapat ${files.length})`);

    let total = 0;
    for (const rel of files) {
        const where = `${where0}/files/${rel}`;
        checkPath(rel, where);

        const size = statSync(path.join(filesDir, rel)).size;
        total += size;
        if (size > LIMITS.fileBytes) err(where, `ukuran ${Math.round(size / 1024)}KB melebihi ${LIMITS.fileBytes / 1024}KB`);

        if (rel.endsWith('.astro')) checkAstro(rel, readFileSync(path.join(filesDir, rel), 'utf8'), where);
    }
    if (total > LIMITS.totalBytes) {
        err(`${where0}/files`, `total ${Math.round(total / 1024)}KB melebihi ${LIMITS.totalBytes / 1024}KB`);
    }

    // Referenced local components must actually ship with the template.
    const present = new Set(files);
    for (const rel of files.filter((f) => f.endsWith('.astro'))) {
        const src = readFileSync(path.join(filesDir, rel), 'utf8');
        for (const m of frontmatterOf(src).matchAll(/from\s+['"](\.[^'"]+)['"]/g)) {
            const target = path.posix.normalize(path.posix.join(path.posix.dirname(rel), m[1]));
            // Base.astro and site.ts come from the scaffold, not the template.
            if (DENY_EXACT.has(target)) continue;
            // Extension-less specifiers are normal for `.ts` modules.
            const candidates = [target, `${target}.ts`, `${target}.astro`, `${target}/index.ts`];
            if (!candidates.some((c) => present.has(c))) {
                err(`${where0}/files/${rel}`, `import "${m[1]}" menunjuk ke ${target} yang tidak ada di template`);
            }
        }
    }

    if (!existsSync(path.join(dir, 'preview.png')) && !existsSync(path.join(dir, 'preview.jpg'))) {
        warn(where0, 'belum ada preview.png — kartu template akan pakai placeholder');
    }

    index.push({
        id,
        name: manifest.name,
        description: manifest.description,
        category: manifest.category,
        tags: manifest.tags ?? [],
        badge: manifest.badge ?? null,
        scaffold: manifest.scaffold,
        contract: manifest.contract,
        files: files.length,
    });
}

const indexPath = path.join(ROOT, 'index.json');
const rendered = `${JSON.stringify({ contract: CONTRACT, templates: index }, null, 2)}\n`;

if (WRITE_INDEX) {
    writeFileSync(indexPath, rendered);
    console.log(`index.json ditulis (${index.length} template)`);
} else if (!existsSync(indexPath) || readFileSync(indexPath, 'utf8') !== rendered) {
    errors.push('index.json tidak sinkron — jalankan: node scripts/validate.mjs --write-index');
}

for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);

console.log(
    `\n${ids.length} template diperiksa · ${errors.length} error · ${warnings.length} warning`,
);
process.exit(errors.length ? 1 : 0);
