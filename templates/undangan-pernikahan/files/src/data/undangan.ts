/**
 * Semua data undangan di satu tempat. Ganti nama, tanggal, alamat, dan rekening di sini.
 * Nama tamu bisa dipersonalisasi lewat tautan: https://situs-anda/?to=Nama+Tamu
 */
const u = (id: string, w: number, h: number) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=75&auto=format`;

export const mempelai = {
    pria: { panggilan: 'Andi', lengkap: 'Andi Pratama, S.T.', ortu: 'Putra kedua Bapak Hartono & Ibu Sri Lestari' },
    wanita: { panggilan: 'Sari', lengkap: 'Sari Wulandari, S.Pd.', ortu: 'Putri pertama Bapak Suherman & Ibu Euis Rahayu' },
    tagar: '#AndiSariMenujuHalal',
};

export const acara = {
    /** Dipakai untuk hitung mundur dan tautan kalender. */
    mulaiISO: '2026-12-20T09:00:00+07:00',
    selesaiISO: '2026-12-20T14:00:00+07:00',
    tanggalTeks: 'Sabtu, 20 Desember 2026',
    tanggalSingkat: '20 · 12 · 2026',
    tempat: 'Gedung Graha Wisata',
    alamat: 'Jl. Melati No. 21, Sukajadi, Bandung',
    maps: 'https://maps.google.com/?q=Graha+Wisata+Bandung',
    rangkaian: [
        { nama: 'Akad Nikah', waktu: '09.00 – 10.00 WIB', catatan: 'Terbatas untuk keluarga dan kerabat dekat' },
        { nama: 'Resepsi', waktu: '11.00 – 14.00 WIB', catatan: 'Busana bebas rapi, nuansa hijau atau cokelat' },
    ],
    wa: '6281234567890',
};

export const kutipan = {
    teks: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
    sumber: 'QS. Ar-Rum: 21',
};

export const amplop = [
    { bank: 'Bank Contoh', nomor: '1234567890', atasNama: 'Sari Wulandari' },
];

export const foto = {
    sampul: u('1519225421980-715cb0215aed', 1600, 1200),
    utama: u('1532712938310-34cb3982ef74', 900, 1200),
    galeri: [
        { src: u('1465495976277-4387d4b0b4c6', 900, 1200), alt: 'Tangan mempelai dengan cincin dan buket' },
        { src: u('1469371670807-013ccf25f16a', 1200, 900), alt: 'Lorong pelaminan dengan rangkaian bunga' },
        { src: u('1606800052052-a08af7148866', 900, 900), alt: 'Sepasang cincin emas' },
        { src: u('1520854221256-17451cc331bf', 900, 900), alt: 'Mempelai bergandengan tangan' },
        { src: u('1529634806980-85c3dd6d34ac', 1200, 900), alt: 'Genggaman tangan di atas buket bunga' },
    ],
};
