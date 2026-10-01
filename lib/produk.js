/* ==========================================================================
   LuxeElectro — toko audio pribadi dengan lini produk sendiri, "Luxe".
   Satu sumber isi untuk beranda, lembar spesifikasi, dan halaman banding.
   Produk, angka, dan harga adalah contoh untuk purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-luxeelectro.vercel.app';

export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

// Spesifikasi dibandingkan per kunci; label & satuan di sini.
export const KOLOM = [
  ['jenis', 'Jenis'],
  ['driver', 'Driver'],
  ['impedansi', 'Impedansi'],
  ['sensitivitas', 'Sensitivitas'],
  ['respons', 'Respons frekuensi'],
  ['koneksi', 'Koneksi'],
  ['berat', 'Berat'],
  ['garansi', 'Garansi'],
];

export const PRODUK = [
  {
    slug: 'luxe-h1',
    kode: 'H1',
    nama: 'Luxe H1',
    kategori: 'Headphone tertutup',
    harga: 2450000,
    ringkas: 'Headphone over-ear tertutup untuk mendengar lama di meja kerja. Bas rapi, vokal di depan, tidak menekan kepala.',
    spek: {
      jenis: 'Over-ear, tertutup',
      driver: 'Dinamis 50 mm, diafragma bio-selulosa',
      impedansi: '32 Ω',
      sensitivitas: '103 dB/mW',
      respons: '10 Hz – 30 kHz',
      koneksi: 'Kabel lepas-pasang 3,5 mm & 4,4 mm',
      berat: '285 g',
      garansi: '2 tahun',
    },
    cocok: ['Bekerja di ruang terbuka', 'Mendengar 3–4 jam tanpa jeda', 'Dipakai langsung dari laptop'],
    kotak: ['Headphone Luxe H1', 'Kabel 3,5 mm (1,8 m)', 'Kabel seimbang 4,4 mm (1,2 m)', 'Adaptor 6,3 mm', 'Kantong kain'],
    // titik kurva respons [Hz, dB relatif] — pengukuran contoh
    kurva: [[20, 4], [50, 5], [100, 4], [300, 1], [1000, 0], [2000, 2], [3000, 4], [5000, 1], [8000, -2], [12000, -1], [20000, -6]],
  },
  {
    slug: 'luxe-e2',
    kode: 'E2',
    nama: 'Luxe E2',
    kategori: 'Earphone in-ear',
    harga: 1350000,
    ringkas: 'Earphone hybrid satu driver dinamis dan satu balanced armature. Kecil di saku, detail di nada tinggi.',
    spek: {
      jenis: 'In-ear (IEM)',
      driver: '1 dinamis 10 mm + 1 balanced armature',
      impedansi: '18 Ω',
      sensitivitas: '108 dB/mW',
      respons: '20 Hz – 40 kHz',
      koneksi: 'Kabel 2-pin 0,78 mm, colokan 3,5 mm',
      berat: '5 g per sisi',
      garansi: '1 tahun',
    },
    cocok: ['Perjalanan dan transportasi umum', 'Panggung atau monitor vokal', 'Ponsel dengan dongle USB-C'],
    kotak: ['Earphone Luxe E2', 'Kabel 2-pin (1,2 m)', '6 pasang ujung silikon', '2 pasang ujung busa', 'Kotak penyimpan'],
    kurva: [[20, 2], [50, 3], [100, 2], [300, 0], [1000, 0], [2000, 3], [3000, 5], [5000, 3], [8000, 2], [12000, 1], [20000, -3]],
  },
  {
    slug: 'luxe-a1',
    kode: 'A1',
    nama: 'Luxe A1',
    kategori: 'DAC & penguat portabel',
    harga: 1150000,
    ringkas: 'DAC dan penguat sebesar korek api. Dicolok ke ponsel atau laptop lewat USB-C, membuat headphone 32–300 Ω bernyanyi.',
    spek: {
      jenis: 'DAC/amp USB-C',
      driver: '—',
      impedansi: 'Keluaran < 1 Ω',
      sensitivitas: '—',
      respons: '20 Hz – 40 kHz (±0,5 dB)',
      koneksi: 'USB-C masuk; 3,5 mm & 4,4 mm keluar',
      berat: '22 g',
      garansi: '2 tahun',
    },
    cocok: ['Headphone berimpedansi tinggi', 'Ponsel tanpa colokan audio', 'Laptop dengan suara berdesis'],
    kotak: ['Luxe A1', 'Kabel USB-C ke USB-C', 'Adaptor USB-C ke USB-A', 'Kantong kulit sintetis'],
    kurva: null,
  },
  {
    slug: 'luxe-s1',
    kode: 'S1',
    nama: 'Luxe S1',
    kategori: 'Speaker meja aktif',
    harga: 3900000,
    ringkas: 'Sepasang speaker aktif untuk meja kerja. Bluetooth untuk ponsel, optik untuk televisi, dan cukup besar untuk kamar.',
    spek: {
      jenis: 'Speaker rak buku aktif, sepasang',
      driver: 'Woofer 4" + tweeter sutra 1"',
      impedansi: '—',
      sensitivitas: '—',
      respons: '55 Hz – 20 kHz',
      koneksi: 'Bluetooth 5.3, optik, RCA',
      berat: '4,8 kg (sepasang)',
      garansi: '2 tahun',
    },
    cocok: ['Meja kerja dan kamar tidur', 'Televisi tanpa soundbar', 'Musik dari ponsel'],
    kotak: ['Speaker aktif dan pasif', 'Kabel antar-speaker 3 m', 'Kabel optik', 'Remot'],
    kurva: [[20, -12], [50, -3], [100, 1], [300, 0], [1000, 0], [2000, 1], [3000, 1], [5000, 0], [8000, -1], [12000, -1], [20000, -4]],
  },
];

export const produkBySlug = (s) => PRODUK.find((p) => p.slug === s);

export const LAYANAN = [
  ['Uji dengar 14 hari', 'Bawa pulang, dengar di rumah. Bila tidak cocok, kembalikan dalam kondisi lengkap — uang kembali penuh.'],
  ['Servis di toko', 'Ganti bantalan telinga, kabel, atau ujung earphone di tempat. Suku cadang tersedia lima tahun.'],
  ['Spesifikasi lengkap', 'Setiap angka di lembar spesifikasi bisa Anda tanyakan cara mengukurnya. Tidak ada "suara premium" tanpa angka.'],
];

export const PERLINDUNGAN = [
  { nama: 'Dasar', harga: 199000, dapat: ['Garansi tambahan 6 bulan', 'Konsultasi lewat obrolan', 'Pembersihan sekali'] },
  { nama: 'Plus', harga: 499000, unggulan: true, dapat: ['Garansi tambahan 1 tahun', 'Ganti bantalan & kabel gratis sekali', 'Servis prioritas'] },
  { nama: 'Penuh', harga: 999000, dapat: ['Garansi tambahan 2 tahun', 'Ganti unit bila rusak karena jatuh (sekali)', 'Unit pinjaman selama servis'] },
];

export const FAQ = [
  { t: 'Apakah saya bisa mencoba sebelum membeli?', j: 'Bisa, di toko kami atau lewat uji dengar 14 hari di rumah. Unit uji dengar dikirim dengan deposit penuh yang dikembalikan bila unit dikembalikan lengkap.' },
  { t: 'Apa arti angka impedansi dan sensitivitas?', j: 'Impedansi menunjukkan seberapa "berat" perangkat untuk digerakkan; sensitivitas menunjukkan seberapa keras bunyinya pada daya yang sama. Luxe H1 (32 Ω, 103 dB/mW) cukup keras langsung dari laptop.' },
  { t: 'Apakah Luxe A1 diperlukan untuk Luxe H1?', j: 'Tidak wajib. A1 berguna bila ponsel Anda tidak punya colokan audio, atau bila suara laptop terdengar berdesis.' },
  { t: 'Kurva respons frekuensinya diukur bagaimana?', j: 'Di purwarupa ini kurvanya adalah contoh. Pada produk sungguhan, kurva diukur dengan rig telinga buatan dan dicantumkan kondisi pengukurannya.' },
];
