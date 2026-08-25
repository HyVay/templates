# Panduan kontribusi

Template yang baik adalah template yang **langsung bisa dipakai**: pengguna menekan
"Gunakan template", mengganti nama dan nomor lewat satu prompt, dan situsnya siap
dipublikasikan. Itu tolok ukurnya.

## Yang membuat PR ditolak

- Build gagal (`node scripts/build-test.mjs`).
- Komponen dipakai tanpa di-import di frontmatter file yang sama — penyebab error
  paling sering: `Header is not defined`.
- Menyentuh file milik platform (daftar lengkap di README).
- Data pribadi sungguhan: nomor WhatsApp aktif, alamat rumah, nama dan foto orang
  yang tidak memberi izin. Pakai `6281234567890` dan alamat fiktif.
- Tautan gambar mati. Cek dulu setiap URL Unsplash:
  `curl -o /dev/null -w '%{http_code}\n' 'https://images.unsplash.com/photo-xxxx?w=400'`

## Aturan desain

**Mobile-first.** Kelas dasar Tailwind menggambarkan layar 390px; `sm:`/`md:`/`lg:`
hanya menambah versi desktop. Setiap layout multi-kolom menyebut versi HP-nya di
elemen yang sama: `grid-cols-1 md:grid-cols-3`, `flex-col md:flex-row`.
`grid-cols-3` tanpa `grid-cols-1` ditolak validator.

**Header wajib punya hamburger yang berfungsi.** Baris tautan desktop `hidden md:flex`,
di bawah `md` sebuah tombol `md:hidden` membuka panel dengan tautan yang sama.
Contoh siap pakai ada di `templates/profil-usaha/files/src/components/Header.astro`.

**Multi-halaman, bukan satu halaman panjang.** Ini static site generator — setiap
bagian besar dapat rute sendiri (`/`, `/produk/`, `/kontak/`) dan navbar memakai
tautan rute nyata. Satu halaman dengan anchor hanya untuk hal yang memang satu
halaman, seperti undangan.

**Lapisan latar dekoratif.** Pakai `absolute inset-0 z-0 pointer-events-none` di dalam
induk `relative overflow-hidden`, lalu beri konten `relative z-10`. Jangan pakai
`-z-10`: kalau ada leluhur yang punya warna latar sendiri, gambar Anda tersembunyi di
belakangnya dan hero terlihat kosong. Hero setinggi layar memakai `min-h-[100dvh]`,
bukan `h-screen`.

**Ikon ditulis inline.** `<svg>…</svg>` langsung di tempat pemakaian. Menyimpan
markup SVG sebagai string lalu merendernya dengan `{item.icon}` menghasilkan teks
sumber yang ter-escape di halaman.

**Target sentuh ≥ 44px** (`h-11 w-11` untuk tombol ikon, `py-3` untuk baris menu).

**Transisi seperlunya**, dan sebutkan durasinya: `transition-colors duration-150`.

## Formulir: tidak ada backend

Situsnya statis — tidak ada server dan tidak ada basis data. Jangan pernah
menampilkan "data tersimpan" untuk sesuatu yang tidak tersimpan. Arahkan formulir ke
kanal yang benar-benar dibaca pemilik usaha; untuk UMKM Indonesia biasanya WhatsApp:
susun pesannya dari isian formulir lalu buka `https://wa.me/62…?text=…`. Contoh ada di
`templates/katalog-produk/files/src/pages/kontak.astro`.

## Struktur file yang disarankan

```
files/src/data/<nama>.ts        semua teks, harga, dan nomor yang perlu diganti
files/src/components/*.astro    Header, Footer, kartu — tiap file < ~150 baris
files/src/pages/*.astro         satu file per rute, semuanya membungkus <Base>
```

Menaruh seluruh teks yang bisa diganti di satu berkas `src/data/` membuat penyesuaian
lewat chat jauh lebih mudah: model hanya perlu menyunting satu tempat.

## `seedPrompt`

Prompt ini muncul di kotak chat pengguna setelah template dipakai. Tulis sebagai
instruksi penyesuaian, sebutkan `{{placeholder}}` untuk data yang harus mereka isi,
dan sebutkan bagian struktur yang harus dipertahankan. Contoh:

> Sesuaikan katalog ini untuk toko {{nama toko}} yang menjual {{jenis produk}}.
> Ganti daftar produk, kategori, harga, dan nomor WhatsApp contoh dengan data toko itu.
> Pertahankan filter kategori dan tombol pesan WhatsApp-nya.

## Preview

Ambil pada viewport 1280x800, halaman utama, setelah semua gambar selesai dimuat:

```bash
cd .build-test/<id> && npx astro preview   # lalu tangkap layar → templates/<id>/preview.png
```
