/**
 * Semua teks, jadwal, dan nomor yang berubah per masjid ada di sini.
 * Ganti nilai di file ini, seluruh halaman ikut menyesuaikan.
 */
export const masjid = {
    nama: 'Masjid Al-Hikmah',
    namaArab: 'مسجد الحكمة',
    lokasiSingkat: 'Pondok Cabe',
    tagline: 'Rumah ibadah dan ruang belajar warga Pondok Cabe sejak 1987',
    deskripsi:
        'Masjid Al-Hikmah berdiri di tengah perumahan Pondok Cabe Indah dan dikelola takmir dari warga sekitar. Selain sholat berjamaah lima waktu, masjid menjadi tempat TPA sore, kajian pekanan, dan kegiatan sosial RW 06.',
    alamat: 'Jl. Pondok Cabe Indah Blok C No. 1, Pamulang, Tangerang Selatan',
    maps: 'https://maps.google.com/?q=Pondok+Cabe+Pamulang',
    wa: '6281234567890',
    jamSekretariat: 'Senin – Jumat, 08.00 – 16.00 WIB',
};

/** Jadwal sholat contoh. Perbarui setiap awal bulan dari jadwal Kemenag setempat. */
export const jadwalSholat = {
    berlakuUntuk: 'Oktober 2026',
    sumber: 'Jadwal Kemenag Kota Tangerang Selatan',
    waktu: [
        { nama: 'Subuh', jam: '04.35' },
        { nama: 'Dzuhur', jam: '11.55' },
        { nama: 'Ashar', jam: '15.15' },
        { nama: 'Maghrib', jam: '18.05' },
        { nama: 'Isya', jam: '19.15' },
    ],
    catatan: 'Iqamah 10 menit setelah adzan. Sholat Jumat dimulai pukul 12.00 WIB.',
};

export interface Kajian {
    hari: string;
    jam: string;
    tema: string;
    pemateri: string;
    untuk: string;
}

export const kajianRutin: Kajian[] = [
    { hari: 'Senin', jam: '19.30', tema: 'Tafsir Juz Amma', pemateri: 'Ust. Abdul Rahman Hakim', untuk: 'Umum' },
    { hari: 'Rabu', jam: '19.30', tema: 'Fikih Ibadah Sehari-hari', pemateri: 'Ust. Muhammad Ilham', untuk: 'Umum' },
    { hari: 'Jumat', jam: '16.00', tema: 'Kajian Muslimah: Adab dan Akhlak', pemateri: 'Ustadzah Fatimah Zahra', untuk: 'Muslimah' },
    { hari: 'Sabtu', jam: '05.15', tema: 'Kajian Subuh: Sirah Nabawiyah', pemateri: 'Ust. Abdul Rahman Hakim', untuk: 'Umum' },
    { hari: 'Ahad', jam: '08.00', tema: 'Tahsin Al-Quran Dewasa', pemateri: 'Ust. Yusuf Mansyur Hidayat', untuk: 'Dewasa' },
];

export const programSosial = [
    {
        nama: 'TPA Al-Hikmah',
        ringkas: 'Taman Pendidikan Al-Quran untuk anak usia 5–12 tahun. Senin–Kamis pukul 16.00–17.30. Tanpa biaya, infaq sukarela.',
    },
    {
        nama: 'Santunan Bulanan',
        ringkas: 'Paket sembako untuk 40 keluarga dhuafa di RW 05 dan RW 06, disalurkan setiap Jumat pertama.',
    },
    {
        nama: 'Kurban & Zakat',
        ringkas: 'Panitia kurban Idul Adha dan penyaluran zakat fitrah bekerja sama dengan pengurus RT setempat.',
    },
    {
        nama: 'Ambulans Warga',
        ringkas: 'Satu unit ambulans untuk warga sekitar, siaga 24 jam. Hubungi sekretariat untuk pemakaian.',
    },
];

export interface Pengumuman {
    tanggal: string;
    judul: string;
    isi: string;
}

export const pengumuman: Pengumuman[] = [
    {
        tanggal: '12 Okt 2026',
        judul: 'Renovasi tempat wudhu putri',
        isi: 'Tempat wudhu putri diperbaiki mulai 14 Oktober selama dua pekan. Sementara dialihkan ke sisi utara masjid.',
    },
    {
        tanggal: '5 Okt 2026',
        judul: 'Pendaftaran TPA semester genap',
        isi: 'Dibuka untuk 30 santri baru hingga 31 Oktober. Formulir tersedia di sekretariat setiap sore.',
    },
    {
        tanggal: '28 Sep 2026',
        judul: 'Laporan kas September',
        isi: 'Pemasukan infaq Rp 38,4 juta, pengeluaran Rp 29,1 juta. Rincian ditempel di papan pengumuman.',
    },
];

/** Rekening contoh. Ganti dengan rekening atas nama masjid/yayasan, bukan pribadi. */
export const infaq = {
    bank: 'Bank Contoh Syariah',
    atasNama: 'Masjid Al-Hikmah Pondok Cabe',
    nomor: '1234567890',
    penggunaan: [
        { pos: 'Operasional harian', porsi: '40%', isi: 'Listrik, air, kebersihan, dan honor marbot.' },
        { pos: 'Pendidikan', porsi: '25%', isi: 'TPA, honor pengajar, dan buku iqra untuk santri.' },
        { pos: 'Sosial', porsi: '25%', isi: 'Santunan bulanan, ambulans, dan bantuan darurat warga.' },
        { pos: 'Pemeliharaan', porsi: '10%', isi: 'Perbaikan bangunan dan peralatan masjid.' },
    ],
};

export const takmir = [
    { jabatan: 'Ketua Takmir', nama: 'H. Bambang Setiawan' },
    { jabatan: 'Sekretaris', nama: 'Dedi Kurniawan' },
    { jabatan: 'Bendahara', nama: 'Hj. Ratna Sari Dewi' },
    { jabatan: 'Bidang Dakwah & TPA', nama: 'Ust. Muhammad Ilham' },
];

export const foto = {
    hero: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1600&q=80',
    kegiatan: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1000&q=80',
    serambi: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?w=1000&q=80',
    infaq: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1000&q=80',
};
