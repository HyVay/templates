# scaffold/ — cermin file milik platform

Folder ini **bukan bagian dari template**. Isinya salinan file yang dihasilkan HyVay
untuk setiap aplikasi baru (scaffold `astro-static`), dipakai hanya untuk dua hal:

1. `node scripts/build-test.mjs` — menyalin folder ini, menimpanya dengan `files/`
   milik sebuah template, lalu menjalankan `astro build` sungguhan. Inilah gerbang
   yang menangkap kesalahan seperti "Header is not defined" sebelum PR digabung.
2. Referensi saat menulis template: begini bentuk proyek yang akan menerima overlay Anda.

Template **tidak boleh** menimpa file mana pun di sini (lihat daftar larangan di
`scripts/validate.mjs`). Kalau platform mengubah scaffold-nya, folder ini ikut
diperbarui lewat PR terpisah.
