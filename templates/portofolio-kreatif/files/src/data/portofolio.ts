/**
 * Satu tempat untuk semua teks, karya, dan harga yang berubah per orang.
 * Ganti nilai di sini dan seluruh halaman ikut berubah.
 */
export const profil = {
    nama: 'Rani Aditya',
    profesi: 'Fotografer',
    kota: 'Jakarta',
    kalimat: 'Memotret keluarga, pernikahan intim, dan produk UMKM. Pelan, dekat, tanpa pose yang dibuat-buat.',
    tentang: [
        'Saya mulai memotret pada 2017 dari pesanan teman: foto produk untuk toko kue rumahan. Dari situ pesanan merambat ke keluarga mereka, lalu ke pernikahan mereka. Sampai sekarang hampir semua klien datang dari mulut ke mulut.',
        'Saya lebih suka sesi yang kecil. Satu keluarga, satu pagi, satu lokasi. Pernikahan yang saya ambil maksimal 100 tamu, supaya saya bisa hafal siapa saja yang penting bagi pasangan dan tidak melewatkan momen yang sebenarnya.',
        'Untuk produk, saya datang ke tempat Anda atau memotret di studio kecil di Cipete. Hasil dikirim dalam 5 hari kerja, sudah diedit, siap untuk marketplace dan media sosial.',
    ],
    potret: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=1000&q=80',
    telepon: '6281234567890',
    email: 'halo@raniaditya.id',
    instagram: 'rani.aditya',
    sejak: 2017,
};

export const kategori = ['Semua', 'Keluarga', 'Pernikahan', 'Produk'] as const;

export interface Karya {
    judul: string;
    kategori: string;
    tahun: number;
    lokasi: string;
    foto: string;
    /** Rasio di galeri: 'tinggi' (3:4), 'kotak' (1:1), 'lebar' (4:3). */
    bentuk: 'tinggi' | 'kotak' | 'lebar';
}

export const karya: Karya[] = [
    { judul: 'Keluarga Santoso, pagi di Ragunan', kategori: 'Keluarga', tahun: 2026, lokasi: 'Jakarta Selatan', foto: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1000&q=80', bentuk: 'tinggi' },
    { judul: 'Dinda & Yoga, akad di rumah', kategori: 'Pernikahan', tahun: 2026, lokasi: 'Bogor', foto: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80', bentuk: 'kotak' },
    { judul: 'Jam tangan Arloji Pagi', kategori: 'Produk', tahun: 2026, lokasi: 'Studio Cipete', foto: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=80', bentuk: 'lebar' },
    { judul: 'Bapak Haris dan dua anaknya', kategori: 'Keluarga', tahun: 2025, lokasi: 'Bintaro', foto: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1000&q=80', bentuk: 'tinggi' },
    { judul: 'Resepsi kebun Maya & Fikri', kategori: 'Pernikahan', tahun: 2025, lokasi: 'Sentul', foto: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000&q=80', bentuk: 'tinggi' },
    { judul: 'Headphone Dengar Studio', kategori: 'Produk', tahun: 2025, lokasi: 'Studio Cipete', foto: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1000&q=80', bentuk: 'kotak' },
    { judul: 'Sore bersama keluarga Wibowo', kategori: 'Keluarga', tahun: 2025, lokasi: 'Pantai Ancol', foto: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000&q=80', bentuk: 'lebar' },
    { judul: 'Tukar cincin Nadia & Rendra', kategori: 'Pernikahan', tahun: 2024, lokasi: 'Jakarta Pusat', foto: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1000&q=80', bentuk: 'kotak' },
    { judul: 'Mainan kayu Kayuku', kategori: 'Produk', tahun: 2024, lokasi: 'Studio Cipete', foto: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=1000&q=80', bentuk: 'lebar' },
];

export const heroFoto = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1800&q=80';

export const paket = [
    { nama: 'Sesi Keluarga', harga: 'Rp 1.500.000', isi: '2 jam di satu lokasi, 40 foto terpilih dan diedit, hasil dalam 7 hari kerja.' },
    { nama: 'Pernikahan Intim', harga: 'Rp 6.000.000', isi: 'Akad dan resepsi sampai 100 tamu, 8 jam, 300 foto terpilih, album digital, hasil dalam 21 hari kerja.' },
    { nama: 'Foto Produk', harga: 'Rp 750.000 / 10 foto', isi: 'Latar polos atau suasana, properti sederhana disediakan, hasil dalam 5 hari kerja.' },
];

export const klien = ['Toko Kue Bu Rina', 'Kayuku', 'Arloji Pagi', 'Dengar Studio', 'Kopi Pagi Hari', 'Batik Larasati'];

export const peralatan = ['Sony A7 IV', 'Lensa 35mm f/1.4', 'Lensa 85mm f/1.8', 'Lampu Godox AD200', 'Backup dua kartu di lokasi'];

/** Yang terjadi setelah calon klien mengirim pesan. */
export const alur = [
    { judul: 'Saya balas dalam satu hari kerja', isi: 'Memastikan tanggal kosong dan menanyakan suasana yang Anda bayangkan.' },
    { judul: 'Uang muka 30% mengunci tanggal', isi: 'Sisa dibayar di hari pemotretan. Jadwal ulang gratis satu kali.' },
    { judul: 'Hasil dikirim lewat tautan', isi: 'Galeri daring yang bisa diunduh selama 6 bulan, sudah diedit.' },
];

/**
 * URL foto dengan ukuran yang pas. Untuk Unsplash, ukuran dan format diatur lewat parameter;
 * URL dari tempat lain dipakai apa adanya.
 */
export const src = (url: string, w: number, h?: number) => {
    if (!url.includes('images.unsplash.com')) return url;
    const base = url.split('?')[0];
    return `${base}?w=${w}${h ? `&h=${h}&fit=crop` : ''}&q=75&auto=format`;
};
