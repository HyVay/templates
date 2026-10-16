/**
 * Semua teks, jadwal, dan angka yang berubah per lembaga ada di sini.
 * Ganti nilai di file ini dan seluruh halaman ikut menyesuaikan.
 */
export const lembaga = {
    nama: 'Bimbel Cakrawala',
    tagline: 'Bimbingan belajar SMP, SMA, dan persiapan UTBK di Depok',
    deskripsi:
        'Sejak 2016 kami mendampingi siswa Depok dan sekitarnya dengan kelas kecil maksimal 12 siswa, pengajar tetap, dan laporan perkembangan ke orang tua setiap bulan.',
    telepon: '6281234567890',
    email: 'halo@bimbelcakrawala.id',
    alamat: 'Jl. Margonda Raya No. 118, Beji, Depok',
    jam: 'Senin - Sabtu, 13.00 - 20.30 WIB',
    tahunAjaran: '2026/2027',
};

/** Info gelombang pendaftaran yang tampil di beranda dan halaman daftar. */
export const pendaftaran = {
    gelombang: 'Gelombang 2',
    periode: '15 Januari - 28 Februari 2027',
    tesPenempatan: 'Sabtu, 7 Februari 2027, 09.00 WIB',
    mulaiKelas: 'Senin, 2 Maret 2027',
    kuota: '12 siswa per kelas',
    biayaDaftar: 'Rp 150.000 (sekali, termasuk tes penempatan dan modul semester pertama)',
};

export interface Program {
    slug: string;
    nama: string;
    jenjang: string;
    jadwal: string;
    biaya: string;
    durasi: string;
    ringkas: string;
    silabus: string[];
}

export const program: Program[] = [
    {
        slug: 'smp-reguler',
        nama: 'SMP Reguler',
        jenjang: 'Kelas 7 - 9',
        jadwal: 'Senin, Rabu, Jumat · 15.30 - 17.30',
        biaya: 'Rp 450.000 / bulan',
        durasi: '6 jam per minggu',
        ringkas: 'Matematika, IPA, Bahasa Indonesia, dan Bahasa Inggris mengikuti materi sekolah, plus latihan soal mingguan.',
        silabus: [
            'Pendalaman materi sesuai bab yang sedang diajarkan di sekolah',
            'Kuis mingguan 20 soal dengan pembahasan',
            'Persiapan PTS dan PAS dua minggu sebelum jadwal sekolah',
            'Kelas 9: simulasi ujian sekolah dan tes masuk SMA favorit',
        ],
    },
    {
        slug: 'sma-reguler',
        nama: 'SMA Reguler',
        jenjang: 'Kelas 10 - 12',
        jadwal: 'Selasa, Kamis, Sabtu · 16.00 - 18.30',
        biaya: 'Rp 650.000 / bulan',
        durasi: '7,5 jam per minggu',
        ringkas: 'Peminatan Matematika, Fisika, Kimia, Biologi, Ekonomi, dan Sosiologi. Siswa memilih tiga mata pelajaran.',
        silabus: [
            'Tiga mata pelajaran pilihan, masing-masing 2,5 jam per minggu',
            'Bank soal per bab yang dapat diakses dari rumah',
            'Konsultasi tugas sekolah tanpa biaya tambahan di luar jam kelas',
            'Kelas 12: rapor latihan bulanan untuk pemetaan jurusan',
        ],
    },
    {
        slug: 'intensif-utbk',
        nama: 'Intensif UTBK',
        jenjang: 'Kelas 12 & gap year',
        jadwal: 'Senin - Jumat · 18.30 - 20.30',
        biaya: 'Rp 1.200.000 / bulan',
        durasi: '10 jam per minggu',
        ringkas: 'Tes Potensi Skolastik, literasi, dan penalaran matematika dengan try out mingguan berskor nasional.',
        silabus: [
            'Try out setiap Sabtu dengan pemeringkatan dan analisis per subtes',
            'Strategi waktu: target 40 soal TPS dalam 30 menit',
            'Klinik soal: pembahasan khusus 15 soal tersulit minggu itu',
            'Pendampingan pemilihan prodi berdasarkan skor try out terakhir',
        ],
    },
    {
        slug: 'privat',
        nama: 'Privat',
        jenjang: 'SMP - SMA',
        jadwal: 'Jadwal disepakati, 2 - 3 kali per minggu',
        biaya: 'Rp 900.000 / bulan',
        durasi: '4 - 6 jam per minggu',
        ringkas: 'Satu pengajar untuk satu siswa, di cabang atau di rumah (Depok dan Jakarta Selatan).',
        silabus: [
            'Rencana belajar disusun setelah tes penempatan',
            'Fokus pada satu atau dua mata pelajaran yang paling perlu dikejar',
            'Laporan singkat ke orang tua setelah setiap pertemuan',
            'Dapat dipindah ke kelas reguler kapan saja tanpa biaya',
        ],
    },
    {
        slug: 'kelas-online',
        nama: 'Kelas Online',
        jenjang: 'Kelas 9 & 12',
        jadwal: 'Senin, Rabu · 19.00 - 21.00',
        biaya: 'Rp 350.000 / bulan',
        durasi: '4 jam per minggu',
        ringkas: 'Kelas langsung lewat video call dengan papan tulis digital, rekaman tersedia selama satu semester.',
        silabus: [
            'Kelas interaktif maksimal 15 siswa, bukan video rekaman saja',
            'Modul PDF dikirim sehari sebelum kelas',
            'Rekaman kelas dapat ditonton ulang hingga akhir semester',
            'Grup diskusi dengan pengajar untuk tanya jawab di luar jam',
        ],
    },
];

