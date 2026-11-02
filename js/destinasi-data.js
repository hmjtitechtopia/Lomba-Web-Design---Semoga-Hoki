
const destinations = {
  tegallalang: {
    name: 'Tegallalang',
    region: 'Gianyar',
    category: 'Alam',
    badge: 'Alam & sawah',
    image: 'tegallalang.jpg',
    photographer: 'Tom Fisk',
    description: 'Sawah berundak, udara sejuk, dan jalan kecil untuk menikmati sisi tenang Bali.',
    detail:
      'Nikmati bentang sawah dari jalur yang dibuka untuk pengunjung. Luangkan waktu berjalan pelan dan menghormati kegiatan petani. Pastikan kondisi jalur dan akses sebelum berangkat.',
    tips: [
      'Gunakan alas kaki yang nyaman untuk jalur sawah.',
      'Minta izin sebelum memotret kegiatan warga.',
      'Bawa air minum dan jaga kebersihan jalur.',
    ],
  },
  melasti: {
    name: 'Pantai Melasti',
    region: 'Badung',
    category: 'Pantai',
    badge: 'Pantai & pasir putih',
    image: 'melasti.webp',
    photographer: 'Kseniya Kobi',
    description: 'Tebing kapur, pasir putih, dan laut biru di sisi selatan Bali.',
    detail:
      'Sisihkan waktu untuk menikmati pesisir dan pemandangan tebing. Perhatikan penanda keselamatan, kondisi ombak, serta arahan petugas setempat sebelum beraktivitas di air.',
    tips: [
      'Perhatikan kondisi ombak dan arahan keselamatan.',
      'Gunakan pelindung matahari.',
      'Bawa kembali sampah setelah menikmati pantai.',
    ],
  },
  'ulun-danu': {
    name: 'Pura Ulun Danu',
    region: 'Tabanan',
    category: 'Budaya',
    badge: 'Budaya & danau',
    image: 'ulun-danu.jpg',
    photographer: 'Musmualim',
    description: 'Kenali suasana pura dan bentang Danau Beratan di dataran tinggi Bedugul.',
    detail:
      'Ulun Danu Beratan merupakan tempat ibadah. Nikmati arsitektur dan suasana danau sambil mengikuti batas area pengunjung dan menghormati aktivitas keagamaan.',
    tips: [
      'Berpakaian sopan dan ikuti ketentuan tempat ibadah.',
      'Jaga ketenangan saat berlangsung kegiatan keagamaan.',
      'Siapkan lapisan pakaian untuk udara dataran tinggi.',
    ],
  },
  'nusa-penida': {
    name: 'Nusa Penida',
    region: 'Klungkung',
    category: 'Pantai',
    badge: 'Pantai & petualangan',
    image: 'nusa-penida.jpg',
    photographer: 'Saksham Vikram',
    description: 'Tebing hijau dan laut biru yang membentuk pemandangan khas Kelingking.',
    detail:
      'Perjalanan ke Nusa Penida membutuhkan penyeberangan dan perjalanan darat. Beri waktu yang cukup, cek kondisi laut dan transportasi, serta nikmati pemandangan dari area yang aman.',
    tips: [
      'Periksa jadwal penyeberangan dan kondisi cuaca.',
      'Beri jarak aman dari tepian tebing.',
      'Sesuaikan jumlah tujuan dengan waktu perjalanan darat.',
    ],
  },
  batur: {
    name: 'Kintamani',
    region: 'Bangli',
    category: 'Alam',
    badge: 'Danau & pegunungan',
    image: 'batur.webp',
    photographer: 'Roselène de Koning',
    description:
      'Bentang pegunungan, danau, dan udara pagi untuk menutup perjalanan dengan tenang.',
    detail:
      'Nikmati panorama dari tempat yang dibuka bagi pengunjung. Jika merencanakan pendakian, periksa status akses, cuaca, dan kebutuhan pendampingan setempat terlebih dahulu.',
    tips: [
      'Bawa jaket untuk udara pagi.',
      'Periksa kondisi cuaca sebelum berangkat.',
      'Atur waktu istirahat dan perjalanan pulang.',
    ],
  },
  waterfall: {
    name: 'Air terjun Bali',
    region: 'Bali',
    category: 'Alam',
    badge: 'Hutan & air terjun',
    image: 'waterfall.webp',
    photographer: 'Gladys Lane Gairanan',
    description: 'Temukan suasana hutan, aliran air, dan jalur hijau di Bali.',
    detail:
      'Foto ini menjadi inspirasi wisata air terjun di Bali. Pilih lokasi tujuan yang jelas sebelum berangkat dan cek akses setempat. Kondisi jalur, kedalaman air, dan aliran dapat berubah setelah hujan.',
    tips: [
      'Pilih tujuan dan cek akses sebelum berangkat.',
      'Gunakan alas kaki dengan cengkeraman baik.',
      'Ikuti batas aman dan arahan pengelola.',
    ],
  },
  uluwatu: {
    name: 'Pura Uluwatu',
    region: 'Badung',
    category: 'Budaya',
    badge: 'Pura & tebing',
    image: 'uluwatu.webp',
    photographer: 'Tom Fisk',
    description: 'Suasana pura dan pemandangan pesisir di atas tebing Bali Selatan.',
    detail:
      'Hormati kegiatan ibadah, ikuti batas area yang dapat dikunjungi, dan jaga barang bawaan saat menikmati pemandangan pesisir.',
    tips: [
      'Ikuti aturan berpakaian di kawasan pura.',
      'Jaga barang bawaan.',
      'Tetap berada di jalur dan area pengunjung.',
    ],
  },
};

