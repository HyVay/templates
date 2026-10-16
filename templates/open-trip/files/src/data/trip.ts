/**
 * Data penyelenggara dan paket trip. Ganti di sini, seluruh halaman ikut berubah.
 * Harga per orang dalam rupiah. Tanggal keberangkatan ditulis ISO (YYYY-MM-DD) agar bisa diurutkan.
 */
export const travel = {
    nama: 'Lintas Trip',
    tagline: 'Open trip dari Jakarta ke timur Indonesia, rombongan kecil maksimal 14 orang',
    deskripsi:
        'Kami menjalankan open trip sejak 2018 dengan tour leader tetap dan mitra lokal di tiap destinasi. Rombongan kecil supaya itinerary tidak terburu-buru, dan harga sudah termasuk semua yang tertulis, tanpa biaya tersembunyi di lokasi.',
    kota: 'Jakarta',
    sejak: 2018,
    telepon: '6281234567890',
    alamat: 'Jl. Tebet Timur Dalam Raya No. 5, Jakarta Selatan',
    jam: 'Senin - Sabtu, 09.00 - 18.00 WIB',
    dp: 'DP 30% saat booking, pelunasan paling lambat 14 hari sebelum keberangkatan',
    pembatalan: [
        { kapan: 'Lebih dari 30 hari sebelum berangkat', potongan: 'DP dikembalikan penuh, dipotong biaya tiket yang sudah terbit' },
        { kapan: '15 - 30 hari sebelum berangkat', potongan: 'DP hangus, pelunasan dikembalikan' },
        { kapan: 'Kurang dari 14 hari', potongan: 'Tidak ada pengembalian, kursi bisa dialihkan ke orang lain' },
    ],
};

export interface Keberangkatan {
    tanggal: string;
    sisa: number;
}

export interface Paket {
    slug: string;
    nama: string;
    destinasi: string;
    durasi: string;
    harga: number;
    kuota: number;
    meetingPoint: string;
    ringkas: string;
    foto: string;
    keberangkatan: Keberangkatan[];
    itinerary: { hari: string; judul: string; isi: string }[];
    termasuk: string[];
    tidakTermasuk: string[];
}

