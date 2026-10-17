/**
 * Data kos: ganti di sini, semua halaman ikut berubah. Semua data fiktif.
 * Perbarui `sisa` tiap ada kamar kosong/terisi.
 */
export const kos = {
    nama: 'Kos Griya Asri',
    jenis: 'Kos putri',
    tagline: 'Kamar bersih, dapur bersama, 7 menit jalan kaki ke kampus.',
    deskripsi:
        'Rumah dua lantai dengan 18 kamar di gang yang tenang, dijaga Bu Endang yang tinggal di lantai bawah. Semua kamar dapat jendela ke luar, bukan ke lorong.',
    kota: 'Yogyakarta',
    alamat: 'Jl. Kaliurang Km 5,2, Gg. Melati No. 7, Sleman',
    dekat: [
        { tempat: 'Kampus UGM (Fakultas Teknik)', jarak: '7 menit jalan kaki' },
        { tempat: 'Halte Trans Jogja Kentungan', jarak: '4 menit jalan kaki' },
        { tempat: 'Minimarket & laundry', jarak: 'ujung gang' },
    ],
    telepon: '6281234567890',
    maps: 'https://maps.google.com/?q=Kaliurang+Km+5+Sleman',
    pembaruan: 'Oktober 2026',
    jamSurvei: 'Setiap hari 09.00–19.00 WIB, kecuali Jumat 12.00–13.00',
};

export interface TipeKamar {
    slug: string;
    nama: string;
    ukuran: string;
    harga: number;
    jumlah: number;
    sisa: number;
    fasilitas: string[];
    foto: string;
    alt: string;
    catatan: string;
}

export const tipeKamar: TipeKamar[] = [
    {
        slug: 'standar',
        nama: 'Standar',
        ukuran: '3 × 3 m',
        harga: 900000,
        jumlah: 8,
        sisa: 1,
        fasilitas: ['Kasur busa 120 cm', 'Lemari 2 pintu', 'Meja & kursi belajar', 'Kipas angin', 'Kamar mandi luar (1:3)'],
        foto: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=1000&q=75&auto=format&fit=crop',
        alt: 'Kamar standar dengan kasur rendah dan seprai putih',
        catatan: 'Lantai 1 dan 2. Kamar mandi luar dibagi tiga kamar, dibersihkan tiap pagi.',
    },
    {
        slug: 'ac',
        nama: 'AC',
        ukuran: '3 × 3,5 m',
        harga: 1400000,
        jumlah: 6,
        sisa: 1,
        fasilitas: ['AC 1/2 PK', 'Kasur spring bed 120 cm', 'Lemari 2 pintu', 'Meja & kursi belajar', 'Kamar mandi luar (1:2)'],
        foto: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1000&q=75&auto=format&fit=crop',
        alt: 'Kamar AC dengan kasur, meja samping, dan lampu baca',
        catatan: 'Listrik AC dihitung dari meteran kamar (token sendiri).',
    },
    {
        slug: 'ac-km-dalam',
        nama: 'AC + Kamar Mandi Dalam',
        ukuran: '3,5 × 4 m',
        harga: 1900000,
        jumlah: 4,
        sisa: 0,
        fasilitas: ['AC 1/2 PK', 'Kamar mandi dalam, shower air hangat', 'Kasur spring bed 140 cm', 'Lemari 3 pintu', 'Meja kerja 120 cm', 'Balkon kecil'],
        foto: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=1000&q=75&auto=format&fit=crop',
        alt: 'Kamar dengan kasur 140 cm dan dinding putih',
        catatan: 'Hanya di lantai 2. Daftar tunggu dibuka, biasanya kosong saat pergantian semester.',
    },
];

export const fasilitasUmum = [
    'Wi-Fi 100 Mbps (dibagi, cukup untuk kuliah daring)',
    'Dapur bersama: kompor 2 tungku, kulkas 2 pintu, dispenser',
    'Ruang tamu untuk menerima tamu (bukan di kamar)',
    'Mesin cuci bersama, 2 unit, gratis',
    'Parkir motor beratap, parkir mobil 2 slot (bergantian)',
    'CCTV di gerbang dan lorong, gerbang dikunci 23.00',
    'Air sumur bor + PDAM, tandon 2.000 liter',
    'Jemuran atap, tempat sampah dipilah',
];

export const aturan = [
    'Tamu diterima di ruang tamu pukul 08.00–21.00. Tamu laki-laki tidak masuk area kamar.',
    'Gerbang dikunci pukul 23.00. Pulang lebih malam, kabari Bu Endang lewat WhatsApp sebelum 21.00.',
    'Tidak merokok di dalam kamar dan lorong. Area merokok di halaman belakang.',
    'Tidak memasak dengan kompor atau rice cooker di kamar; pakai dapur bersama.',
    'Hewan peliharaan tidak diizinkan.',
    'Kerusakan di luar pemakaian wajar ditanggung penghuni, dipotong dari deposit.',
    'Pindah kos: beri tahu minimal 1 bulan sebelumnya, deposit dikembalikan setelah cek kamar.',
];

export const biayaTambahan = [
    { nama: 'Deposit', nilai: '1 bulan sewa', catatan: 'Dikembalikan saat keluar, dipotong kerusakan bila ada' },
    { nama: 'Listrik kamar Standar', nilai: 'Termasuk', catatan: 'Pemakaian wajar: lampu, laptop, kipas' },
    { nama: 'Listrik kamar AC', nilai: 'Token sendiri', catatan: 'Rata-rata Rp 100.000–150.000 / bulan' },
    { nama: 'Parkir mobil', nilai: 'Rp 100.000 / bulan', catatan: 'Hanya 2 slot, bergantian' },
    { nama: 'Pembayaran', nilai: 'Tanggal 1 - 5', catatan: 'Transfer ke rekening pemilik, bukti dikirim via WhatsApp' },
];

export const fotoLain = {
    hero: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80',
    heroAlt: 'Kamar kos putih bersih dengan tempat tidur dan meja',
    dapur: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&q=80',
    dapurAlt: 'Dapur bersama dengan kompor dan rak',
    ruangTamu: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&q=80',
    ruangTamuAlt: 'Ruang tamu dengan sofa dan meja makan',
};

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
