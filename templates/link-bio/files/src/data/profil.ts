/**
 * Semua isi halaman link di bio ada di sini.
 * Ganti URL `#` dengan tautan asli (Shopee, YouTube, formulir, dan sebagainya).
 */
export const profil = {
    nama: 'Nadia Putri',
    peran: 'Masak rumahan, resep harian',
    bio: 'Resep sederhana dari dapur kontrakan di Depok. Tayang baru tiap Selasa dan Jumat.',
    kota: 'Depok',
    telepon: '6281234567890',
    foto: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604',
};

export interface Tautan {
    judul: string;
    keterangan: string;
    href: string;
    /** Buka di tab baru untuk tautan luar. */
    luar?: boolean;
}

export const tautan: Tautan[] = [
    { judul: 'Resep minggu ini', keterangan: 'Ayam goreng lengkuas tanpa minyak banyak', href: '#', luar: true },
    { judul: 'Toko di Shopee', keterangan: 'Bumbu dasar, ebook, dan peralatan yang saya pakai', href: '#', luar: true },
    { judul: 'Kelas memasak daring', keterangan: 'Sabtu, 2 jam, maksimal 15 peserta', href: '#', luar: true },
    { judul: 'Playlist YouTube', keterangan: 'Masak 30 menit untuk anak kos', href: '#', luar: true },
    { judul: 'Endorse & kerja sama', keterangan: 'Balas dalam 1 hari kerja', href: `https://wa.me/6281234567890?text=${encodeURIComponent('Halo Nadia, saya ingin membahas kerja sama.')}`, luar: true },
];

export interface Sorotan {
    nama: string;
    harga: string;
    keterangan: string;
    foto: string;
    href: string;
}

export const sorotan: Sorotan[] = [
    {
        nama: 'Ebook 40 Resep Harian',
        harga: 'Rp 35.000',
        keterangan: 'PDF, 92 halaman, termasuk daftar belanja mingguan.',
        foto: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352',
        href: '#',
    },
    {
        nama: 'Bumbu Dasar Putih 250 g',
        harga: 'Rp 28.000',
        keterangan: 'Tanpa pengawet, tahan 3 minggu di kulkas.',
        foto: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757',
        href: '#',
    },
];

/** Akun sosial. Ikon dirender inline di halaman berdasarkan `jenis`. */
export const sosial = [
    { jenis: 'instagram', label: 'Instagram', href: '#' },
    { jenis: 'tiktok', label: 'TikTok', href: '#' },
    { jenis: 'youtube', label: 'YouTube', href: '#' },
    { jenis: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/6281234567890' },
] as const;

/** URL foto Unsplash dengan ukuran yang pas untuk tempat tampilnya. */
export const img = (url: string, w: number, h?: number) =>
    `${url}?w=${w}${h ? `&h=${h}&fit=crop&crop=faces` : ''}&q=75&auto=format`;

/** 6281234567890 → +62 812-3456-7890 */
export const formatWa = (n: string) => `+${n.slice(0, 2)} ${n.slice(2, 5)}-${n.slice(5, 9)}-${n.slice(9)}`;