export const paket: Paket[] = [
    {
        slug: 'labuan-bajo',
        nama: 'Labuan Bajo 3D2N',
        destinasi: 'Flores, NTT',
        durasi: '3 hari 2 malam',
        harga: 2850000,
        kuota: 14,
        meetingPoint: 'Bandara Komodo, Labuan Bajo, pukul 11.00 WITA',
        ringkas: 'Sailing kapal kayu ke Padar, Pink Beach, dan Pulau Komodo. Dua malam di hotel, bukan di kapal.',
        foto: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=1200&q=80',
        keberangkatan: [
            { tanggal: '2026-11-13', sisa: 4 },
            { tanggal: '2026-12-18', sisa: 9 },
            { tanggal: '2027-01-22', sisa: 14 },
        ],
        itinerary: [
            { hari: 'Hari 1', judul: 'Tiba di Labuan Bajo', isi: 'Jemput di bandara, makan siang, sunset di Bukit Sylvia, makan malam seafood di Kampung Ujung.' },
            { hari: 'Hari 2', judul: 'Sailing seharian', isi: 'Berangkat 05.30. Trekking Padar, snorkeling Pink Beach, melihat komodo di Loh Buaya, Manta Point, kembali sore.' },
            { hari: 'Hari 3', judul: 'Goa Batu Cermin & pulang', isi: 'Sarapan, Goa Batu Cermin, belanja oleh-oleh, antar ke bandara untuk penerbangan setelah pukul 13.00.' },
        ],
        termasuk: ['Hotel 2 malam (twin share)', 'Kapal kayu private rombongan', 'Tiket masuk Taman Nasional Komodo', 'Makan 3x sehari sesuai program', 'Tour leader dan ranger', 'Alat snorkeling'],
        tidakTermasuk: ['Tiket pesawat Jakarta - Labuan Bajo PP', 'Pengeluaran pribadi dan tip', 'Kamar single (tambah Rp 600.000)'],
    },
    {
        slug: 'bromo-ijen',
        nama: 'Bromo - Ijen 3D2N',
        destinasi: 'Jawa Timur',
        durasi: '3 hari 2 malam',
        harga: 1650000,
        kuota: 14,
        meetingPoint: 'Stasiun Malang, pukul 13.00 WIB',
        ringkas: 'Sunrise Bromo dari Penanjakan, lalu blue fire Kawah Ijen dini hari. Dua malam di homestay pegunungan.',
        foto: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80',
        keberangkatan: [
            { tanggal: '2026-11-06', sisa: 2 },
            { tanggal: '2026-11-27', sisa: 7 },
            { tanggal: '2026-12-11', sisa: 12 },
        ],
        itinerary: [
            { hari: 'Hari 1', judul: 'Malang - Tumpang - Cemoro Lawang', isi: 'Makan siang di Malang, perjalanan jeep ke Cemoro Lawang, istirahat sore, briefing.' },
            { hari: 'Hari 2', judul: 'Sunrise Bromo, lanjut Banyuwangi', isi: 'Berangkat 03.00. Penanjakan, kawah Bromo, Pasir Berbisik, Bukit Teletubbies. Siang perjalanan ke Banyuwangi, tidur sore.' },
            { hari: 'Hari 3', judul: 'Blue fire Ijen', isi: 'Berangkat 00.30. Trekking 1,5 jam, blue fire, sunrise di bibir kawah, turun pukul 08.00, antar ke Stasiun Banyuwangi.' },
        ],
        termasuk: ['Jeep Bromo dan transport Malang - Banyuwangi', 'Homestay 2 malam', 'Tiket masuk Bromo dan Ijen', 'Masker gas Ijen', 'Makan 2x sehari', 'Tour leader'],
        tidakTermasuk: ['Transport ke Malang dan dari Banyuwangi', 'Sewa jaket dan senter', 'Pengeluaran pribadi'],
    },
    {
        slug: 'karimunjawa',
        nama: 'Karimunjawa 3D2N',
        destinasi: 'Jepara, Jawa Tengah',
        durasi: '3 hari 2 malam',
        harga: 1250000,
        kuota: 12,
        meetingPoint: 'Pelabuhan Kartini Jepara, pukul 07.00 WIB',
        ringkas: 'Island hopping ke Menjangan Kecil, Cemara Besar, dan penangkaran hiu. Snorkeling di tiga titik, sunset di Tanjung Gelam.',
        foto: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
        keberangkatan: [
            { tanggal: '2026-11-20', sisa: 6 },
            { tanggal: '2026-12-04', sisa: 12 },
            { tanggal: '2027-01-15', sisa: 12 },
        ],
        itinerary: [
            { hari: 'Hari 1', judul: 'Menyeberang & Tanjung Gelam', isi: 'Kapal cepat 2 jam, check-in homestay, makan siang, sunset di Pantai Tanjung Gelam.' },
            { hari: 'Hari 2', judul: 'Island hopping', isi: 'Snorkeling Menjangan Kecil, penangkaran hiu, makan siang ikan bakar di Cemara Besar, Pulau Gosong.' },
            { hari: 'Hari 3', judul: 'Bukit Love & pulang', isi: 'Sarapan, Bukit Love, oleh-oleh, kapal cepat pukul 11.00 ke Jepara.' },
        ],
        termasuk: ['Kapal cepat Jepara - Karimunjawa PP', 'Homestay 2 malam', 'Kapal island hopping dan alat snorkeling', 'Makan 3x sehari', 'Dokumentasi underwater', 'Tour leader'],
        tidakTermasuk: ['Transport Jakarta - Jepara', 'Pengeluaran pribadi', 'Asuransi perjalanan'],
    },
    {
        slug: 'belitung',
        nama: 'Belitung 3D2N',
        destinasi: 'Bangka Belitung',
        durasi: '3 hari 2 malam',
        harga: 1950000,
        kuota: 14,
        meetingPoint: 'Bandara H.A.S. Hanandjoeddin, Tanjung Pandan, pukul 09.00 WIB',
        ringkas: 'Pantai Tanjung Tinggi dengan batu granit raksasa, hopping ke Pulau Lengkuas dan mercusuarnya, Danau Kaolin.',
        foto: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
        keberangkatan: [
            { tanggal: '2026-12-25', sisa: 5 },
            { tanggal: '2027-02-12', sisa: 14 },
        ],
        itinerary: [
            { hari: 'Hari 1', judul: 'Tanjung Pandan & Tanjung Tinggi', isi: 'Jemput bandara, Danau Kaolin, makan siang mie Belitung, sore di Pantai Tanjung Tinggi.' },
            { hari: 'Hari 2', judul: 'Hopping Pulau Lengkuas', isi: 'Pulau Batu Berlayar, Pulau Pasir, mercusuar Lengkuas, snorkeling, makan siang di Pulau Kepayang.' },
            { hari: 'Hari 3', judul: 'Kota & pulang', isi: 'Museum Kata, kopi di warung Kong Djie, antar bandara.' },
        ],
        termasuk: ['Hotel 2 malam', 'Mobil dan kapal hopping', 'Tiket masuk', 'Makan 3x sehari', 'Tour leader'],
        tidakTermasuk: ['Tiket pesawat PP', 'Pengeluaran pribadi'],
    },
    {
        slug: 'dieng',
        nama: 'Dieng 2D1N',
        destinasi: 'Wonosobo, Jawa Tengah',
        durasi: '2 hari 1 malam',
        harga: 850000,
        kuota: 14,
        meetingPoint: 'Kantor Lintas Trip, Tebet, pukul 21.00 WIB (berangkat malam)',
        ringkas: 'Sunrise di Bukit Sikunir, Telaga Warna, Kawah Sikidang, dan Candi Arjuna. Berangkat malam dari Jakarta dengan bus kecil.',
        foto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
        keberangkatan: [
            { tanggal: '2026-11-14', sisa: 0 },
            { tanggal: '2026-11-28', sisa: 8 },
            { tanggal: '2026-12-12', sisa: 14 },
        ],
        itinerary: [
            { hari: 'Hari 1', judul: 'Jakarta - Dieng', isi: 'Berangkat 21.00 malam sebelumnya. Tiba pagi, sarapan, Telaga Warna, Kawah Sikidang, Candi Arjuna, istirahat di homestay.' },
            { hari: 'Hari 2', judul: 'Sikunir & pulang', isi: 'Berangkat 03.30 ke Sikunir, sunrise, sarapan mie ongklok, kebun carica, perjalanan pulang, tiba Jakarta malam.' },
        ],
        termasuk: ['Bus kecil Jakarta - Dieng PP', 'Homestay 1 malam', 'Tiket masuk semua objek', 'Makan 3x', 'Tour leader'],
        tidakTermasuk: ['Pengeluaran pribadi', 'Sewa jaket'],
    },
];

export const foto = {
    hero: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=1600&q=80',
    tentang: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=1200&q=80',
};

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
/** "2026-11-13" → "13 Nov 2026" */
export const tanggalPendek = (iso: string) => {
    const [y, m, d] = iso.split('-').map(Number);
    return `${d} ${bulan[m - 1]} ${y}`;
};
