/**
 * Semua teks dan angka yang berubah per usaha ada di file ini.
 * Harga dalam rupiah (angka bulat), tiga tingkat: eceran / per lusin / per karton.
 */
export const toko = {
    nama: 'Sumber Rejeki Grosir',
    tagline: 'Grosir sembako dan kebutuhan warung untuk Surabaya dan sekitarnya',
    deskripsi:
        'Distributor sembako sejak 2009. Melayani warung, toko kelontong, dan katering dengan harga bertingkat: makin banyak, makin murah. Pesanan sebelum pukul 14.00 dikirim besok pagi.',
    kota: 'Surabaya',
    sejak: 2009,
    telepon: '6281234567890',
    alamat: 'Jl. Kalianak Barat No. 48, Asemrowo, Surabaya',
    jam: [
        { hari: 'Senin–Jumat', jam: '07.30–17.00 WIB' },
        { hari: 'Sabtu', jam: '07.30–14.00 WIB' },
        { hari: 'Minggu & libur', jam: 'Tutup' },
    ],
    gratisOngkir: 'Gratis ongkir Surabaya untuk pesanan di atas Rp 1.000.000',
    minimalOrder: 'Minimal pesanan Rp 300.000 per pengiriman',
    pembayaran: ['Transfer bank sebelum kirim', 'COD (bayar saat barang tiba) untuk Surabaya', 'Tempo 7 hari untuk pelanggan tetap, setelah 3 transaksi lancar'],
    jamKirim: 'Pesanan masuk sebelum 14.00 dikirim besok pukul 08.00–12.00. Luar Surabaya H+2 lewat ekspedisi.',
};

export const areaKirim = [
    { area: 'Surabaya (semua kecamatan)', biaya: 'Rp 25.000, gratis di atas Rp 1.000.000', estimasi: 'H+1' },
    { area: 'Sidoarjo & Gresik', biaya: 'Rp 45.000, gratis di atas Rp 2.000.000', estimasi: 'H+1' },
    { area: 'Mojokerto, Lamongan, Bangkalan', biaya: 'Rp 75.000', estimasi: 'H+2' },
    { area: 'Jawa Timur lainnya', biaya: 'Sesuai tarif ekspedisi, ditagih saat kirim', estimasi: 'H+2 s.d. H+3' },
];

export const kategori = ['Semua', 'Sembako', 'Minuman', 'Kebersihan', 'Snack'] as const;

export interface Produk {
    sku: string;
    nama: string;
    kategori: string;
    /** Satuan eceran, mis. "1 kg", "botol 600 ml" */
    satuan: string;
    /** Isi satu karton dalam satuan eceran */
    isiKarton: number;
    eceran: number;
    lusin: number;
    karton: number;
    /** Minimal pembelian dalam satuan eceran */
    moq: number;
    stok: boolean;
    terlaris: boolean;
}

export const produk: Produk[] = [
    { sku: 'SKU-0001', nama: 'Beras medium 5 kg', kategori: 'Sembako', satuan: 'karung 5 kg', isiKarton: 4, eceran: 68000, lusin: 66000, karton: 64500, moq: 4, stok: true, terlaris: true },
    { sku: 'SKU-0002', nama: 'Minyak goreng 2 L', kategori: 'Sembako', satuan: 'pouch 2 L', isiKarton: 6, eceran: 34500, lusin: 33500, karton: 32800, moq: 6, stok: true, terlaris: true },
    { sku: 'SKU-0003', nama: 'Gula pasir 1 kg', kategori: 'Sembako', satuan: '1 kg', isiKarton: 20, eceran: 17500, lusin: 17000, karton: 16500, moq: 10, stok: true, terlaris: true },
    { sku: 'SKU-0004', nama: 'Mie instan goreng', kategori: 'Sembako', satuan: 'bungkus', isiKarton: 40, eceran: 3300, lusin: 3150, karton: 3000, moq: 40, stok: true, terlaris: true },
    { sku: 'SKU-0005', nama: 'Tepung terigu 1 kg', kategori: 'Sembako', satuan: '1 kg', isiKarton: 12, eceran: 13500, lusin: 13000, karton: 12600, moq: 12, stok: true, terlaris: false },
    { sku: 'SKU-0006', nama: 'Telur ayam', kategori: 'Sembako', satuan: 'kg', isiKarton: 15, eceran: 29000, lusin: 28500, karton: 28000, moq: 5, stok: true, terlaris: false },
    { sku: 'SKU-0007', nama: 'Air mineral 600 ml', kategori: 'Minuman', satuan: 'botol', isiKarton: 24, eceran: 3200, lusin: 3000, karton: 2800, moq: 24, stok: true, terlaris: true },
    { sku: 'SKU-0008', nama: 'Teh kotak 250 ml', kategori: 'Minuman', satuan: 'kotak', isiKarton: 24, eceran: 3900, lusin: 3700, karton: 3500, moq: 24, stok: false, terlaris: false },
    { sku: 'SKU-0009', nama: 'Kopi sachet 10 x 20 g', kategori: 'Minuman', satuan: 'renteng', isiKarton: 12, eceran: 12500, lusin: 12000, karton: 11600, moq: 12, stok: true, terlaris: false },
    { sku: 'SKU-0010', nama: 'Sabun cuci piring 800 ml', kategori: 'Kebersihan', satuan: 'pouch', isiKarton: 12, eceran: 14800, lusin: 14300, karton: 13900, moq: 12, stok: true, terlaris: true },
    { sku: 'SKU-0011', nama: 'Deterjen bubuk 800 g', kategori: 'Kebersihan', satuan: 'bungkus', isiKarton: 12, eceran: 19500, lusin: 18900, karton: 18400, moq: 12, stok: true, terlaris: false },
    { sku: 'SKU-0012', nama: 'Keripik singkong 200 g', kategori: 'Snack', satuan: 'bungkus', isiKarton: 20, eceran: 9500, lusin: 9000, karton: 8600, moq: 20, stok: true, terlaris: false },
];

export const langkahOrder = [
    { judul: 'Pilih barang dari daftar harga', isi: 'Catat SKU dan jumlah. Harga lusin berlaku mulai 12 satuan, harga karton mulai 1 karton penuh.' },
    { judul: 'Kirim daftar lewat WhatsApp', isi: 'Pakai form minta penawaran atau tulis langsung. Kami balas dengan total, ongkir, dan jadwal kirim dalam 1 jam kerja.' },
    { judul: 'Konfirmasi dan bayar', isi: 'Transfer ke rekening atas nama usaha, atau pilih COD untuk Surabaya. Bukti transfer dikirim ke nomor yang sama.' },
    { judul: 'Barang dikirim', isi: 'Armada sendiri untuk Surabaya, Sidoarjo, dan Gresik. Sopir membawa nota dan menunggu pengecekan barang.' },
    { judul: 'Cek dan terima', isi: 'Barang rusak atau kurang ditukar hari itu juga, cukup foto dan kirim ke WhatsApp.' },
];

export const foto = {
    hero: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80',
    gudang: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    rak: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1200&q=80',
};

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
