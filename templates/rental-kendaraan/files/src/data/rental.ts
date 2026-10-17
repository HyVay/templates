/**
 * Data rental. Ganti di sini, seluruh halaman ikut berubah.
 * Harga per 24 jam dalam rupiah. `sopir` = harga dengan sopir (sudah termasuk jasa sopir, belum BBM).
 * Setiap unit tampil dengan siluet sesuai `kelas`. Isi `foto` dengan URL foto unit Anda sendiri
 * (rasio 4:3) dan siluet otomatis diganti foto.
 */
export const rental = {
    nama: 'Rental Andalan Bali',
    tagline: 'Sewa mobil dan motor di Denpasar, antar-jemput bandara 24 jam',
    deskripsi:
        'Sepuluh unit milik sendiri, bukan titipan. Unit dicuci dan dicek sebelum serah terima, dilengkapi STNK aktif dan asuransi. Antar-jemput ke Bandara Ngurah Rai, hotel, atau pelabuhan tanpa biaya tambahan di area Denpasar, Kuta, dan Sanur.',
    kota: 'Denpasar',
    sejak: 2015,
    telepon: '6281234567890',
    alamat: 'Jl. Tukad Badung No. 17, Renon, Denpasar',
    jam: 'Setiap hari, 06.00–22.00 WITA · serah terima bandara 24 jam dengan janji',
    areaAntar: ['Bandara Ngurah Rai', 'Kuta, Legian, Seminyak', 'Sanur', 'Denpasar kota', 'Ubud (tambah Rp 100.000)'],
    deposit: 'Deposit Rp 500.000 untuk mobil dan Rp 200.000 untuk motor, dikembalikan saat unit kembali',
    bbm: 'Unit diserahkan dengan BBM sesuai indikator, dikembalikan dengan jumlah yang sama',
    overtime: 'Keterlambatan dihitung Rp 25.000 per jam, lebih dari 5 jam dihitung satu hari',
};

export type Jenis = 'Mobil' | 'Motor';
export type Kelas = 'Hatchback' | 'MPV' | 'SUV' | 'Van' | 'Skuter';

export interface Unit {
    slug: string;
    nama: string;
    jenis: Jenis;
    tahun: number;
    transmisi: 'Manual' | 'Matic';
    /** Kapasitas penumpang */
    kursi: number;
    lepasKunci: number;
    /** 0 = tidak tersedia dengan sopir */
    sopir: number;
    catatan: string;
    /** Bentuk siluet bila belum ada foto */
    kelas: Kelas;
    /** URL foto unit sendiri (4:3). Kosongkan untuk memakai siluet. */
    foto?: string;
    tersedia: boolean;
}

