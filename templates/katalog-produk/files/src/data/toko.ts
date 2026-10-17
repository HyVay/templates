/** Data toko dan produk. Ubah di sini, seluruh halaman ikut menyesuaikan. */
const u = (id: string, w: number, h: number) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75&auto=format`;

export const toko = {
    nama: 'Kopi Ranah',
    tagline: 'Biji kopi single origin, disangrai setiap Senin',
    deskripsi:
        'Kami memanggang biji dari petani di Gayo, Toraja, dan Kintamani dalam jumlah kecil, lalu mengirimkannya dalam dua hari setelah sangrai.',
    telepon: '6281234567890',
    alamat: 'Jl. Kenanga No. 4, Bandung',
    jam: 'Setiap hari, 09.00 – 20.00 WIB',
    ongkir: 'Gratis ongkir Bandung untuk pesanan di atas Rp 250.000',
    /** Hari sangrai mingguan, 0 = Minggu … 1 = Senin. Dipakai untuk menghitung tanggal sangrai berikutnya. */
    hariSangrai: 1,
    maps: 'https://maps.google.com/?q=Bandung',
};

export const kategori = ['Semua', 'Arabika', 'Robusta', 'Peralatan'] as const;

export interface Produk {
    nama: string;
    kategori: string;
    harga: number;
    satuan: string;
    ringkas: string;
    foto: string;
    stok: boolean;
    /** Opsional, hanya untuk biji kopi. */
    asal?: string;
    proses?: string;
    catatan?: string[];
    /** 1 = sangat terang … 5 = gelap */
    sangrai?: number;
}

export const produk: Produk[] = [
    {
        nama: 'Gayo Natural', kategori: 'Arabika', harga: 128000, satuan: '250 gr',
        ringkas: 'Manis seperti kismis dengan asam jeruk yang bersih. Cocok untuk V60.',
        foto: u('1559056199-641a0ac8b55e', 800, 800), stok: true,
        asal: 'Bener Meriah, Aceh', proses: 'Natural', catatan: ['Kismis', 'Jeruk', 'Gula aren'], sangrai: 2,
    },
    {
        nama: 'Toraja Washed', kategori: 'Arabika', harga: 135000, satuan: '250 gr',
        ringkas: 'Cokelat gelap dan rempah, body tebal. Enak sebagai kopi susu.',
        foto: u('1606791405792-1004f1718d0c', 800, 800), stok: true,
        asal: 'Toraja Utara, Sulawesi Selatan', proses: 'Washed', catatan: ['Cokelat hitam', 'Kayu manis', 'Karamel'], sangrai: 3,
    },
    {
        nama: 'Kintamani Honey', kategori: 'Arabika', harga: 142000, satuan: '250 gr',
        ringkas: 'Aroma bunga dengan rasa madu yang panjang. Terbatas per panen.',
        foto: u('1587734195503-904fca47e0e9', 800, 800), stok: false,
        asal: 'Kintamani, Bali', proses: 'Honey', catatan: ['Melati', 'Madu', 'Jeruk nipis'], sangrai: 2,
    },
    {
        nama: 'Robusta Lampung', kategori: 'Robusta', harga: 92000, satuan: '500 gr',
        ringkas: 'Pahit tegas dan kafein tinggi. Pilihan utama untuk espresso harian.',
        foto: u('1580933073521-dc49ac0d4e6a', 800, 800), stok: true,
        asal: 'Tanggamus, Lampung', proses: 'Semi-washed', catatan: ['Kacang panggang', 'Cokelat', 'Tembakau'], sangrai: 4,
    },
    {
        nama: 'V60 Dripper', kategori: 'Peralatan', harga: 165000, satuan: 'per unit',
        ringkas: 'Dripper keramik ukuran 02 beserta 40 lembar kertas saring.',
        foto: u('1442512595331-e89e73853f31', 800, 800), stok: true,
    },
    {
        nama: 'Grinder Listrik 40 mm', kategori: 'Peralatan', harga: 1250000, satuan: 'per unit',
        ringkas: 'Burr baja 40 mm dengan 31 tingkat kehalusan, dari espresso hingga french press.',
        foto: u('1611854779393-1b2da9d400fe', 800, 800), stok: true,
    },
];

/** Pilihan gilingan di formulir pesan. */
export const gilingan = ['Biji utuh', 'V60 / pour over', 'Tubruk', 'Espresso', 'French press', 'Mokapot'];

export const langkah = [
    { judul: 'Pilih produk', isi: 'Tekan "Pesan" di produk mana pun, atau isi formulir kalau pesan beberapa sekaligus.' },
    { judul: 'Chat terbuka di WhatsApp', isi: 'Pesan sudah terisi. Kami balas dengan total harga, ongkir, dan nomor rekening.' },
    { judul: 'Dikirim setelah sangrai', isi: 'Biji dikirim paling lambat dua hari setelah tanggal sangrai, digiling sesuai alat Anda.' },
];

export const foto = {
    hero: u('1525088553748-01d6e210e00b', 1100, 1300),
    toko: u('1453614512568-c4024d13c247', 1100, 825),
};

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