export interface Pengajar {
    nama: string;
    mapel: string;
    latar: string;
    sejak: string;
    foto: string;
}

export const pengajar: Pengajar[] = [
    {
        nama: 'Dimas Prasetyo, S.Si.',
        mapel: 'Matematika & Fisika',
        latar: 'Sarjana Fisika Universitas Nusantara. Pengajar UTBK sejak program ini dibuka.',
        sejak: '2016',
        foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    },
    {
        nama: 'Anisa Rahmawati, S.Pd.',
        mapel: 'Bahasa Indonesia & Literasi',
        latar: 'Sarjana Pendidikan Bahasa. Menyusun modul literasi UTBK yang dipakai semua kelas.',
        sejak: '2018',
        foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    },
    {
        nama: 'Reza Maulana, M.Si.',
        mapel: 'Kimia & Biologi',
        latar: 'Magister Kimia. Membimbing siswa olimpiade sains tingkat kota sejak 2019.',
        sejak: '2019',
        foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    },
    {
        nama: 'Putri Handayani, S.E.',
        mapel: 'Ekonomi & Penalaran Matematika',
        latar: 'Sarjana Ekonomi. Spesialis soal cerita dan penalaran kuantitatif untuk kelas 12.',
        sejak: '2021',
        foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
    },
];

export const testimoni = {
    kutipan:
        'Nilai matematika anak saya naik dari 64 ke 88 dalam satu semester. Yang paling saya hargai, setiap bulan saya dapat laporan apa yang sudah dikuasai dan apa yang belum.',
    nama: 'Ibu Sulastri',
    keterangan: 'orang tua siswa kelas 11, program SMA Reguler',
};

export const faq = [
    {
        q: 'Apakah ada kelas percobaan sebelum mendaftar?',
        a: 'Ada. Siswa boleh mengikuti satu pertemuan kelas reguler tanpa biaya setelah tes penempatan.',
    },
    {
        q: 'Bagaimana jika siswa tertinggal materi di tengah semester?',
        a: 'Pengajar menyediakan sesi tambahan tanpa biaya di hari Sabtu pagi untuk mengejar bab yang terlewat.',
    },
    {
        q: 'Apakah biaya bulanan bisa dicicil?',
        a: 'Biaya dibayar per bulan di awal bulan. Untuk program Intensif UTBK tersedia pembayaran dua kali dalam sebulan.',
    },
    {
        q: 'Berapa jumlah siswa dalam satu kelas?',
        a: 'Maksimal 12 siswa untuk kelas reguler dan 15 siswa untuk kelas online, supaya pengajar sempat memeriksa pekerjaan setiap siswa.',
    },
];
