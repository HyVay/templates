/** Data toko dan produk. Ubah di sini, seluruh halaman ikut menyesuaikan. */
export const toko = {
    nama: 'Kopi Ranah',
    tagline: 'Biji kopi single origin, disangrai setiap Senin',
    deskripsi:
        'Kami memanggang biji dari petani di Gayo, Toraja, dan Kintamani dalam jumlah kecil, lalu mengirimkannya dalam dua hari setelah sangrai.',
    telepon: '6281234567890',
    alamat: 'Jl. Kenanga No. 4, Bandung',
    jam: 'Setiap hari, 09.00 - 20.00 WIB',
    ongkir: 'Gratis ongkir Bandung untuk pesanan di atas Rp 250.000',
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
}

export const produk: Produk[] = [
    {
        nama: 'Gayo Natural',
        kategori: 'Arabika',
        harga: 128000,
        satuan: '250 gr',
        ringkas: 'Manis seperti kismis dengan asam jeruk yang bersih. Cocok untuk V60.',
        foto: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
        stok: true,
    },
    {
        nama: 'Toraja Washed',
        kategori: 'Arabika',
        harga: 135000,
        satuan: '250 gr',
        ringkas: 'Cokelat gelap dan rempah, body tebal. Enak sebagai kopi susu.',
        foto: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',
        stok: true,
    },
    {
        nama: 'Kintamani Honey',
        kategori: 'Arabika',
        harga: 142000,
        satuan: '250 gr',
        ringkas: 'Aroma bunga dengan rasa madu yang panjang. Terbatas per panen.',
        foto: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
        stok: false,
    },
    {
        nama: 'Robusta Lampung',
        kategori: 'Robusta',
        harga: 92000,
        satuan: '500 gr',
        ringkas: 'Pahit tegas dan kafein tinggi. Pilihan utama untuk espresso harian.',
        foto: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
        stok: true,
    },
    {
        nama: 'V60 Dripper',
        kategori: 'Peralatan',
        harga: 165000,
        satuan: 'per unit',
        ringkas: 'Dripper keramik ukuran 02 beserta 40 lembar kertas saring.',
        foto: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
        stok: true,
    },
    {
        nama: 'Grinder Manual',
        kategori: 'Peralatan',
        harga: 340000,
        satuan: 'per unit',
        ringkas: 'Burr stainless dengan 24 tingkat kehalusan, dari espresso hingga french press.',
        foto: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80',
        stok: true,
    },
];

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
