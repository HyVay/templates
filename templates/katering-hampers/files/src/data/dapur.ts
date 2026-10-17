/**
 * Semua data usaha ada di sini. Ganti nilai, seluruh halaman ikut berubah. Data fiktif.
 */
export const dapur = {
    nama: 'Dapur Ibu Ratna',
    tagline: 'Masakan rumahan untuk kantor, hajatan, dan hampers musiman.',
    deskripsi:
        'Dimasak pagi hari di dapur rumah kami di Ciledug, dikirim sendiri oleh tim kecil yang sama sejak 2017. Bumbu diulek, bukan instan, dan porsinya porsi orang rumah.',
    kota: 'Tangerang',
    alamat: 'Jl. Hasyim Ashari Gg. Mawar No. 3, Ciledug, Tangerang',
    telepon: '6281234567890',
    instagram: 'dapuriburatna',
    jamPesan: 'Pesan H-1 sebelum pukul 15.00; prasmanan dan hampers H-7',
    areaAntar: 'Tangerang, Jakarta Barat, Jakarta Selatan. Ongkir Rp 15.000–40.000, gratis untuk pesanan di atas Rp 1.500.000.',
    dp: 'DP 50% saat pesanan dikonfirmasi, pelunasan saat pengiriman.',
};

export const poMusiman = {
    judul: 'Hampers Lebaran 2027',
    tutup: 'PO ditutup 1 Maret 2027',
    kirim: 'Pengiriman 10–15 Maret 2027',
    catatan: 'Kuota 300 paket, 112 sudah dipesan.',
};

export interface Paket {
    nama: string;
    isi: string;
    harga: number;
    satuan: string;
    minimal: string;
    favorit?: boolean;
}

export const kateringHarian: Paket[] = [
    { nama: 'Paket Kantor A', isi: 'Nasi, 1 lauk utama, 1 lauk pendamping, sayur, sambal, kerupuk', harga: 25000, satuan: 'porsi', minimal: '10 porsi / hari', favorit: true },
    { nama: 'Paket Kantor B', isi: 'Nasi, 2 lauk utama, sayur, sambal, buah potong', harga: 32000, satuan: 'porsi', minimal: '10 porsi / hari' },
    { nama: 'Paket Diet Rumahan', isi: 'Nasi merah, ayam/ikan panggang, tumis sayur, buah', harga: 35000, satuan: 'porsi', minimal: '5 porsi / hari' },
];

export const nasiBox: Paket[] = [
    { nama: 'Nasi Box Hemat', isi: 'Nasi, ayam goreng lengkuas, tempe orek, lalapan, sambal, air mineral', harga: 22000, satuan: 'box', minimal: '20 box' },
    { nama: 'Nasi Box Komplit', isi: 'Nasi, ayam bakar, telur balado, capcay, sambal, buah, air mineral', harga: 30000, satuan: 'box', minimal: '20 box', favorit: true },
    { nama: 'Nasi Box Aqiqah', isi: 'Nasi kebuli, gulai kambing, acar, emping, buah, air mineral', harga: 38000, satuan: 'box', minimal: '30 box' },
];

export const prasmanan: Paket[] = [
    { nama: 'Prasmanan Keluarga', isi: 'Nasi, 2 lauk ayam/ikan, 1 lauk daging, 2 sayur, sambal, kerupuk, buah, es buah', harga: 45000, satuan: 'pax', minimal: '50 pax' },
    { nama: 'Prasmanan Hajatan', isi: 'Nasi, 2 lauk ayam, 2 lauk daging, soto/sop, 2 sayur, sambal, kerupuk, buah, es buah, pudding', harga: 60000, satuan: 'pax', minimal: '100 pax', favorit: true },
];

export const menuMingguan = [
    { hari: 'Senin', lauk: 'Ayam goreng lengkuas', sayur: 'Sayur asem', tambahan: 'Tempe mendoan, sambal terasi' },
    { hari: 'Selasa', lauk: 'Ikan kembung balado', sayur: 'Tumis kangkung', tambahan: 'Tahu bacem, lalapan' },
    { hari: 'Rabu', lauk: 'Semur daging', sayur: 'Sop sayuran', tambahan: 'Perkedel kentang, kerupuk' },
    { hari: 'Kamis', lauk: 'Ayam bakar kecap', sayur: 'Urap', tambahan: 'Telur dadar, sambal bawang' },
    { hari: 'Jumat', lauk: 'Rendang', sayur: 'Sayur lodeh', tambahan: 'Tempe kering, kerupuk' },
];

export interface Hampers {
    nama: string;
    harga: number;
    isi: Record<string, string>;
}

export const hampersBaris = ['Kue kering', 'Minuman', 'Kemasan', 'Kartu ucapan', 'Pengiriman'];

export const hampers: Hampers[] = [
    {
        nama: 'Hampers Silaturahmi',
        harga: 150000,
        isi: {
            'Kue kering': 'Nastar & kastengel (2 toples 250 gr)',
            Minuman: 'Sirup markisa 500 ml',
            Kemasan: 'Box kraft, pita',
            'Kartu ucapan': 'Tulisan tangan',
            Pengiriman: 'Area Tangerang',
        },
    },
    {
        nama: 'Hampers Keluarga',
        harga: 250000,
        isi: {
            'Kue kering': 'Nastar, kastengel, putri salju (3 toples 300 gr)',
            Minuman: 'Sirup markisa 500 ml, kopi bubuk 200 gr',
            Kemasan: 'Box kayu pinus',
            'Kartu ucapan': 'Tulisan tangan + nama penerima',
            Pengiriman: 'Jabodetabek',
        },
    },
    {
        nama: 'Hampers Istimewa',
        harga: 400000,
        isi: {
            'Kue kering': '4 toples 350 gr + lapis legit 500 gr',
            Minuman: 'Sirup markisa, kopi bubuk, teh melati tin',
            Kemasan: 'Keranjang rotan, kain batik',
            'Kartu ucapan': 'Tulisan tangan + logo perusahaan (opsional)',
            Pengiriman: 'Jabodetabek, gratis',
        },
    },
];

export const langkahPesan = [
    'Kirim jenis pesanan, jumlah, tanggal, dan alamat lewat form atau WhatsApp.',
    'Kami balas dengan total biaya dan ketersediaan tanggal, biasanya dalam 1 jam pada jam kerja.',
    'Bayar DP 50% lewat transfer; pesanan masuk jadwal setelah bukti transfer diterima.',
    'Pelunasan saat pesanan tiba. Pembatalan H-2 ke atas, DP dikembalikan penuh.',
];

export const foto = {
    hero: 'https://images.unsplash.com/photo-1562607635-4608ff48a859?w=1200&q=80',
    heroAlt: 'Hidangan Indonesia: sate, mi, dan lauk di atas meja',
    nasiBox: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=1000&q=80',
    nasiBoxAlt: 'Kotak makan berisi nasi dan lauk',
    prasmanan: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1000&q=80',
    prasmananAlt: 'Meja prasmanan dengan berbagai hidangan',
    hampers: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=1000&q=80',
    hampersAlt: 'Kotak hadiah dibungkus kertas kraft dengan pita',
    lauk: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=1000&q=80',
    laukAlt: 'Ayam bakar dengan bumbu merah',
};

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
