# HyVay Templates

Registri template resmi untuk [HyVay](https://hyvay.com). Setiap template adalah
**kode nyata** — halaman `.astro`, komponen, dan data — yang disalin ke ruang kerja
pengguna saat mereka menekan "Gunakan template", lalu diubah lebih lanjut lewat chat AI.

Repositori ini publik supaya tim dan komunitas bisa menambah template lewat Pull Request.

## Cara platform memakai repo ini

1. Saat deploy, HyVay menyinkronkan repo ini pada **satu commit SHA yang dipin**, bukan
   `main` yang berjalan. Template baru tidak langsung tayang; SHA dinaikkan secara sadar.
2. Isi `templates/<id>/files/` di-overlay ke atas scaffold `astro-static` yang baru dibuat.
   Overlay hanya boleh menambah/menimpa file **konten**.
3. Server memvalidasi ulang setiap file dengan aturan yang sama seperti CI di sini sebelum
   menuliskannya. Aturan di `scripts/validate.mjs` adalah batas keamanan, bukan sekadar gaya:
   file yang ikut dieksekusi saat build (`package.json`, `astro.config.mjs`, `scripts/`)
   akan berjalan dengan hak akses builder, jadi ditolak — bukan ditinjau manual.
4. `seedPrompt` dari `template.json` masuk ke kotak chat pengguna sebagai titik awal
   penyesuaian, bukan dijalankan otomatis.

## Struktur

```
templates/
  <id>/
    template.json     # metadata + seedPrompt (wajib)
    preview.png       # tangkapan layar 1280x800 halaman utama (sangat disarankan)
    files/            # overlay: hanya src/ dan public/
      src/pages/index.astro      (wajib)
      src/components/*.astro
      src/data/*.ts
index.json            # indeks turunan; dihasilkan validator, ikut di-commit
scaffold/             # cermin file milik platform, hanya untuk uji bangun lokal/CI
scripts/validate.mjs  # gerbang statis
scripts/build-test.mjs# gerbang bangun sungguhan (astro build)
```

## `template.json`

| Field | Wajib | Keterangan |
| --- | --- | --- |
| `id` | ya | kebab-case, harus sama dengan nama folder |
| `name` | ya | maks 60 karakter, tampil di kartu |
| `description` | ya | maks 220 karakter, satu kalimat |
| `category` | ya | `Undangan`, `Bisnis`, `Toko`, `Portofolio`, `Acara`, `Kuliner`, `Pendidikan`, `Lainnya` |
| `tags` | tidak | maks 6, kebab-case |
| `scaffold` | ya | `astro-static` (satu-satunya saat ini) |
| `contract` | ya | `1` |
| `badge` | tidak | `popular`, `new`, `featured` |
| `seedPrompt` | ya | maks 800 karakter; pakai `{{placeholder}}` untuk data yang pengguna isi |
| `author` | ya | nama Anda atau organisasi |
| `license` | ya | mis. `MIT` |

## Aturan file overlay

Diizinkan: `src/**` dan `public/**` dengan ekstensi
`.astro .ts .css .svg .png .jpg .jpeg .webp .avif .woff2`.

Ditolak (dikelola platform):
`package.json`, `package-lock.json`, `tsconfig.json`, `astro.config.mjs`,
`tailwind.config.mjs`, `postcss.config.*`, `AGENTS.md`, `src/layouts/Base.astro`,
`src/config/site.ts`, `public/favicon.svg`, `scripts/**`, `.env*`.

Batas: maks 60 file per template, 300KB per file, 3MB total.

Tanpa dependensi baru — yang tersedia hanya `astro`, `@astrojs/tailwind`, dan
`tailwindcss`. Tidak ada React: semua komponen `.astro`, interaktivitas pakai
`<script>` biasa.

## Uji lokal sebelum PR

```bash
node scripts/validate.mjs --write-index   # cek aturan + segarkan index.json
node scripts/build-test.mjs               # astro build sungguhan untuk semua template
node scripts/build-test.mjs undangan-pernikahan   # atau satu saja
```

Keduanya wajib hijau. `build-test` memasang dependensi sekali ke `.build-test/`
lalu memakainya ulang, jadi jalan berikutnya hanya beberapa detik.

Untuk melihat hasilnya di browser:

```bash
cd .build-test/undangan-pernikahan && npx astro preview
```

## Menambah template

1. Fork, lalu buat `templates/<id>/` berisi `template.json` dan `files/`.
2. Tulis isi dalam bahasa Indonesia, dengan data contoh yang jelas-jelas fiktif —
   **jangan pernah memakai nomor telepon, alamat, atau nama orang sungguhan.**
3. Jalankan kedua perintah di atas sampai hijau, lampirkan `preview.png` 1280x800.
4. Buka PR. CI menjalankan validator dan uji bangun yang sama.

Panduan desain lebih rinci ada di [CONTRIBUTING.md](CONTRIBUTING.md).

## Lisensi

Kode repositori: MIT (lihat [LICENSE](LICENSE)). Setiap template menyatakan lisensinya
sendiri di `template.json`; foto contoh berasal dari Unsplash dan mengikuti lisensi Unsplash.
