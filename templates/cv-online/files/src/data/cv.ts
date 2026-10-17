/**
 * Seluruh isi CV. Ganti di sini; halaman menyesuaikan sendiri.
 * Semua nama perusahaan, institusi, dan kontak di bawah fiktif.
 */
export const orang = {
    nama: 'Dimas Prasetyo',
    jabatan: 'Product Designer',
    lokasi: 'Jakarta, Indonesia',
    ringkas:
        'Enam tahun merancang produk digital untuk layanan keuangan dan logistik. Terbiasa memimpin riset pengguna, menyusun design system, dan bekerja berdampingan dengan engineer sampai rilis.',
    email: 'halo@dimasprasetyo.id',
    telepon: '6281234567890',
    situs: 'dimasprasetyo.id',
    linkedin: 'linkedin.com/in/dimas-prasetyo-contoh',
    /** Ganti dengan tautan berkas PDF Anda (mis. dari Google Drive). */
    pdf: '#',
    diperbarui: 'Oktober 2026',
    /** Kosongkan ('') bila tidak sedang mencari pekerjaan. */
    status: 'Terbuka untuk peran penuh waktu, mulai Januari 2027',
};

export interface Pengalaman {
    mulai: string;
    selesai: string;
    jabatan: string;
    perusahaan: string;
    lokasi: string;
    capaian: string[];
}

export const pengalaman: Pengalaman[] = [
    {
        mulai: '2023',
        selesai: 'sekarang',
        jabatan: 'Senior Product Designer',
        perusahaan: 'Kirim Cepat Logistik',
        lokasi: 'Jakarta',
        capaian: [
            'Memimpin desain ulang alur booking kurir; waktu pemesanan turun dari 4,5 menit menjadi 1,8 menit.',
            'Membangun design system 60+ komponen yang dipakai 3 tim produk dan memangkas waktu handoff sekitar 30%.',
            'Menjalankan 40+ sesi wawancara pengguna dengan mitra kurir di 5 kota untuk fitur jadwal jemput.',
        ],
    },
    {
        mulai: '2020',
        selesai: '2023',
        jabatan: 'Product Designer',
        perusahaan: 'Bayarin Fintech',
        lokasi: 'Jakarta',
        capaian: [
            'Merancang onboarding KYC yang menaikkan tingkat penyelesaian verifikasi dari 61% ke 84%.',
            'Menyusun kerangka riset bulanan bersama tim data; 12 eksperimen A/B dijalankan dalam setahun.',
        ],
    },
    {
        mulai: '2019',
        selesai: '2020',
        jabatan: 'UI Designer',
        perusahaan: 'Studio Garis Dua',
        lokasi: 'Bandung',
        capaian: [
            'Mengerjakan antarmuka web dan aplikasi untuk 9 klien, termasuk dua perusahaan rintisan edukasi.',
            'Membuat pustaka ikon dan ilustrasi yang dipakai ulang di lima proyek.',
        ],
    },
];

export interface Proyek {
    nama: string;
    tahun: string;
    peran: string;
    ringkas: string;
    href?: string;
}

export const proyek: Proyek[] = [
    {
        nama: 'Jadwal Jemput Kurir',
        tahun: '2025',
        peran: 'Lead designer',
        ringkas: 'Fitur penjadwalan jemput paket untuk pelanggan UMKM; dipakai 18 ribu pengirim dalam 3 bulan pertama.',
        href: '#',
    },
    {
        nama: 'Design System “Rangka”',
        tahun: '2024',
        peran: 'Pemilik sistem',
        ringkas: 'Token warna dan tipografi, 60+ komponen Figma, dan dokumentasi yang dipelihara bersama 2 engineer frontend.',
        href: '#',
    },
    {
        nama: 'Onboarding KYC Bayarin',
        tahun: '2021',
        peran: 'Product designer',
        ringkas: 'Alur verifikasi identitas 5 langkah dengan panduan foto dokumen; mengurangi penolakan foto buram sebesar 40%.',
    },
];

export const keahlian = [
    { kelompok: 'Riset', daftar: ['Wawancara pengguna', 'Usability testing', 'Survei & analisis', 'Journey mapping'] },
    { kelompok: 'Desain', daftar: ['Interaction design', 'Design system', 'Prototyping', 'Aksesibilitas (WCAG 2.1)'] },
    { kelompok: 'Alat', daftar: ['Figma', 'FigJam', 'Maze', 'Notion', 'HTML & CSS dasar'] },
];

export const pendidikan = [
    { tahun: '2015 – 2019', gelar: 'S1 Desain Komunikasi Visual', institusi: 'Universitas Contoh Bandung' },
    { tahun: '2022', gelar: 'Sertifikat Product Management', institusi: 'Akademi Produk Digital' },
];

export const sertifikasi = [
    { tahun: '2024', nama: 'Google UX Design Professional Certificate' },
    { tahun: '2023', nama: 'Nielsen Norman Group — UX Research' },
];

export const bahasa = [
    { nama: 'Indonesia', tingkat: 'Penutur asli' },
    { nama: 'Inggris', tingkat: 'Profesional' },
];