export const unit: Unit[] = [
    { slug: 'avanza', nama: 'Toyota Avanza', jenis: 'Mobil', tahun: 2022, transmisi: 'Manual', kursi: 7, lepasKunci: 300000, sopir: 500000, catatan: 'Paling sering disewa keluarga. Bagasi cukup untuk 3 koper besar.', kelas: 'MPV', tersedia: true },
    { slug: 'brio', nama: 'Honda Brio', jenis: 'Mobil', tahun: 2023, transmisi: 'Matic', kursi: 5, lepasKunci: 275000, sopir: 475000, catatan: 'Irit dan mudah parkir di gang Seminyak dan Canggu.', kelas: 'Hatchback', tersedia: true },
    { slug: 'xpander', nama: 'Mitsubishi Xpander', jenis: 'Mobil', tahun: 2022, transmisi: 'Matic', kursi: 7, lepasKunci: 350000, sopir: 550000, catatan: 'Kabin lega, AC dua baris. Cocok untuk perjalanan ke Kintamani dan Bedugul.', kelas: 'MPV', tersedia: true },
    { slug: 'innova', nama: 'Toyota Innova Reborn', jenis: 'Mobil', tahun: 2021, transmisi: 'Matic', kursi: 7, lepasKunci: 450000, sopir: 650000, catatan: 'Pilihan untuk rombongan 6 orang dengan koper. Diesel, bertenaga di tanjakan.', kelas: 'MPV', tersedia: true },
    { slug: 'hrv', nama: 'Honda HR-V', jenis: 'Mobil', tahun: 2023, transmisi: 'Matic', kursi: 5, lepasKunci: 500000, sopir: 700000, catatan: 'Unit terbaru di armada. Kamera parkir dan Apple CarPlay.', kelas: 'SUV', tersedia: false },
    { slug: 'hiace', nama: 'Toyota Hiace Commuter', jenis: 'Mobil', tahun: 2020, transmisi: 'Manual', kursi: 14, lepasKunci: 0, sopir: 1100000, catatan: 'Hanya dengan sopir. Untuk rombongan kantor dan tur satu hari.', kelas: 'Van', tersedia: true },
    { slug: 'scoopy', nama: 'Honda Scoopy', jenis: 'Motor', tahun: 2023, transmisi: 'Matic', kursi: 2, lepasKunci: 75000, sopir: 0, catatan: 'Ringan, bagasi muat helm. Termasuk 2 helm dan jas hujan.', kelas: 'Skuter', tersedia: true },
    { slug: 'vario', nama: 'Honda Vario 160', jenis: 'Motor', tahun: 2023, transmisi: 'Matic', kursi: 2, lepasKunci: 85000, sopir: 0, catatan: 'Tenaga cukup untuk berboncengan ke Uluwatu.', kelas: 'Skuter', tersedia: true },
    { slug: 'nmax', nama: 'Yamaha NMAX', jenis: 'Motor', tahun: 2022, transmisi: 'Matic', kursi: 2, lepasKunci: 110000, sopir: 0, catatan: 'Nyaman untuk jarak jauh. Ban lebar, rem ABS.', kelas: 'Skuter', tersedia: true },
    { slug: 'pcx', nama: 'Honda PCX 160', jenis: 'Motor', tahun: 2023, transmisi: 'Matic', kursi: 2, lepasKunci: 120000, sopir: 0, catatan: 'Jok lebar, bagasi 30 liter. Favorit untuk sewa mingguan.', kelas: 'Skuter', tersedia: true },
];

export const syarat = [
    { judul: 'KTP dan SIM yang masih berlaku', isi: 'SIM A untuk mobil, SIM C untuk motor. Wisatawan asing membawa paspor dan SIM internasional. Dokumen difoto saat serah terima, tidak ditahan.' },
    { judul: 'Usia minimal 21 tahun', isi: 'Untuk sewa lepas kunci. Sewa dengan sopir tidak ada batas usia.' },
    { judul: 'Deposit', isi: rental.deposit + '. Bisa tunai atau transfer.' },
    { judul: 'Bahan bakar', isi: rental.bbm + '. Selisih dihitung sesuai harga SPBU.' },
    { judul: 'Keterlambatan', isi: rental.overtime + '. Kabari lewat WhatsApp bila terlambat, kami jadwalkan ulang.' },
    { judul: 'Pemakaian', isi: 'Hanya di Pulau Bali. Tidak untuk balapan, angkutan barang berat, atau disewakan lagi.' },
    { judul: 'Kerusakan dan kehilangan', isi: 'Lecet kecil ditanggung asuransi dengan own risk Rp 300.000. Kehilangan kunci Rp 500.000. Kecelakaan dilaporkan dalam 1 jam.' },
    { judul: 'Pembatalan', isi: 'Gratis sampai 24 jam sebelum jadwal. Kurang dari itu, DP hangus.' },
];

export const foto = {
    hero: 'https://images.unsplash.com/photo-1583395145517-1e3177037600?w=2000&q=75&auto=format',
    /** Jalan raya Bali dengan Gunung Agung (potret 4:5) */
    jalan: 'https://images.unsplash.com/photo-1713586861139-2751d53bb0c2?w=900&q=75&auto=format',
};

export const rupiah = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
