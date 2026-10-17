/**
 * Satu tempat untuk semua teks, harga, dan nomor yang berubah per tempat usaha.
 * Ganti nilai di sini dan seluruh halaman ikut berubah.
 */
export const kedai = {
    nama: 'Kedai Teduh',
    tagline: 'Kopi, masakan rumahan, dan tempat duduk yang tidak diburu-buru.',
    deskripsi:
        'Kedai kecil di gang samping Pasar Kotagede. Kopi disangrai teman kami di Sleman, lauknya dimasak pagi-pagi oleh Bu Warsih, dan semua sayur datang dari pasar yang sama setiap subuh.',
    kota: 'Yogyakarta',
    alamat: 'Jl. Mondorakan No. 12, Kotagede, Yogyakarta',
    maps: 'https://maps.google.com/?q=Kotagede+Yogyakarta',
    telepon: '6281234567890',
    instagram: 'kedaiteduh.jogja',
    jam: [
        { hari: 'Senin–Jumat', buka: '08.00–21.00 WIB' },
        { hari: 'Sabtu–Minggu', buka: '07.00–22.00 WIB' },
    ],
    catatanJam: 'Dapur tutup 30 menit sebelum kedai tutup. Libur di hari pertama Lebaran.',
    kapasitas: 'Maksimal 8 orang per reservasi. Rombongan lebih besar silakan hubungi lewat WhatsApp dulu.',
};

export interface MenuItem {
    nama: string;
    harga: number;
    keterangan?: string;
    favorit?: boolean;
}

export interface KategoriMenu {
    id: string;
    nama: string;
    catatan?: string;
    item: MenuItem[];
}

export const menu: KategoriMenu[] = [
    {
        id: 'kopi',
        nama: 'Kopi',
        catatan: 'Biji arabika Sleman, sangrai medium. Bisa minta kurang manis atau tanpa gula.',
        item: [
            { nama: 'Kopi Tubruk', harga: 18000, keterangan: 'Diseduh di gelas, ampas di bawah. Dengan gula batu.', favorit: true },
            { nama: 'Kopi Susu Teduh', harga: 25000, keterangan: 'Espresso, susu segar, gula aren Bantul. Dingin atau hangat.', favorit: true },
            { nama: 'Americano', harga: 22000 },
            { nama: 'Cappuccino', harga: 27000, keterangan: 'Busa tebal, bubuk kayu manis kalau mau.' },
            { nama: 'V60 Single Origin', harga: 30000, keterangan: 'Biji bergilir tiap minggu, tanya baristanya.' },
            { nama: 'Es Kopi Jeruk', harga: 28000, keterangan: 'Americano dingin dengan perasan jeruk peras.' },
        ],
    },
    {
        id: 'non-kopi',
        nama: 'Non-Kopi',
        item: [
            { nama: 'Wedang Uwuh', harga: 18000, keterangan: 'Rempah Imogiri: secang, jahe, cengkih, kayu manis.', favorit: true },
            { nama: 'Teh Tubruk Melati', harga: 12000 },
            { nama: 'Es Jeruk Nipis', harga: 15000 },
            { nama: 'Cokelat Panas', harga: 24000, keterangan: 'Cokelat Gunungkidul, tanpa bubuk instan.' },
        ],
    },
    {
        id: 'makanan',
        nama: 'Makanan',
        catatan: 'Semua disajikan dengan nasi putih hangat dan sambal buatan sendiri.',
        item: [
            { nama: 'Nasi Pecel Teduh', harga: 25000, keterangan: 'Sayur rebus, bumbu kacang, tempe goreng, rempeyek.', favorit: true },
            { nama: 'Ayam Goreng Lengkuas', harga: 32000, keterangan: 'Paha atau dada, dengan serundeng lengkuas dan lalapan.', favorit: true },
            { nama: 'Sayur Lodeh Tempe', harga: 22000, keterangan: 'Kuah santan ringan, labu siam, kacang panjang.' },
            { nama: 'Brongkos Daging', harga: 38000, keterangan: 'Kuah kluwek hitam, daging sandung lamur, kacang tolo.' },
            { nama: 'Mangut Lele', harga: 30000, keterangan: 'Lele asap dalam kuah santan pedas, cabai rawit utuh.' },
            { nama: 'Nasi Goreng Kampung', harga: 28000, keterangan: 'Pedas, dengan telur ceplok dan kerupuk.' },
        ],
    },
    {
        id: 'camilan',
        nama: 'Camilan',
        item: [
            { nama: 'Pisang Goreng Keju', harga: 18000, keterangan: 'Pisang kepok, taburan keju parut dan susu kental.' },
            { nama: 'Tempe Mendoan', harga: 15000, keterangan: 'Lima potong, dengan kecap cabai rawit.', favorit: true },
            { nama: 'Kue Lumpur Kentang', harga: 12000, keterangan: 'Dua potong, hangat.' },
            { nama: 'Singkong Keju', harga: 16000 },
        ],
    },
];

export const galeri = [
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=75&auto=format&fit=crop', alt: 'Ruang dalam kedai dengan meja kayu dan jendela besar', bentuk: 'lebar' },
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=75&auto=format&fit=crop', alt: 'Secangkir kopi susu di meja kayu', bentuk: 'kotak' },
    { src: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=800&q=75&auto=format&fit=crop', alt: 'Semangkuk mie kuah dengan jeruk nipis dan sambal', bentuk: 'tinggi' },
    { src: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=800&q=75&auto=format&fit=crop', alt: 'Sate dibakar di atas arang', bentuk: 'kotak' },
    { src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=75&auto=format&fit=crop', alt: 'Nasi goreng kampung di piring putih', bentuk: 'tinggi' },
    { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1400&q=75&auto=format&fit=crop', alt: 'Suasana teras kedai di sore hari', bentuk: 'lebar' },
    { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=75&auto=format&fit=crop', alt: 'Biji kopi dan alat seduh', bentuk: 'kotak' },
];

/** Foto utama halaman. Ganti dengan foto kedai Anda sendiri. */
export const foto = {
    hero: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=75&auto=format&fit=crop',
    dapur1: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=75&auto=format&fit=crop',
    dapur2: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=800&q=75&auto=format&fit=crop',
};

export const rupiah = (n: number) => `Rp ${n.toLocaleString('id-ID')}`;