const dayDescriptions = [
  {
    id: 'tegallalang',
    title: 'Ubud & hijaunya sawah',
    copy: 'Jelajahi Tegallalang dan nikmati suasana desa di sekitarnya.',
  },
  {
    id: 'ulun-danu',
    title: 'Menepi ke Danau Beratan',
    copy: 'Luangkan waktu di Ulun Danu dan bentang alam Bedugul.',
  },
  {
    id: 'batur',
    title: 'Menyapa pagi Kintamani',
    copy: 'Tutup perjalanan dengan suasana pegunungan dan danau.',
  },
];

const stories = {
  denpasar: {
    title: 'Pagi yang hidup di sudut Denpasar.',
    image: 'bali-daily-life.webp',
    label: 'Kisah keseharian',
    credit: 'Tavip Budiono',
    paragraphs: [
      'Mengenal Bali bisa dimulai dari keseharian: perjalanan menuju pasar, percakapan singkat, dan kegiatan warga yang berlangsung di antara rutinitas. Foto ini mengabadikan sebuah kegiatan persembahan di kawasan pasar Denpasar.',
      'Saat berkunjung, berilah ruang untuk kegiatan warga. Perhatikan sebelum memotret, minta izin bila ingin mengambil potret seseorang, dan ikuti arahan di area ibadah.',
      'Luangkan waktu untuk berjalan pelan. Berbelanja dari pedagang setempat dan menghargai suasana pasar dapat menjadi bagian sederhana dari pengalaman perjalanan.',
    ],
  },
  budaya: {
    title: 'Di balik gerak dan warna.',
    image: 'balinese-dance.webp',
    label: 'Kehidupan & budaya',
    credit: 'Ruyat Supriazi',
    paragraphs: [
      'Tari, busana, dan musik menghadirkan banyak cara untuk mengenali Bali. Dalam pertunjukan, gerak penari dan iringan musik membentuk pengalaman yang mengajak kita memperhatikan detail.',
      'Pilih pertunjukan dengan informasi penyelenggara yang jelas. Ikuti petunjuk penonton, hindari menghalangi pandangan, dan tanyakan aturan memotret.',
      'Sebuah kunjungan akan lebih bermakna ketika kita menyediakan waktu untuk memahami konteks dan menghargai para pelaku seninya.',
    ],
  },
  penida: {
    title: 'Pertama kali ke Nusa Penida.',
    image: 'nusa-penida.jpg',
    label: 'Catatan perjalanan',
    credit: 'Saksham Vikram',
    paragraphs: [
      'Merencanakan kunjungan pertama ke Nusa Penida berarti menyediakan ruang untuk perjalanan itu sendiri: penyeberangan, transportasi darat, dan waktu beristirahat di antara tujuan.',
      'Mulailah dari sedikit tempat yang benar-benar ingin dikunjungi. Periksa cuaca dan jadwal penyeberangan, lalu sesuaikan rencana dengan kondisi di lapangan.',
      'Di kawasan tebing dan pantai, utamakan jalur yang dibuka untuk pengunjung. Menikmati panorama dari tempat yang aman tetap bisa menjadi pengalaman yang berkesan.',
    ],
  },
};

const info = {
  tentang: [
    'Tentang SAKALA',
    'SAKALA mengajak Anda mengenali Bali melalui alam, budaya, dan kesehariannya. Gunakan halaman ini untuk menjelajahi pilihan destinasi dan menyusun inspirasi perjalanan.',
  ],
  kontak: [
    'Hubungi SAKALA',
    'Informasi kontak belum dicantumkan. Sementara itu, Anda dapat menyimpan dan mengunduh rencana perjalanan langsung dari halaman ini.',
  ],
  privasi: [
    'Privasi',
    'Favorit dan rencana perjalanan disimpan secara lokal di browser Anda. Halaman ini tidak mengirim isian perjalanan ke server. Hapus data situs dari pengaturan browser untuk menghapus penyimpanan lokal.',
  ],
  ketentuan: [
    'Tentang informasi perjalanan',
    'Rencana dan catatan di halaman ini merupakan inspirasi perjalanan. Periksa informasi akses, jadwal, harga, dan kondisi setempat sebelum berangkat. Peta bersifat ilustratif dan bukan petunjuk navigasi.',
  ],
};
