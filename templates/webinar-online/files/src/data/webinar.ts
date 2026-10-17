/** Semua teks, tanggal, dan harga acara ada di sini. Ganti di sini, semua halaman ikut. */
export const webinar = {
    judul: 'Mengelola Keuangan Warung dengan Spreadsheet',
    subjudul: 'Dua sesi praktik: dari mencatat penjualan harian sampai tahu untung bersih tiap bulan.',
    penyelenggara: 'Kelas Usaha Kecil',
    format: 'Webinar 2 sesi via Zoom',
    platform: 'Zoom. Tautan dikirim ke WhatsApp peserta H-1.',
    mulaiISO: '2026-11-21T09:00:00+07:00',
    kuota: 100,
    sisaKursi: 37,
    harga: 75000,
    hargaEarly: 50000,
    batasEarly: '10 November 2026',
    wa: '6281234567890',
    bonus: ['Rekaman kedua sesi, bisa ditonton 30 hari', 'Template spreadsheet siap pakai (Google Sheets dan Excel)', 'Sertifikat digital'],
};

export const sesi = [
    {
        nomor: 'Sesi 1',
        tanggal: 'Sabtu, 21 November 2026',
        jam: '09.00 – 11.30 WIB',
        tema: 'Mencatat yang masuk dan keluar',
        agenda: [
            { jam: '09.00', apa: 'Kenapa catatan di kepala selalu meleset' },
            { jam: '09.20', apa: 'Menyiapkan lembar penjualan harian dan daftar barang' },
            { jam: '10.15', apa: 'Praktik: memasukkan transaksi seminggu dari struk contoh' },
            { jam: '11.00', apa: 'Tanya jawab' },
        ],
        silabus: [
            'Struktur lembar: penjualan, pembelian stok, pengeluaran lain-lain',
            'Rumus dasar yang cukup: SUM, SUMIF, dan tabel pivot sederhana',
            'Membedakan uang usaha dan uang rumah sejak hari pertama',
            'Kebiasaan 5 menit tiap malam supaya catatan tidak menumpuk',
        ],
    },
    {
        nomor: 'Sesi 2',
        tanggal: 'Sabtu, 28 November 2026',
        jam: '09.00 – 11.30 WIB',
        tema: 'Membaca untung, stok, dan utang-piutang',
        agenda: [
            { jam: '09.00', apa: 'Review pekerjaan rumah: catatan seminggu peserta' },
            { jam: '09.30', apa: 'Laba kotor vs laba bersih, dan ke mana uangnya pergi' },
            { jam: '10.15', apa: 'Praktik: laporan bulanan satu halaman dan daftar kasbon pelanggan' },
            { jam: '11.00', apa: 'Tanya jawab dan rencana 30 hari' },
        ],
        silabus: [
            'Menghitung harga pokok per barang dan margin yang realistis',
            'Lembar stok: tahu barang mana yang mengendap',
            'Mencatat kasbon pelanggan dan utang ke supplier tanpa drama',
            'Membaca laporan bulanan dalam 10 menit',
        ],
    },
];

export const pelajari = [
    'Menyusun catatan harian yang selesai dalam 5 menit per hari',
    'Memisahkan kas usaha dari kas rumah tangga',
    'Menghitung harga pokok dan margin per barang',
    'Mengetahui laba bersih bulanan, bukan sekadar omzet',
    'Mengelola stok supaya modal tidak mengendap di rak',
    'Mencatat kasbon dan utang supplier dengan rapi',
];

export const pemateri = {
    nama: 'Ratih Kusuma',
    peran: 'Konsultan keuangan UMKM',
    bio: 'Sepuluh tahun mendampingi warung, toko kelontong, dan katering rumahan merapikan pembukuan. Sebelumnya bekerja sebagai akuntan di perusahaan distribusi. Mengajar dengan contoh dari struk belanja sungguhan, bukan teori.',
    foto: 'https://images.unsplash.com/photo-1548142813-c348350df52b',
    /** Tiga fakta singkat yang tampil di samping bio. */
    fakta: [
        { k: 'Pengalaman', v: '10 tahun mendampingi usaha kecil' },
        { k: 'Latar', v: 'Akuntan, perusahaan distribusi' },
        { k: 'Gaya mengajar', v: 'Praktik langsung dari struk dan nota peserta' },
    ],
};

export const paket = [
    { nama: 'Early bird', harga: webinar.hargaEarly, berlaku: `Sampai ${webinar.batasEarly}`, catatan: 'Kuota 50 peserta pertama' },
    { nama: 'Normal', harga: webinar.harga, berlaku: 'Setelah early bird, selama kursi tersisa', catatan: 'Tutup H-1 atau saat kuota penuh' },
];

export const faq = [
    { q: 'Saya tidak bisa Excel sama sekali, bisa ikut?', a: 'Bisa. Sesi 1 dimulai dari cara mengetik angka dan menjumlahkan. Template sudah berisi rumus, Anda tinggal mengisi.' },
    { q: 'Apakah harus memakai laptop?', a: 'Disarankan laptop supaya bisa praktik sambil menyimak. Dari HP tetap bisa menonton dan mengisi template lewat aplikasi Google Sheets.' },
    { q: 'Kalau tidak bisa hadir di salah satu sesi?', a: 'Rekaman tersedia 30 hari setelah tiap sesi. Pertanyaan bisa dikirim ke grup WhatsApp dan dijawab pemateri.' },
    { q: 'Bagaimana cara bayar?', a: 'Transfer bank setelah mengisi form pendaftaran. Nomor rekening dikirim panitia lewat WhatsApp, konfirmasi dengan bukti transfer.' },
    { q: 'Ada sertifikat?', a: 'Ada, sertifikat digital untuk peserta yang mengikuti kedua sesi atau menonton rekamannya.' },
    { q: 'Bisa daftar untuk beberapa orang sekaligus?', a: 'Bisa. Tulis jumlah peserta di form, panitia menghitung totalnya. Tiap peserta mendapat tautan Zoom sendiri.' },
];

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

export const foto = {
    hero: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
};

/** URL foto Unsplash dengan ukuran yang pas untuk tempat tampilnya. */
export const img = (url: string, w: number, h?: number) =>
    `${url}?w=${w}${h ? `&h=${h}&fit=crop&crop=faces` : ''}&q=75&auto=format`;
