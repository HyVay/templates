/**
 * Semua data turnamen ada di sini: nama, hadiah, jadwal, tim, hasil bracket, peraturan.
 * Ganti nilai di file ini dan seluruh halaman ikut berubah.
 */
export const turnamen = {
    nama: 'Piala Komunitas Semarang 2026',
    game: 'Mobile Legends: Bang Bang',
    penyelenggara: 'Komunitas ML Semarang',
    edisi: 'Edisi ke-3',
    kota: 'Semarang',
    venue: 'Gedung Serbaguna Tembalang',
    alamat: 'Jl. Prof. Soedarto No. 5, Tembalang, Semarang',
    tanggalTeks: '20–22 November 2026',
    mulaiISO: '2026-11-20T13:00:00+07:00',
    jumlahTim: 16,
    sisaSlot: 5,
    biayaDaftar: 100000,
    batasDaftar: 'Selasa, 10 November 2026, 23.59 WIB',
    wa: '6281234567890',
    instagram: '@mlsemarang',
    ringkas:
        'Turnamen Mobile Legends terbuka untuk tim dari Semarang dan sekitarnya. Enam belas tim, tiga hari, satu panggung offline dengan layar besar untuk penonton. Tidak ada kelas pro: yang penting roster lengkap dan datang tepat waktu.',
};

export const hadiah = [
    { posisi: 'Juara 1', nominal: 7500000, tambahan: 'Trofi, medali, slot undangan turnamen regional' },
    { posisi: 'Juara 2', nominal: 4000000, tambahan: 'Trofi dan medali' },
    { posisi: 'Juara 3', nominal: 2000000, tambahan: 'Medali' },
    { posisi: 'MVP turnamen', nominal: 1500000, tambahan: 'Dipilih panel caster' },
];

export const format = [
    {
        judul: 'Fase grup',
        isi: '16 tim dibagi 4 grup. Round robin Bo1 di hari pertama dan pagi hari kedua. Dua teratas tiap grup lolos.',
    },
    {
        judul: 'Playoff 8 besar',
        isi: 'Single elimination Bo3. Perempat final dan semifinal dimainkan di hari kedua sore sampai malam.',
    },
    {
        judul: 'Grand final',
        isi: 'Bo5 di panggung utama hari ketiga, disiarkan langsung dengan caster. Perebutan juara 3 Bo3 sebelumnya.',
    },
];

export const jadwal = [
    {
        hari: 'Hari 1',
        tanggal: 'Jumat, 20 November',
        sesi: [
            { jam: '13.00', apa: 'Technical meeting dan verifikasi roster' },
            { jam: '14.00', apa: 'Fase grup A dan B' },
            { jam: '18.00', apa: 'Istirahat' },
            { jam: '19.00', apa: 'Fase grup C dan D' },
        ],
    },
    {
        hari: 'Hari 2',
        tanggal: 'Sabtu, 21 November',
        sesi: [
            { jam: '10.00', apa: 'Sisa pertandingan grup' },
            { jam: '14.00', apa: 'Perempat final (Bo3)' },
            { jam: '19.00', apa: 'Semifinal (Bo3)' },
        ],
    },
    {
        hari: 'Hari 3',
        tanggal: 'Minggu, 22 November',
        sesi: [
            { jam: '13.00', apa: 'Perebutan juara 3 (Bo3)' },
            { jam: '16.00', apa: 'Grand final (Bo5)' },
            { jam: '19.30', apa: 'Penyerahan hadiah' },
        ],
    },
];

/** Satu pertandingan di bracket. Skor null berarti belum dimainkan. */
export interface Pertandingan {
    a: string;
    b: string;
    skorA: number | null;
    skorB: number | null;
}

/** Delapan tim yang lolos fase grup, urut sesuai slot perempat final. */
export const bracket: { qf: Pertandingan[]; sf: Pertandingan[]; final: Pertandingan[] } = {
    qf: [
        { a: 'Lawang Sewu Esports', b: 'Candi Warriors', skorA: 2, skorB: 0 },
        { a: 'Tembalang Rangers', b: 'Banyumanik United', skorA: 1, skorB: 2 },
        { a: 'Simpang Lima Kings', b: 'Tugu Muda Legion', skorA: 2, skorB: 1 },
        { a: 'Ungaran Phoenix', b: 'Pandanaran Wolves', skorA: 0, skorB: 2 },
    ],
    sf: [
        { a: 'Lawang Sewu Esports', b: 'Banyumanik United', skorA: 2, skorB: 1 },
        { a: 'Simpang Lima Kings', b: 'Pandanaran Wolves', skorA: null, skorB: null },
    ],
    final: [{ a: 'Lawang Sewu Esports', b: 'Menunggu semifinal 2', skorA: null, skorB: null }],
};

export const peraturan = [
    {
        judul: 'Roster',
        poin: [
            'Satu tim terdiri dari 5 pemain inti dan maksimal 1 cadangan. Roster dikunci saat technical meeting.',
            'Pemain berusia minimal 15 tahun pada hari pertandingan. Di bawah 18 tahun membawa surat izin orang tua.',
            'Satu pemain hanya boleh terdaftar di satu tim. Nickname dan ID in-game harus sama dengan yang didaftarkan.',
        ],
    },
    {
        judul: 'Pertandingan',
        poin: [
            'Mode Custom Draft Pick, server Asia. Tim diberi waktu 10 menit sejak dipanggil; lewat dari itu dianggap walkover.',
            'Pause maksimal 2 kali per game, masing-masing 3 menit, dan hanya untuk kendala teknis.',
            'Game yang terputus sebelum menit 5 diulang. Setelah itu keputusan wasit mengacu pada kondisi terakhir.',
        ],
    },
    {
        judul: 'Perangkat',
        poin: [
            'Peserta memakai perangkat sendiri. Panitia menyediakan colokan listrik dan koneksi kabel LAN melalui adaptor.',
            'Aplikasi pihak ketiga yang mengubah tampilan atau data game dilarang. Panitia berhak memeriksa perangkat.',
        ],
    },
    {
        judul: 'Sportivitas dan sanksi',
        poin: [
            'Ejekan bernada SARA, ancaman, atau perusakan properti berujung diskualifikasi tanpa pengembalian biaya.',
            'Keberatan atas hasil disampaikan kapten ke wasit paling lambat 10 menit setelah game berakhir.',
            'Keputusan panitia bersifat final.',
        ],
    },
];

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

export const foto = {
    /** Foto netral tanpa logo merek; ganti dengan foto acara Anda sendiri. */
    hero: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f',
    arena: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f',
};

/** URL foto Unsplash dengan ukuran yang pas untuk tempat tampilnya. */
export const img = (url: string, w: number, h?: number) =>
    `${url}?w=${w}${h ? `&h=${h}&fit=crop` : ''}&q=75&auto=format`;
