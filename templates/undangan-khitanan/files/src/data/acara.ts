/**
 * Semua teks dan tanggal undangan ada di sini.
 * Ganti nilai di file ini, seluruh halaman ikut berubah.
 */
export const acara = {
    judul: 'Tasyakuran Khitan',
    anak: 'Muhammad Rafa Alfarizi',
    panggilan: 'Rafa',
    ayah: 'Bapak Hendra Wijaya',
    ibu: 'Ibu Nurul Aini',
    tanggalISO: '2027-03-08T10:00:00+07:00',
    hari: 'Minggu',
    tanggalTeks: '8 Maret 2027',
    waktu: '10.00 – 14.00 WIB',
    /** Lama acara dalam jam, untuk tautan "Simpan ke kalender". */
    durasiJam: 4,
    tempat: 'Kediaman keluarga',
    alamat: 'Jl. Flamboyan III No. 12, Jatiasih, Bekasi',
    maps: 'https://maps.google.com/?q=Jatiasih+Bekasi',
    wa: '6281234567890',
    pembuka:
        'Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara tasyakuran khitan putra kami.',
    doa:
        'Ya Allah, jadikanlah ananda Rafa anak yang saleh, sehat badannya, lapang hatinya, dan ringan langkahnya dalam kebaikan. Tumbuhkanlah ia menjadi penyejuk mata bagi kedua orang tuanya, bermanfaat bagi sesama, dan senantiasa berada dalam lindungan-Mu.',
    penutup:
        'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
};

/** Keluarga yang turut mengundang, ditampilkan apa adanya. */
export const turutMengundang = [
    'Keluarga Bapak H. Suharto Wijaya',
    'Keluarga Bapak Ahmad Fauzi',
    'Keluarga Ibu Hj. Siti Maryam',
    'Keluarga Bapak Rizky Pratama',
];

/** Foto suasana; hindari foto wajah anak dari dekat. Foto pertama tampil paling besar. */
export const galeri = [
    {
        src: 'https://images.unsplash.com/photo-1555244162-803834f70033',
        alt: 'Meja prasmanan untuk tamu',
        keterangan: 'Prasmanan untuk tamu',
    },
    {
        src: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd',
        alt: 'Bingkisan berbungkus kertas cokelat dan pita',
        keterangan: 'Bingkisan untuk tamu',
    },
    {
        src: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d',
        alt: 'Sate yang sedang dibakar di atas bara',
        keterangan: 'Sate dari dapur keluarga',
    },
];

/** Foto pembuka: hidangan syukuran. Ganti dengan foto keluarga atau dekorasi rumah. */
export const fotoHero = 'https://images.unsplash.com/photo-1562607635-4608ff48a859';

/** URL foto Unsplash dengan ukuran yang pas untuk tempat tampilnya. */
export const img = (url: string, w: number, h?: number) =>
    `${url}?w=${w}${h ? `&h=${h}&fit=crop` : ''}&q=75&auto=format`;
