/** Semua data sekolah ada di sini. Ganti di sini, semua halaman ikut berubah. */
export const sekolah = {
    nama: 'PAUD Tunas Ceria',
    jenjang: 'Kelompok Bermain dan Taman Kanak-kanak',
    kota: 'Malang',
    alamat: 'Jl. Kenanga No. 7, Lowokwaru, Malang',
    berdiri: 2012,
    wa: '6281234567890',
    jamKantor: 'Senin – Jumat, 07.00 – 14.00 WIB',
    ringkas:
        'Sekolah kecil dengan halaman luas di Lowokwaru. Anak belajar lewat bermain di sentra, bukan duduk menghadap papan tulis. Setiap kelompok dipegang dua guru tetap, dan orang tua menerima catatan perkembangan tiap bulan.',
};

export const program = [
    { nama: 'Kelompok Bermain', usia: '2 – 4 tahun', hari: 'Senin, Rabu, Jumat', jam: '08.00 – 10.00', rasio: '1 : 6', spp: 350000, kuota: 18 },
    { nama: 'TK A', usia: '4 – 5 tahun', hari: 'Senin – Jumat', jam: '07.30 – 11.00', rasio: '1 : 8', spp: 450000, kuota: 24 },
    { nama: 'TK B', usia: '5 – 6 tahun', hari: 'Senin – Jumat', jam: '07.30 – 11.30', rasio: '1 : 10', spp: 450000, kuota: 24 },
];

export const jadwalHarian = [
    { jam: '07.30', apa: 'Penyambutan di gerbang, cuci tangan, bermain bebas' },
    { jam: '08.00', apa: 'Lingkaran pagi: doa, lagu, cerita tema minggu ini' },
    { jam: '08.30', apa: 'Sentra bermain: balok, seni, main peran, bahan alam' },
    { jam: '09.30', apa: 'Makan bekal bersama' },
    { jam: '10.00', apa: 'Bermain di halaman' },
    { jam: '10.30', apa: 'Kegiatan inti: proyek kelompok kecil' },
    { jam: '11.15', apa: 'Lingkaran penutup, refleksi, bersiap pulang' },
    { jam: '11.30', apa: 'Penjemputan' },
];

export const caraMengajar = [
    { judul: 'Sentra, bukan bangku', isi: 'Ruang kelas dibagi menjadi sentra balok, seni, main peran, dan bahan alam. Anak memilih, guru mendampingi dan mencatat.' },
    { judul: 'Calistung tanpa paksaan', isi: 'Huruf dan angka dikenalkan lewat permainan dan cerita. Tidak ada lembar kerja harian dan tidak ada PR.' },
    { judul: 'Dua guru per kelompok', isi: 'Guru kelas dan guru pendamping tetap sepanjang tahun, supaya anak merasa aman dan orang tua tahu harus bicara dengan siapa.' },
    { judul: 'Laporan yang bisa dibaca', isi: 'Catatan perkembangan bulanan ditulis dalam kalimat biasa, dengan foto kegiatan, bukan angka rapor.' },
];

export const guru = [
    { nama: 'Dewi Lestari', peran: 'Kepala sekolah · TK B', latar: 'S1 PG-PAUD, mengajar sejak 2012', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80' },
    { nama: 'Siti Rahmawati', peran: 'Guru kelas · TK A', latar: 'S1 Psikologi, pelatihan sentra BCCT', foto: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&q=80' },
    { nama: 'Anisa Fitriani', peran: 'Guru kelas · Kelompok Bermain', latar: 'D3 PGTK, 8 tahun mengajar', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80' },
    { nama: 'Yohana Kristanti', peran: 'Guru pendamping · TK B', latar: 'S1 PG-PAUD, pendidik seni', foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80' },
    { nama: 'Bagus Setiawan', peran: 'Guru pendamping · TK A', latar: 'S1 Penjaskes, kegiatan halaman dan olah tubuh', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
];

export const ppdb = {
    tahun: '2027/2028',
    gelombang: [
        { nama: 'Gelombang 1', periode: '1 Desember 2026 – 31 Januari 2027', catatan: 'Potongan uang pangkal 20%' },
        { nama: 'Gelombang 2', periode: '1 Februari – 31 Maret 2027', catatan: 'Potongan uang pangkal 10%' },
        { nama: 'Gelombang 3', periode: 'April – Juni 2027', catatan: 'Selama kuota tersisa' },
    ],
    biaya: [
        { item: 'Formulir pendaftaran', nominal: 100000, keterangan: 'Sekali, termasuk sesi observasi' },
        { item: 'Uang pangkal', nominal: 1500000, keterangan: 'Sekali, bisa dicicil 3 kali' },
        { item: 'SPP Kelompok Bermain', nominal: 350000, keterangan: 'Per bulan' },
        { item: 'SPP TK A dan TK B', nominal: 450000, keterangan: 'Per bulan' },
        { item: 'Seragam 3 stel', nominal: 450000, keterangan: 'Sekali' },
        { item: 'Kegiatan dan bahan', nominal: 300000, keterangan: 'Per semester' },
    ],
    syarat: [
        'Usia anak sesuai kelompok pada 1 Juli 2027.',
        'Fotokopi akta kelahiran dan kartu keluarga.',
        'Pas foto anak 3×4 sebanyak 2 lembar.',
        'Mengikuti sesi observasi bermain 30 menit (bukan tes) bersama guru.',
    ],
    observasi: 'Sesi observasi setiap Sabtu pukul 09.00 dengan janji lewat WhatsApp.',
};

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

export const foto = {
    hero: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1400&q=80',
    kegiatan: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1000&q=80',
    alat: 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=1000&q=80',
};
