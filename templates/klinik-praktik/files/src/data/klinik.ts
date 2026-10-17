/**
 * Semua teks, jadwal, dan biaya klinik ada di sini.
 * Ganti nilai di file ini dan seluruh halaman ikut menyesuaikan.
 */
export const klinik = {
    nama: 'Klinik Sehat Keluarga',
    kota: 'Cimahi',
    tagline: 'Praktik dokter umum, gigi, dan anak di Cimahi',
    deskripsi:
        'Klinik pratama dengan empat dokter tetap yang melayani pemeriksaan umum, perawatan gigi, dan kesehatan anak sejak 2019. Pendaftaran lewat WhatsApp supaya Anda tidak perlu menunggu lama di ruang tunggu.',
    telepon: '6281234567890',
    teleponDarurat: '6281234567890',
    alamat: 'Jl. Raya Cibabat No. 72, Cimahi Utara, Kota Cimahi',
    jam: [
        { hari: 'Senin - Jumat', jam: '08.00 - 20.00 WIB' },
        { hari: 'Sabtu', jam: '08.00 - 14.00 WIB' },
        { hari: 'Minggu & libur nasional', jam: 'Tutup' },
    ],
    pembayaran: 'Umum (tunai, transfer, QRIS) dan asuransi tertentu. Tanyakan lewat WhatsApp sebelum datang.',
};

export const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'] as const;
export type Hari = (typeof hari)[number];

export interface Dokter {
    slug: string;
    nama: string;
    spesialisasi: string;
    ringkas: string;
    foto: string;
    /** Jam praktik per hari; hari yang tidak ada berarti tidak praktik. */
    jadwal: Partial<Record<Hari, string>>;
}

export const dokter: Dokter[] = [
    {
        slug: 'dr-ratna',
        nama: 'dr. Ratna Kusumawati',
        spesialisasi: 'Dokter umum',
        ringkas: 'Menangani keluhan umum, pengelolaan hipertensi dan diabetes, serta surat keterangan sehat. Praktik di klinik ini sejak dibuka.',
        foto: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=800&q=80',
        jadwal: { Senin: '08.00 - 14.00', Selasa: '08.00 - 14.00', Rabu: '08.00 - 14.00', Kamis: '08.00 - 14.00', Jumat: '08.00 - 12.00' },
    },
    {
        slug: 'dr-bagus',
        nama: 'dr. Bagus Wicaksono',
        spesialisasi: 'Dokter umum',
        ringkas: 'Fokus pada layanan sore dan malam: demam, infeksi saluran napas, luka ringan, dan khitan metode konvensional.',
        foto: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=800&q=80',
        jadwal: { Senin: '14.00 - 20.00', Selasa: '14.00 - 20.00', Rabu: '14.00 - 20.00', Kamis: '14.00 - 20.00', Jumat: '14.00 - 20.00', Sabtu: '08.00 - 14.00' },
    },
    {
        slug: 'drg-melati',
        nama: 'drg. Melati Anggraini',
        spesialisasi: 'Dokter gigi',
        ringkas: 'Pembersihan karang gigi, tambal, cabut, dan perawatan gigi anak. Tindakan dengan pembiusan lokal dijadwalkan terpisah.',
        foto: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80',
        jadwal: { Senin: '16.00 - 20.00', Rabu: '16.00 - 20.00', Jumat: '16.00 - 20.00', Sabtu: '09.00 - 13.00' },
    },
    {
        slug: 'dr-hendra',
        nama: 'dr. Hendra Saputra, Sp.A',
        spesialisasi: 'Dokter spesialis anak',
        ringkas: 'Imunisasi dasar dan lanjutan, pemantauan tumbuh kembang, serta konsultasi gizi anak usia 0 - 12 tahun.',
        foto: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?w=800&q=80',
        jadwal: { Selasa: '16.00 - 19.00', Kamis: '16.00 - 19.00', Sabtu: '09.00 - 12.00' },
    },
];

export interface Layanan {
    kelompok: string;
    item: { nama: string; biaya: string; catatan?: string }[];
}

export const layanan: Layanan[] = [
    {
        kelompok: 'Pemeriksaan umum',
        item: [
            { nama: 'Konsultasi dokter umum', biaya: 'Rp 75.000', catatan: 'Belum termasuk obat' },
            { nama: 'Surat keterangan sehat', biaya: 'Rp 50.000', catatan: 'Bawa kartu identitas' },
            { nama: 'Perawatan luka ringan', biaya: 'Rp 100.000 - 250.000', catatan: 'Tergantung bahan yang dipakai' },
            { nama: 'Khitan', biaya: 'Rp 900.000', catatan: 'Termasuk kontrol 1 kali, dengan perjanjian' },
        ],
    },
    {
        kelompok: 'Gigi',
        item: [
            { nama: 'Konsultasi dokter gigi', biaya: 'Rp 85.000' },
            { nama: 'Pembersihan karang gigi', biaya: 'Rp 250.000 - 400.000', catatan: 'Per rahang atas dan bawah' },
            { nama: 'Tambal gigi', biaya: 'Rp 200.000 - 450.000', catatan: 'Tergantung ukuran dan bahan' },
            { nama: 'Cabut gigi', biaya: 'Rp 250.000 - 600.000', catatan: 'Gigi bungsu dirujuk' },
        ],
    },
    {
        kelompok: 'Anak',
        item: [
            { nama: 'Konsultasi dokter spesialis anak', biaya: 'Rp 150.000' },
            { nama: 'Imunisasi dasar', biaya: 'Rp 150.000 - 450.000', catatan: 'Sesuai jenis vaksin, tanyakan ketersediaan' },
            { nama: 'Pemantauan tumbuh kembang', biaya: 'Rp 150.000', catatan: 'Termasuk pengukuran dan buku catatan' },
        ],
    },
    {
        kelompok: 'Laboratorium dasar',
        item: [
            { nama: 'Gula darah sewaktu', biaya: 'Rp 25.000' },
            { nama: 'Kolesterol total', biaya: 'Rp 45.000' },
            { nama: 'Asam urat', biaya: 'Rp 30.000' },
            { nama: 'Paket cek dasar (gula, kolesterol, asam urat, tensi)', biaya: 'Rp 90.000', catatan: 'Puasa 8 jam sebelumnya' },
        ],
    },
];

export const aturanKunjungan = [
    'Datang 10 menit sebelum jam janji temu agar pendaftaran selesai sebelum giliran Anda.',
    'Bawa kartu identitas dan, jika ada, catatan obat yang sedang dikonsumsi atau hasil lab sebelumnya.',
    'Untuk pasien anak, bawa buku KIA atau catatan imunisasi.',
    'Kalau berhalangan, kabari lewat WhatsApp paling lambat 2 jam sebelumnya supaya jadwal bisa diberikan ke pasien lain.',
];

/** Foto ruang praktik di beranda. */
export const fotoKlinik = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80';

/**
 * URL foto dengan ukuran yang pas. Untuk Unsplash, ukuran dan format diatur lewat parameter;
 * URL dari tempat lain dipakai apa adanya.
 */
export const src = (url: string, w: number, h?: number) => {
    if (!url.includes('images.unsplash.com')) return url;
    const base = url.split('?')[0];
    return `${base}?w=${w}${h ? `&h=${h}&fit=crop&crop=faces` : ''}&q=75&auto=format`;
};
