/**
 * Satu tempat untuk semua teks, angka, dan foto yang berubah per usaha.
 * Ganti nilai di sini dan seluruh halaman ikut berubah.
 */
const u = (id: string, w: number, h: number) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75&auto=format`;

export const usaha = {
    nama: 'Nusantara Karya',
    tagline: 'Renovasi rumah dan ruang usaha, dihitung terbuka per item.',
    deskripsi:
        'Kontraktor renovasi, interior, dan bangun baru di Jabodetabek sejak 2014. Tim tukang tetap, satu pengawas per proyek, dan RAB yang bisa Anda periksa baris demi baris sebelum pekerjaan dimulai.',
    bidang: 'Kontraktor renovasi & interior',
    wilayah: 'Jabodetabek',
    sejak: 2014,
    telepon: '6281234567890',
    email: 'halo@nusantarakarya.id',
    alamat: 'Jl. Cempaka Raya No. 8, Jakarta Selatan',
    jam: 'Senin – Sabtu, 08.00 – 17.00 WIB',
    maps: 'https://maps.google.com/?q=Jakarta+Selatan',
};

export const angka = [
    { nilai: '11', label: 'tahun beroperasi' },
    { nilai: '240+', label: 'proyek diserahterimakan' },
    { nilai: '18', label: 'tukang & pengawas tetap' },
];

export const layanan = [
    {
        nama: 'Renovasi Rumah',
        ringkas: 'Perbaikan menyeluruh mulai dari struktur, atap, hingga finishing interior.',
        mulai: 'Mulai Rp 2,5 jt / m²',
        durasi: '4–12 minggu',
        termasuk: ['Bongkar & buang puing', 'Perbaikan struktur dan atap', 'Instalasi listrik & air baru', 'Finishing lantai, dinding, plafon'],
    },
    {
        nama: 'Interior & Furnitur',
        ringkas: 'Desain dan pengerjaan kitchen set, lemari, dan partisi custom sesuai ukuran ruang.',
        mulai: 'Mulai Rp 3,5 jt / m¹',
        durasi: '3–6 minggu',
        termasuk: ['Gambar 3D dua kali revisi', 'Multipleks + HPL atau duco', 'Engsel & rel bergaransi', 'Pemasangan di lokasi'],
    },
    {
        nama: 'Bangun Baru',
        ringkas: 'Pembangunan rumah dan ruang usaha dari nol, termasuk gambar kerja dan perizinan.',
        mulai: 'Mulai Rp 4 jt / m²',
        durasi: '5–10 bulan',
        termasuk: ['Gambar kerja & struktur', 'Pendampingan PBG', 'Pengawas tetap di lokasi', 'Laporan foto harian'],
    },
];

export const keunggulan = [
    { judul: 'Harga transparan', isi: 'RAB rinci per item sebelum pekerjaan dimulai. Perubahan dicatat sebagai addendum tertulis, bukan kejutan di akhir.' },
    { judul: 'Tim tetap', isi: 'Tukang dan pengawas karyawan sendiri, bukan alih daya harian. Orang yang sama dari bongkar sampai serah terima.' },
    { judul: 'Garansi 1 tahun', isi: 'Perbaikan gratis untuk keretakan dan kebocoran pasca serah terima, ditanggapi paling lambat 3 hari kerja.' },
];

/** Contoh RAB di beranda: bukti konkret "harga transparan". */
export const contohRab = {
    judul: 'Renovasi dapur 3 × 4 m, Cilandak',
    baris: [
        { item: 'Bongkar keramik & meja beton lama', vol: '12', sat: 'm²', harga: 1_080_000 },
        { item: 'Instalasi air bersih & buangan baru', vol: '1', sat: 'ls', harga: 2_400_000 },
        { item: 'Keramik lantai 60×60 + pasang', vol: '12', sat: 'm²', harga: 3_360_000 },
        { item: 'Kitchen set bawah, HPL', vol: '3,2', sat: 'm¹', harga: 11_200_000 },
        { item: 'Top table granit', vol: '3,2', sat: 'm¹', harga: 4_480_000 },
        { item: 'Cat dinding & plafon', vol: '38', sat: 'm²', harga: 1_520_000 },
    ],
};

export const proyek = [
    { judul: 'Dapur & ruang makan', lokasi: 'Cilandak, Jakarta Selatan', luas: '28 m²', durasi: '6 minggu', tahun: 2025, foto: u('1556911220-bff31c812dba', 900, 675) },
    { judul: 'Ruang keluarga terbuka', lokasi: 'Bintaro, Tangerang Selatan', luas: '45 m²', durasi: '8 minggu', tahun: 2025, foto: u('1600607687939-ce8a6c25118c', 900, 675) },
    { judul: 'Rumah tinggal dua lantai', lokasi: 'Cibubur, Depok', luas: '180 m²', durasi: '7 bulan', tahun: 2024, foto: u('1600566753190-17f0baa2a6c3', 900, 675) },
];

export const tahapan = [
    { judul: 'Survei lokasi', isi: 'Pengukuran dan pendataan kondisi bangunan, gratis di area Jabodetabek.', waktu: 'Hari 1–3' },
    { judul: 'RAB & gambar kerja', isi: 'Rincian biaya per item pekerjaan dan gambar yang bisa Anda revisi dua kali.', waktu: 'Hari 4–10' },
    { judul: 'Pengerjaan', isi: 'Laporan foto harian lewat WhatsApp, pembayaran mengikuti termin progres.', waktu: 'Sesuai jadwal' },
    { judul: 'Serah terima', isi: 'Pemeriksaan bersama, perbaikan minor, lalu garansi 1 tahun berjalan.', waktu: 'Akhir proyek' },
];

export const tim = [
    { nama: 'Bayu Setiawan', peran: 'Pendiri & site manager', foto: u('1531427186611-ecfd6d936c79', 600, 750) },
    { nama: 'Rina Halim', peran: 'Desainer interior', foto: u('1534528741775-53994a69daeb', 600, 750) },
    { nama: 'Dimas Prakoso', peran: 'Estimator', foto: u('1615109398623-88346a601842', 600, 750) },
];

export const foto = {
    hero: u('1589939705384-5185137a7f0f', 1000, 1250),
    tentang: u('1541888946425-d81bb19240f5', 1200, 900),
    kontak: u('1503387762-592deb58ef4e', 1000, 750),
};

export const rupiah = (n: number) => 'Rp ' + n.toLocaleString('id-ID');
