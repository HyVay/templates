/** Data barbershop. Semua nama dan kontak di sini fiktif; ganti dengan data asli. */
export const toko = {
    nama: 'Tuan Barber',
    tagline: 'Potong rapi, cukur bersih, tanpa antre lama.',
    sejak: 2018,
    kota: 'Bandung',
    deskripsi:
        'Barbershop empat kursi di Dago. Semua barber kami sudah memotong lebih dari lima ribu kepala, dan tiap kursi punya jadwal sendiri supaya Anda datang sesuai jam, bukan menunggu.',
    telepon: '6281234567890',
    alamat: 'Jl. Dago Pojok No. 17, Bandung',
    maps: 'https://maps.google.com/?q=Dago+Pojok+Bandung',
    jam: [
        { hari: 'Senin – Jumat', buka: '10.00 – 21.00' },
        { hari: 'Sabtu – Minggu', buka: '09.00 – 21.00' },
    ],
    /** Jam booking pertama dan terakhir; slot 30 menit dirender dari sini. */
    slotMulai: '10:00',
    slotSelesai: '20:30',
    foto: {
        hero: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=1200&q=80',
        interior: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80',
        alat: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1000&q=80',
    },
};

export interface Layanan {
    nama: string;
    durasi: number; // menit
    harga: number;
    ringkas: string;
    kategori: 'Rambut' | 'Cukur' | 'Perawatan' | 'Paket';
}

export const layanan: Layanan[] = [
    { nama: 'Potong rambut', durasi: 30, harga: 55000, ringkas: 'Konsultasi bentuk, potong, cuci, dan styling ringan.', kategori: 'Rambut' },
    { nama: 'Potong + cukur jenggot', durasi: 50, harga: 85000, ringkas: 'Potong rambut dan rapikan jenggot dengan handuk hangat.', kategori: 'Paket' },
    { nama: 'Cukur jenggot', durasi: 25, harga: 40000, ringkas: 'Pisau cukur klasik, handuk hangat, dan balm penenang.', kategori: 'Cukur' },
    { nama: 'Potong anak (di bawah 10 th)', durasi: 25, harga: 40000, ringkas: 'Kursi lebih rendah dan barber yang sabar.', kategori: 'Rambut' },
    { nama: 'Pewarnaan rambut', durasi: 90, harga: 250000, ringkas: 'Warna semi-permanen atau abu-abu alami. Konsultasi dulu lewat WhatsApp.', kategori: 'Perawatan' },
    { nama: 'Perawatan kulit kepala', durasi: 40, harga: 95000, ringkas: 'Scrub kulit kepala, pijat 15 menit, dan tonik.', kategori: 'Perawatan' },
    { nama: 'Paket pengantin pria', durasi: 120, harga: 350000, ringkas: 'Potong, cukur, perawatan wajah, dan styling pada hari H. Bisa dipanggil ke lokasi.', kategori: 'Paket' },
];

export interface Barber {
    slug: string;
    nama: string;
    spesialisasi: string;
    sejak: number;
    libur: string;
    foto: string;
}

export const barber: Barber[] = [
    { slug: 'rizky', nama: 'Rizky Maulana', spesialisasi: 'Fade dan potongan pendek', sejak: 2016, libur: 'Selasa', foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80' },
    { slug: 'bagas', nama: 'Bagas Saputra', spesialisasi: 'Rambut panjang dan tekstur', sejak: 2018, libur: 'Rabu', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
    { slug: 'yusuf', nama: 'Yusuf Hidayat', spesialisasi: 'Cukur klasik dan jenggot', sejak: 2014, libur: 'Kamis', foto: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80' },
    { slug: 'dika', nama: 'Dika Pratama', spesialisasi: 'Pewarnaan dan styling', sejak: 2020, libur: 'Senin', foto: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=800&q=80' },
];

export const galeri = [
    { src: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=900&q=80', alt: 'Proses potong rambut dengan clipper' },
    { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80', alt: 'Barber merapikan bagian samping' },
    { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80', alt: 'Hasil potongan fade dari belakang' },
];

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

/** Slot 30 menit dari slotMulai sampai slotSelesai, mis. "10:00", "10:30", … */
export const slotJam = (): string[] => {
    const [h1, m1] = toko.slotMulai.split(':').map(Number);
    const [h2, m2] = toko.slotSelesai.split(':').map(Number);
    const out: string[] = [];
    for (let t = h1 * 60 + m1; t <= h2 * 60 + m2; t += 30) {
        out.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`);
    }
    return out;
};
