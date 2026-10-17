/**
 * Semua data acara ada di sini. Ganti nilai di file ini dan seluruh halaman ikut berubah.
 */
export const acara = {
    nama: 'Nusantara Dev Summit',
    tahun: '2026',
    tagline: 'Dua hari bersama orang-orang yang membangun perangkat lunak di Indonesia.',
    deskripsi:
        'Konferensi tahunan untuk engineer, data scientist, dan product manager. 24 sesi dalam 3 track, tanpa sesi jualan, dengan waktu istirahat yang cukup untuk benar-benar ngobrol.',
    tanggalTeks: '14–15 November 2026',
    tanggalPendek: '14–15 NOV 2026',
    kota: 'Jakarta',
    venue: 'Balai Sidang Senayan',
    alamat: 'Jl. Gelora Raya No. 1, Jakarta Pusat',
    maps: 'https://maps.google.com/?q=Balai+Sidang+Senayan+Jakarta',
    wa: '6281234567890',
    email: 'halo@nusantaradevsummit.id',
    instagram: '@nusantaradevsummit',
    kapasitas: '600 kursi',
    /** Batas early bird; dipakai di hero, banner, dan tabel tiket. */
    earlyBirdTutup: '31 Oktober 2026',
    earlyBirdTutupPendek: '31 OKT',
    /** Foto audiens di bawah hero. */
    fotoAudiens: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
};

export const track = [
    { kode: 'WEB', nama: 'Web & Mobile', ruang: 'Aula Utama' },
    { kode: 'DATA', nama: 'Data & AI', ruang: 'Ruang Cendana' },
    { kode: 'PROD', nama: 'Produk & Tim', ruang: 'Ruang Flamboyan' },
] as const;

export const alasan = [
    {
        judul: 'Pembicara yang masih mengerjakan apa yang mereka bicarakan',
        isi: 'Semua pembicara dipilih dari engineer dan PM yang masih aktif di tim produk, bukan motivator. Tiap sesi 40 menit, 10 menit tanya jawab, tidak ada pitch sponsor di panggung.',
    },
    {
        judul: 'Tiga track, satu lantai',
        isi: 'Ruang Web, Data & AI, dan Produk berjarak kurang dari satu menit jalan kaki. Pindah track di tengah jalan tidak akan membuat Anda ketinggalan apa pun.',
    },
    {
        judul: 'Jeda yang disengaja panjang',
        isi: 'Istirahat 30 menit di antara blok sesi dan makan siang 75 menit. Percakapan di lorong sering lebih berharga daripada slide, jadi kami beri waktunya.',
    },
];

export interface Pembicara {
    nama: string;
    jabatan: string;
    perusahaan: string;
    topik: string;
    track: string;
    foto: string;
    utama?: boolean;
}

