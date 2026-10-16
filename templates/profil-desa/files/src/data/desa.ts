/**
 * Semua teks dan angka desa ada di sini. Ganti nilai di file ini,
 * seluruh halaman ikut berubah. Data di bawah fiktif.
 */
export const desa = {
    nama: 'Desa Kembang Arum',
    kecamatan: 'Kecamatan Salam',
    kabupaten: 'Kabupaten Magelang',
    provinsi: 'Jawa Tengah',
    tagline: 'Desa di kaki Merapi dengan sawah terasering, curug, dan kopi yang disangrai warga sendiri.',
    deskripsi:
        'Kembang Arum berjarak 25 menit dari Candi Borobudur. Sejak 2019 warga mengelola wisata desa secara gotong royong: tiket, parkir, dan homestay dikelola BUMDes, hasilnya kembali ke kas dusun.',
    alamatKantor: 'Jl. Raya Salam Km 3, Dusun Kembang, Kembang Arum',
    jamKantor: 'Senin - Jumat, 08.00 - 15.00 WIB (Jumat sampai 11.00)',
    telepon: '6281234567890',
    maps: 'https://maps.google.com/?q=Kembang+Arum+Magelang',
    kodeDesa: '33.08.14.2007',
};

export const angka = [
    { label: 'Luas wilayah', nilai: '412', satuan: 'ha' },
    { label: 'Penduduk', nilai: '3.218', satuan: 'jiwa' },
    { label: 'Dusun', nilai: '4', satuan: '21 RT' },
    { label: 'Ketinggian', nilai: '620', satuan: 'mdpl' },
];

export const dusun = [
    { nama: 'Kembang', kk: 231, catatan: 'Pusat desa, kantor, pasar pagi' },
    { nama: 'Arum Kidul', kk: 187, catatan: 'Sawah terasering, jalur sepeda' },
    { nama: 'Arum Lor', kk: 164, catatan: 'Curug Sewu, kebun kopi' },
    { nama: 'Gondang', kk: 142, catatan: 'Bukit sunrise, homestay' },
];

export interface Destinasi {
    slug: string;
    nama: string;
    ringkas: string;
    deskripsi: string;
    tiket: string;
    jam: string;
    foto: string;
    alt: string;
}

export const destinasi: Destinasi[] = [
    {
        slug: 'sawah-terasering',
        nama: 'Sawah Terasering Arum Kidul',
        ringkas: 'Jalur setapak 2,4 km di antara petak sawah bertingkat, paling hijau Januari - Maret.',
        deskripsi:
            'Petak sawah dibuka sebagai jalur jalan kaki dan sepeda sejak 2019. Ada tiga gazebo bambu untuk istirahat dan warung Bu Sri di ujung jalur yang menjual pecel dan wedang jahe. Pemandu dari karang taruna bisa dipesan di loket.',
        tiket: 'Rp 10.000 / orang, parkir motor Rp 2.000',
        jam: 'Setiap hari, 06.00 - 17.30 WIB',
        foto: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80',
        alt: 'Petak sawah terasering hijau dengan pohon kelapa',
    },
    {
        slug: 'curug-sewu',
        nama: 'Curug Sewu',
        ringkas: 'Air terjun 18 meter di ujung kebun kopi Arum Lor, 20 menit jalan kaki dari parkiran.',
        deskripsi:
            'Jalur menurun melewati kebun kopi warga, licin saat hujan. Di bawah curug ada kolam dangkal yang aman untuk anak dengan pengawasan. Dilarang berenang saat debit tinggi; petugas memasang bendera merah bila jalur ditutup.',
        tiket: 'Rp 7.500 / orang',
        jam: 'Setiap hari, 07.00 - 16.00 WIB (tutup saat hujan deras)',
        foto: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&q=80',
        alt: 'Air terjun di tengah hutan dengan kolam berbatu',
    },
    {
        slug: 'bukit-sunrise',
        nama: 'Bukit Sunrise Gondang',
        ringkas: 'Titik pandang ke arah Borobudur dan Merapi; kabut pagi biasanya terangkat pukul 06.15.',
        deskripsi:
            'Naik 15 menit dari homestay Gondang lewat tangga batu. Warga menyediakan kopi tubruk dan pisang goreng di pos atas. Pengunjung yang menginap di homestay dibangunkan pukul 04.30 dan diantar pemandu.',
        tiket: 'Rp 15.000 / orang, gratis untuk tamu homestay',
        jam: 'Setiap hari, 04.30 - 09.00 WIB',
        foto: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80',
        alt: 'Matahari terbit dengan kabut di atas stupa candi',
    },
];

export const homestay = {
    jumlah: 12,
    harga: 'Rp 150.000 - 250.000 / kamar / malam, termasuk sarapan',
    catatan: 'Semua homestay adalah rumah warga Dusun Gondang. Pemesanan lewat WhatsApp BUMDes.',
};

