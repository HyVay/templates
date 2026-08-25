#!/usr/bin/env node
/**
 * Uji bangun sungguhan: scaffold + overlay template → `astro build`.
 *
 * Validator statis tidak bisa membuktikan sebuah template benar-benar bisa
 * dibangun. Skrip ini membuktikannya, dan itulah gerbang yang menangkap kelas
 * bug paling sering muncul: komponen dipakai tapi tidak di-import.
 *
 * Pakai:
 *   node scripts/build-test.mjs                 # semua template
 *   node scripts/build-test.mjs undangan-pernikahan
 */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const WORK = path.join(ROOT, '.build-test');
const SCAFFOLD = path.join(ROOT, 'scaffold');

const wanted = process.argv.slice(2);
const ids = readdirSync(path.join(ROOT, 'templates'), { withFileTypes: true })
    .filter((e) => e.isDirectory() && (wanted.length === 0 || wanted.includes(e.name)))
    .map((e) => e.name)
    .sort();

if (ids.length === 0) {
    console.error('Tidak ada template yang cocok.');
    process.exit(1);
}

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: 'pipe', encoding: 'utf8' });

// node_modules dipasang sekali lalu dipakai ulang oleh semua template.
mkdirSync(WORK, { recursive: true });
const deps = path.join(WORK, 'node_modules');
if (!existsSync(deps)) {
    console.log('memasang dependensi scaffold (sekali saja)…');
    cpSync(path.join(SCAFFOLD, 'package.json'), path.join(WORK, 'package.json'));
    run(npm, ['install', '--no-audit', '--no-fund'], WORK);
}

let gagal = 0;
for (const id of ids) {
    const dir = path.join(WORK, id);
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });

    cpSync(SCAFFOLD, dir, { recursive: true, filter: (src) => !src.endsWith(`${path.sep}README.md`) });
    cpSync(path.join(ROOT, 'templates', id, 'files'), dir, { recursive: true });
    cpSync(deps, path.join(dir, 'node_modules'), { recursive: true, verbatimSymlinks: true });

    try {
        const out = run(npm, ['run', 'build'], dir);
        const halaman = [...out.matchAll(/▶ (src\/pages\/\S+)/g)].map((m) => m[1]);
        console.log(`OK    ${id} — ${halaman.length} halaman: ${halaman.join(', ')}`);
    } catch (e) {
        gagal += 1;
        console.error(`GAGAL ${id}`);
        console.error((e.stdout || '') + (e.stderr || ''));
    }
}

console.log(`\n${ids.length} template dibangun · ${gagal} gagal`);
process.exit(gagal ? 1 : 0);