export const pembicara: Pembicara[] = [
    {
        nama: 'Dewi Larasati',
        jabatan: 'Principal Engineer',
        perusahaan: 'Tokolaju',
        topik: 'Memecah monolit 9 tahun tanpa menghentikan rilis',
        track: 'WEB',
        foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
        utama: true,
    },
    {
        nama: 'Bagus Prasetyo',
        jabatan: 'Head of Data',
        perusahaan: 'Ruangkerja',
        topik: 'Pipeline data yang bisa dipercaya finance',
        track: 'DATA',
        foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        utama: true,
    },
    {
        nama: 'Mira Anggraini',
        jabatan: 'VP Product',
        perusahaan: 'Dapur Digital',
        topik: 'Roadmap yang bertahan lebih dari satu kuartal',
        track: 'PROD',
        foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
        utama: true,
    },
    {
        nama: 'Reza Firmansyah',
        jabatan: 'Staff Engineer',
        perusahaan: 'Bayarin',
        topik: 'Mengoperasikan LLM di jalur pembayaran',
        track: 'DATA',
        foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        utama: true,
    },
    {
        nama: 'Siti Rahmawati',
        jabatan: 'Engineering Manager',
        perusahaan: 'Kirimaja',
        topik: 'On-call yang tidak membakar tim',
        track: 'PROD',
        foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    {
        nama: 'Arif Kurniawan',
        jabatan: 'Mobile Lead',
        perusahaan: 'Sehatku',
        topik: 'Satu codebase Android untuk 40 juta HP kelas bawah',
        track: 'WEB',
        foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    {
        nama: 'Nadia Putri',
        jabatan: 'ML Engineer',
        perusahaan: 'Lensa Tani',
        topik: 'Model deteksi hama yang jalan offline di HP petani',
        track: 'DATA',
        foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
    {
        nama: 'Ayu Pratiwi',
        jabatan: 'Frontend Architect',
        perusahaan: 'Studio Kode',
        topik: 'Mengukur performa web di jaringan 3G sungguhan',
        track: 'WEB',
        foto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
    },
];

export interface Sesi {
    jam: string;
    judul: string;
    pembicara?: string;
    track?: string;
    jenis?: 'istirahat' | 'keynote';
}

export const agenda: { hari: string; tanggal: string; sesi: Sesi[] }[] = [
    {
        hari: 'Hari 1',
        tanggal: 'Sabtu, 14 November 2026',
        sesi: [
            { jam: '08.00', judul: 'Registrasi & kopi pagi', jenis: 'istirahat' },
            { jam: '09.00', judul: 'Pembukaan: Perangkat lunak yang dibuat dari sini', pembicara: 'Dewi Larasati', jenis: 'keynote' },
            { jam: '10.00', judul: 'Memecah monolit 9 tahun tanpa menghentikan rilis', pembicara: 'Dewi Larasati', track: 'WEB' },
            { jam: '10.00', judul: 'Pipeline data yang bisa dipercaya finance', pembicara: 'Bagus Prasetyo', track: 'DATA' },
            { jam: '10.00', judul: 'Roadmap yang bertahan lebih dari satu kuartal', pembicara: 'Mira Anggraini', track: 'PROD' },
            { jam: '11.00', judul: 'Istirahat', jenis: 'istirahat' },
            { jam: '11.30', judul: 'Satu codebase Android untuk 40 juta HP kelas bawah', pembicara: 'Arif Kurniawan', track: 'WEB' },
            { jam: '11.30', judul: 'Model deteksi hama yang jalan offline di HP petani', pembicara: 'Nadia Putri', track: 'DATA' },
            { jam: '11.30', judul: 'On-call yang tidak membakar tim', pembicara: 'Siti Rahmawati', track: 'PROD' },
            { jam: '12.30', judul: 'Makan siang', jenis: 'istirahat' },
            { jam: '13.45', judul: 'Mengukur performa web di jaringan 3G sungguhan', pembicara: 'Ayu Pratiwi', track: 'WEB' },
            { jam: '13.45', judul: 'Mengoperasikan LLM di jalur pembayaran', pembicara: 'Reza Firmansyah', track: 'DATA' },
            { jam: '13.45', judul: 'Diskusi meja: hiring engineer pertama di startup', track: 'PROD' },
            { jam: '15.00', judul: 'Istirahat sore', jenis: 'istirahat' },
            { jam: '15.30', judul: 'Lightning talks: 6 pembicara × 7 menit', jenis: 'keynote' },
            { jam: '17.00', judul: 'Selesai hari pertama', jenis: 'istirahat' },
        ],
    },
    {
        hari: 'Hari 2',
        tanggal: 'Minggu, 15 November 2026',
        sesi: [
            { jam: '08.30', judul: 'Kopi pagi', jenis: 'istirahat' },
            { jam: '09.00', judul: 'Keynote: Apa yang kami pelajari dari 3 insiden besar', pembicara: 'Siti Rahmawati', jenis: 'keynote' },
            { jam: '10.00', judul: 'Workshop: migrasi ke TypeScript strict tanpa drama', pembicara: 'Ayu Pratiwi', track: 'WEB' },
            { jam: '10.00', judul: 'Workshop: evaluasi model sebelum masuk produksi', pembicara: 'Reza Firmansyah', track: 'DATA' },
            { jam: '10.00', judul: 'Workshop: menulis PRD yang dibaca engineer', pembicara: 'Mira Anggraini', track: 'PROD' },
            { jam: '12.00', judul: 'Makan siang', jenis: 'istirahat' },
            { jam: '13.15', judul: 'Panel: masa depan engineering di Indonesia', jenis: 'keynote' },
            { jam: '14.30', judul: 'Open space: topik ditentukan peserta', jenis: 'keynote' },
            { jam: '16.00', judul: 'Penutupan & foto bersama', jenis: 'istirahat' },
        ],
    },
];

export const sponsor = ['Tokolaju', 'Ruangkerja', 'Bayarin', 'Kirimaja', 'Studio Kode', 'Lensa Tani'];

export interface Tiket {
    nama: string;
    harga: number;
    catatan: string;
    tersedia: boolean;
}

export const tiket: Tiket[] = [
    { nama: 'Early Bird', harga: 350000, catatan: `Sampai ${acara.earlyBirdTutup} atau 200 tiket pertama`, tersedia: true },
    { nama: 'Reguler', harga: 550000, catatan: 'Mulai 1 November 2026', tersedia: true },
    { nama: 'Pelajar', harga: 150000, catatan: 'Tunjukkan kartu mahasiswa saat registrasi', tersedia: true },
];

export const fiturTiket: { nama: string; termasuk: boolean[] }[] = [
    { nama: 'Akses semua sesi 2 hari', termasuk: [true, true, true] },
    { nama: 'Makan siang & kopi', termasuk: [true, true, true] },
    { nama: 'Rekaman sesi', termasuk: [true, true, false] },
    { nama: 'Workshop hari ke-2', termasuk: [true, true, false] },
    { nama: 'Kaus acara', termasuk: [true, false, false] },
];

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

/** URL foto Unsplash dengan ukuran yang pas untuk tempat tampilnya. */
export const img = (url: string, w: number, h?: number) =>
    `${url}?w=${w}${h ? `&h=${h}&fit=crop&crop=faces` : ''}&q=75&auto=format`;
