/**
 * Semua teks dan angka produk ada di sini. Ganti nilai di file ini, seluruh halaman ikut berubah.
 */
export const produk = {
    nama: 'Kasirin',
    tagline: 'Aplikasi kasir untuk warung dan toko kelontong.',
    deskripsi:
        'Catat penjualan dari HP Android biasa, tetap jalan saat internet mati, dan terima laporan harian lewat WhatsApp. Tanpa pelatihan, tanpa perangkat khusus.',
    wa: '6281234567890',
    email: 'halo@kasirin.id',
    playStore: '#',
    perusahaan: 'PT Kasirin Teknologi Nusantara',
    alamat: 'Jl. Dipatiukur No. 35, Bandung',
    versi: 'v3.2 · Android 8 ke atas',
};

/** Angka-angka yang ditampilkan di beranda. Ganti dengan angka nyata Anda, atau hapus. */
export const angka = [
    { nilai: '< 2 detik', label: 'per transaksi' },
    { nilai: '0 Rp', label: 'biaya perangkat' },
    { nilai: '7 hari', label: 'data offline tersimpan' },
];

export const fitur = [
    {
        judul: 'Jalan tanpa internet',
        isi: 'Transaksi tersimpan di HP dan disinkronkan sendiri saat sinyal kembali. Warung di pasar yang sinyalnya hilang-timbul tetap bisa jualan sepanjang hari.',
        contoh: { label: 'Status sinkron', baris: ['Offline sejak 09.12', '47 transaksi menunggu', 'Tersinkron otomatis saat online'] },
    },
    {
        judul: 'Stok berkurang sendiri',
        isi: 'Setiap penjualan memotong stok. Barang yang tinggal sedikit muncul di daftar belanja, jadi tidak ada lagi kehabisan rokok atau minyak goreng di jam ramai.',
        contoh: { label: 'Stok menipis', baris: ['Minyak goreng 2L · sisa 3', 'Indomie goreng · sisa 11', 'Gas 3 kg · sisa 1'] },
    },
    {
        judul: 'Laporan harian ke WhatsApp',
        isi: 'Jam 21.00 pemilik menerima ringkasan: omzet, barang terlaris, dan transaksi yang dibatalkan. Tidak perlu buka aplikasi untuk tahu toko hari ini untung berapa.',
        contoh: { label: 'Ringkasan Selasa', baris: ['Omzet Rp 2.340.000', 'Terlaris: Aqua 600ml (68)', 'Dibatalkan: 2 transaksi'] },
    },
    {
        judul: 'Beberapa kasir, satu laporan',
        isi: 'Pagi dipegang anak, sore dipegang pegawai. Tiap kasir masuk dengan PIN sendiri, dan laporan menunjukkan siapa menjual apa.',
        contoh: { label: 'Shift hari ini', baris: ['Rina · 06.00–14.00 · 212 transaksi', 'Dedi · 14.00–22.00 · 178 transaksi'] },
    },
];

export const testimoni = {
    kutipan: 'Dulu tiap malam saya hitung manual pakai buku. Sekarang tinggal lihat WhatsApp jam sembilan, sudah tahu hari ini laku berapa.',
    nama: 'Ibu Sumiati',
    peran: 'pemilik Toko Berkah, Cimahi',
};

export interface Paket {
    nama: string;
    harga: string;
    periode: string;
    ringkas: string;
    cta: string;
    utama?: boolean;
}

export const paket: Paket[] = [
    { nama: 'Gratis', harga: 'Rp 0', periode: 'selamanya', ringkas: 'Untuk warung dengan satu kasir dan katalog kecil.', cta: 'Unduh di Play Store' },
    { nama: 'Pro', harga: 'Rp 49.000', periode: 'per bulan', ringkas: 'Untuk toko yang pegawainya lebih dari satu dan ingin laporan lengkap.', cta: 'Minta demo', utama: true },
];

export const perbandingan: { nama: string; gratis: string; pro: string }[] = [
    { nama: 'Jumlah kasir', gratis: '1', pro: 'Tak terbatas' },
    { nama: 'Produk di katalog', gratis: '100', pro: 'Tak terbatas' },
    { nama: 'Transaksi offline', gratis: 'Ya', pro: 'Ya' },
    { nama: 'Laporan harian WhatsApp', gratis: 'Ringkas', pro: 'Lengkap + per kasir' },
    { nama: 'Riwayat transaksi', gratis: '30 hari', pro: '3 tahun' },
    { nama: 'Printer struk Bluetooth', gratis: '—', pro: 'Ya' },
    { nama: 'Ekspor ke Excel', gratis: '—', pro: 'Ya' },
    { nama: 'Dukungan', gratis: 'Pusat bantuan', pro: 'WhatsApp, Senin–Sabtu' },
];

export const faq = [
    { t: 'Apakah data saya hilang kalau HP rusak atau hilang?', j: 'Tidak, selama HP pernah tersambung internet setelah transaksi terakhir. Data tersimpan di server kami dan bisa dipulihkan ke HP baru dengan masuk memakai nomor yang sama.' },
    { t: 'Berapa lama bisa jualan tanpa internet?', j: 'Sampai 7 hari penuh. Setelah itu aplikasi minta tersambung sebentar untuk mengirim data yang menumpuk, lalu bisa offline lagi.' },
    { t: 'Printer struk apa yang didukung?', j: 'Printer thermal Bluetooth 58 mm dan 80 mm yang umum dijual di marketplace. Daftar merek yang sudah kami uji ada di pusat bantuan.' },
    { t: 'Bisa pakai barcode scanner?', j: 'Bisa. Kamera HP langsung membaca barcode, atau sambungkan scanner Bluetooth kalau mau lebih cepat.' },
    { t: 'Apakah perlu HP khusus?', j: 'Tidak. Android 8 ke atas dengan RAM 2 GB sudah cukup. Banyak pengguna memakai HP bekas seharga di bawah satu juta rupiah.' },
    { t: 'Bagaimana cara pindah dari pencatatan manual atau aplikasi lain?', j: 'Daftar produk bisa diimpor dari file Excel. Untuk paket Pro, tim kami bantu mengisi katalog awal lewat WhatsApp.' },
    { t: 'Bagaimana cara bayar paket Pro?', j: 'Transfer bank atau QRIS, dibayar per bulan atau per tahun (potongan dua bulan). Tidak ada kontrak; berhenti kapan saja dan data tetap bisa diunduh.' },
    { t: 'Apakah ada versi untuk iPhone atau komputer?', j: 'Saat ini hanya Android. Laporan bisa dibuka dari browser apa pun di alamat yang dikirim ke WhatsApp Anda.' },
];