export const umkm = [
    { nama: 'Kopi Arum Lor', produk: 'Robusta sangrai medium, 200 gr', harga: 'Rp 45.000', pelaku: 'Kelompok Tani Kopi Arum Lor', telepon: '6281234567890' },
    { nama: 'Gula Aren Mbah Karto', produk: 'Gula aren cetak batok, 500 gr', harga: 'Rp 28.000', pelaku: 'Mbah Karto, Dusun Kembang', telepon: '6281234567890' },
    { nama: 'Anyaman Bambu Gondang', produk: 'Besek, tampah, dan tas bambu', harga: 'Rp 15.000 - 120.000', pelaku: 'Kelompok PKK Gondang', telepon: '6281234567890' },
    { nama: 'Keripik Singkong Bu Lastri', produk: 'Keripik singkong balado dan original, 250 gr', harga: 'Rp 18.000', pelaku: 'Bu Lastri, Dusun Arum Kidul', telepon: '6281234567890' },
];

export const perangkat = [
    { jabatan: 'Kepala Desa', nama: 'Suharno' },
    { jabatan: 'Sekretaris Desa', nama: 'Rini Astuti' },
    { jabatan: 'Kaur Keuangan', nama: 'Bambang Priyono' },
    { jabatan: 'Kaur Umum & Perencanaan', nama: 'Dewi Lestari' },
    { jabatan: 'Kasi Pelayanan', nama: 'Agus Widodo' },
];

export const layananSurat = [
    { nama: 'Surat Keterangan Domisili', syarat: ['Fotokopi KTP', 'Fotokopi KK', 'Surat pengantar RT/RW'], waktu: '1 hari kerja', biaya: 'Gratis' },
    { nama: 'Surat Keterangan Usaha', syarat: ['Fotokopi KTP', 'Surat pengantar RT/RW', 'Foto tempat usaha'], waktu: '1 - 2 hari kerja', biaya: 'Gratis' },
    { nama: 'Surat Pengantar KTP / KK', syarat: ['Fotokopi KK lama', 'Surat pengantar RT/RW', 'Dokumen pendukung (akta, buku nikah)'], waktu: '1 hari kerja', biaya: 'Gratis' },
    { nama: 'Surat Keterangan Tidak Mampu', syarat: ['Fotokopi KTP & KK', 'Surat pengantar RT/RW', 'Verifikasi Kasi Pelayanan'], waktu: '2 - 3 hari kerja', biaya: 'Gratis' },
    { nama: 'Surat Keterangan Kematian', syarat: ['Fotokopi KTP almarhum', 'Fotokopi KK', 'Surat keterangan RT'], waktu: 'Hari yang sama', biaya: 'Gratis' },
];

export const pengumuman = [
    {
        tanggal: '12 Oktober 2026',
        judul: 'Penutupan jalur Curug Sewu selama perbaikan tangga',
        isi: 'Tangga batu ruas tengah diperbaiki 14 - 20 Oktober. Jalur dialihkan lewat kebun kopi sisi timur, waktu tempuh bertambah sekitar 10 menit.',
    },
    {
        tanggal: '5 Oktober 2026',
        judul: 'Musyawarah dusun pembahasan RKPDes 2027',
        isi: 'Diadakan di balai tiap dusun pada 19 - 22 Oktober pukul 19.30. Usulan tertulis bisa dititipkan ke ketua RT paling lambat sehari sebelumnya.',
    },
    {
        tanggal: '28 September 2026',
        judul: 'Posyandu balita dan lansia bulan Oktober',
        isi: 'Jadwal: Kembang (6 Okt), Arum Kidul (7 Okt), Arum Lor (8 Okt), Gondang (9 Okt), pukul 08.00 - 11.00 di balai dusun masing-masing.',
    },
];

export const agenda = [
    { tanggal: '19 Okt', kegiatan: 'Musdus Kembang', tempat: 'Balai Dusun Kembang, 19.30' },
    { tanggal: '25 Okt', kegiatan: 'Kerja bakti jalur sawah', tempat: 'Loket Arum Kidul, 06.30' },
    { tanggal: '1 Nov', kegiatan: 'Pasar Minggu Pagi edisi perdana', tempat: 'Lapangan desa, 06.00 - 10.00' },
    { tanggal: '10 Nov', kegiatan: 'Pelatihan homestay bersama Dinas Pariwisata', tempat: 'Balai desa, 09.00' },
];

export const caraKeSana = [
    'Dari Yogyakarta: arah Magelang lewat Jl. Magelang, belok kanan di pertigaan Salam (sekitar 45 menit).',
    'Dari Terminal Magelang: naik angkutan jurusan Salam, turun di pertigaan Kembang Arum, lanjut ojek warga 5 menit.',
    'Bus pariwisata maksimal ukuran sedang; parkir di lapangan desa, lanjut angkutan desa ke lokasi wisata.',
];
