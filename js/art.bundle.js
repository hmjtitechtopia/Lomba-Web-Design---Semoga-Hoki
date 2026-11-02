(() => {

  var dishes = [
    {
      id: "ayambetutu",
      name: "Ayam Betutu",
      description: "Khas Gilimanuk. Ayam kampung bumbu genep utuh kukus panggang 12 jam.",
      tag: "Halal",
      photo: "assets/library/kuliner/ayambetutu.jpg",
      illustPhoto: "assets/eksplorasi/kuliner/betutu_animasi.webp",
      comment: "Bumbu rempahnya meresap sempurna sampai ke tulang!",
      dotColor: "#1F8A63",
      rotation: -4,
      clipClass: "clip-chicken"
    },
    {
      id: "babiguling",
      name: "Babi Guling",
      description: "Khas Gianyar. Babi panggang berbumbu base genep.",
      tag: "Non-halal",
      photo: "assets/eksplorasi/kuliner/babiguling.webp",
      illustPhoto: "assets/eksplorasi/kuliner/babiguling_animasi.webp",
      comment: "Kulitnya renyah garing dengan bumbu base genep gurih!",
      dotColor: "#2169B5",
      rotation: -2,
      clipClass: "clip-circle"
    },
    {
      id: "laklak",
      name: "Jaje Laklak",
      description: "Khas Bali. Kue beras mungil dengan kelapa dan gula merah.",
      tag: "Halal",
      photo: "assets/eksplorasi/kuliner/laklak.jpg",
      illustPhoto: "assets/eksplorasi/kuliner/laklak_animasi.webp",
      comment: "Camilan sore legit dengan juruh gula aren kental.",
      dotColor: "#2169B5",
      rotation: 2,
      clipClass: "clip-circle"
    },
    {
      id: "lawar",
      name: "Lawar Bali",
      description: "Khas Gianyar. Campuran sayur nangka muda, parutan kelapa, dan bumbu base gede.",
      tag: "Non-halal",
      photo: "assets/library/kuliner/lawar.webp",
      illustPhoto: "assets/eksplorasi/kuliner/lawar_animasi.webp",
      comment: "Segar dan renyah, perpaduan bumbu darah dan kelapa yang otentik.",
      dotColor: "#2169B5",
      rotation: 3,
      clipClass: "clip-leaf"
    },
    {
      id: "nasicampur",
      name: "Nasi Campur Bali",
      description: "Khas Denpasar. Nasi hangat dengan sate lilit, ayam suwir, lawar, dan sambal matah.",
      tag: "Halal",
      photo: "assets/library/kuliner/nasicampur.webp",
      illustPhoto: "assets/eksplorasi/kuliner/nasicampur_animasi.webp",
      comment: "Pilihan paling lengkap untuk menikmati aneka lauk Bali sekaligus.",
      dotColor: "#1F8A63",
      rotation: 5,
      clipClass: "clip-circle"
    },
    {
      id: "piesusu",
      name: "Pie Susu",
      description: "Khas Bali. Kue susu renyah, oleh-oleh favorit.",
      tag: "Halal",
      photo: "assets/eksplorasi/kuliner/piesusu.jpg",
      illustPhoto: "assets/eksplorasi/kuliner/piesusu_animasi.webp",
      comment: "Pinggirannya renyah gurih dengan custard susu manis lembut.",
      dotColor: "#FFB04A",
      rotation: -3,
      clipClass: "clip-circle"
    },
    {
      id: "rujakbali",
      name: "Rujak Bali",
      description: "Khas Bali. Buah segar dengan bumbu pedas.",
      tag: "Halal",
      photo: "assets/eksplorasi/kuliner/rujakbali.webp",
      illustPhoto: "assets/eksplorasi/kuliner/rujak_animasi.webp",
      comment: "Kuah pindang pedas asin berpadu dengan buah asam manis.",
      dotColor: "#2169B5",
      rotation: 1,
      clipClass: "clip-leaf"
    },
    {
      id: "satebabi",
      name: "Sate Babi",
      description: "Khas Bali. Sate babi bakar berbumbu.",
      tag: "Non-halal",
      photo: "assets/eksplorasi/kuliner/satebabi.webp",
      illustPhoto: "assets/eksplorasi/kuliner/satebabi_animasi.webp",
      comment: "Daging empuk manis pedas dipanggang di atas arang kelapa.",
      dotColor: "#1F8A63",
      rotation: -1,
      clipClass: "clip-circle"
    },
    {
      id: "satelilit",
      name: "Sate Lilit",
      description: "Khas Klungkung. Ikan tenggiri cincang kelapa parut dililit batang serai.",
      tag: "Halal",
      photo: "assets/library/kuliner/satelilit.webp",
      illustPhoto: "assets/eksplorasi/kuliner/satelilit_animasi.webp",
      comment: "Aroma serai bakarnya sangat harum dan teksturnya empuk.",
      dotColor: "#2169B5",
      rotation: 0,
      clipClass: "clip-circle",
      hasOutline: true,
      hasHeart: true
    },
    {
      id: "tipatcantok",
      name: "Tipat Cantok",
      description: "Khas Bali. Ketupat, sayur, dan bumbu kacang.",
      tag: "Halal",
      photo: "assets/eksplorasi/kuliner/tipatcantok.webp",
      illustPhoto: "assets/eksplorasi/kuliner/tipatcantok_animasi.webp",
      comment: "Kencurnya segar dan bumbu kacangnya gurih medok pas di lidah.",
      dotColor: "#9ACD5A",
      rotation: 4,
      clipClass: "clip-circle"
    }
  ];
  var restaurants = [

    {
      dishId: "ayambetutu",
      photoId: "ayambetutu_1",
      name: "Ayam Betutu Khas Gilimanuk",
      halal: "Halal",
      status: "Halal",
      area: "Gilimanuk",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayam%20Betutu%20Khas%20Gilimanuk%20Bali",
      photo: "assets/eksplorasi/kuliner/ayambetutu_1.jpeg",
      comment: "Kuah betutunya gurih pedas nendang, disajikan lengkap dengan plecing kangkung.",
      dotColor: "#1F8A63",
      serves: ["ayambetutu"]
    },
    {
      dishId: "ayambetutu",
      photoId: "ayambetutu_2",
      name: "Ayam Betutu Men Tempeh",
      halal: "Halal",
      status: "Halal",
      area: "Gilimanuk",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayam%20Betutu%20Men%20Tempeh%20Bali",
      photo: "assets/eksplorasi/kuliner/ayambetutu_2.webp",
      comment: "Pelopor ayam betutu legendaris dengan rempah pedas mantap sejak 1978.",
      dotColor: "#1F8A63",
      serves: ["ayambetutu"]
    },
    {
      dishId: "ayambetutu",
      photoId: "ayambetutu_3",
      name: "Ayam Betutu Ibu Nia",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayam%20Betutu%20Ibu%20Nia%20Bali",
      photo: "assets/eksplorasi/kuliner/ayambetutu_3.webp",
      comment: "Dagingnya empuk meresap dengan sambal matah segar berlimpah.",
      dotColor: "#2169B5",
      serves: ["ayambetutu"]
    },
    {
      dishId: "ayambetutu",
      photoId: "ayambetutu_4",
      name: "Ayam Betutu Pak Man",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Kuta",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.4,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayam%20Betutu%20Pak%20Man%20Bali",
      photo: "assets/eksplorasi/kuliner/ayambetutu_4.jpeg",
      comment: "Pilihan favorit di Kuta dengan porsi kenyang dan kuah kaldu kaya rasa.",
      dotColor: "#2169B5",
      serves: ["ayambetutu"]
    },

    {
      dishId: "babiguling",
      photoId: "babiguling_1",
      name: "Warung Babi Guling Dayu Kencani",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Gianyar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Babi%20Guling%20Dayu%20Kencani%20Bali",
      photo: "assets/eksplorasi/kuliner/babiguling_1.jpg",
      comment: "Kulit krispi dengan bumbu base genep otentik khas Gianyar.",
      dotColor: "#2169B5",
      serves: ["babiguling"]
    },
    {
      dishId: "babiguling",
      photoId: "babiguling_2",
      name: "Warung Babi Guling Pande Egi",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Gianyar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.8,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Babi%20Guling%20Pande%20Egi%20Bali",
      photo: "assets/eksplorasi/kuliner/babiguling_2.webp",
      comment: "Makan di tengah pemandangan sawah asri dengan sup balung hangat gurih.",
      dotColor: "#1F8A63",
      serves: ["babiguling"]
    },
    {
      dishId: "babiguling",
      photoId: "babiguling_3",
      name: "Babi Guling Gung Cung",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Ubud",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Babi%20Guling%20Gung%20Cung%20Bali",
      photo: "assets/eksplorasi/kuliner/babiguling_3.jpeg",
      comment: "Rasa rempahnya medok dan dagingnya lembut juicy.",
      dotColor: "#2169B5",
      serves: ["babiguling"]
    },
    {
      dishId: "babiguling",
      photoId: "babiguling_4",
      name: "Babi Guling Pak Melen",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Kuta",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Babi%20Guling%20Pak%20Melen%20Bali",
      photo: "assets/eksplorasi/kuliner/babiguling_4.webp",
      comment: "Sate lilit babi dan kuah bumbunya selalu bikin ketagihan.",
      dotColor: "#1F8A63",
      serves: ["babiguling"]
    },

    {
      dishId: "laklak",
      photoId: "laklak_1",
      name: "Laklak Mek Mangku",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Ubud",
      hours: "06:00 - 14:00 WITA",
      price: "$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Laklak%20Mek%20Mangku%20Bali",
      photo: "assets/eksplorasi/kuliner/laklak_1.jpeg",
      comment: "Dipanggang di atas tungku tanah liat tradisional dengan kayu bakar.",
      dotColor: "#9ACD5A",
      serves: ["laklak"]
    },
    {
      dishId: "laklak",
      photoId: "laklak_2",
      name: "Laklak Biu Penebel Men Bayu",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Penebel",
      hours: "06:00 - 14:00 WITA",
      price: "$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Laklak%20Biu%20Penebel%20Men%20Bayu%20Bali",
      photo: "assets/eksplorasi/kuliner/laklak_2.jpeg",
      comment: "Khas Penebel dengan campuran pisang manis legit dan parutan kelapa muda.",
      dotColor: "#1F8A63",
      serves: ["laklak"]
    },
    {
      dishId: "laklak",
      photoId: "laklak_3",
      name: "Laklak Buleleng Laku 168",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Buleleng",
      hours: "06:00 - 14:00 WITA",
      price: "$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Laklak%20Buleleng%20Laku%20168%20Bali",
      photo: "assets/eksplorasi/kuliner/laklak_3.webp",
      comment: "Tekstur lembut berpori dengan kuah gula aren Bali yang wangi.",
      dotColor: "#2169B5",
      serves: ["laklak"]
    },

    {
      dishId: "lawar",
      photoId: "lawar_1",
      name: "Warung Lawar Sapi Bu Rincim",
      halal: "Halal",
      status: "Halal",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Lawar%20Sapi%20Bu%20Rincim%20Bali",
      photo: "assets/eksplorasi/kuliner/lawar_1.webp",
      comment: "Lawar daging sapi halal dengan bumbu rempah kelapa bakar gurih.",
      dotColor: "#1F8A63",
      serves: ["lawar"]
    },
    {
      dishId: "lawar",
      photoId: "lawar_2",
      name: "Nasi Lawar Yan Negro",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Nasi%20Lawar%20Yan%20Negro%20Bali",
      photo: "assets/eksplorasi/kuliner/lawar_2.webp",
      comment: "Lawar merah legendaris Denpasar dengan cincangan daging empuk dan urutan renyah.",
      dotColor: "#2169B5",
      serves: ["lawar"]
    },
    {
      dishId: "lawar",
      photoId: "lawar_3",
      name: "Lawar Bali Alam Murni",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Ubud",
      hours: "08:00 - 20:00 WITA",
      price: "$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawar%20Bali%20Alam%20Murni%20Bali",
      photo: "assets/eksplorasi/kuliner/lawar_3.webp",
      comment: "Lawar nangka muda segar berpadu kacang panjang dan bumbu base gede harum.",
      dotColor: "#9ACD5A",
      serves: ["lawar"]
    },

    {
      dishId: "nasicampur",
      photoId: "nasicampur_1",
      name: "Warung Nasi Ayam Kedewatan Ibu Mangku",
      halal: "Halal",
      status: "Halal",
      area: "Kedewatan",
      hours: "08:00 - 20:00 WITA",
      price: "$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Nasi%20Ayam%20Kedewatan%20Ibu%20Mangku%20Bali",
      photo: "assets/eksplorasi/kuliner/nasicampur_1.jpeg",
      comment: "Ayam suwir pedas, telur pindang, dan sate lilitnya selalu legendaris.",
      dotColor: "#1F8A63",
      serves: ["nasicampur"]
    },
    {
      dishId: "nasicampur",
      photoId: "nasicampur_2",
      name: "Waroeng Bernadette, Ubud",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Ubud",
      hours: "08:00 - 20:00 WITA",
      price: "$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Waroeng%20Bernadette%20Ubud%20Bali",
      photo: "assets/eksplorasi/kuliner/nasicampur_2.webp",
      comment: "Rendang dan nasi campur dengan racikan bumbu khas rumahan yang hangat.",
      dotColor: "#2169B5",
      serves: ["nasicampur"]
    },
    {
      dishId: "nasicampur",
      photoId: "nasicampur_3",
      name: "Warung Mek Juwel Nasi Campur Ayam",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Ubud",
      hours: "08:00 - 20:00 WITA",
      price: "$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Mek%20Juwel%20Nasi%20Campur%20Ayam%20Bali",
      photo: "assets/eksplorasi/kuliner/nasicampur_3.jpeg",
      comment: "Porsi melimpah dengan urutan ayam, sambal embe, dan kuah betutu gurih.",
      dotColor: "#1F8A63",
      serves: ["nasicampur"]
    },

    {
      dishId: "piesusu",
      photoId: "piesusu_1",
      name: "Pie Susu Dhian",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Denpasar",
      hours: "08:00 - 21:00 WITA",
      price: "$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pie%20Susu%20Dhian%20Bali",
      photo: "assets/eksplorasi/kuliner/piesusu_1.jpg",
      comment: "Oleh-oleh paling dicari, kulit pie renyah dengan fla susu manis legit.",
      dotColor: "#FFB04A",
      serves: ["piesusu"]
    },
    {
      dishId: "piesusu",
      photoId: "piesusu_2",
      name: "Pie Susu Nirmala",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Denpasar",
      hours: "08:00 - 21:00 WITA",
      price: "$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pie%20Susu%20Nirmala%20Bali",
      photo: "assets/eksplorasi/kuliner/piesusu_2.jpg",
      comment: "Fresh from the oven setiap hari dengan aneka varian rasa lezat.",
      dotColor: "#FFB04A",
      serves: ["piesusu"]
    },
    {
      dishId: "piesusu",
      photoId: "piesusu_3",
      name: "Pie Susu Chandra",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Denpasar",
      hours: "08:00 - 21:00 WITA",
      price: "$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pie%20Susu%20Chandra%20Bali",
      photo: "assets/eksplorasi/kuliner/piesusu_3.jpeg",
      comment: "Rasa susu original yang harum dan tidak terlalu manis di lidah.",
      dotColor: "#2169B5",
      serves: ["piesusu"]
    },

    {
      dishId: "rujakbali",
      photoId: "rujakbali_1",
      name: "Warung Kuah Pindang",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Sanur",
      hours: "09:00 - 19:00 WITA",
      price: "$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Kuah%20Pindang%20Bali",
      photo: "assets/eksplorasi/kuliner/rujakbali_1.jpeg",
      comment: "Rujak kuah pindang gula pasir dengan potongan mangga muda segar.",
      dotColor: "#1F8A63",
      serves: ["rujakbali"]
    },
    {
      dishId: "rujakbali",
      photoId: "rujakbali_2",
      name: "Warung Rujak Bali D'Tepi Sawah",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Denpasar",
      hours: "09:00 - 19:00 WITA",
      price: "$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Rujak%20Bali%20D'Tepi%20Sawah%20Denpasar%20Bali",
      photo: "assets/eksplorasi/kuliner/rujakbali_2.jpg",
      comment: "Perpaduan pedas terasi Bali dan asam buah yang menyegarkan di siang hari.",
      dotColor: "#2169B5",
      serves: ["rujakbali"]
    },
    {
      dishId: "rujakbali",
      photoId: "rujakbali_3",
      name: "Warung Rujak Bali D'Tepi Sawah",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Gianyar",
      hours: "09:00 - 19:00 WITA",
      price: "$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Rujak%20Bali%20D'Tepi%20Sawah%20Gianyar%20Bali",
      photo: "assets/eksplorasi/kuliner/rujakbali_3.webp",
      comment: "Suasana tepi sawah dengan aneka rujak bulung dan rujak cuka pedas mantap.",
      dotColor: "#9ACD5A",
      serves: ["rujakbali"]
    },

    {
      dishId: "satebabi",
      photoId: "satebabi_1",
      name: "Sate Plecing Arjuna",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Sate%20Plecing%20Arjuna%20Bali",
      photo: "assets/eksplorasi/kuliner/satebabi_1.jpeg",
      comment: "Sate babi bumbu plecing cabai merah terasi bakar yang sangat terkenal di Denpasar.",
      dotColor: "#1F8A63",
      serves: ["satebabi"]
    },
    {
      dishId: "satebabi",
      photoId: "satebabi_2",
      name: "Sate Babi Mak Lukluk",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Sate%20Babi%20Mak%20Lukluk%20Bali",
      photo: "assets/eksplorasi/kuliner/satebabi_2.jpeg",
      comment: "Daging sate tebal empuk dan manis karamel dengan bumbu bakar meresap.",
      dotColor: "#2169B5",
      serves: ["satebabi"]
    },
    {
      dishId: "satebabi",
      photoId: "satebabi_3",
      name: "Warung Sate Pan Bingin",
      halal: "Non-halal",
      status: "Non-halal",
      area: "Sanur",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Sate%20Pan%20Bingin%20Bali",
      photo: "assets/eksplorasi/kuliner/satebabi_3.jpg",
      comment: "Sate babi manis gurih dengan kuah sup balung rempah aromatik.",
      dotColor: "#1F8A63",
      serves: ["satebabi"]
    },

    {
      dishId: "satelilit",
      photoId: "satelilit_1",
      name: "Warung Be Pasih",
      halal: "Halal",
      status: "Halal",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Be%20Pasih%20Bali",
      photo: "assets/eksplorasi/kuliner/satelilit_1.webp",
      comment: "Sate lilit ikan laut cincang bumbu rempah harum khas pesisir Bali.",
      dotColor: "#1F8A63",
      serves: ["satelilit"]
    },
    {
      dishId: "satelilit",
      photoId: "satelilit_2",
      name: "Warung Wardani",
      halal: "Halal",
      status: "Halal",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Wardani%20Bali",
      photo: "assets/eksplorasi/kuliner/satelilit_2.webp",
      comment: "Sate lilit daging sapi dan ayam yang kenyal dengan aroma daun jeruk.",
      dotColor: "#1F8A63",
      serves: ["satelilit"]
    },
    {
      dishId: "satelilit",
      photoId: "satelilit_3",
      name: "Warung Lesehan Mertha Sari",
      halal: "Halal",
      status: "Halal",
      area: "Klungkung",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Lesehan%20Mertha%20Sari%20Bali",
      photo: "assets/eksplorasi/kuliner/satelilit_3.jpg",
      comment: "Sate lilit ikan khas Klungkung yang dipanggang segar di pinggir sawah.",
      dotColor: "#2169B5",
      serves: ["satelilit"]
    },
    {
      dishId: "satelilit",
      photoId: "satelilit_4",
      name: "Sate Lilit Ayam Anyelir",
      halal: "Halal",
      status: "Halal",
      area: "Denpasar",
      hours: "08:00 - 20:00 WITA",
      price: "$$",
      rating: 4.4,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Sate%20Lilit%20Ayam%20Anyelir%20Bali",
      photo: "assets/eksplorasi/kuliner/satelilit_4.jpg",
      comment: "Lilitan ayam gurih dengan siraman sambal matah serai pedas segar.",
      dotColor: "#2169B5",
      serves: ["satelilit"]
    },

    {
      dishId: "tipatcantok",
      photoId: "tipatcantok_1",
      name: "Warung Dewaah",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Denpasar",
      hours: "09:00 - 19:00 WITA",
      price: "$",
      rating: 4.6,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Dewaah%20Bali",
      photo: "assets/eksplorasi/kuliner/tipatcantok_1.webp",
      comment: "Bumbu kacang kencurnya diulek mendadak dengan tingkat kepedasan pas.",
      dotColor: "#9ACD5A",
      serves: ["tipatcantok"]
    },
    {
      dishId: "tipatcantok",
      photoId: "tipatcantok_2",
      name: "Warung The Uma Ubud",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Ubud",
      hours: "09:00 - 19:00 WITA",
      price: "$",
      rating: 4.7,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20The%20Uma%20Ubud%20Bali",
      photo: "assets/eksplorasi/kuliner/tipatcantok_2.webp",
      comment: "Tipat cantok organik dengan sayuran segar dari kebun sendiri.",
      dotColor: "#1F8A63",
      serves: ["tipatcantok"]
    },
    {
      dishId: "tipatcantok",
      photoId: "tipatcantok_3",
      name: "Warung Rujak Dong Soka",
      halal: "Belum terverifikasi",
      status: "Belum terverifikasi",
      area: "Denpasar",
      hours: "09:00 - 19:00 WITA",
      price: "$",
      rating: 4.5,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung%20Rujak%20Dong%20Soka%20Bali",
      photo: "assets/eksplorasi/kuliner/tipatcantok_3.jpeg",
      comment: "Tipat lembut berpadu tahu goreng gurih dan siraman kuah bumbu kencur wangi.",
      dotColor: "#2169B5",
      serves: ["tipatcantok"]
    }
  ];
  if (typeof console !== "undefined") {
    const missingPhotos = restaurants.filter(
      (r) => !r.photo || r.photo === "placeholder"
    );
    console.assert(
      missingPhotos.length === 0,
      "All photoIds must resolve to valid images",
      missingPhotos
    );
    const uniqueDishIds = [...new Set(dishes.map((d) => d.id))];
    uniqueDishIds.forEach((id) => {
      const count = restaurants.filter((r) => r.dishId === id).length;
      console.assert(
        count >= 3,
        `Each dish must have at least 3 places. Dish ${id} has ${count}`
      );
    });
    const removedDishesPresent = dishes.some(
      (d) => d.id.includes("bebek") || d.id.includes("pepes") || d.name.toLowerCase().includes("bebek") || d.name.toLowerCase().includes("pesan be pasih")
    );
    console.assert(
      !removedDishesPresent,
      "No removed dish id or name may remain in dishes array"
    );
  }
  var categories = [
    { id: "tari", label: "Tari & Gamelan", cardTag: "Tari & Gamelan" },
    { id: "lukis", label: "Lukis", cardTag: "Lukis" },
    { id: "kain", label: "Kain", cardTag: "Kain" },
    { id: "ukir", label: "Ukir", cardTag: "Ukir" }
  ];
  var works = [

    {
      id: "tari-legong",
      category: "tari",
      title: "Tari Legong",
      photo: "assets/eksplorasi/budaya/tari_legong.webp",
      makna: "Tarian klasik keraton perlambang keanggunan bidadari kahyangan dan keluwesan jiwa seni Bali.",
      asal: "Puri Keraton Gianyar & Klungkung, Abad ke-19",
      konteks: "Dipentaskan pada upacara adat keraton dan pertunjukan seni di pelataran pura.",
      places: [
        { name: "Puri Saren Agung", area: "Ubud, Gianyar" },
        { name: "Pura Dalem Ubud", area: "Gianyar" }
      ]
    },
    {
      id: "tari-barong",
      category: "tari",
      title: "Tari Barong",
      photo: "assets/eksplorasi/budaya/tari_barong.jpg",
      makna: "Simbol pertarungan abadi kebajikan (Dharma) Barong dan keburukan (Adharma) Rangda.",
      asal: "Gianyar, Bali Tengah, Abad ke-12",
      konteks: "Pementasan naratif harian dan ritual Calonarang di pelataran desa adat.",
      places: [
        { name: "Panggung Batubulan", area: "Batubulan, Gianyar" },
        { name: "Pura Samuan Tiga", area: "Bedulu, Gianyar" }
      ]
    },
    {
      id: "tari-kecak",
      category: "tari",
      title: "Tari Kecak",
      photo: "assets/eksplorasi/budaya/tari_kecak.webp",
      makna: "Drama tari kolosal epos Ramayana berpadu koor vokal 'cak-cak' puluhan penari pria mengitari api.",
      asal: "Bona, Gianyar & Pura Uluwatu, Era 1930",
      konteks: "Dipentaskan menjelang senja dengan latar panorama tebing samudra selatan.",
      places: [
        { name: "Pura Luhur Uluwatu", area: "Pecatu, Badung" },
        { name: "Tanah Lot Amphitheater", area: "Tabanan" }
      ]
    },
    {
      id: "tari-pendet",
      category: "tari",
      title: "Tari Pendet",
      photo: "assets/eksplorasi/budaya/tari_pendet.webp",
      makna: "Tarian sakral penyambutan turunnya dewata ke bumi serta ungkapan rasa syukur tulus warga.",
      asal: "Pura Besakih & Denpasar, Tradisi Kuno",
      konteks: "Pembuka piodalan di pura dan penyambutan kehormatan tamu perhelatan seni.",
      places: [
        { name: "Taman Budaya Art Centre", area: "Denpasar" },
        { name: "Pura Agung Besakih", area: "Karangasem" }
      ]
    },

    {
      id: "lukisan-wayang-kamasan",
      category: "lukis",
      title: "Lukisan Wayang Kamasan",
      photo: "assets/eksplorasi/budaya/lukisan_satu.jpeg",
      makna: "Lukisan figur wayang kulit narasi epos kuno menggunakan kanvas kain kanji dan pewarna alam batu.",
      asal: "Desa Kamasan, Klungkung, Abad ke-16",
      konteks: "Hiasan langit-langit balai pengadilan Kerta Gosa dan tirai suci parba pelinggih pura.",
      places: [
        { name: "Kerta Gosa Klungkung", area: "Semarapura" },
        { name: "Museum Semarajaya", area: "Klungkung" }
      ]
    },
    {
      id: "lukisan-gaya-batuan",
      category: "lukis",
      title: "Lukisan gaya Batuan",
      photo: "assets/eksplorasi/budaya/lukisan_dua.jpeg",
      makna: "Karya lukis tinta hitam bertingkat bergradasi cermat melukiskan kehidupan spiritual dan mitos.",
      asal: "Desa Seni Batuan, Gianyar, Abad ke-20",
      konteks: "Koleksi galeri seni rupa internasional dan karya turun-temurun para empu Batuan.",
      places: [
        { name: "Desa Seni Batuan", area: "Sukawati, Gianyar" },
        { name: "Pura Puseh Batuan", area: "Gianyar" }
      ]
    },
    {
      id: "museum-puri-lukisan",
      category: "lukis",
      title: "Lukisan Ubud Klasik",
      photo: "assets/eksplorasi/budaya/lukisan_tiga.jpeg",
      makna: "Museum seni tertua di Bali pelindung evolusi karya perupa Pita Maha dari klasik ke modern.",
      asal: "Jl. Raya Ubud, Didirikan 1956",
      konteks: "Galeri pameran permanen mahakarya pelukis pelopor Bali dan Rudolf Bonnet.",
      places: [
        { name: "Museum Puri Lukisan", area: "Ubud, Gianyar" },
        { name: "Pasar Seni Ubud", area: "Gianyar" }
      ]
    },
    {
      id: "neka-art-museum",
      category: "lukis",
      title: "Lukisan Modern Bali",
      photo: "assets/eksplorasi/budaya/lukisan_empat.jpeg",
      makna: "Pusat dokumentasi perkembangan seni lukis Bali dari masa tradisi hingga gaya kontemporer dunia.",
      asal: "Campuhan, Ubud, Berdiri 1982",
      konteks: "Menyimpan koleksi mahakarya maestro Affandi, Arie Smit, hingga lukisan keris pusaka.",
      places: [
        { name: "Neka Art Museum", area: "Campuhan, Ubud" },
        { name: "Blanco Renaissance Museum", area: "Campuhan, Ubud" }
      ]
    },

    {
      id: "kain-cepuk",
      category: "kain",
      title: "Kain Cepuk",
      photo: "assets/eksplorasi/budaya/kain_cepuk.jpeg",
      makna: "Kain tenun sakral khas Nusa Penida dengan motif geometris merah penangkal aura negatif.",
      asal: "Nusa Penida, Klungkung",
      konteks: "Dipakai dalam ritual pembersihan diri, upacara potong gigi, dan persembahyangan.",
      places: [
        { name: "Sentra Tenun Nusa Penida", area: "Klungkung" },
        { name: "Pasar Seni Klungkung", area: "Klungkung" }
      ]
    },
    {
      id: "endek-sidemen",
      category: "kain",
      title: "Kain Endek",
      photo: "assets/eksplorasi/budaya/kain_endek.jpg",
      makna: "Kain tenun ikat pakan bernuansa geometris dan flora melambangkan keselarasan hidup umat dan alam.",
      asal: "Lembah Sidemen, Karangasem",
      konteks: "Busana upacara adat sembahyang, perhelatan kedinasan resmi, dan warisan kearifan timur.",
      places: [
        { name: "Sentra Tenun Sidemen", area: "Karangasem" },
        { name: "Pasar Seni Klungkung", area: "Klungkung" }
      ]
    },
    {
      id: "tenun-gringsing-tenganan",
      category: "kain",
      title: "Kain Gringsing",
      photo: "assets/eksplorasi/budaya/kain_gringsing.webp",
      makna: "Kain langka tenun ikat ganda satu-satunya di Indonesia, penolak bala (gering = sakit, sing = tidak).",
      asal: "Desa Bali Aga Tenganan Pegringsingan",
      konteks: "Perlengkapan pusaka sakral pada upacara Usaba Sambah dan ritus perang pandan desa adat.",
      places: [
        { name: "Desa Adat Tenganan", area: "Karangasem" },
        { name: "Museum Bali Denpasar", area: "Denpasar" }
      ]
    },
    {
      id: "songket",
      category: "kain",
      title: "Kain Songket",
      photo: "assets/eksplorasi/budaya/kain_songket.jpg",
      makna: "Tenunan adibusana berunsur benang emas dan perak berkilau lambang kemuliaan martabat ningrat.",
      asal: "Desa Adat Gelgel, Klungkung, Era Kerajaan",
      konteks: "Dikenakan pada upacara potong gigi (Metatah), pernikahan adat, dan piodalan pura besar.",
      places: [
        { name: "Desa Adat Gelgel", area: "Klungkung" },
        { name: "Sentra Songket Jinengdalem", area: "Buleleng" }
      ]
    },

    {
      id: "ukir-kayu-desa-mas",
      category: "ukir",
      title: "Ukir Kayu Dewa",
      photo: "assets/eksplorasi/budaya/ukir_satu.jpeg",
      makna: "Pahatan patung kayu cendana dan suar berkarakter kuat menghidupkan flora fauna dan figur dewa.",
      asal: "Desa Mas, Ubud, Gianyar, Abad ke-19",
      konteks: "Hiasan pintu pura, bale banjar, serta mahakarya seni patung koleksi galeri mancanegara.",
      places: [
        { name: "Desa Wisata Seni Mas", area: "Ubud" },
        { name: "Museum Neka Wood Gallery", area: "Ubud" }
      ]
    },
    {
      id: "topeng-bali",
      category: "ukir",
      title: "Ukir Topeng Barong",
      photo: "assets/eksplorasi/budaya/ukir_dua.jpg",
      makna: "Pahatan kayu pule bernyawa sakral tempat bersemayamnya taksu pelindung dalam drama tari pura.",
      asal: "Desa Singapadu & Mas, Gianyar",
      konteks: "Pementasan tari Topeng Panca, drama Sidakarya, serta ritual sakral penolak mara bahaya.",
      places: [
        { name: "Pura Desa Singapadu", area: "Gianyar" },
        { name: "Studio Ida Bagus Anom", area: "Mas, Ubud" }
      ]
    },
    {
      id: "ukir-ornamen-batu",
      category: "ukir",
      title: "Ukir Padas Candi",
      photo: "assets/eksplorasi/budaya/ukir_tiga.webp",
      makna: "Ukiran batu paras tradisional Bali dengan ragam hias karang boma, patra sari, dan dedaunan lebat.",
      asal: "Batubulan, Sukawati, Gianyar",
      konteks: "Ornamen gapura candi bentar, kori agung pura, dan tembok pagar arsitektur Bali.",
      places: [
        { name: "Sentra Pahat Batubulan", area: "Sukawati, Gianyar" },
        { name: "Pura Batuan", area: "Gianyar" }
      ]
    },
    {
      id: "perak-celuk",
      category: "ukir",
      title: "Ukir Logam Celuk",
      photo: "assets/eksplorasi/budaya/ukir_empat.webp",
      makna: "Kriya logam filigri rumit dengan butiran perak dan kawat halus hasil tempaan pande mas terampil.",
      asal: "Desa Celuk, Sukawati, Sejak 1915",
      konteks: "Perhiasan busana agung pengantin Bali, ornamen keris, dan cenderamata logam pusaka seni.",
      places: [
        { name: "Sentra Kriya Celuk", area: "Sukawati, Gianyar" },
        { name: "Pasar Seni Guwang", area: "Sukawati, Gianyar" }
      ]
    }
  ];
  var levels = [
    {
      num: 1,
      id: "tri-hita-karana",
      title: "Tri Hita Karana",
      story: "Tiga hubungan yang dijaga orang Bali agar hidup seimbang: dengan Tuhan, dengan sesama, dan dengan alam.",
      icon: "assets/eksplorasi/budaya/living_culture/level_1.webp",
      worldX: 482,
      worldY: 480,
      hint: "Pasangkan ketiga falsafah hidup Bali dengan maknanya!",
      cheer: "Bagus sekali! Keharmonisan adalah kunci hidup damai di Bali."
    },
    {
      num: 2,
      id: "tata-cara-berpakaian",
      title: "Tata Cara Berpakaian",
      story: "Pakaian adat dipilih sesuai tempat dan acara. Saat masuk pura, berpakaianlah sopan: kamen (kain) dan selendang, dan udeng (ikat kepala) untuk pria.",
      icon: "assets/eksplorasi/budaya/living_culture/level_2.webp",
      worldX: 740,
      worldY: 641,
      hint: "Pilih busana yang paling pantas untuk setiap situasi ya!",
      cheer: "Tepat! Berpakaian sopan adalah wujud rasa hormat pada kesucian."
    },
    {
      num: 3,
      id: "canang-sari",
      title: "Canang Sari",
      story: "Persembahan harian dari janur dan bunga warna-warni, sebagai ungkapan syukur kepada Sang Hyang Widhi. Jangan diinjak.",
      icon: "assets/eksplorasi/budaya/living_culture/level_3.webp",
      worldX: 1081,
      worldY: 500,
      hint: "Sentuh bagian canang sari yang diminta pada gambar!",
      cheer: "Luar biasa! Sekarang kamu tahu makna setiap helai canang sari."
    },
    {
      num: 4,
      id: "hari-raya-galungan",
      title: "Hari Raya Galungan",
      story: "Galungan dirayakan setiap 210 hari sebagai kemenangan dharma atas adharma. Penjor menghiasi sisi jalan di depan rumah.",
      icon: "assets/eksplorasi/budaya/living_culture/level_4.webp",
      worldX: 1440,
      worldY: 641,
      hint: "Urutkan rangkaian hari suci Galungan dari awal hingga akhir!",
      cheer: "Sempurna! Urutan prosesi Galungan sudah tepat."
    },
    {
      num: 5,
      id: "hari-raya-kuningan",
      title: "Hari Raya Kuningan",
      story: "Kuningan jatuh 10 hari setelah Galungan, untuk menghormati leluhur dan para dewa yang diyakini turun ke bumi.",
      icon: "assets/eksplorasi/budaya/living_culture/level_5.webp",
      worldX: 1780,
      worldY: 500,
      hint: "Jawab kuis seputar perayaan suci Kuningan!",
      cheer: "Hebat! Pengetahuanmu tentang Kuningan sangat tajam."
    },
    {
      num: 6,
      id: "hari-raya-nyepi",
      title: "Hari Raya Nyepi",
      story: "Nyepi adalah Tahun Baru Saka: sehari penuh hening, tanpa api, kerja, hiburan, dan bepergian. Inilah Catur Brata Penyepian.",
      icon: "assets/eksplorasi/budaya/living_culture/level_6.webp",
      worldX: 2110,
      worldY: 641,
      hint: "Tentukan pantangan brata yang sesuai untuk setiap situasi!",
      cheer: "Selamat! Kamu telah menguasai seluruh tradisi luhur Bali!"
    }
  ];
  var slides = {
    1: [
      {
        title: "Apa itu Tri Hita Karana?",
        body: "Tri berarti tiga, hita berarti kebahagiaan, dan karana berarti penyebab. Jadi, tiga penyebab kebahagiaan: hubungan yang harmonis dalam hidup. Filosofi ini menjadi pegangan orang Bali sehari-hari."
      },
      {
        title: "Parahyangan: dengan Tuhan",
        body: "Parahyangan adalah hubungan harmonis manusia dengan Tuhan (Sang Hyang Widhi). Wujudnya antara lain sembahyang, merawat pura, dan menggelar upacara."
      },
      {
        title: "Pawongan: dengan sesama",
        body: "Pawongan adalah hubungan harmonis antarmanusia. Contohnya gotong royong di banjar, saling membantu saat upacara, dan saling menghormati warga."
      },
      {
        title: "Palemahan: dengan alam",
        body: "Palemahan adalah hubungan harmonis dengan alam dan lingkungan, seperti sistem subak yang membagi air sawah dan menjaga laut, hutan, dan mata air. Subak diakui UNESCO sebagai Warisan Dunia pada 2012."
      },
      {
        title: "Tiga hubungan, satu keseimbangan",
        body: "Ketiganya saling melengkapi: bila satu terabaikan, hidup menjadi tidak seimbang. Di tantangan nanti, cocokkan setiap konsep dengan maknanya."
      }
    ],
    2: [
      {
        title: "Pakaian adalah tanda hormat",
        body: "Di Bali, pakaian bukan hanya soal gaya, tetapi cara menghormati tempat suci dan sesama. Pakaian dipilih sesuai tempat dan jenis acara."
      },
      {
        title: "Kamen dan selendang",
        body: "Kamen adalah kain yang dililitkan di pinggang hingga bawah lutut. Selendang diikatkan di pinggang sebagai tanda siap memasuki area suci."
      },
      {
        title: "Udeng untuk pria",
        body: "Pria melengkapi kamen dengan udeng, ikat kepala dari kain. Udeng umumnya dilambangkan sebagai pemusatan pikiran saat bersembahyang."
      },
      {
        title: "Pakaian adat madya",
        body: "Untuk upacara di banjar atau pura, umumnya dipakai pakaian adat madya: kebaya dan kamen untuk perempuan, kemeja atau safari dan kamen untuk laki-laki, dengan bahu dan lutut tertutup rapi."
      },
      {
        title: "Lupa membawa? Dan di luar pura?",
        body: "Banyak pura menyediakan sewa atau pinjaman kamen dan selendang di pintu masuk. Di pantai atau kafe, pakaian santai biasa sudah cukup; pakaian adat dipakai untuk ke tempat suci dan upacara."
      }
    ],
    3: [
      {
        title: "Persembahan setiap hari",
        body: "Canang sari adalah persembahan kecil yang diletakkan umat Hindu Bali setiap hari di rumah, pura, toko, hingga jalan, sebagai ungkapan syukur kepada Sang Hyang Widhi."
      },
      {
        title: "Ceper dan plawa",
        body: "Ceper adalah alas persegi dari janur (daun kelapa muda) sebagai wadah. Di atasnya ditata plawa, daun hijau yang melambangkan kehidupan dan kesejukan."
      },
      {
        title: "Porosan",
        body: "Porosan terdiri dari daun sirih, pinang, dan kapur. Umumnya melambangkan penyatuan dan kesungguhan niat dalam bersembahyang."
      },
      {
        title: "Bunga empat warna",
        body: "Bunga diletakkan sesuai arah mata angin: putih di timur, merah di selatan, kuning di barat, dan biru atau hijau di utara. Tiap warna umumnya dikaitkan dengan manifestasi Tuhan."
      },
      {
        title: "Sampian urasari dan sikap hormat",
        body: "Sampian urasari adalah hiasan janur yang dianyam di atas canang sebagai lambang kesucian. Hindari menginjak canang; berjalanlah di sisinya, dan bila tak sengaja, minta maaf dengan sopan."
      }
    ],
    4: [
      {
        title: "Kemenangan dharma",
        body: "Galungan memperingati kemenangan dharma (kebaikan) atas adharma (keburukan). Dirayakan setiap 210 hari menurut kalender pawukon Bali."
      },
      {
        title: "Penyekeban dan Penyajaan",
        body: "Penyekeban (3 hari sebelum Galungan) adalah menyiapkan dan memeram pisang. Penyajaan (2 hari sebelum) adalah membuat jajan atau kue persembahan."
      },
      {
        title: "Penampahan dan penjor",
        body: "Penampahan Galungan, sehari sebelumnya, diisi menyiapkan hidangan dan memasang penjor, bambu melengkung berhias janur di depan rumah sebagai simbol rasa syukur."
      },
      {
        title: "Hari Galungan",
        body: "Pada hari Galungan keluarga memakai pakaian adat terbaik dan bersembahyang di pura dan merajan (pura keluarga). Para leluhur dipercaya turun mengunjungi keluarga."
      },
      {
        title: "Manis Galungan",
        body: "Sehari sesudahnya, Manis Galungan, adalah waktu bersilaturahmi: mengunjungi keluarga dan sahabat serta berekreasi. Urutannya: Penyekeban, Penyajaan, Penampahan, Galungan, Manis Galungan."
      }
    ],
    5: [
      {
        title: "Sepuluh hari setelah Galungan",
        body: "Kuningan dirayakan 10 hari setelah Galungan, pada Saniscara Kliwon (Sabtu) wuku Kuningan. Umat memuliakan leluhur dan para dewa."
      },
      {
        title: "Nasi kuning",
        body: "Persembahan khas Kuningan memakai nasi kuning, nasi berwarna kuning dari kunyit yang melambangkan kemakmuran dan rasa syukur."
      },
      {
        title: "Tamiang dan endongan",
        body: "Tamiang berbentuk bulat seperti perisai, umumnya melambangkan perlindungan. Endongan adalah bekal kecil dari janur, lambang bekal bagi para leluhur dan dewa untuk kembali."
      },
      {
        title: "Sebelum tengah hari",
        body: "Sembahyang Kuningan umumnya selesai sebelum tengah hari, karena diyakini setelah itu para leluhur dan dewa kembali ke alamnya."
      },
      {
        title: "Bedanya dengan Galungan",
        body: "Galungan merayakan kemenangan dharma atas adharma dan menyambut leluhur. Kuningan adalah saat memohon keselamatan dan kesejahteraan serta berterima kasih sebelum mereka kembali."
      }
    ],
    6: [
      {
        title: "Tahun Baru Saka",
        body: "Nyepi adalah Tahun Baru Saka, dirayakan dengan hening selama 24 jam. Seluruh Bali tenang: jalan sepi, bahkan bandara ditutup."
      },
      {
        title: "Catur Brata Penyepian",
        body: "Ada empat pantangan: Amati Geni (tanpa api dan lampu), Amati Karya (tanpa bekerja), Amati Lelanguan (tanpa hiburan), dan Amati Lelungan (tanpa bepergian)."
      },
      {
        title: "Sebelum Nyepi",
        body: "Sehari sebelumnya ada Tawur Kesanga untuk menyucikan alam. Malamnya (pengrupukan), warga mengarak ogoh-ogoh, patung raksasa lambang sifat buruk yang umumnya dibakar."
      },
      {
        title: "Hari Nyepi",
        body: "Saat Nyepi rumah gelap tanpa lampu menyala dan tidak ada kegiatan di luar rumah. Pecalang (petugas adat) berjaga menjaga ketenangan, dan wisatawan diminta tetap di penginapan."
      },
      {
        title: "Ngembak Geni",
        body: "Setelah Nyepi ada Ngembak Geni, saat warga saling memaafkan dan bersilaturahmi. Di tantangan terakhir, pasangkan situasi dengan brata yang tepat."
      }
    ]
  };
  var sidePanels = {
    1: {
      tabTitle: "TRI HITA KARANA",
      isGrid2x2: false,
      tiles: [
        { id: "parahyangan", title: "Parahyangan", sub: "Dengan Tuhan", bg: "#DDF3B0", shadow: "0 5px 0 #BFDE86", icon: "temple", relatedSlide: 1 },
        { id: "pawongan", title: "Pawongan", sub: "Dengan sesama", bg: "#BBD5F0", shadow: "0 5px 0 #8DB2D9", icon: "people", relatedSlide: 2 },
        { id: "palemahan", title: "Palemahan", sub: "Dengan alam", bg: "#CDEFD9", shadow: "0 5px 0 #A3D4B6", icon: "leaf", relatedSlide: 3 }
      ]
    },
    2: {
      tabTitle: "ATURAN BERPAKAIAN",
      isGrid2x2: false,
      tiles: [
        { id: "kamen", title: "Kamen & selendang", sub: "Wajib di pura", bg: "#DDF3B0", shadow: "0 5px 0 #BFDE86", icon: "shirt", relatedSlide: 1 },
        { id: "udeng", title: "Udeng", sub: "Untuk pria", bg: "#BBD5F0", shadow: "0 5px 0 #8DB2D9", icon: "headwrap", relatedSlide: 2 },
        { id: "arahan", title: "Ikuti arahan", sub: "Penjaga dan warga", bg: "#CDEFD9", shadow: "0 5px 0 #A3D4B6", icon: "speech", relatedSlide: 3 }
      ]
    },
    3: {
      tabTitle: "BAGIAN CANANG",
      isGrid2x2: false,
      tiles: [
        { id: "ceper", title: "Ceper", sub: "Alas dari janur", bg: "#DDF3B0", shadow: "0 5px 0 #BFDE86", icon: "tray", relatedSlide: 1 },
        { id: "bunga", title: "Bunga", sub: "Empat warna arah", bg: "#BBD5F0", shadow: "0 5px 0 #8DB2D9", icon: "flower", relatedSlide: 3 },
        { id: "porosan", title: "Porosan", sub: "Sirih, pinang, kapur", bg: "#CDEFD9", shadow: "0 5px 0 #A3D4B6", icon: "leafroll", relatedSlide: 2 }
      ],
      footerLine: {
        text: "Jangan diinjak",
        icon: "offering"
      }
    },
    4: {
      tabTitle: "RANGKAIAN GALUNGAN",
      isGrid2x2: false,
      tiles: [
        { id: "penjor", title: "Penjor", sub: "Hiasan janur", bg: "#DDF3B0", shadow: "0 5px 0 #BFDE86", icon: "penjor", relatedSlide: 2 },
        { id: "penampahan", title: "Penampahan", sub: "Sehari sebelum", bg: "#BBD5F0", shadow: "0 5px 0 #8DB2D9", icon: "calendar", relatedSlide: 2 },
        { id: "manis", title: "Manis Galungan", sub: "Hari bersilaturahmi", bg: "#CDEFD9", shadow: "0 5px 0 #A3D4B6", icon: "hands", relatedSlide: 4 }
      ]
    },
    5: {
      tabTitle: "CIRI KUNINGAN",
      isGrid2x2: false,
      tiles: [
        { id: "nasi_kuning", title: "Nasi kuning", sub: "Warna kemakmuran", bg: "#DDF3B0", shadow: "0 5px 0 #BFDE86", icon: "rice", relatedSlide: 1 },
        { id: "tamiang", title: "Tamiang", sub: "Lambang perlindungan", bg: "#BBD5F0", shadow: "0 5px 0 #8DB2D9", icon: "shield", relatedSlide: 2 },
        { id: "endongan", title: "Endongan", sub: "Bekal dari janur", bg: "#CDEFD9", shadow: "0 5px 0 #A3D4B6", icon: "bag", relatedSlide: 2 }
      ]
    },
    6: {
      tabTitle: "CATUR BRATA",
      isGrid2x2: true,
      tiles: [
        { id: "amati_geni", title: "Amati Geni", sub: "Tanpa api & lampu", bg: "#DDF3B0", shadow: "0 5px 0 #BFDE86", icon: "flame", relatedSlide: 1 },
        { id: "amati_karya", title: "Amati Karya", sub: "Tanpa bekerja", bg: "#BBD5F0", shadow: "0 5px 0 #8DB2D9", icon: "tools", relatedSlide: 1 },
        { id: "amati_lelanguan", title: "Amati Lelanguan", sub: "Tanpa hiburan", bg: "#CDEFD9", shadow: "0 5px 0 #A3D4B6", icon: "music", relatedSlide: 1 },
        { id: "amati_lelungan", title: "Amati Lelungan", sub: "Tetap di rumah", bg: "#BBD5F0", shadow: "0 5px 0 #8DB2D9", icon: "house", relatedSlide: 1 }
      ]
    }
  };
  var level1Data = {
    instruction: "Cocokkan konsep falsafah Tri Hita Karana dengan maknanya!",
    tokens: [
      { id: "parahyangan", label: "Parahyangan" },
      { id: "pawongan", label: "Pawongan" },
      { id: "palemahan", label: "Palemahan" }
    ],
    meanings: [
      {
        id: "parahyangan",
        text: "Hubungan harmonis manusia dengan Tuhan (pura, sembahyang, upacara)",
        concept: "Parahyangan"
      },
      {
        id: "pawongan",
        text: "Hubungan harmonis antarmanusia (gotong royong, banjar)",
        concept: "Pawongan"
      },
      {
        id: "palemahan",
        text: "Hubungan harmonis dengan alam dan lingkungan (sawah, laut, hutan)",
        concept: "Palemahan"
      }
    ]
  };
  var level2Data = {
    instruction: "Pilih pakaian yang pantas untuk situasi berikut:",
    minCorrect: 3,
    situations: [
      {
        id: 1,
        scenario: "Masuk pura untuk sembahyang atau berkunjung:",
        correctId: "a",
        options: [
          {
            id: "a",
            label: "Kamen + selendang (pria + udeng)",
            icon: "kamen",
            correct: true,
            reason: "Kamen dan selendang mengikat hawa nafsu dan menjaga kesucian tempat ibadah."
          },
          {
            id: "b",
            label: "Celana pendek + kaos santai",
            icon: "shorts",
            correct: false,
            reason: "Bagian kaki dan pinggang harus tertutup kain (kamen) saat berada di area suci pura."
          },
          {
            id: "c",
            label: "Gaun malam terbuka",
            icon: "dress",
            correct: false,
            reason: "Pakaian ibadah pura mengutamakan kesopanan dan kesederhanaan adat Bali."
          }
        ]
      },
      {
        id: 2,
        scenario: "Menghadiri upacara adat di banjar:",
        correctId: "a",
        options: [
          {
            id: "a",
            label: "Pakaian adat madya (kebaya/safari + kamen)",
            icon: "kebaya",
            correct: true,
            reason: "Pakaian adat madya adalah standar kesopanan saat musyawarah atau upacara di banjar."
          },
          {
            id: "b",
            label: "Pakaian olahraga santai",
            icon: "sport",
            correct: false,
            reason: "Pertemuan banjar bernuansa adat sakral sehingga memerlukan pakaian adat."
          },
          {
            id: "c",
            label: "Baju santai pantai",
            icon: "beach",
            correct: false,
            reason: "Busana pantai tidak pantas untuk forum adat kemasyarakatan."
          }
        ]
      },
      {
        id: 3,
        scenario: "Berkunjung ke pura sebagai wisatawan dan lupa membawa kain:",
        correctId: "a",
        options: [
          {
            id: "a",
            label: "Meminjam/menyewa kamen & selendang di pintu pura",
            icon: "rent",
            correct: true,
            reason: "Setiap pintu pura menyediakan kain dan selendang untuk menghormati kawasan suci."
          },
          {
            id: "b",
            label: "Tetap masuk dengan celana pendek",
            icon: "shorts",
            correct: false,
            reason: "Masuk tanpa kain penutup melanggar aturan kesopanan pura."
          },
          {
            id: "c",
            label: "Menunggu di dalam tanpa kain",
            icon: "waiting",
            correct: false,
            reason: "Area pelataran dalam pura tertutup bagi siapa pun yang belum mengenakan kain adat."
          }
        ]
      },
      {
        id: 4,
        scenario: "Pria yang bersembahyang melengkapi kamen dengan:",
        correctId: "a",
        options: [
          {
            id: "a",
            label: "Udeng (destar)",
            icon: "udeng",
            correct: true,
            reason: "Udeng melambangkan pemusatan pikiran dan pengendalian diri menuju kesucian."
          },
          {
            id: "b",
            label: "Topi baseball",
            icon: "cap",
            correct: false,
            reason: "Topi modern bukan bagian dari kelengkapan spiritual persembahyangan."
          },
          {
            id: "c",
            label: "Kacamata hitam",
            icon: "sunglasses",
            correct: false,
            reason: "Aksesoris santai sebaiknya dilepas saat hendak memanjatkan doa."
          }
        ]
      },
      {
        id: 5,
        scenario: "Jalan-jalan santai di pantai atau kafe:",
        correctId: "a",
        options: [
          {
            id: "a",
            label: "Pakaian santai biasa (tidak wajib pakaian adat)",
            icon: "casual",
            correct: true,
            reason: "Ruang publik umum bebas menggunakan pakaian kasual yang nyaman dan sopan."
          },
          {
            id: "b",
            label: "Pakaian adat lengkap dengan udeng",
            icon: "full_adat",
            correct: false,
            reason: "Pakaian adat lengkap dikhususkan untuk ritual, pura, atau upacara adat."
          },
          {
            id: "c",
            label: "Pakaian upacara besar",
            icon: "ceremonial",
            correct: false,
            reason: "Pakaian upacara agung hanya dipakai pada hari raya atau pernikahan."
          }
        ]
      }
    ]
  };
  var level3Data = {
    instruction: "Sentuh bagian canang sari yang diminta pada ilustrasi!",
    parts: [
      {
        id: "ceper",
        name: "Ceper",
        question: "Temukan: Ceper",
        title: "Ceper (Alas Daun Kelapa)",
        meaning: "Wadah anyaman segi empat dari janur kelapa muda, umumnya melambangkan catur ananta bhoga (alas kehidupan dan ketetapan hati)."
      },
      {
        id: "porosan",
        name: "Porosan",
        question: "Temukan: Porosan",
        title: "Porosan (Pinang, Sirih, Kapur)",
        meaning: "Inti canang dari daun sirih, pinang, dan kapur. Melambangkan Trimurti (Brahma, Wisnu, Siwa) serta ketulusan niat hati yang bulat."
      },
      {
        id: "bunga",
        name: "Bunga",
        question: "Temukan: Bunga",
        title: "Bunga Warna-Warni",
        meaning: "Ragam warna melambangkan arah mata angin dan manifestasi Tuhan: putih di timur (Iswara), merah di selatan (Brahma), kuning di barat (Mahadewa), biru/hijau di utara (Wisnu)."
      },
      {
        id: "sampian",
        name: "Sampian urasari",
        question: "Temukan: Sampian urasari",
        title: "Sampian Urasari",
        meaning: "Hiasan lingkaran janur di atas canang yang diisi bunga harum, umumnya menyimbolkan ketulusan persembahan dan kesucian cinta kasih."
      },
      {
        id: "plawa",
        name: "Plawa",
        question: "Temukan: Plawa",
        title: "Plawa (Daun Hijau Segar)",
        meaning: "Helaian dedaunan hijau segar yang melambangkan ketenangan jiwa, kesegaran pikiran, dan bertumbuhnya kebaikan hidup."
      }
    ]
  };
  var level4Data = {
    instruction: "Susun tahapan perayaan Galungan ke urutan yang tepat:",
    cards: [
      {
        id: "penyekeban",
        order: 1,
        title: "Penyekeban",
        desc: "Memeram pisang"
      },
      {
        id: "penyajaan",
        order: 2,
        title: "Penyajaan",
        desc: "Membuat jajan"
      },
      {
        id: "penampahan",
        order: 3,
        title: "Penampahan Galungan",
        desc: "Memasang penjor"
      },
      {
        id: "galungan",
        order: 4,
        title: "Hari Galungan",
        desc: "Sembahyang di pura dan merajan"
      },
      {
        id: "manis",
        order: 5,
        title: "Manis Galungan",
        desc: "Bersilaturahmi"
      }
    ]
  };
  var level5Data = {
    instruction: "Pilih jawaban yang paling tepat tentang Hari Raya Kuningan:",
    minCorrect: 3,
    questions: [
      {
        id: 1,
        q: "Berapa hari Hari Raya Kuningan dirayakan setelah Galungan?",
        correctId: "a",
        options: [
          { id: "a", text: "10 hari setelah Galungan", correct: true },
          { id: "b", text: "5 hari setelah Galungan", correct: false },
          { id: "c", text: "30 hari setelah Galungan", correct: false }
        ],
        explanation: "Kuningan selalu jatuh pada hari Saniscara Kliwon Wuku Kuningan, tepat 10 hari setelah Galungan."
      },
      {
        id: 2,
        q: "Apa warna nasi persembahan yang menjadi ciri khas Kuningan?",
        correctId: "a",
        options: [
          { id: "a", text: "Nasi kuning", correct: true },
          { id: "b", text: "Nasi merah", correct: false },
          { id: "c", text: "Nasi hitam", correct: false }
        ],
        explanation: "Nasi kuning beraroma kunyit melambangkan kemakmuran dan rasa terima kasih atas anugerah Hyang Widhi."
      },
      {
        id: 3,
        q: "Kapan batas waktu sembahyang pada Hari Kuningan sebaiknya selesai?",
        correctId: "a",
        options: [
          { id: "a", text: "Sebelum tengah hari (pukul 12.00 siang)", correct: true },
          { id: "b", text: "Menjelang tengah malam", correct: false },
          { id: "c", text: "Bebas hingga esok pagi", correct: false }
        ],
        explanation: "Diyakini para dewa dan leluhur kembali ke alam suci saat surya tepat di atas kepala (tengah hari)."
      },
      {
        id: 4,
        q: "Perlengkapan anyaman janur khas apa yang dipasang saat Kuningan?",
        correctId: "a",
        options: [
          { id: "a", text: "Tamiang dan endongan", correct: true },
          { id: "b", text: "Ketupat dan obor", correct: false },
          { id: "c", text: "Kembang api", correct: false }
        ],
        explanation: "Tamiang melambangkan perisai perlindungan diri dan endongan melambangkan bekal kebajikan spiritual."
      },
      {
        id: 5,
        q: "Apa perbedaan makna utama antara Galungan dan Kuningan?",
        correctId: "a",
        options: [
          { id: "a", text: "Galungan merayakan kemenangan Dharma; Kuningan memohon keselamatan dan menghormati leluhur", correct: true },
          { id: "b", text: "Kuningan adalah perayaan tahun baru; Galungan adalah hari panen", correct: false },
          { id: "c", text: "Tidak ada perbedaan makna sama sekali", correct: false }
        ],
        explanation: "Galungan fokus pada kemenangan kebajikan melawan keburukan; Kuningan fokus pada rasa syukur perpisahan berkah leluhur."
      }
    ]
  };
  var level6Data = {
    instruction: "Tentukan pelaksanaan Brata Penyepian yang sesuai dengan skenario:",
    scenarios: [
      {
        id: 1,
        q: "Lampu dimatikan di malam hari dan dilarang menyalakan api atau kompor:",
        correctId: "geni",
        options: [
          { id: "geni", label: "Amati Geni", correct: true },
          { id: "karya", label: "Amati Karya", correct: false },
          { id: "lelanguan", label: "Amati Lelanguan", correct: false },
          { id: "lelungan", label: "Amati Lelungan", correct: false }
        ],
        explanation: "Amati Geni adalah pantangan menyalakan api fisik maupun api amarah hawa nafsu."
      },
      {
        id: 2,
        q: "Seluruh aktivitas pekerjaan, kantor, dan pasar dihentikan selama 24 jam:",
        correctId: "karya",
        options: [
          { id: "karya", label: "Amati Karya", correct: true },
          { id: "geni", label: "Amati Geni", correct: false },
          { id: "lelanguan", label: "Amati Lelanguan", correct: false },
          { id: "lelungan", label: "Amati Lelungan", correct: false }
        ],
        explanation: "Amati Karya adalah hening dari segala rutinitas kerja fisik untuk introspeksi batin."
      },
      {
        id: 3,
        q: "Tidak menyalakan musik, televisi, internet berisik, atau mengadakan pesta hiburan:",
        correctId: "lelanguan",
        options: [
          { id: "lelanguan", label: "Amati Lelanguan", correct: true },
          { id: "geni", label: "Amati Geni", correct: false },
          { id: "karya", label: "Amati Karya", correct: false },
          { id: "lelungan", label: "Amati Lelungan", correct: false }
        ],
        explanation: "Amati Lelanguan adalah pantangan mencari hiburan indrawi agar pikiran fokus pada keheningan sejati."
      },
      {
        id: 4,
        q: "Tetap berada di dalam rumah dan tidak bepergian keluar pekarangan:",
        correctId: "lelungan",
        options: [
          { id: "lelungan", label: "Amati Lelungan", correct: true },
          { id: "karya", label: "Amati Karya", correct: false },
          { id: "geni", label: "Amati Geni", correct: false },
          { id: "lelanguan", label: "Amati Lelanguan", correct: false }
        ],
        explanation: "Amati Lelungan adalah pantangan keluar rumah agar jalanan pulau hening total dan suci."
      },
      {
        id: 5,
        q: "Kapan pawai ogoh-ogoh raksasa diarak keliling desa?",
        correctId: "malam",
        options: [
          { id: "malam", label: "Malam sebelum Nyepi (Pengrupukan)", correct: true },
          { id: "pagi", label: "Pagi hari saat Nyepi berlangsung", correct: false },
          { id: "sehari", label: "Sehari setelah Nyepi (Ngembak Geni)", correct: false },
          { id: "kuningan", label: "Saat Hari Raya Kuningan", correct: false }
        ],
        explanation: "Pawai Ogoh-ogoh diadakan pada malam Pengerupukan untuk menetralisir energi negatif bhuta kala sebelum fajar Nyepi."
      }
    ]
  };

  var currentWork = null;
  var categoryWorks = [];
  var currentIndex = 0;
  var originCardEl = null;
  var onWorkChangeCallback = null;
  var zoomLevel = 1;
  var panX = 0;
  var panY = 0;
  var isPanning = false;
  var startPointerX = 0;
  var startPointerY = 0;
  var startPanX = 0;
  var startPanY = 0;
  function initViewer(onWorkChange) {
    onWorkChangeCallback = onWorkChange;
    const modal = document.getElementById("detailViewerModal");
    if (!modal) return;
    const closeBtn = document.getElementById("viewerCloseBtn");
    const backdrop = document.getElementById("viewerBackdrop");
    const zoomInBtn = document.getElementById("viewerZoomIn");
    const zoomOutBtn = document.getElementById("viewerZoomOut");
    const resetZoomBtn = document.getElementById("viewerResetZoom");
    const prevBtn = document.getElementById("viewerPrevBtn");
    const nextBtn = document.getElementById("viewerNextBtn");
    const viewport = document.getElementById("viewerViewport");
    if (closeBtn) closeBtn.addEventListener("click", closeViewer);
    if (backdrop) backdrop.addEventListener("click", closeViewer);
    window.addEventListener("keydown", (e) => {
      if (modal.classList.contains("hidden")) return;
      if (e.key === "Escape") {
        closeViewer();
      } else if (e.key === "ArrowLeft") {
        navigateViewer(-1);
      } else if (e.key === "ArrowRight") {
        navigateViewer(1);
      }
    });
    if (zoomInBtn) zoomInBtn.addEventListener("click", () => setZoom(zoomLevel + 0.4));
    if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => setZoom(zoomLevel - 0.4));
    if (resetZoomBtn) resetZoomBtn.addEventListener("click", () => setZoom(1));
    if (viewport) {
      viewport.addEventListener("dblclick", (e) => {
        e.preventDefault();
        setZoom(zoomLevel > 1.2 ? 1 : 2.5);
      });
      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.25 : -0.25;
        setZoom(zoomLevel + delta);
      }, { passive: false });
      viewport.addEventListener("mousedown", (e) => {
        if (zoomLevel <= 1.05) return;
        isPanning = true;
        startPointerX = e.clientX;
        startPointerY = e.clientY;
        startPanX = panX;
        startPanY = panY;
        viewport.style.cursor = "grabbing";
      });
      window.addEventListener("mousemove", (e) => {
        if (!isPanning) return;
        const dx = e.clientX - startPointerX;
        const dy = e.clientY - startPointerY;
        updatePanClamped(startPanX + dx, startPanY + dy);
      });
      window.addEventListener("mouseup", () => {
        if (!isPanning) return;
        isPanning = false;
        if (viewport) viewport.style.cursor = zoomLevel > 1.05 ? "grab" : "default";
      });
    }
    if (prevBtn) prevBtn.addEventListener("click", () => navigateViewer(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => navigateViewer(1));
  }
  function openViewer(work, allCategoryWorks, sourceCardEl) {
    currentWork = work;
    categoryWorks = allCategoryWorks;
    currentIndex = categoryWorks.findIndex((w) => w.id === work.id);
    originCardEl = sourceCardEl;
    const modal = document.getElementById("detailViewerModal");
    const dialog = document.getElementById("viewerDialog");
    const backdrop = document.getElementById("viewerBackdrop");
    if (!modal || !dialog) return;
    document.body.style.overflow = "hidden";
    renderViewerContent();
    zoomLevel = 1;
    panX = 0;
    panY = 0;
    updateImageTransform();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    if (window.gsap && originCardEl) {
      const originRect = originCardEl.getBoundingClientRect();
      const targetRect = dialog.getBoundingClientRect();
      const scaleX = originRect.width / Math.max(targetRect.width, 1);
      const scaleY = originRect.height / Math.max(targetRect.height, 1);
      const deltaX = originRect.left + originRect.width / 2 - (targetRect.left + targetRect.width / 2);
      const deltaY = originRect.top + originRect.height / 2 - (targetRect.top + targetRect.height / 2);
      window.gsap.fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      window.gsap.fromTo(
        dialog,
        {
          x: deltaX,
          y: deltaY,
          scaleX,
          scaleY,
          opacity: 0.5
        },
        {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        }
      );
    }
  }
  function closeViewer() {
    const modal = document.getElementById("detailViewerModal");
    const dialog = document.getElementById("viewerDialog");
    const backdrop = document.getElementById("viewerBackdrop");
    if (!modal || !dialog) return;
    document.body.style.overflow = "auto";
    if (window.gsap && originCardEl) {
      const originRect = originCardEl.getBoundingClientRect();
      const targetRect = dialog.getBoundingClientRect();
      const deltaX = originRect.left + originRect.width / 2 - (targetRect.left + targetRect.width / 2);
      const deltaY = originRect.top + originRect.height / 2 - (targetRect.top + targetRect.height / 2);
      window.gsap.to(backdrop, { opacity: 0, duration: 0.35, ease: "power2.in" });
      window.gsap.to(dialog, {
        x: deltaX,
        y: deltaY,
        scale: 0.6,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          modal.classList.add("hidden");
          modal.classList.remove("flex");
          window.gsap.set(dialog, { x: 0, y: 0, scale: 1, opacity: 1 });
        }
      });
    } else {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  }
  function navigateViewer(direction) {
    if (categoryWorks.length <= 1) return;
    currentIndex = (currentIndex + direction + categoryWorks.length) % categoryWorks.length;
    currentWork = categoryWorks[currentIndex];
    zoomLevel = 1;
    panX = 0;
    panY = 0;
    updateImageTransform();
    renderViewerContent();
    if (onWorkChangeCallback) {
      onWorkChangeCallback(currentWork);
    }
    if (window.gsap) {
      window.gsap.fromTo(
        "#viewerImage",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }
  function setZoom(newZoom) {
    const clampedZoom = Math.min(Math.max(newZoom, 1), 3);
    zoomLevel = parseFloat(clampedZoom.toFixed(2));
    if (zoomLevel <= 1) {
      panX = 0;
      panY = 0;
    } else {
      updatePanClamped(panX, panY);
    }
    const zoomLabel = document.getElementById("viewerZoomLabel");
    if (zoomLabel) zoomLabel.innerText = `${Math.round(zoomLevel * 100)}%`;
    const viewport = document.getElementById("viewerViewport");
    if (viewport) viewport.style.cursor = zoomLevel > 1.05 ? "grab" : "default";
    updateImageTransform();
  }
  function updatePanClamped(targetX, targetY) {
    const viewport = document.getElementById("viewerViewport");
    const img = document.getElementById("viewerImage");
    if (!viewport || !img) return;
    const vpW = viewport.clientWidth;
    const vpH = viewport.clientHeight;
    const maxPanX = vpW * (zoomLevel - 1) / 2;
    const maxPanY = vpH * (zoomLevel - 1) / 2;
    panX = Math.min(Math.max(targetX, -maxPanX), maxPanX);
    panY = Math.min(Math.max(targetY, -maxPanY), maxPanY);
    updateImageTransform();
  }
  function updateImageTransform() {
    const img = document.getElementById("viewerImage");
    if (!img) return;
    img.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
  }
  function renderViewerContent() {
    if (!currentWork) return;
    const imgEl = document.getElementById("viewerImage");
    const titleEl = document.getElementById("viewerTitle");
    const subtitleEl = document.getElementById("viewerSubtitle");
    const maknaEl = document.getElementById("viewerMakna");
    const asalEl = document.getElementById("viewerAsal");
    const konteksEl = document.getElementById("viewerKonteks");
    const placesContainer = document.getElementById("viewerPlacesContainer");
    if (imgEl) {
      if (currentWork.photo && currentWork.photo !== "placeholder") {
        imgEl.src = currentWork.photo;
        imgEl.style.display = "block";
      } else {
        imgEl.src = "assets/eksplorasi/budaya/tari_legong.webp";
      }
      imgEl.alt = currentWork.title;
    }
    if (titleEl) titleEl.innerText = currentWork.title;
    const cat = categories.find((c) => c.id === currentWork.category);
    if (subtitleEl) subtitleEl.innerText = (cat ? cat.cardTag : currentWork.subtitle) || "Budaya Bali";
    if (maknaEl) maknaEl.innerText = currentWork.makna;
    if (asalEl) asalEl.innerText = currentWork.asal;
    if (konteksEl) konteksEl.innerText = currentWork.konteks;
    if (placesContainer && currentWork.places) {
      placesContainer.innerHTML = currentWork.places.map((p) => {
        const query = encodeURIComponent(`${p.name} ${p.area} Bali`);
        return `
          <div class="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-blueAccent/30 shadow-xs">
            <div class="flex flex-col">
              <span class="font-body font-extrabold text-[13px] text-textDarkGreen">${p.name}</span>
              <span class="font-body font-bold text-[11px] text-textMuted">${p.area}</span>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-body font-extrabold text-[12px] text-blueAccent hover:underline">
              <span>Get Directions</span>
              <i data-lucide="arrow-right" class="w-3 h-3"></i>
            </a>
          </div>
        `;
      }).join("");
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function initBook() {
    const bookEl = document.getElementById("artBook3D");
    if (!bookEl) return;
    const leaves = [
      document.getElementById("bookLeaf1"),
      document.getElementById("bookLeaf2"),
      document.getElementById("bookLeaf3")
    ].filter(Boolean);
    const prevBtn = document.getElementById("bookPrevBtn");
    const nextBtn = document.getElementById("bookNextBtn");
    const counterPill = document.getElementById("bookCounterPill");
    const startExploreBtn = document.getElementById("bookStartExploreBtn");
    const TOTAL_SPREADS = 3;
    let currentSpread = 1;
    let isAnimating = false;
    function updatePileZIndices() {
      leaves.forEach((leaf, idx) => {
        const leafNum = idx + 1;
        if (leafNum < currentSpread) {
          leaf.style.zIndex = leafNum * 10;
        } else {
          leaf.style.zIndex = (TOTAL_SPREADS - leafNum + 1) * 10;
        }
      });
      if (counterPill) {
        counterPill.textContent = `${currentSpread} / ${TOTAL_SPREADS}`;
      }
      if (prevBtn) {
        prevBtn.style.opacity = currentSpread === 1 ? "0.45" : "1";
        prevBtn.style.cursor = currentSpread === 1 ? "default" : "pointer";
      }
      if (nextBtn) {
        nextBtn.style.opacity = currentSpread === TOTAL_SPREADS ? "0.45" : "1";
        nextBtn.style.cursor = currentSpread === TOTAL_SPREADS ? "default" : "pointer";
      }
    }
    updatePileZIndices();
    const prefersReduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function flipNext() {
      if (isAnimating || currentSpread >= TOTAL_SPREADS) return;
      const leafToFlip = leaves[currentSpread - 1];
      if (!leafToFlip) return;
      isAnimating = true;
      leafToFlip.style.zIndex = "100";
      if (prefersReduced() || !window.gsap) {
        leafToFlip.style.transform = "rotateY(-180deg)";
        currentSpread++;
        updatePileZIndices();
        isAnimating = false;
        return;
      }
      const frontOverlay = leafToFlip.querySelector(".front .page-curl-overlay");
      const backOverlay = leafToFlip.querySelector(".back .page-curl-overlay");
      const tl = window.gsap.timeline({
        onComplete: () => {
          currentSpread++;
          updatePileZIndices();
          isAnimating = false;
        }
      });
      tl.to(leafToFlip, {
        rotateY: -180,
        duration: 0.9,
        ease: "power2.inOut"
      }, 0);
      tl.to(leafToFlip, {
        z: 32,
        duration: 0.45,
        ease: "power2.out"
      }, 0);
      tl.to(leafToFlip, {
        z: 0,
        duration: 0.45,
        ease: "power2.in"
      }, 0.45);
      if (frontOverlay && backOverlay) {
        tl.to(frontOverlay, { opacity: 0.22, duration: 0.45, ease: "power2.out" }, 0);
        tl.to(frontOverlay, { opacity: 0, duration: 0.45, ease: "power2.in" }, 0.45);
        tl.fromTo(backOverlay, { opacity: 0.22 }, { opacity: 0, duration: 0.45, ease: "power2.in" }, 0.45);
      }
    }
    function flipPrev() {
      if (isAnimating || currentSpread <= 1) return;
      const leafToFlip = leaves[currentSpread - 2];
      if (!leafToFlip) return;
      isAnimating = true;
      leafToFlip.style.zIndex = "100";
      if (prefersReduced() || !window.gsap) {
        leafToFlip.style.transform = "rotateY(0deg)";
        currentSpread--;
        updatePileZIndices();
        isAnimating = false;
        return;
      }
      const frontOverlay = leafToFlip.querySelector(".front .page-curl-overlay");
      const backOverlay = leafToFlip.querySelector(".back .page-curl-overlay");
      const tl = window.gsap.timeline({
        onComplete: () => {
          currentSpread--;
          updatePileZIndices();
          isAnimating = false;
        }
      });
      tl.to(leafToFlip, {
        rotateY: 0,
        duration: 0.9,
        ease: "power2.inOut"
      }, 0);
      tl.to(leafToFlip, {
        z: 32,
        duration: 0.45,
        ease: "power2.out"
      }, 0);
      tl.to(leafToFlip, {
        z: 0,
        duration: 0.45,
        ease: "power2.in"
      }, 0.45);
      if (frontOverlay && backOverlay) {
        tl.to(backOverlay, { opacity: 0.22, duration: 0.45, ease: "power2.out" }, 0);
        tl.to(backOverlay, { opacity: 0, duration: 0.45, ease: "power2.in" }, 0.45);
        tl.fromTo(frontOverlay, { opacity: 0.22 }, { opacity: 0, duration: 0.45, ease: "power2.in" }, 0.45);
      }
    }
    if (nextBtn) nextBtn.addEventListener("click", flipNext);
    if (prevBtn) prevBtn.addEventListener("click", flipPrev);
    window.addEventListener("keydown", (e) => {
      const rect = bookEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowRight") {
        flipNext();
      } else if (e.key === "ArrowLeft") {
        flipPrev();
      }
    });
    document.querySelectorAll(".page-corner-hint-right").forEach((el) => {
      el.addEventListener("click", flipNext);
    });
    document.querySelectorAll(".page-corner-hint-left").forEach((el) => {
      el.addEventListener("click", flipPrev);
    });
    let isDragging = false;
    let dragDirection = null;
    let startX = 0;
    let activeLeaf = null;
    bookEl.addEventListener("pointerdown", (e) => {
      if (isAnimating) return;
      if (e.target.closest("button, a, input, select")) return;
      const bookRect = bookEl.getBoundingClientRect();
      const clickXRel = e.clientX - bookRect.left;
      const isRightSide = clickXRel > bookRect.width / 2;
      if (isRightSide && currentSpread < TOTAL_SPREADS) {
        isDragging = true;
        dragDirection = "forward";
        startX = e.clientX;
        activeLeaf = leaves[currentSpread - 1];
        activeLeaf.style.zIndex = "100";
        bookEl.setPointerCapture(e.pointerId);
      } else if (!isRightSide && currentSpread > 1) {
        isDragging = true;
        dragDirection = "backward";
        startX = e.clientX;
        activeLeaf = leaves[currentSpread - 2];
        activeLeaf.style.zIndex = "100";
        bookEl.setPointerCapture(e.pointerId);
      }
    });
    bookEl.addEventListener("pointermove", (e) => {
      if (!isDragging || !activeLeaf) return;
      const deltaX = e.clientX - startX;
      const leafWidth = activeLeaf.offsetWidth || 320;
      if (dragDirection === "forward") {
        const p = Math.min(Math.max(-deltaX / leafWidth, 0), 1);
        const angle = -p * 180;
        const lift = Math.sin(p * Math.PI) * 32;
        activeLeaf.style.transform = `rotateY(${angle}deg) translateZ(${lift}px)`;
      } else if (dragDirection === "backward") {
        const p = Math.min(Math.max(deltaX / leafWidth, 0), 1);
        const angle = -180 + p * 180;
        const lift = Math.sin(p * Math.PI) * 32;
        activeLeaf.style.transform = `rotateY(${angle}deg) translateZ(${lift}px)`;
      }
    });
    const finishDrag = (e) => {
      if (!isDragging || !activeLeaf) return;
      isDragging = false;
      const deltaX = e.clientX - startX;
      const leafWidth = activeLeaf.offsetWidth || 320;
      const threshold = leafWidth * 0.35;
      if (dragDirection === "forward") {
        if (-deltaX > threshold) {
          isAnimating = true;
          window.gsap.to(activeLeaf, {
            rotateY: -180,
            z: 0,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              currentSpread++;
              updatePileZIndices();
              isAnimating = false;
            }
          });
        } else {
          window.gsap.to(activeLeaf, {
            rotateY: 0,
            z: 0,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              updatePileZIndices();
            }
          });
        }
      } else if (dragDirection === "backward") {
        if (deltaX > threshold) {
          isAnimating = true;
          window.gsap.to(activeLeaf, {
            rotateY: 0,
            z: 0,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              currentSpread--;
              updatePileZIndices();
              isAnimating = false;
            }
          });
        } else {
          window.gsap.to(activeLeaf, {
            rotateY: -180,
            z: 0,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              updatePileZIndices();
            }
          });
        }
      }
      activeLeaf = null;
      dragDirection = null;
    };
    bookEl.addEventListener("pointerup", finishDrag);
    bookEl.addEventListener("pointercancel", finishDrag);
    if (startExploreBtn) {
      startExploreBtn.addEventListener("click", () => {
        const section1 = document.getElementById("stage-root");
        if (section1) {
          section1.scrollIntoView({ behavior: "smooth" });
        }
        if (window.setCategory) {
          window.setCategory("tari");
        }
      });
    }
    function setSpreadInstant(target) {
      target = Math.max(1, Math.min(target, TOTAL_SPREADS));
      currentSpread = target;
      leaves.forEach((leaf, idx) => {
        const leafNum = idx + 1;
        if (leafNum < currentSpread) {
          leaf.style.transform = "rotateY(-180deg)";
        } else {
          leaf.style.transform = "rotateY(0deg)";
        }
      });
      updatePileZIndices();
    }
    window.sakalaBook = {
      flipNext,
      flipPrev,
      goToSpread: setSpreadInstant
    };
  }

  var landYLookup = new Float32Array(3301);
  var croppedIcons = {};

  var currentLevelNum = 1;
  var onCompleteCallback = null;
  var currentStepIndex = 0;
  var totalSteps = 5;
  function renderActivity(levelNum, onComplete) {
    currentLevelNum = levelNum;
    onCompleteCallback = onComplete;
    currentStepIndex = 0;
    const levelObj = levels.find((l) => l.num === levelNum);
    totalSteps = levelNum === 1 ? 3 : 5;
    setHeaderInfo(levelObj, 0, totalSteps, `0 dari ${totalSteps} selesai`);
    setMascotText(levelObj ? levelObj.hint : "Mari selesaikan tantangan ini!");
    setPrimaryButton("Cek jawaban", "\u2713");
    switch (levelNum) {
      case 1:
        renderLevel1();
        break;
      case 2:
        renderLevel2();
        break;
      case 3:
        renderLevel3();
        break;
      case 4:
        renderLevel4();
        break;
      case 5:
        renderLevel5();
        break;
      case 6:
        renderLevel6();
        break;
    }
  }
  function setHeaderInfo(levelObj, step, total, subText = "") {
    const questTitle = document.getElementById("questTitle");
    const questSubtitle = document.getElementById("questSubtitle");
    const questCounterText = document.getElementById("questCounterText");
    const questProgressIcon = document.getElementById("questProgressIcon");
    const questProgressSub = document.getElementById("questProgressSub");
    const questProgressFraction = document.getElementById("questProgressFraction");
    const questProgressBarFill = document.getElementById("questProgressBarFill");
    if (questTitle && levelObj) questTitle.textContent = `Level ${levelObj.num}`;
    if (questSubtitle && levelObj) questSubtitle.textContent = levelObj.title;
    if (questCounterText) questCounterText.textContent = `Skor ${step}/${total}`;
    if (questProgressIcon && levelObj) {
      questProgressIcon.src = croppedIcons[levelObj.icon] || levelObj.icon;
    }
    if (questProgressSub && subText) questProgressSub.textContent = subText;
    if (questProgressFraction) questProgressFraction.textContent = `${step}/${total}`;
    if (questProgressBarFill) {
      const pct = Math.min(100, Math.round(step / total * 100));
      questProgressBarFill.style.width = `${pct}%`;
    }
  }
  function setFeedback(text, type = "neutral") {
    const bubble = document.getElementById("questMascotBubbleText");
    const box = document.getElementById("questMascotBubbleBox");
    const arrowFill = document.getElementById("bubbleArrowFill");
    const arrowStroke = document.getElementById("bubbleArrowStroke");
    if (bubble) {
      bubble.textContent = text;
      if (type === "correct") {
        bubble.style.color = "#0F4D3A";
      } else if (type === "wrong") {
        bubble.style.color = "#D95B3F";
      } else {
        bubble.style.color = "#0F4D3A";
      }
    }
    if (box) {
      if (type === "correct") {
        box.style.backgroundColor = "#F7FFF0";
        box.style.borderColor = "#1F8A63";
        if (arrowFill) arrowFill.setAttribute("fill", "#F7FFF0");
        if (arrowStroke) arrowStroke.setAttribute("stroke", "#1F8A63");
      } else if (type === "wrong") {
        box.style.backgroundColor = "#FFF5F2";
        box.style.borderColor = "#D95B3F";
        if (arrowFill) arrowFill.setAttribute("fill", "#FFF5F2");
        if (arrowStroke) arrowStroke.setAttribute("stroke", "#D95B3F");
      } else {
        box.style.backgroundColor = "#FFFFFF";
        box.style.borderColor = "#E3F0CF";
        if (arrowFill) arrowFill.setAttribute("fill", "#FFFFFF");
        if (arrowStroke) arrowStroke.setAttribute("stroke", "#E3F0CF");
      }
    }
  }
  function setMascotText(text) {
    setFeedback(text, "neutral");
  }
  function setPrimaryButton(text, icon = "\u2713", onClick = null) {
    const btn = document.getElementById("activityPrimaryBtn");
    const iconEl = document.getElementById("questBtnIcon");
    const textEl = document.getElementById("questBtnText");
    if (iconEl) iconEl.textContent = icon;
    if (textEl) textEl.textContent = text;
    if (btn) {
      btn.style.display = "flex";
      if (onClick) btn.onclick = onClick;
    }
  }
  function animateMascotHop() {
    const mascot = document.getElementById("questMascotImg");
    if (mascot && window.gsap) {
      window.gsap.to(mascot, {
        y: -14,
        duration: 0.18,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    }
  }
  function animateMascotTilt() {
    const mascot = document.getElementById("questMascotImg");
    if (mascot && window.gsap) {
      window.gsap.to(mascot, {
        rotate: -10,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    }
  }
  function burstConfetti(targetEl) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const parent = document.getElementById("activityModalCard") || document.body;
    const parentRect = parent.getBoundingClientRect();
    const centerX = rect.left - parentRect.left + rect.width / 2;
    const centerY = rect.top - parentRect.top + rect.height / 2;
    const colors = ["#9ACD5A", "#2169B5", "#1F8A63", "#F2FFE0", "#FFD700", "#FF6B6B"];
    const particleCount = 14;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "card-confetti-particle";
      p.style.backgroundColor = colors[i % colors.length];
      p.style.left = `${centerX}px`;
      p.style.top = `${centerY}px`;
      parent.appendChild(p);
      const angle = i / particleCount * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const distance = 40 + Math.random() * 50;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      if (window.gsap) {
        window.gsap.to(p, {
          x: dx,
          y: dy,
          opacity: 0,
          scale: 0.2,
          rotation: Math.random() * 360,
          duration: 0.65,
          ease: "power2.out",
          onComplete: () => p.remove()
        });
      } else {
        setTimeout(() => p.remove(), 600);
      }
    }
  }
  function showLevelSuccess(title, message) {
    const contentEl = document.getElementById("activityContentArea");
    const levelObj = levels.find((l) => l.num === currentLevelNum);
    setHeaderInfo(levelObj, totalSteps, totalSteps, "Semua tantangan tuntas!");
    setMascotText("Luar biasa! Kamu memahami tradisi ini dengan sempurna.");
    animateMascotHop();
    if (contentEl) {
      burstConfetti(contentEl);
      contentEl.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center text-center p-3 select-none">
        <!-- Rubber-band bounce stamp badge -->
        <div class="w-20 h-20 rounded-full bg-[#1F8A63] border-4 border-[#9ACD5A] flex items-center justify-center text-white font-display text-4xl font-extrabold mb-3 shadow-xl stamp-badge-in">
          \u2713
        </div>
        <h3 class="font-display font-extrabold text-[24px] text-[#0F4D3A] leading-tight">
          ${title}
        </h3>
        <p class="font-body font-bold text-[14px] text-[#14634A] max-w-md mt-1 leading-snug overflow-wrap-anywhere">
          ${message}
        </p>
      </div>
    `;
    }
    setPrimaryButton(
      currentLevelNum < 6 ? `Lanjut ke Level ${currentLevelNum + 1} \u276F` : "Lihat Perayaan Akhir ",
      "",
      () => {
        if (onCompleteCallback) onCompleteCallback(currentLevelNum);
      }
    );
  }
  function renderLevel1() {
    const contentEl = document.getElementById("activityContentArea");
    const levelObj = levels.find((l) => l.num === 1);
    const matchedConcepts =                 new Set();
    let selectedConceptId = null;
    const pastelColors = ["#DDF3B0", "#BBD5F0", "#CDEFD9"];
    const render = () => {
      setHeaderInfo(
        levelObj,
        matchedConcepts.size,
        3,
        `${matchedConcepts.size} dari 3 konsep dipasangkan`
      );
      contentEl.innerHTML = `
      <div class="w-full flex flex-col gap-3 py-1 select-none">
        ${level1Data.meanings.map((m, idx) => {
        const isMatched = matchedConcepts.has(m.id);
        const tok = level1Data.tokens.find((t) => t.id === m.id);
        const isSelected = selectedConceptId === tok.id;
        const tileBg = pastelColors[idx % pastelColors.length];
        let iconSvg = "";
        if (m.id === "parahyangan") {
          iconSvg = `<svg viewBox="0 0 24 24" class="w-7 h-7 stroke-[#0F4D3A] fill-none stroke-[2]"><path d="M12 2v4M4 22h16M7 22V10l5-4 5 4v12M10 22v-6h4v6M3 14h3M18 14h3"/></svg>`;
        } else if (m.id === "pawongan") {
          iconSvg = `<svg viewBox="0 0 24 24" class="w-7 h-7 stroke-[#0F4D3A] fill-none stroke-[2]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
        } else {
          iconSvg = `<svg viewBox="0 0 24 24" class="w-7 h-7 stroke-[#0F4D3A] fill-none stroke-[2]"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
        }
        return `
              <div class="flex items-center gap-3 w-full">
                <!-- Concept Chip on Left (Draggable/Clickable Pill) -->
                <button
                  data-concept-id="${tok.id}"
                  class="concept-token ${isSelected ? "selected" : ""} ${isMatched ? "matched" : ""} shrink-0"
                  style="width: 170px; justify-content: center;"
                  ${isMatched ? "disabled" : ""}
                >
                  <span>${tok.label}</span>
                  ${isMatched ? `<span class="text-[#1F8A63]">\u2713</span>` : ""}
                </button>

                <!-- Meaning Card on Right with dashed drop zone -->
                <div
                  data-meaning-id="${m.id}"
                  class="meaning-target flex-1 flex items-center justify-between gap-3 ${isMatched ? "matched" : ""}"
                >
                  <div class="quest-tile-icon" style="background-color: ${tileBg};">
                    ${iconSvg}
                  </div>
                  <p class="flex-1 font-body font-bold text-[14px] text-[#0F4D3A] leading-snug">
                    ${m.text}
                  </p>
                  <div class="quest-status-chip ${isMatched ? "chip-correct" : ""}">
                    ${isMatched ? "\u2713" : ""}
                  </div>
                </div>
              </div>
            `;
      }).join("")}
      </div>
    `;
      contentEl.querySelectorAll(".concept-token").forEach((btn) => {
        btn.addEventListener("click", () => {
          selectedConceptId = btn.dataset.conceptId;
          setMascotText(`Konsep ${selectedConceptId.toUpperCase()} dipilih. Sentuh kartu maknanya di sebelah kanan!`);
          render();
        });
      });
      contentEl.querySelectorAll(".meaning-target").forEach((card) => {
        card.addEventListener("click", () => {
          const targetId = card.dataset.meaningId;
          if (!selectedConceptId) {
            setMascotText("Pilih konsep di kolom kiri terlebih dahulu ya!");
            animateMascotTilt();
            return;
          }
          if (targetId === selectedConceptId) {
            matchedConcepts.add(selectedConceptId);
            selectedConceptId = null;
            burstConfetti(card);
            animateMascotHop();
            setMascotText("Bagus sekali! Keharmonisan adalah kunci hidup damai.");
            if (matchedConcepts.size === 3) {
              setTimeout(() => {
                showLevelSuccess(
                  "Tri Hita Karana Terpahami!",
                  "Kamu telah menguasai tiga pilar keharmonisan hidup orang Bali: Parahyangan, Pawongan, dan Palemahan."
                );
              }, 600);
            } else {
              render();
            }
          } else {
            card.classList.add("card-wrong");
            setTimeout(() => card.classList.remove("card-wrong"), 400);
            animateMascotTilt();
            setMascotText("Belum pas. Periksa kata kuncinya: hubungan dengan Tuhan, sesama, atau alam?");
          }
        });
      });
    };
    setPrimaryButton("Cocokkan konsep", "", () => {
      setMascotText("Sentuh nama konsep di kiri lalu sentuh maknanya di kanan!");
    });
    render();
  }
  function renderLevel2() {
    const situations = level2Data.situations;
    const levelObj = levels.find((l) => l.num === 2);
    let curIndex = 0;
    let correctCount = 0;
    let isAnswered = false;
    let selectedOptionId = null;
    const pastelColors = ["#DDF3B0", "#BBD5F0", "#CDEFD9"];
    const renderSituation = (animated = true) => {
      const sit = situations[curIndex];
      selectedOptionId = null;
      isAnswered = false;
      setHeaderInfo(
        levelObj,
        correctCount,
        5,
        `Situasi ${curIndex + 1} dari 5: Pilih busana yang paling pantas`
      );
      setFeedback("Pilihlah busana yang paling sopan dan sesuai dengan situasi.", "neutral");
      const contentEl = document.getElementById("activityContentArea");
      const sceneSvg = getSceneSvg(sit.id);
      contentEl.innerHTML = `
      <div id="situationSlideContainer" class="w-full flex flex-col py-1 select-none">
        <!-- Scene Illustration Banner -->
        <div class="w-full h-[64px] rounded-[20px] bg-white border-2 border-[#E3F0CF] shadow-[0_4px_0_#DCEBC4] flex items-center px-4 gap-3 shrink-0" style="margin-bottom: 16px;">
          <div class="w-[48px] h-[48px] shrink-0 flex items-center justify-center">
            ${sceneSvg}
          </div>
          <div class="flex-1 min-w-0">
            <span class="quest-label-text font-body font-extrabold text-[11px] uppercase tracking-wider text-[#1F8A63] block" style="margin-bottom: 6px;">SITUASI ${curIndex + 1} DARI 5</span>
            <p class="quest-question-text font-display font-extrabold text-[16px] text-[#0F4D3A] leading-[1.3] line-clamp-2" style="line-height: 1.3;">
              ${sit.scenario}
            </p>
          </div>
        </div>

        <!-- 3 Option Rows with 10px gap -->
        <div class="flex flex-col w-full" style="gap: 10px;">
          ${sit.options.map((opt, i) => {
        const pictoSvg = getClothingSvg(opt.icon);
        const tileBg = pastelColors[i % pastelColors.length];
        return `
                <div
                  data-option-id="${opt.id}"
                  class="quest-row-card"
                  style="padding: 12px 16px; gap: 12px; line-height: 1.35;"
                >
                  <div class="quest-tile-icon" style="background-color: ${tileBg}; width: 44px; height: 44px; border-radius: 14px;">
                    ${pictoSvg}
                  </div>
                  <h4 class="quest-opt-text flex-1 font-display font-extrabold text-[16px] text-[#0F4D3A]" style="line-height: 1.35; margin-right: 12px;">
                    ${opt.label}
                  </h4>
                  <div class="quest-status-chip"></div>
                </div>
              `;
      }).join("")}
        </div>
      </div>
    `;
      contentEl.querySelectorAll(".quest-row-card").forEach((card) => {
        card.addEventListener("click", () => {
          if (isAnswered) return;
          contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
            c.classList.remove("card-selected", "card-correct", "card-wrong");
          });
          contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
            ch.classList.remove("chip-correct", "chip-wrong");
            ch.textContent = "";
          });
          card.classList.add("card-selected");
          selectedOptionId = card.dataset.optionId;
          setFeedback("Pilihan ditandai. Klik 'Cek jawaban' untuk memverifikasi!", "neutral");
          const primaryBtn2 = document.getElementById("activityPrimaryBtn");
          if (primaryBtn2) {
            primaryBtn2.disabled = false;
            primaryBtn2.classList.remove("opacity-70", "pointer-events-none");
          }
        });
      });
      setPrimaryButton("Cek jawaban", "\u2713", checkAnswer);
      const primaryBtn = document.getElementById("activityPrimaryBtn");
      if (primaryBtn) {
        primaryBtn.disabled = false;
        primaryBtn.classList.remove("opacity-70", "pointer-events-none");
      }
      if (animated && window.gsap) {
        window.gsap.fromTo(
          "#situationSlideContainer",
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      }
    };
    const checkAnswer = () => {
      if (!selectedOptionId) {
        setFeedback("Pilih satu jawaban dulu", "neutral");
        animateMascotTilt();
        return;
      }
      const sit = situations[curIndex];
      const isCorrect = selectedOptionId === sit.correctId;
      const contentEl = document.getElementById("activityContentArea");
      const selectedCard = contentEl.querySelector(`[data-option-id="${selectedOptionId}"]`);
      const chip = selectedCard ? selectedCard.querySelector(".quest-status-chip") : null;
      if (isCorrect) {
        if (!isAnswered) {
          isAnswered = true;
          correctCount++;
          setHeaderInfo(
            levelObj,
            correctCount,
            5,
            `Situasi ${curIndex + 1} dari 5: Berhasil dijawab`
          );
        }
        contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
          c.classList.remove("card-selected", "card-wrong");
        });
        contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
          ch.classList.remove("chip-wrong");
          ch.textContent = "";
        });
        if (selectedCard) {
          selectedCard.classList.add("card-correct");
        }
        if (chip) {
          chip.classList.add("chip-correct");
          chip.textContent = "\u2713";
        }
        const opt = sit.options.find((o) => o.id === selectedOptionId);
        const explanation = opt?.reason || sit.reason || "Pilihan pakaianmu sudah sangat tepat dan sopan.";
        setFeedback("Tepat sekali! " + explanation, "correct");
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = true;
          primaryBtn.classList.add("opacity-70", "pointer-events-none");
        }
        burstConfetti(selectedCard);
        animateMascotHop();
        setTimeout(() => {
          if (primaryBtn) {
            primaryBtn.disabled = false;
            primaryBtn.classList.remove("opacity-70", "pointer-events-none");
          }
          setPrimaryButton(
            curIndex < 4 ? "Lanjut ke Situasi Berikutnya \u276F" : "Selesaikan Level 2 \u276F",
            "\u2713",
            () => {
              if (curIndex < 4) {
                curIndex++;
                renderSituation(true);
              } else {
                showLevelSuccess(
                  "Tata Busana Adat Dikuasai!",
                  "Kamu paham kapan harus memakai kamen, selendang, dan udeng saat berkunjung ke tempat suci di Bali."
                );
              }
            }
          );
        }, 500);
      } else {
        contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
          c.classList.remove("card-selected", "card-correct");
        });
        contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
          ch.classList.remove("chip-correct");
          ch.textContent = "";
        });
        if (selectedCard) {
          selectedCard.classList.add("card-wrong");
        }
        if (chip) {
          chip.classList.add("chip-wrong");
          chip.textContent = "\u2715";
        }
        animateMascotTilt();
        setFeedback("Pilihan ini kurang pantas untuk tempat suci. Coba pilih pakaian yang lebih tertutup.", "wrong");
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = false;
          primaryBtn.classList.remove("opacity-70", "pointer-events-none");
        }
      }
    };
    renderSituation(false);
  }
  function renderLevel3() {
    const parts = level3Data.parts;
    const levelObj = levels.find((l) => l.num === 3);
    let currentPartIndex = 0;
    const contentEl = document.getElementById("activityContentArea");
    const renderPart = () => {
      const targetPart = parts[currentPartIndex];
      setHeaderInfo(
        levelObj,
        currentPartIndex,
        5,
        `${currentPartIndex} dari 5 bagian ditemukan`
      );
      setMascotText(`Sentuh bagian "${targetPart.title}" pada canang sari di atas!`);
      contentEl.innerHTML = `
      <div class="w-full flex flex-col items-center gap-3 py-1 select-none">
        <!-- Interactive Canang Card (~195px high, rounded 22) -->
        <div class="relative w-full max-w-[480px] h-[195px] bg-white rounded-[22px] border-2 border-[#E3F0CF] shadow-[0_4px_0_#DCEBC4] flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 460 300" class="w-full h-full object-contain p-2">
            <defs>
              <filter id="hotspotGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>
            </defs>

            <!-- 1. Ceper (Janur Base Tray) -->
            <g id="hotspot-ceper" class="canang-hotspot" data-part-id="ceper">
              <rect x="70" y="50" width="320" height="200" rx="20" fill="#B2DE74" stroke="#4FAE6C" stroke-width="4"/>
              <rect x="85" y="65" width="290" height="170" rx="14" fill="#DDF5A8" stroke="#3E9B5B" stroke-width="2"/>
              <line x1="85" y1="150" x2="375" y2="150" stroke="#3E9B5B" stroke-width="2" stroke-dasharray="6 6"/>
              <line x1="230" y1="65" x2="230" y2="235" stroke="#3E9B5B" stroke-width="2" stroke-dasharray="6 6"/>
            </g>

            <!-- 2. Plawa (Green Leaves Base) -->
            <g id="hotspot-plawa" class="canang-hotspot" data-part-id="plawa">
              <path d="M120 100 C 160 80 200 90 230 110 C 260 90 300 80 340 100 C 320 140 280 150 230 140 C 180 150 140 140 120 100 Z" fill="#2ECC71" stroke="#1F8A63" stroke-width="3"/>
            </g>

            <!-- 3. Porosan (Betel, Lime & Areca Betel Roll) -->
            <g id="hotspot-porosan" class="canang-hotspot" data-part-id="porosan">
              <rect x="200" y="125" width="60" height="35" rx="10" fill="#A0522D" stroke="#5D3A1A" stroke-width="2.5"/>
              <line x1="210" y1="142" x2="250" y2="142" stroke="#FFF7C2" stroke-width="3"/>
              <circle cx="218" cy="142" r="3" fill="#E74C3C"/>
              <circle cx="242" cy="142" r="3" fill="#FFFFFF"/>
            </g>

            <!-- 4. Bunga 4 Warna (Four Color Petals) -->
            <g id="hotspot-bunga" class="canang-hotspot" data-part-id="bunga">
              <!-- East: White -->
              <circle cx="230" cy="85" r="22" fill="#FFFFFF" stroke="#D5D8DC" stroke-width="2"/>
              <!-- South: Red -->
              <circle cx="280" cy="145" r="22" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/>
              <!-- West: Yellow -->
              <circle cx="230" cy="205" r="22" fill="#F1C40F" stroke="#F39C12" stroke-width="2"/>
              <!-- North: Blue/Green -->
              <circle cx="180" cy="145" r="22" fill="#3498DB" stroke="#2980B9" stroke-width="2"/>
            </g>

            <!-- 5. Sampian Urasari (Woven Janur Crown) -->
            <g id="hotspot-sampian" class="canang-hotspot" data-part-id="sampian">
              <path d="M190 70 L230 40 L270 70 L290 100 L270 120 L230 110 L190 120 L170 100 Z" fill="none" stroke="#F1C40F" stroke-width="4" stroke-linejoin="round"/>
              <circle cx="230" cy="40" r="5" fill="#E74C3C"/>
              <circle cx="170" cy="100" r="4" fill="#F1C40F"/>
              <circle cx="290" cy="100" r="4" fill="#F1C40F"/>
            </g>
          </svg>
        </div>

        <!-- Full-Width Meaning Card BELOW the Illustration (never cut off!) -->
        <div class="w-full bg-[#F2FFE0] rounded-[20px] border-2 border-[#1F8A63] shadow-xs px-4 py-2.5 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-[#1F8A63] text-white flex items-center justify-center font-bold text-lg shrink-0">

          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-display font-extrabold text-[15px] text-[#0F4D3A] leading-tight">
              Cari: ${targetPart.title}
            </h4>
            <p class="font-body font-bold text-[13px] text-[#14634A] leading-snug overflow-wrap-anywhere mt-0.5">
              ${targetPart.meaning || targetPart.desc}
            </p>
          </div>
        </div>
      </div>
    `;
      contentEl.querySelectorAll(".canang-hotspot").forEach((el) => {
        el.addEventListener("click", () => {
          const clickedPartId = el.dataset.partId;
          if (clickedPartId === targetPart.id) {
            el.classList.add("found");
            burstConfetti(el);
            animateMascotHop();
            setMascotText(`Hebat! ${targetPart.title} berhasil kamu temukan.`);
            if (currentPartIndex < 4) {
              currentPartIndex++;
              setTimeout(renderPart, 650);
            } else {
              setTimeout(() => {
                showLevelSuccess(
                  "Canang Sari Terkuak!",
                  "Sekarang kamu memahami makna ceper, plawa, porosan, bunga 4 warna arah, dan sampian urasari."
                );
              }, 500);
            }
          } else {
            el.classList.add("shake");
            setTimeout(() => el.classList.remove("shake"), 350);
            animateMascotTilt();
            setMascotText("Itu bagian lain dari canang sari. Coba sentuh bagian lainnya!");
          }
        });
      });
      setPrimaryButton("Sentuh bagian canang", "");
    };
    renderPart();
  }
  function renderLevel4() {
    const contentEl = document.getElementById("activityContentArea");
    const levelObj = levels.find((l) => l.num === 4);
    let currentOrder = [2, 0, 4, 1, 3].map((idx) => level4Data.cards[idx]);
    let failedAttempts = 0;
    const renderDragList = () => {
      setHeaderInfo(levelObj, 0, 5, "Geser kartu ke atas/bawah untuk menyusun urutan");
      setMascotText("Urutkan prosesi Galungan dari awal hingga hari manisnya.");
      contentEl.innerHTML = `
      <div id="dragOrderingContainer" class="w-full flex flex-col gap-2 py-1 select-none">
        ${currentOrder.map((card, slotIndex) => {
        return `
              <div
                class="drag-order-slot"
                data-slot-index="${slotIndex}"
              >
                <!-- Slot Number Badge (36px Circle) -->
                <div class="w-9 h-9 rounded-full bg-[#DDF3B0] border-2 border-[#1F8A63] text-[#0F4D3A] font-display font-extrabold text-[15px] flex items-center justify-center shrink-0 shadow-xs">
                  ${slotIndex + 1}
                </div>

                <!-- Draggable Card (No time clues!) -->
                <div
                  id="dragCard-${card.id}"
                  data-card-id="${card.id}"
                  data-order="${card.order}"
                  data-index="${slotIndex}"
                  tabindex="0"
                  class="drag-order-card flex items-center justify-between"
                  oncontextmenu="return false;"
                >
                  <div class="flex items-center gap-3 min-w-0">
                    <span class="text-[#0F4D3A]/40 font-bold text-lg cursor-grab">\u283F</span>
                    <div class="min-w-0">
                      <h4 class="font-display font-extrabold text-[15.5px] text-[#0F4D3A] leading-tight">
                        ${card.title}
                      </h4>
                      <p class="font-body font-semibold text-[13px] text-[#14634A] leading-tight mt-0.5 overflow-wrap-anywhere">
                        ${card.desc}
                      </p>
                    </div>
                  </div>
                  <div class="quest-status-chip shrink-0 ml-2"></div>
                </div>
              </div>
            `;
      }).join("")}
      </div>
    `;
      setupDragEvents();
      setPrimaryButton("Cek urutan", "\u2713", checkOrder);
    };
    const setupDragEvents = () => {
      const cards = contentEl.querySelectorAll(".drag-order-card");
      let draggingCard = null;
      let dragStartIndex = -1;
      let startY = 0;
      cards.forEach((cardEl) => {
        const startDrag = (clientY) => {
          draggingCard = cardEl;
          dragStartIndex = parseInt(cardEl.dataset.index, 10);
          startY = clientY;
          cardEl.classList.add("card-dragging");
        };
        cardEl.addEventListener("mousedown", (e) => {
          e.preventDefault();
          startDrag(e.clientY);
        });
        cardEl.addEventListener(
          "touchstart",
          (e) => {
            if (e.touches.length > 0) {
              startDrag(e.touches[0].clientY);
            }
          },
          { passive: false }
        );
        cardEl.addEventListener("keydown", (e) => {
          const curIdx = parseInt(cardEl.dataset.index, 10);
          if (e.key === "ArrowDown" && curIdx < currentOrder.length - 1) {
            e.preventDefault();
            const item = currentOrder.splice(curIdx, 1)[0];
            currentOrder.splice(curIdx + 1, 0, item);
            renderDragList();
            contentEl.querySelectorAll(".drag-order-card")[curIdx + 1]?.focus();
          } else if (e.key === "ArrowUp" && curIdx > 0) {
            e.preventDefault();
            const item = currentOrder.splice(curIdx, 1)[0];
            currentOrder.splice(curIdx - 1, 0, item);
            renderDragList();
            contentEl.querySelectorAll(".drag-order-card")[curIdx - 1]?.focus();
          }
        });
      });
      const onMove = (clientY) => {
        if (!draggingCard) return;
        const deltaY = clientY - startY;
        draggingCard.style.transform = `translateY(${deltaY}px) scale(1.04) rotate(1.5deg)`;
        const allSlots = Array.from(contentEl.querySelectorAll(".drag-order-slot"));
        allSlots.forEach((slot, idx) => {
          const rect = slot.getBoundingClientRect();
          if (clientY >= rect.top && clientY <= rect.bottom && idx !== dragStartIndex) {
            slot.classList.add("card-placeholder");
          } else {
            slot.classList.remove("card-placeholder");
          }
        });
      };
      const onEnd = (clientY) => {
        if (!draggingCard) return;
        const allSlots = Array.from(contentEl.querySelectorAll(".drag-order-slot"));
        let targetIndex = dragStartIndex;
        allSlots.forEach((slot, idx) => {
          const rect = slot.getBoundingClientRect();
          if (clientY >= rect.top && clientY <= rect.bottom) {
            targetIndex = idx;
          }
          slot.classList.remove("card-placeholder");
        });
        draggingCard.classList.remove("card-dragging");
        draggingCard.style.transform = "";
        if (targetIndex !== dragStartIndex) {
          const moved = currentOrder.splice(dragStartIndex, 1)[0];
          currentOrder.splice(targetIndex, 0, moved);
          renderDragList();
        }
        draggingCard = null;
      };
      window.addEventListener("mousemove", (e) => onMove(e.clientY));
      window.addEventListener("mouseup", (e) => onEnd(e.clientY));
      window.addEventListener(
        "touchmove",
        (e) => {
          if (draggingCard && e.touches.length > 0) {
            onMove(e.touches[0].clientY);
          }
        },
        { passive: false }
      );
      window.addEventListener("touchend", (e) => {
        if (draggingCard && e.changedTouches.length > 0) {
          onEnd(e.changedTouches[0].clientY);
        }
      });
    };
    const checkOrder = () => {
      let allCorrect = true;
      let firstWrongSlot = null;
      currentOrder.forEach((card, slotIndex) => {
        const expectedOrder = slotIndex + 1;
        const isCorrect = card.order === expectedOrder;
        const cardEl = contentEl.querySelector(`[data-card-id="${card.id}"]`);
        const chip = cardEl ? cardEl.querySelector(".quest-status-chip") : null;
        if (cardEl) {
          cardEl.classList.remove("card-correct", "card-wrong", "card-selected");
        }
        if (chip) {
          chip.classList.remove("chip-correct", "chip-wrong");
          chip.textContent = "";
        }
        if (isCorrect) {
          if (cardEl) cardEl.classList.add("card-correct");
          if (chip) {
            chip.classList.add("chip-correct");
            chip.textContent = "\u2713";
          }
        } else {
          allCorrect = false;
          if (firstWrongSlot === null) firstWrongSlot = slotIndex + 1;
          if (cardEl) cardEl.classList.add("card-wrong");
          if (chip) {
            chip.classList.add("chip-wrong");
            chip.textContent = "\u2715";
          }
        }
      });
      if (allCorrect) {
        setHeaderInfo(levelObj, 5, 5, "Urutan prosesi Galungan sudah tepat!");
        burstConfetti(contentEl);
        animateMascotHop();
        setFeedback("Tepat sekali! Urutan rangkaian Galungan sudah tepat dan sempurna!", "correct");
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = true;
          primaryBtn.classList.add("opacity-70", "pointer-events-none");
        }
        setTimeout(() => {
          if (primaryBtn) {
            primaryBtn.disabled = false;
            primaryBtn.classList.remove("opacity-70", "pointer-events-none");
          }
          showLevelSuccess(
            "Rangkaian Galungan Tuntas!",
            "Kamu berhasil menyusun dari Penyekeban, Penyajaan, Penampahan, Galungan, hingga Manis Galungan tanpa keliru."
          );
        }, 700);
      } else {
        failedAttempts++;
        animateMascotTilt();
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = false;
          primaryBtn.classList.remove("opacity-70", "pointer-events-none");
        }
        if (failedAttempts >= 2 && firstWrongSlot !== null) {
          setFeedback(`Slot nomor ${firstWrongSlot} sepertinya belum sesuai urutannya. Geser dan coba lagi!`, "wrong");
        } else {
          setFeedback("Beberapa tahapan masih tertukar. Geser kartu dan coba lagi!", "wrong");
        }
      }
    };
    renderDragList();
  }
  function renderLevel5() {
    const questions = level5Data.questions;
    const levelObj = levels.find((l) => l.num === 5);
    let curQIndex = 0;
    let correctCount = 0;
    let isAnswered = false;
    let selectedOptId = null;
    const contentEl = document.getElementById("activityContentArea");
    const renderQuestion = (animated = true) => {
      const q = questions[curQIndex];
      selectedOptId = null;
      isAnswered = false;
      setHeaderInfo(
        levelObj,
        correctCount,
        5,
        `Pertanyaan ${curQIndex + 1} dari 5: Pilih jawaban yang benar`
      );
      setFeedback("Jawab kuis seputar Hari Raya Kuningan.", "neutral");
      contentEl.innerHTML = `
      <div id="quizContainer" class="w-full flex flex-col py-1 select-none">
        <!-- Question Card on Top (radius 20) -->
        <div class="bg-white p-3.5 rounded-[20px] border-2 border-[#E3F0CF] shadow-[0_4px_0_#DCEBC4] text-center" style="margin-bottom: 16px;">
          <span class="quest-label-text font-body font-extrabold text-[11px] uppercase tracking-wider text-[#1F8A63] block" style="margin-bottom: 6px;">PERTANYAAN ${curQIndex + 1} DARI 5</span>
          <h3 class="quest-question-text font-display font-extrabold text-[18px] text-[#0F4D3A] leading-[1.3]" style="line-height: 1.3;">
            ${q.q}
          </h3>
        </div>

        <!-- Option Rows with 10px gap -->
        <div class="flex flex-col w-full" style="gap: 10px;">
          ${q.options.map((opt, i) => {
        const letter = ["A", "B", "C", "D"][i];
        return `
                <div
                  data-option-id="${opt.id}"
                  class="quest-row-card"
                  style="padding: 12px 16px; gap: 12px; line-height: 1.35;"
                >
                  <div class="w-9 h-9 rounded-full bg-[#DDF3B0] font-display font-extrabold text-[16px] text-[#0F4D3A] flex items-center justify-center shrink-0 shadow-xs">
                    ${letter}
                  </div>
                  <span class="quest-opt-text flex-1 font-body font-extrabold text-[14.5px] text-[#0F4D3A]" style="line-height: 1.35; margin-right: 12px;">
                    ${opt.text}
                  </span>
                  <div class="quest-status-chip"></div>
                </div>
              `;
      }).join("")}
        </div>
      </div>
    `;
      contentEl.querySelectorAll(".quest-row-card").forEach((card) => {
        card.addEventListener("click", () => {
          if (isAnswered) return;
          contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
            c.classList.remove("card-selected", "card-correct", "card-wrong");
          });
          contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
            ch.classList.remove("chip-correct", "chip-wrong");
            ch.textContent = "";
          });
          card.classList.add("card-selected");
          selectedOptId = card.dataset.optionId;
          setFeedback("Opsi dipilih. Klik 'Cek jawaban'!", "neutral");
          const primaryBtn2 = document.getElementById("activityPrimaryBtn");
          if (primaryBtn2) {
            primaryBtn2.disabled = false;
            primaryBtn2.classList.remove("opacity-70", "pointer-events-none");
          }
        });
      });
      setPrimaryButton("Cek jawaban", "\u2713", checkAnswer);
      const primaryBtn = document.getElementById("activityPrimaryBtn");
      if (primaryBtn) {
        primaryBtn.disabled = false;
        primaryBtn.classList.remove("opacity-70", "pointer-events-none");
      }
      if (animated && window.gsap) {
        window.gsap.fromTo(
          "#quizContainer",
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      }
    };
    const checkAnswer = () => {
      if (!selectedOptId) {
        setFeedback("Pilih satu jawaban dulu", "neutral");
        animateMascotTilt();
        return;
      }
      const q = questions[curQIndex];
      const isCorrect = selectedOptId === q.correctId;
      const selectedCard = contentEl.querySelector(`[data-option-id="${selectedOptId}"]`);
      const chip = selectedCard ? selectedCard.querySelector(".quest-status-chip") : null;
      if (isCorrect) {
        if (!isAnswered) {
          isAnswered = true;
          correctCount++;
          setHeaderInfo(
            levelObj,
            correctCount,
            5,
            `Pertanyaan ${curQIndex + 1} dari 5: Jawaban benar`
          );
        }
        contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
          c.classList.remove("card-selected", "card-wrong");
        });
        contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
          ch.classList.remove("chip-wrong");
          ch.textContent = "";
        });
        if (selectedCard) {
          selectedCard.classList.add("card-correct");
        }
        if (chip) {
          chip.classList.add("chip-correct");
          chip.textContent = "\u2713";
        }
        setFeedback("Tepat sekali! " + (q.explanation || q.reason || "Jawabanmu tepat!"), "correct");
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = true;
          primaryBtn.classList.add("opacity-70", "pointer-events-none");
        }
        burstConfetti(selectedCard);
        animateMascotHop();
        setTimeout(() => {
          if (primaryBtn) {
            primaryBtn.disabled = false;
            primaryBtn.classList.remove("opacity-70", "pointer-events-none");
          }
          setPrimaryButton(
            curQIndex < 4 ? "Pertanyaan Berikutnya \u276F" : "Selesaikan Level 5 \u276F",
            "\u2713",
            () => {
              if (curQIndex < 4) {
                curQIndex++;
                renderQuestion(true);
              } else {
                showLevelSuccess(
                  "Hari Kuningan Terpahami!",
                  "Kamu memahami nasi kuning, tamiang, endongan, dan batas persembahyangan sebelum jam 12 siang."
                );
              }
            }
          );
        }, 500);
      } else {
        contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
          c.classList.remove("card-selected", "card-correct");
        });
        contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
          ch.classList.remove("chip-correct");
          ch.textContent = "";
        });
        if (selectedCard) {
          selectedCard.classList.add("card-wrong");
        }
        if (chip) {
          chip.classList.add("chip-wrong");
          chip.textContent = "\u2715";
        }
        animateMascotTilt();
        setFeedback("Belum tepat. Coba baca kembali pilihannya!", "wrong");
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = false;
          primaryBtn.classList.remove("opacity-70", "pointer-events-none");
        }
      }
    };
    renderQuestion(false);
  }
  var BRATA_SUBTITLES = {
    geni: "Pantangan api",
    karya: "Pantangan bekerja",
    lelanguan: "Pantangan hiburan",
    lelungan: "Pantangan bepergian",
    malam: "Malam Pengrupukan",
    pagi: "Pagi hari",
    sehari: "Ngembak Geni",
    kuningan: "Hari Kuningan"
  };
  function renderLevel6() {
    const scenarios = level6Data.scenarios;
    const levelObj = levels.find((l) => l.num === 6);
    let curScenIndex = 0;
    let correctCount = 0;
    let isAnswered = false;
    let selectedBrataId = null;
    const contentEl = document.getElementById("activityContentArea");
    const renderScenario = (animated = true) => {
      const sc = scenarios[curScenIndex];
      selectedBrataId = null;
      isAnswered = false;
      setHeaderInfo(
        levelObj,
        correctCount,
        5,
        `Kasus ${curScenIndex + 1} dari 5: Tentukan pantangan yang dilanggar`
      );
      setFeedback("Tentukan pantangan Catur Brata Penyepian yang sesuai.", "neutral");
      contentEl.innerHTML = `
      <div id="nyepiContainer" class="w-full flex flex-col py-1 select-none">
        <!-- Situation Card (radius 20) -->
        <div class="bg-white p-3.5 rounded-[20px] border-2 border-[#E3F0CF] shadow-[0_4px_0_#DCEBC4] text-center" style="margin-bottom: 16px;">
          <span class="quest-label-text font-body font-extrabold text-[11px] uppercase tracking-wider text-[#1F8A63] block" style="margin-bottom: 6px;">KASUS ${curScenIndex + 1} DARI 5</span>
          <p class="quest-question-text font-display font-extrabold text-[16px] text-[#0F4D3A] leading-[1.3]" style="line-height: 1.3;">
            "${sc.q || sc.caseText}"
          </p>
        </div>

        <!-- 4 Option Rows with 10px gap -->
        <div class="grid grid-cols-2 w-full" style="gap: 10px;">
          ${sc.options.map((opt) => {
        const sub = BRATA_SUBTITLES[opt.id] || opt.meaning || "";
        return `
                <div
                  data-option-id="${opt.id}"
                  class="quest-row-card"
                  style="padding: 12px 16px; gap: 12px; line-height: 1.35;"
                >
                  <div class="w-8 h-8 rounded-full bg-[#DDF3B0] text-[#0F4D3A] flex items-center justify-center shrink-0 shadow-xs font-bold text-sm">
                    \u2726
                  </div>
                  <div class="flex-1 min-w-0" style="margin-right: 12px;">
                    <h4 class="quest-opt-text font-display font-extrabold text-[14.5px] text-[#0F4D3A] line-clamp-1" style="line-height: 1.35;">
                      ${opt.label || opt.title}
                    </h4>
                    ${sub ? `<span class="font-body font-bold text-[11.5px] text-[#14634A] block leading-tight mt-0.5">${sub}</span>` : ""}
                  </div>
                  <div class="quest-status-chip"></div>
                </div>
              `;
      }).join("")}
        </div>
      </div>
    `;
      contentEl.querySelectorAll(".quest-row-card").forEach((card) => {
        card.addEventListener("click", () => {
          if (isAnswered) return;
          contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
            c.classList.remove("card-selected", "card-correct", "card-wrong");
          });
          contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
            ch.classList.remove("chip-correct", "chip-wrong");
            ch.textContent = "";
          });
          card.classList.add("card-selected");
          selectedBrataId = card.dataset.optionId;
          setFeedback("Pantangan dipilih. Klik 'Cek jawaban'!", "neutral");
          const primaryBtn2 = document.getElementById("activityPrimaryBtn");
          if (primaryBtn2) {
            primaryBtn2.disabled = false;
            primaryBtn2.classList.remove("opacity-70", "pointer-events-none");
          }
        });
      });
      setPrimaryButton("Cek jawaban", "\u2713", checkAnswer);
      const primaryBtn = document.getElementById("activityPrimaryBtn");
      if (primaryBtn) {
        primaryBtn.disabled = false;
        primaryBtn.classList.remove("opacity-70", "pointer-events-none");
      }
      if (animated && window.gsap) {
        window.gsap.fromTo(
          "#nyepiContainer",
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      }
    };
    const checkAnswer = () => {
      if (!selectedBrataId) {
        setFeedback("Pilih satu jawaban dulu", "neutral");
        animateMascotTilt();
        return;
      }
      const sc = scenarios[curScenIndex];
      const isCorrect = selectedBrataId === sc.correctId;
      const selectedCard = contentEl.querySelector(`[data-option-id="${selectedBrataId}"]`);
      const chip = selectedCard ? selectedCard.querySelector(".quest-status-chip") : null;
      if (isCorrect) {
        if (!isAnswered) {
          isAnswered = true;
          correctCount++;
          setHeaderInfo(
            levelObj,
            correctCount,
            5,
            `Kasus ${curScenIndex + 1} dari 5: Jawaban benar`
          );
        }
        contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
          c.classList.remove("card-selected", "card-wrong");
        });
        contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
          ch.classList.remove("chip-wrong");
          ch.textContent = "";
        });
        if (selectedCard) {
          selectedCard.classList.add("card-correct");
        }
        if (chip) {
          chip.classList.add("chip-correct");
          chip.textContent = "\u2713";
        }
        setFeedback("Tepat sekali! " + (sc.explanation || sc.reason || "Jawabanmu tepat!"), "correct");
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = true;
          primaryBtn.classList.add("opacity-70", "pointer-events-none");
        }
        burstConfetti(selectedCard);
        animateMascotHop();
        setTimeout(() => {
          if (primaryBtn) {
            primaryBtn.disabled = false;
            primaryBtn.classList.remove("opacity-70", "pointer-events-none");
          }
          setPrimaryButton(
            curScenIndex < 4 ? "Kasus Berikutnya \u276F" : "Selesaikan Perjalanan \u276F",
            "\u2713",
            () => {
              if (curScenIndex < 4) {
                curScenIndex++;
                renderScenario(true);
              } else {
                showLevelSuccess(
                  "Catur Brata Dikuasai!",
                  "Selamat! Kamu telah menuntaskan seluruh 6 tradisi luhur Bali dengan sempurna!"
                );
              }
            }
          );
        }, 500);
      } else {
        contentEl.querySelectorAll(".quest-row-card").forEach((c) => {
          c.classList.remove("card-selected", "card-correct");
        });
        contentEl.querySelectorAll(".quest-status-chip").forEach((ch) => {
          ch.classList.remove("chip-correct");
          ch.textContent = "";
        });
        if (selectedCard) {
          selectedCard.classList.add("card-wrong");
        }
        if (chip) {
          chip.classList.add("chip-wrong");
          chip.textContent = "\u2715";
        }
        animateMascotTilt();
        setFeedback("Belum tepat. Coba perhatikan lagi situasi pantangan ini!", "wrong");
        const primaryBtn = document.getElementById("activityPrimaryBtn");
        if (primaryBtn) {
          primaryBtn.disabled = false;
          primaryBtn.classList.remove("opacity-70", "pointer-events-none");
        }
      }
    };
    renderScenario(false);
  }
  function getClothingSvg(iconName) {
    const stroke = "#0F4D3A";
    const sw = "2.4";
    const common = `class="w-12 h-12" stroke="${stroke}" stroke-width="${sw}" fill="none" stroke-linecap="round" stroke-linejoin-round`;
    switch (iconName) {
      case "kamen":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M12 16 L36 16 L34 42 L14 42 Z" fill="#DDF3B0"/>
          <rect x="10" y="14" width="28" height="6" rx="3" fill="#F1C40F" />
          <path d="M28 20 L28 34 L32 32" stroke="${stroke}"/>
        </svg>
      `;
      case "shorts":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M14 8 L24 11 L34 8 L38 18 L32 19 L32 26 L16 26 L16 19 L10 18 Z" fill="#BBD5F0"/>
          <path d="M15 26 L33 26 L31 38 L25 38 L24 30 L23 38 L17 38 Z" fill="#DDF3B0"/>
        </svg>
      `;
      case "dress":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M18 8 L30 8 L28 18 L38 42 L10 42 L20 18 Z" fill="#F9D2E0"/>
          <path d="M18 8 C 24 14 24 14 30 8" stroke="${stroke}"/>
        </svg>
      `;
      case "kebaya":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M14 8 L24 12 L34 8 L39 20 L33 21 L33 28 L15 28 L15 21 L9 20 Z" fill="#FFF7C2"/>
          <path d="M24 12 V28" stroke="${stroke}"/>
          <path d="M16 28 L32 28 L30 44 L18 44 Z" fill="#4FAE6C"/>
          <rect x="13" y="26" width="22" height="5" rx="2" fill="#E74C3C"/>
        </svg>
      `;
      case "sport":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M14 10 L34 10 L38 20 L32 21 L32 28 L16 28 L16 21 L10 20 Z" fill="#BBD5F0"/>
          <path d="M21 16 L27 16 M24 10 V28" stroke="${stroke}"/>
          <path d="M17 28 L31 28 L30 42 L25 42 L24 34 L23 42 L18 42 Z" fill="#A8C9EC"/>
        </svg>
      `;
      case "beach":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M16 8 L20 8 L22 16 L26 16 L28 8 L32 8 L30 24 L18 24 Z" fill="#FFF275"/>
          <path d="M17 24 L31 24 L29 36 L25 36 L24 30 L23 36 L19 36 Z" fill="#FF8C42"/>
        </svg>
      `;
      case "rent":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <rect x="8" y="16" width="32" height="26" rx="4" fill="#CDEFD9"/>
          <path d="M6 16 L24 8 L42 16" fill="#F1C40F"/>
          <path d="M14 24 H34 M14 30 H34 M24 24 V38" stroke="${stroke}"/>
        </svg>
      `;
      case "udeng":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M8 26 C 12 16 36 16 40 26 C 36 34 12 34 8 26 Z" fill="#FFF7C2"/>
          <path d="M24 16 V8 L30 14" stroke="${stroke}"/>
          <line x1="8" y1="26" x2="40" y2="26" stroke="${stroke}"/>
        </svg>
      `;
      case "cap":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M12 28 C 12 16 32 16 34 28 Z" fill="#BBD5F0"/>
          <path d="M30 28 C 38 28 44 32 44 32 L30 32 Z" fill="#2169B5"/>
          <circle cx="23" cy="18" r="2" fill="${stroke}"/>
        </svg>
      `;
      case "sunglasses":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <rect x="6" y="20" width="14" height="12" rx="4" fill="#34495E"/>
          <rect x="28" y="20" width="14" height="12" rx="4" fill="#34495E"/>
          <path d="M20 23 H28 M2 22 L6 22 M42 22 L46 22" stroke="${stroke}"/>
        </svg>
      `;
      case "casual":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M14 10 L34 10 L38 20 L32 21 L32 40 L16 40 L16 21 L10 20 Z" fill="#DDF3B0"/>
          <path d="M20 10 L24 16 L28 10" stroke="${stroke}"/>
        </svg>
      `;
      case "full_adat":
      case "ceremonial":
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <path d="M18 10 L30 10 L36 24 L30 26 L30 42 L18 42 L18 26 L12 24 Z" fill="#F1C40F"/>
          <circle cx="24" cy="6" r="3" fill="#E74C3C"/>
          <path d="M20 16 H28 M22 22 H26 M20 28 H28" stroke="${stroke}"/>
        </svg>
      `;
      default:
        return `
        <svg viewBox="0 0 48 48" ${common}>
          <rect x="10" y="12" width="28" height="26" rx="6" fill="#CDEFD9"/>
        </svg>
      `;
    }
  }
  function getSceneSvg(situationId) {
    switch (situationId) {
      case 1:
        return `
        <svg viewBox="0 0 100 80" class="w-full h-full fill-none stroke-[#0F4D3A] stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <path d="M25 70 V35 L38 20 V70" fill="#E59866"/>
          <path d="M75 70 V35 L62 20 V70" fill="#E59866"/>
          <line x1="10" y1="70" x2="90" y2="70" stroke-width="3"/>
        </svg>
      `;
      case 2:
        return `
        <svg viewBox="0 0 100 80" class="w-full h-full fill-none stroke-[#0F4D3A] stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <path d="M15 35 L50 15 L85 35 Z" fill="#F5CBA7"/>
          <line x1="25" y1="35" x2="25" y2="70" stroke-width="3"/>
          <line x1="75" y1="35" x2="75" y2="70" stroke-width="3"/>
          <rect x="18" y="65" width="64" height="6" rx="2" fill="#D5D8DC"/>
        </svg>
      `;
      case 3:
        return `
        <svg viewBox="0 0 100 80" class="w-full h-full fill-none stroke-[#0F4D3A] stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <rect x="20" y="35" width="60" height="35" rx="4" fill="#CDEFD9"/>
          <path d="M15 35 L50 20 L85 35 Z" fill="#F1C40F"/>
          <line x1="35" y1="50" x2="65" y2="50"/>
        </svg>
      `;
      case 4:
        return `
        <svg viewBox="0 0 100 80" class="w-full h-full fill-none stroke-[#0F4D3A] stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <rect x="35" y="45" width="30" height="25" rx="3" fill="#BDC3C7"/>
          <path d="M30 45 L50 30 L70 45 Z" fill="#95A5A6"/>
          <line x1="50" y1="30" x2="50" y2="20"/>
        </svg>
      `;
      case 5:
      default:
        return `
        <svg viewBox="0 0 100 80" class="w-full h-full fill-none stroke-[#0F4D3A] stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
          <path d="M30 70 Q 35 45 45 35" stroke-width="4" stroke="#795548"/>
          <circle cx="45" cy="35" r="14" fill="#2ECC71"/>
          <path d="M55 40 L75 40 L65 70 Z" fill="#F39C12"/>
        </svg>
      `;
    }
  }

  var LEVELS_LOCKED = false;
  var LIVING_STORIES = [
    {
      level: 1,
      title: "Tri Hita Karana",
      body: "Tiga pilar keharmonisan hidup masyarakat Bali: hubungan dengan Sang Pencipta (Parahyangan), sesama manusia (Pawongan), dan alam lingkungan sekitar (Palemahan).",
      x: 552,
      y: 373,
      icon: "assets/eksplorasi/budaya/living_culture/level_1.webp"
    },
    {
      level: 2,
      title: "Banjar dan Subak",
      body: "Dua pilar sosial dan agraris Bali. Banjar adalah wadah persaudaraan gotong royong warga, sedangkan Subak mengatur pembagian irigasi sawah secara demokratis dan adil sejak abad ke-9.",
      x: 599,
      y: 497,
      icon: "assets/eksplorasi/budaya/living_culture/level_2.webp"
    },
    {
      level: 3,
      title: "Upacara Panca Yadnya",
      body: "Lima dimensi persembahan suci: Dewa Yadnya kepada Tuhan, Rsi Yadnya untuk guru suci, Pitra Yadnya bagi leluhur, Manusa Yadnya sesama manusia, dan Bhuta Yadnya untuk keharmonisan alam.",
      x: 724,
      y: 587,
      icon: "assets/eksplorasi/budaya/living_culture/level_3.webp"
    },
    {
      level: 4,
      title: "Hari Raya dan Kalender",
      body: "Waktu berputar harmonis lewat kalender Pawukon 210 hari dan Saka. Dari heningnya Nyepi yang menyucikan bhuana, hingga sukacita dharma menang atas adharma saat Galungan & Kuningan.",
      x: 786,
      y: 360,
      icon: "assets/eksplorasi/budaya/living_culture/level_4.webp"
    },
    {
      level: 5,
      title: "Tata Krama di Pura",
      body: "Menjaga kesucian tempat ibadah dengan mengenakan kamen dan selendang di pinggang, bertutur kata santun, menjaga pikiran jernih, serta tidak melangkahi sesaji canang sari di jalan.",
      x: 953,
      y: 454,
      icon: "assets/eksplorasi/budaya/living_culture/level_5.webp"
    },
    {
      level: 6,
      title: "Seni sebagai Persembahan",
      body: "Di Bali, tari, gamelan, ukiran, dan kain tenun bukan sekadar karya estetika, melainkan wujud persembahan tulus (yadnya) yang menghidupkan napas kebudayaan dari generasi ke generasi.",
      x: 1102,
      y: 516,
      icon: "assets/eksplorasi/budaya/living_culture/level_6.webp"
    }
  ];
  var STORAGE_KEY = "sakala_living_culture_level";
  var COMPLETED_KEY = "sakala_living_culture_completed";
  var unlockedLevel = 1;
  var completedLevels =                 new Set();
  var isTransitioning = false;
  var currentPopupLevel = 1;
  var currentSlideIndex = 0;
  function loadSavedProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= 6) {
          unlockedLevel = parsed;
        }
      }
      const savedCompleted = localStorage.getItem(COMPLETED_KEY);
      if (savedCompleted) {
        const arr = JSON.parse(savedCompleted);
        if (Array.isArray(arr)) {
          completedLevels = new Set(arr);
        }
      } else if (unlockedLevel > 1) {
        for (let i = 1; i < unlockedLevel; i++) {
          completedLevels.add(i);
        }
      }
    } catch (err) {
      console.warn("Could not read living culture progress from localStorage", err);
    }
  }
  function saveProgress(level) {
    try {
      localStorage.setItem(STORAGE_KEY, level.toString());
      localStorage.setItem(COMPLETED_KEY, JSON.stringify(Array.from(completedLevels)));
    } catch (err) {
      console.warn("Could not save living culture progress to localStorage", err);
    }
  }
  function renderNodes() {
    const container = document.getElementById("livingNodesContainer");
    if (!container) return;
    container.innerHTML = "";
    LIVING_STORIES.forEach((story) => {
      const nodeEl = document.createElement("div");
      nodeEl.id = `livingNode_${story.level}`;
      nodeEl.dataset.level = story.level;
      nodeEl.className = "living-node-item absolute select-none cursor-pointer";
      nodeEl.style.left = `${story.x / 1440 * 100}%`;
      nodeEl.style.top = `${story.y / 900 * 100}%`;
      nodeEl.style.transform = "translate(-50%, -50%)";
      const isCompleted = completedLevels.has(story.level);
      const isCurrentActive = story.level === unlockedLevel && !isCompleted;
      const isLocked = LEVELS_LOCKED && story.level > unlockedLevel && !isCompleted;
      if (isCompleted) {
        nodeEl.innerHTML = `
        <div class="living-node-completed-wrapper relative flex flex-col items-center">
          <div class="living-node-completed-btn w-[49px] h-[49px] rounded-full bg-[#2F9E3B] border-[3.5px] border-white flex items-center justify-center text-white shadow-[0_4px_0_#1B6E2A] hover:scale-105 active:scale-95 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="living-node-shadow w-[40px] h-[10px] bg-[#083264]/25 rounded-full blur-[2px] mt-1 pointer-events-none"></div>
        </div>
      `;
      } else if (isCurrentActive) {
        nodeEl.innerHTML = `
        <div class="living-node-active-wrapper relative flex flex-col items-center">
          <div class="living-node-active-btn w-[58px] h-[58px] rounded-full bg-[#2F9E3B] border-[3.5px] border-white flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-[0_5px_0_#1B6E2A] living-node-pulse hover:scale-105 active:scale-95 transition-transform">
            ${story.level}
          </div>
          <div class="living-node-shadow w-[48px] h-[12px] bg-[#083264]/30 rounded-full blur-[3px] mt-1 pointer-events-none"></div>
        </div>
      `;
      } else if (isLocked) {
        nodeEl.innerHTML = `
        <div class="living-node-locked-wrapper relative flex flex-col items-center">
          <div class="living-node-locked-btn w-[49px] h-[49px] rounded-full bg-white border-[3.5px] border-[#BFE0F8] flex items-center justify-center text-[#1B84DB] font-display font-extrabold text-[18px] shadow-[0_4px_0_#8FC2EA] hover:scale-105 active:scale-95 transition-transform relative">
            ${story.level}
            <div class="living-lock-badge absolute -top-1.5 -right-1.5 w-[20px] h-[20px] rounded-full bg-[#F5A623] border-2 border-white flex items-center justify-center shadow-xs">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </div>
          <div class="living-node-shadow w-[40px] h-[10px] bg-[#083264]/20 rounded-full blur-[2px] mt-1 pointer-events-none"></div>
        </div>
      `;
      } else {
        nodeEl.innerHTML = `
        <div class="living-node-locked-wrapper relative flex flex-col items-center">
          <div class="living-node-locked-btn w-[49px] h-[49px] rounded-full bg-white border-[3.5px] border-[#BFE0F8] flex items-center justify-center text-[#1B84DB] font-display font-extrabold text-[18px] shadow-[0_4px_0_#8FC2EA] hover:scale-105 active:scale-95 transition-transform relative">
            ${story.level}
          </div>
          <div class="living-node-shadow w-[40px] h-[10px] bg-[#083264]/20 rounded-full blur-[2px] mt-1 pointer-events-none"></div>
        </div>
      `;
      }
      nodeEl.addEventListener("click", () => {
        handleNodeClick(story.level);
      });
      container.appendChild(nodeEl);
    });
  }
  function handleNodeClick(level) {
    const isCompleted = completedLevels.has(level);
    const isLocked = LEVELS_LOCKED && level > unlockedLevel && !isCompleted;
    if (isLocked) {
      const nodeEl = document.getElementById(`livingNode_${level}`);
      if (nodeEl && window.gsap) {
        gsap.fromTo(
          nodeEl,
          { x: "+=0" },
          {
            x: "+=6",
            duration: 0.08,
            repeat: 4,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => {
              gsap.set(nodeEl, { x: 0 });
            }
          }
        );
      }
      return;
    }
    openLivingPopup(level);
  }
  function advanceLevel() {
    if (isTransitioning) return;
    if (unlockedLevel < 6) {
      isTransitioning = true;
      const nextLvl = unlockedLevel + 1;
      unlockedLevel = nextLvl;
      saveProgress(unlockedLevel);
      renderNodes();
      isTransitioning = false;
    } else {
      unlockedLevel = 1;
      saveProgress(unlockedLevel);
      renderNodes();
    }
  }
  function getTileSvgIcon(iconName) {
    const common = 'class="w-7 h-7 stroke-[#0F4D3A] fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round"';
    switch (iconName) {
      case "temple":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M12 2v4M4 22h16M7 22V10l5-4 5 4v12M10 22v-6h4v6M3 14h3M18 14h3"/></svg>`;
      case "people":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
      case "leaf":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
      case "shirt":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>`;
      case "headwrap":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M3 14c2-5 6-8 9-8s7 3 9 8M3 14c1 4 4 6 9 6s8-2 9-6M3 14h18M12 6V2l3 3"/></svg>`;
      case "speech":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
      case "tray":
        return `<svg viewBox="0 0 24 24" ${common}><rect x="3" y="10" width="18" height="10" rx="3"/><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/></svg>`;
      case "flower":
        return `<svg viewBox="0 0 24 24" ${common}><circle cx="12" cy="12" r="3"/><path d="M12 3a3 3 0 0 0-3 3c0 2 3 5 3 5s3-3 3-5a3 3 0 0 0-3-3z"/><path d="M12 21a3 3 0 0 0 3-3c0-2-3-5-3-5s-3 3-3 5a3 3 0 0 0 3 3z"/><path d="M3 12a3 3 0 0 0 3 3c2 0 5-3 5-3s-3-3-5-3a3 3 0 0 0-3 3z"/><path d="M21 12a3 3 0 0 0-3-3c-2 0-5 3-5 3s3 3 5 3a3 3 0 0 0 3-3z"/></svg>`;
      case "leafroll":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M6 3v18M6 8a4 4 0 0 1 8 0v10a4 4 0 0 1-8 0"/></svg>`;
      case "penjor":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M6 22V8c0-4 3-6 7-6 3 0 5 2 5 5 0 2-2 3-3 3M15 10l-2 5M12 14l-2 4"/></svg>`;
      case "calendar":
        return `<svg viewBox="0 0 24 24" ${common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg>`;
      case "hands":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M7 11V7a2 2 0 0 1 4 0v4M11 7a2 2 0 0 1 4 0v4M15 9a2 2 0 0 1 4 0v5a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7v-3a2 2 0 0 1 4 0v2"/></svg>`;
      case "rice":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M4 11c0 5 3.5 9 8 9s8-4 8-9H4Z"/><path d="M8 7c0-2 2-3 2-4M12 7c0-2 2-3 2-4M16 7c0-2 2-3 2-4"/></svg>`;
      case "shield":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>`;
      case "bag":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M6 8h12l2 12H4L6 8ZM9 8V5a3 3 0 0 1 6 0v3"/></svg>`;
      case "flame":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.63-1.5-3.5-1.5-3.5s-1.5 1.87-1.5 3.5Z"/><path d="M12 2c1 3 4 5 4 9a6 6 0 1 1-12 0c0-4 3-6 4-9 1.5 3 2.5 4 4 0Z"/></svg>`;
      case "tools":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
      case "music":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M9 18V5l12-2v13M9 9l12-2M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>`;
      case "house":
        return `<svg viewBox="0 0 24 24" ${common}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" ${common}><circle cx="12" cy="12" r="9"/></svg>`;
    }
  }
  function updatePopupSlides(animated = true) {
    const labelEl = document.getElementById("dialogLevelLabel");
    const titleEl = document.getElementById("dialogLevelTitle");
    const bodyEl = document.getElementById("dialogLevelBody");
    const dotsEl = document.getElementById("dialogSlideDots");
    const prevBtn = document.getElementById("dialogPrevBtn");
    const actionBtn = document.getElementById("dialogActionBtn");
    const lvl = levels.find((l) => l.num === currentPopupLevel);
    const lvlSlides = slides[currentPopupLevel] || [];
    currentSlideIndex = Math.max(0, Math.min(4, currentSlideIndex));
    const currentSlide = lvlSlides[currentSlideIndex];
    if (!lvl || !currentSlide || !labelEl || !titleEl || !bodyEl || !actionBtn) return;
    labelEl.textContent = `LEVEL ${lvl.num} \xB7 SLIDE ${currentSlideIndex + 1} DARI 5`;
    titleEl.textContent = currentSlide.title;
    bodyEl.textContent = currentSlide.body;
    if (dotsEl) {
      dotsEl.innerHTML = [0, 1, 2, 3, 4].map(
        (i) => `<span class="dialog-dot ${i === currentSlideIndex ? "dot-active" : ""}" data-slide="${i}"></span>`
      ).join("");
      dotsEl.querySelectorAll(".dialog-dot").forEach((dot) => {
        dot.style.cursor = "pointer";
        dot.onclick = () => {
          currentSlideIndex = parseInt(dot.dataset.slide, 10);
          updatePopupSlides(true);
          updatePopupSidePanel();
        };
      });
    }
    if (prevBtn) {
      if (currentSlideIndex === 0) {
        prevBtn.classList.add("hidden");
      } else {
        prevBtn.classList.remove("hidden");
      }
    }
    if (currentSlideIndex === 4) {
      actionBtn.textContent = "Mulai tantangan";
      actionBtn.className = "px-6 py-2 rounded-full bg-[#9ACD5A] text-[#0F4D3A] font-display font-extrabold text-[15px] shadow-[0_4px_0_#6FA33A] hover:brightness-105 active:scale-95 transition-all cursor-pointer";
    } else {
      actionBtn.textContent = "Lanjut";
      actionBtn.className = "px-6 py-2 rounded-full bg-[#1F8A63] text-white font-display font-extrabold text-[15px] shadow-[0_4px_0_#14634A] hover:brightness-105 active:scale-95 transition-all cursor-pointer";
    }
    if (animated && window.gsap) {
      gsap.fromTo(
        "#dialogCardContent",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }
  }
  function updatePopupSidePanel() {
    const panel = sidePanels[currentPopupLevel];
    const tabTitleEl = document.getElementById("sideTopicTabTitle");
    const containerEl = document.getElementById("sideTopicTilesContainer");
    const footerEl = document.getElementById("sideTopicFooter");
    if (!panel || !tabTitleEl || !containerEl) return;
    tabTitleEl.textContent = panel.tabTitle;
    if (panel.isGrid2x2) {
      containerEl.className = "grid grid-cols-2 gap-3 text-center";
    } else {
      containerEl.className = "grid grid-cols-3 gap-3 text-center";
    }
    containerEl.innerHTML = panel.tiles.map((tile) => {
      const isActive = tile.relatedSlide === currentSlideIndex;
      const svgIcon = getTileSvgIcon(tile.icon);
      return `
        <div
          class="side-topic-tile ${isActive ? "tile-active" : ""}"
          style="background-color: ${tile.bg}; box-shadow: ${tile.shadow};"
        >
          <div class="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-xs mb-1">
            ${svgIcon}
          </div>
          <h4 class="font-display font-extrabold text-[15px] text-[#0F4D3A] leading-[1.15] mt-1 line-clamp-1">
            ${tile.title}
          </h4>
          <span class="font-body font-bold text-[12px] text-[#14634A] leading-tight mt-0.5">
            ${tile.sub}
          </span>
        </div>
      `;
    }).join("");
    if (footerEl) {
      if (panel.footerLine) {
        footerEl.classList.remove("hidden");
        footerEl.innerHTML = `
        <span class="w-5 h-5 flex items-center justify-center text-[#1F8A63]">\u2726</span>
        <span>${panel.footerLine.text}</span>
      `;
      } else {
        footerEl.classList.add("hidden");
      }
    }
  }
  function openLivingPopup(levelNum) {
    const root = document.getElementById("livingPopupRoot");
    const slidesView = document.getElementById("livingSlidesView");
    const quizView = document.getElementById("livingQuizView");
    const celebView = document.getElementById("livingCelebrationView");
    const closeBtn = document.getElementById("livingPopupCloseBtn");
    if (!root || !slidesView || !quizView || !celebView) return;
    currentPopupLevel = levelNum;
    currentSlideIndex = 0;
    root.classList.remove("hidden");
    root.classList.add("flex");
    document.body.style.overflow = "hidden";
    slidesView.classList.remove("hidden");
    quizView.classList.add("hidden");
    celebView.classList.add("hidden");
    updatePopupSlides(true);
    updatePopupSidePanel();
    if (closeBtn) closeBtn.focus();
  }
  function closeLivingPopup() {
    const root = document.getElementById("livingPopupRoot");
    if (!root) return;
    root.classList.add("hidden");
    root.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
  function startPopupQuiz() {
    const slidesView = document.getElementById("livingSlidesView");
    const quizView = document.getElementById("livingQuizView");
    if (!slidesView || !quizView) return;
    slidesView.classList.add("hidden");
    quizView.classList.remove("hidden");
    renderActivity(currentPopupLevel, (completedNum) => {
      completedLevels.add(completedNum);
      saveProgress(unlockedLevel);
      renderNodes();
      if (completedNum === 6 || completedLevels.size >= 6) {
        setTimeout(() => {
          showCelebrationView();
        }, 400);
      } else {
        if (completedNum === unlockedLevel && unlockedLevel < 6) {
          unlockedLevel = completedNum + 1;
          saveProgress(unlockedLevel);
          renderNodes();
        }
        closeLivingPopup();
      }
    });
  }
  function showCelebrationView() {
    const slidesView = document.getElementById("livingSlidesView");
    const quizView = document.getElementById("livingQuizView");
    const celebView = document.getElementById("livingCelebrationView");
    if (!celebView) return;
    if (slidesView) slidesView.classList.add("hidden");
    if (quizView) quizView.classList.add("hidden");
    celebView.classList.remove("hidden");
    if (window.gsap) {
      gsap.fromTo(
        "#celebrationCard",
        { scale: 0.85, opacity: 0, y: 24 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.5)" }
      );
      gsap.fromTo(
        ".celebration-level-icon",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" }
      );
      gsap.fromTo(
        ".celebration-check-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, stagger: 0.09, ease: "back.out(1.8)", delay: 0.15 }
      );
    }
  }
  function setupPopupListeners() {
    const root = document.getElementById("livingPopupRoot");
    const closeBtn = document.getElementById("livingPopupCloseBtn");
    const backdrop = document.getElementById("livingPopupBackdrop");
    const prevBtn = document.getElementById("dialogPrevBtn");
    const actionBtn = document.getElementById("dialogActionBtn");
    const viewLessonsBtn = document.getElementById("activityViewLessonsBtn");
    const actCloseBtn = document.getElementById("activityCloseBtn");
    const celebCloseBtn = document.getElementById("celebrationCloseBtn");
    const celebContinueBtn = document.getElementById("celebrationContinueBtn");
    const celebRestartBtn = document.getElementById("celebrationRestartBtn");
    if (closeBtn) closeBtn.addEventListener("click", closeLivingPopup);
    if (backdrop) backdrop.addEventListener("click", closeLivingPopup);
    if (actCloseBtn) actCloseBtn.addEventListener("click", closeLivingPopup);
    if (celebCloseBtn) celebCloseBtn.addEventListener("click", closeLivingPopup);
    if (celebContinueBtn) {
      celebContinueBtn.addEventListener("click", () => {
        closeLivingPopup();
        const sec44 = document.getElementById("section-4-4-wrapper");
        if (sec44) {
          sec44.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    if (celebRestartBtn) {
      celebRestartBtn.addEventListener("click", () => {
        completedLevels.clear();
        unlockedLevel = 1;
        saveProgress(1);
        renderNodes();
        closeLivingPopup();
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentSlideIndex > 0) {
          currentSlideIndex--;
          updatePopupSlides(true);
          updatePopupSidePanel();
        }
      });
    }
    if (actionBtn) {
      actionBtn.addEventListener("click", () => {
        if (currentSlideIndex < 4) {
          currentSlideIndex++;
          updatePopupSlides(true);
          updatePopupSidePanel();
        } else {
          startPopupQuiz();
        }
      });
    }
    if (viewLessonsBtn) {
      viewLessonsBtn.addEventListener("click", () => {
        const slidesView = document.getElementById("livingSlidesView");
        const quizView = document.getElementById("livingQuizView");
        if (slidesView && quizView) {
          quizView.classList.add("hidden");
          slidesView.classList.remove("hidden");
          updatePopupSlides(true);
          updatePopupSidePanel();
        }
      });
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const popup = document.getElementById("livingPopupRoot");
        if (popup && !popup.classList.contains("hidden")) {
          closeLivingPopup();
        }
      }
    });
  }
  function setupLivingParallax() {
    const frame = document.getElementById("section-4-3-frame");
    const islandImg = document.querySelector(".living-island-img");
    const nodesLayer = document.getElementById("livingNodesContainer");
    if (!frame || !window.gsap) return;
    frame.addEventListener("mousemove", (e) => {
      const rect = frame.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      if (islandImg) {
        gsap.to(islandImg, {
          x: nx * 14,
          y: ny * 10,
          rotationY: nx * 2,
          rotationX: -ny * 2,
          duration: 0.8,
          ease: "power2.out"
        });
      }
      if (nodesLayer) {
        gsap.to(nodesLayer, {
          x: nx * 18,
          y: ny * 14,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });
    frame.addEventListener("mouseleave", () => {
      if (islandImg) {
        gsap.to(islandImg, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 1,
          ease: "power2.out"
        });
      }
      if (nodesLayer) {
        gsap.to(nodesLayer, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out"
        });
      }
    });
  }
  function initLivingCulture() {
    loadSavedProgress();
    renderNodes();
    setupLivingParallax();
    setupPopupListeners();
    const manukImg = document.querySelector(".living-manuk-img");
    if (manukImg && window.gsap) {
      gsap.to(manukImg, {
        y: -10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    window.sakalaLiving = {
      advanceLevel,
      openPopup: openLivingPopup,
      closePopup: closeLivingPopup,
      resetProgress: () => {
        unlockedLevel = 1;
        completedLevels.clear();
        saveProgress(1);
        renderNodes();
      },
      getProgress: () => ({ unlockedLevel, completed: Array.from(completedLevels) })
    };
  }

  var MONTHS_DATA = [
    {
      id: "nov-2026",
      label: "Nov 2026",
      title: "November 2026",
      year: 2026,
      monthIndex: 10,

      defaultDay: 4,
      events: {
        1: {
          dateStr: "Minggu, 1 November 2026",
          name: "Banyu Pinaruh",
          tier: "around",
          cycle: "SIKLUS 210 HARI",
          meaning: "Penyucian diri di sumber air atau laut sehari setelah turunnya ilmu pengetahuan suci Saraswati.",
          related: "Saraswati (31 Okt)"
        },
        4: {
          dateStr: "Rabu, 4 November 2026",
          name: "Pagerwesi",
          tier: "main",
          cycle: "SIKLUS 210 HARI",
          meaning: "Memagari diri dengan keteguhan iman dan ilmu pengetahuan suci agar terhindar dari kegelapan batin.",
          related: "Banyu Pinaruh (1 Nov)"
        },
        9: {
          dateStr: "Senin, 9 November 2026",
          name: "Tilem Sasih Kelima",
          tier: "around",
          cycle: "SASIH / BULAN",
          meaning: "Hari bulan mati untuk peleburan kekotoran batin dan pemujaan kehadapan Sang Hyang Surya.",
          related: "Purnama (24 Nov)"
        },
        14: {
          dateStr: "Sabtu, 14 November 2026",
          name: "Tumpek Landep",
          tier: "related",
          cycle: "SIKLUS 210 HARI",
          meaning: "Penyucian benda pusaka dan senjata tajam sebagai simbol penajaman pikiran serta kecerdasan budi.",
          related: "Pagerwesi (4 Nov)"
        },
        24: {
          dateStr: "Selasa, 24 November 2026",
          name: "Purnama Sasih Kelima",
          tier: "around",
          cycle: "SASIH / BULAN",
          meaning: "Hari bulan purnama penuh berkah untuk memohon kerahayuan dan kesucian alam semesta.",
          related: "Tilem (9 Nov)"
        }
      }
    },
    {
      id: "jan-2027",
      label: "Jan 2027",
      title: "Januari 2027",
      year: 2027,
      monthIndex: 0,

      defaultDay: 13,
      events: {
        12: {
          dateStr: "Selasa, 12 Januari 2027",
          name: "Penampahan Galungan",
          tier: "around",
          cycle: "SIKLUS 210 HARI",
          meaning: "Hari persiapan menjelang Galungan, memasang penjor indah di tepi jalan dan menenangkan diri.",
          related: "Galungan (13 Jan)"
        },
        13: {
          dateStr: "Rabu, 13 Januari 2027",
          name: "Galungan",
          tier: "main",
          cycle: "SIKLUS 210 HARI",
          meaning: "Kemenangan dharma atas adharma. Penjor berdiri di tepi jalan.",
          related: "Kuningan (23 Jan)"
        },
        14: {
          dateStr: "Kamis, 14 Januari 2027",
          name: "Manis Galungan",
          tier: "around",
          cycle: "SIKLUS 210 HARI",
          meaning: "Hari bersilaturahmi, mengunjungi sanak keluarga, dan menikmati kedamaian setelah puncak perayaan.",
          related: "Galungan (13 Jan)"
        },
        23: {
          dateStr: "Sabtu, 23 Januari 2027",
          name: "Kuningan",
          tier: "related",
          cycle: "SIKLUS 210 HARI",
          meaning: "Pemujaan saat para leluhur kembali ke alam suci, dihiasi tamiang, kolem, dan endongan kuning.",
          related: "Galungan (13 Jan)"
        }
      }
    },
    {
      id: "mar-2027",
      label: "Mar 2027",
      title: "Maret 2027",
      year: 2027,
      monthIndex: 2,

      defaultDay: 9,
      events: {
        8: {
          dateStr: "Senin, 8 Maret 2027",
          name: "Pengrupukan",
          tier: "around",
          cycle: "SASIH / TAHUN SAKA",
          meaning: "Upacara tawur agung kesanga dan pawai ogoh-ogoh meriah untuk menetralisir energi negatif.",
          related: "Nyepi (9 Mar)"
        },
        9: {
          dateStr: "Selasa, 9 Maret 2027",
          name: "Hari Suci Nyepi",
          tier: "main",
          cycle: "SASIH / TAHUN SAKA",
          meaning: "Hari hening: tanpa api, tanpa bepergian, tanpa keramaian.",
          related: "Ngembak Geni (10 Mar)"
        },
        10: {
          dateStr: "Rabu, 10 Maret 2027",
          name: "Ngembak Geni",
          tier: "related",
          cycle: "SASIH / TAHUN SAKA",
          meaning: "Mengawali tahun baru Saka 1949 dengan saling memaafkan dan menjalin tali kerukunan (Dharma Santi).",
          related: "Nyepi (9 Mar)"
        }
      }
    }
  ];
  var currentMonthIdx = 1;
  var currentSelectedDay = 13;
  var isFlipping = false;
  function generateGridHtml(monthData, selectedDay) {
    const { year, monthIndex, events } = monthData;
    const firstDayWeekday = new Date(year, monthIndex, 1).getDay();
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();
    let cells = "";
    for (let i = 0; i < firstDayWeekday; i++) {
      cells += `<div class="cal-day-cell empty"></div>`;
    }
    for (let day = 1; day <= totalDays; day++) {
      const isSunday = (firstDayWeekday + day - 1) % 7 === 0;
      const event = events[day];
      const isSelected = day === selectedDay;
      let tierClass = "";
      if (event) {
        if (event.tier === "main") tierClass = "tier-main";
        else if (event.tier === "related") tierClass = "tier-related";
        else tierClass = "tier-around";
      }
      const selectedClass = isSelected ? "selected" : "";
      const sundayClass = isSunday ? "sunday" : "";
      cells += `
      <div
        class="cal-day-cell ${event ? "has-event" : ""} ${tierClass} ${selectedClass} ${sundayClass}"
        data-day="${day}"
        title="${event ? event.name : ""}"
      >
        <span class="day-number">${day}</span>
        ${event ? `<span class="event-indicator-dot"></span>` : ""}
      </div>
    `;
    }
    return cells;
  }
  function updateStickyNote(monthData, dayNumber, animate = true) {
    const event = monthData.events[dayNumber];
    if (!event) return;
    const cardInner = document.getElementById("calStickyNoteInner");
    const cyclePill = document.getElementById("calNoteCycle");
    const nameEl = document.getElementById("calNoteName");
    const dateEl = document.getElementById("calNoteDate");
    const meaningEl = document.getElementById("calNoteMeaning");
    const relatedEl = document.getElementById("calNoteRelated");
    if (!cardInner || !nameEl || !meaningEl) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updateContent = () => {
      if (cyclePill) cyclePill.textContent = event.cycle;
      nameEl.textContent = event.name;
      if (dateEl) dateEl.textContent = event.dateStr;
      meaningEl.textContent = event.meaning;
      if (relatedEl) {
        relatedEl.textContent = `Hari Terkait: ${event.related}`;
      }
    };
    if (!animate || !window.gsap) {
      updateContent();
      return;
    }
    if (prefersReduced) {
      gsap.timeline().to(cardInner, { opacity: 0, duration: 0.1 }).add(updateContent).to(cardInner, { opacity: 1, duration: 0.1 });
      return;
    }
    gsap.timeline().to(cardInner, {
      rotateY: 90,
      scale: 0.96,
      duration: 0.25,
      ease: "power2.in",
      onComplete: updateContent
    }).to(cardInner, {
      rotateY: 0,
      scale: 1,
      duration: 0.35,
      ease: "back.out(1.5)"
    });
  }
  function updateMonthTabs() {
    const container = document.getElementById("calMonthTabs");
    if (!container) return;
    container.innerHTML = MONTHS_DATA.map((m, idx) => {
      const isActive = idx === currentMonthIdx;
      const btnClass = isActive ? "bg-[#2F9E3B] text-white shadow-[0_3px_0_#1B6E2A] scale-105" : "bg-[#BFE0F8] text-[#1B84DB] shadow-[0_3px_0_#8FC2EA] hover:brightness-105";
      return `
      <button
        class="cal-month-tab-btn px-5 py-1.5 rounded-full font-display font-extrabold text-[14px] transition-all duration-200 select-none cursor-pointer ${btnClass}"
        data-month-index="${idx}"
      >
        ${m.label}
      </button>
    `;
    }).join("");
    if (!container.dataset.delegated) {
      container.dataset.delegated = "true";
      container.addEventListener("click", (e) => {
        const btn = e.target.closest(".cal-month-tab-btn");
        if (!btn) return;
        const targetIdx = parseInt(btn.dataset.monthIndex, 10);
        if (!isNaN(targetIdx) && targetIdx !== currentMonthIdx) {
          changeMonth(targetIdx);
        }
      });
    }
  }
  function updateNavButtons(sheetEl, monthIdx) {
    const prevBtn = sheetEl.querySelector("#calHeaderPrev") || document.getElementById("calHeaderPrev");
    const nextBtn = sheetEl.querySelector("#calHeaderNext") || document.getElementById("calHeaderNext");
    if (prevBtn) {
      const isFirst = monthIdx === 0;
      prevBtn.style.opacity = isFirst ? "0.45" : "1";
      prevBtn.style.cursor = isFirst ? "default" : "pointer";
      prevBtn.disabled = isFirst;
    }
    if (nextBtn) {
      const isLast = monthIdx === MONTHS_DATA.length - 1;
      nextBtn.style.opacity = isLast ? "0.45" : "1";
      nextBtn.style.cursor = isLast ? "default" : "pointer";
      nextBtn.disabled = isLast;
    }
  }
  var activeTimeline = null;
  function changeMonth(targetIdx) {
    if (targetIdx < 0 || targetIdx >= MONTHS_DATA.length) return;
    if (targetIdx === currentMonthIdx && !isFlipping) return;
    if (activeTimeline && activeTimeline.isActive()) {
      activeTimeline.progress(1);
    }
    if (targetIdx === currentMonthIdx) return;
    const isForward = targetIdx > currentMonthIdx;
    currentMonthIdx = targetIdx;
    const newMonth = MONTHS_DATA[currentMonthIdx];
    currentSelectedDay = newMonth.defaultDay;
    updateMonthTabs();
    const frontSheet = document.getElementById("calSheetFront");
    const underSheet = document.getElementById("calSheetUnder");
    const shadowOverlay = document.getElementById("calSheetCurlShadow");
    if (!frontSheet || !underSheet) return;
    renderSheetContent(underSheet, newMonth, currentSelectedDay);
    updateStickyNote(newMonth, currentSelectedDay, true);
    updateNavButtons(frontSheet, currentMonthIdx);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !window.gsap) {
      renderSheetContent(frontSheet, newMonth, currentSelectedDay);
      attachDayClickListeners(frontSheet);
      updateNavButtons(frontSheet, currentMonthIdx);
      return;
    }
    isFlipping = true;
    if (isForward) {
      gsap.set(frontSheet, { transformOrigin: "top center", zIndex: 20 });
      gsap.set(underSheet, { zIndex: 10 });
      if (shadowOverlay) gsap.set(shadowOverlay, { opacity: 0 });
      const tl = gsap.timeline({
        onComplete: () => {
          renderSheetContent(frontSheet, newMonth, currentSelectedDay);
          attachDayClickListeners(frontSheet);
          updateNavButtons(frontSheet, currentMonthIdx);
          gsap.set(frontSheet, { rotateX: 0, zIndex: 10 });
          if (shadowOverlay) gsap.set(shadowOverlay, { opacity: 0 });
          isFlipping = false;
          activeTimeline = null;
        }
      });
      activeTimeline = tl;
      tl.to(frontSheet, {
        rotateX: -180,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);
      if (shadowOverlay) {
        tl.to(shadowOverlay, {
          opacity: 0.75,
          duration: 0.25,
          ease: "power1.in"
        }, 0).to(shadowOverlay, {
          opacity: 0,
          duration: 0.25,
          ease: "power1.out"
        }, 0.25);
      }
    } else {
      renderSheetContent(underSheet, newMonth, currentSelectedDay);
      attachDayClickListeners(underSheet);
      gsap.set(underSheet, { transformOrigin: "top center", rotateX: -180, zIndex: 20 });
      gsap.set(frontSheet, { zIndex: 10 });
      const tl = gsap.timeline({
        onComplete: () => {
          renderSheetContent(frontSheet, newMonth, currentSelectedDay);
          attachDayClickListeners(frontSheet);
          updateNavButtons(frontSheet, currentMonthIdx);
          gsap.set(frontSheet, { rotateX: 0, zIndex: 10 });
          gsap.set(underSheet, { rotateX: 0, zIndex: 5 });
          isFlipping = false;
          activeTimeline = null;
        }
      });
      activeTimeline = tl;
      tl.to(underSheet, {
        rotateX: 0,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);
    }
  }
  function renderSheetContent(sheetEl, monthData, selectedDay) {
    const headerTitle = sheetEl.querySelector(".cal-sheet-title");
    const daysGrid = sheetEl.querySelector(".cal-days-grid");
    if (headerTitle) {
      headerTitle.textContent = monthData.title;
    }
    if (daysGrid) {
      daysGrid.innerHTML = generateGridHtml(monthData, selectedDay);
    }
  }
  function selectDay(day) {
    const currentMonth = MONTHS_DATA[currentMonthIdx];
    if (!currentMonth.events[day]) return;
    currentSelectedDay = day;
    const frontSheet = document.getElementById("calSheetFront");
    if (frontSheet) {
      frontSheet.querySelectorAll(".cal-day-cell").forEach((c) => {
        const cellDay = parseInt(c.dataset.day, 10);
        if (cellDay === day) {
          c.classList.add("selected");
          if (window.gsap) {
            gsap.fromTo(c, { scale: 0.9 }, { scale: 1.15, duration: 0.35, ease: "back.out(2)", yoyo: true, repeat: 1 });
          }
        } else {
          c.classList.remove("selected");
        }
      });
    }
    updateStickyNote(currentMonth, currentSelectedDay, true);
  }
  function attachDayClickListeners(sheetEl) {
    const grid = sheetEl.querySelector(".cal-days-grid");
    if (!grid) return;
    if (!grid.dataset.delegated) {
      grid.dataset.delegated = "true";
      grid.addEventListener("click", (e) => {
        const cell = e.target.closest(".cal-day-cell.has-event");
        if (!cell) return;
        const day = parseInt(cell.dataset.day, 10);
        if (!isNaN(day) && day !== currentSelectedDay) {
          selectDay(day);
        }
      });
    }
  }
  function setupFullCalendarModal() {
    const modal = document.getElementById("calFullModal");
    const openBtn = document.getElementById("calFullCalendarBtn");
    const closeBtn = document.getElementById("calFullModalCloseBtn");
    const backdrop = document.getElementById("calFullModalBackdrop");
    const listContainer = document.getElementById("calFullModalList");
    if (!modal || !openBtn || !listContainer) return;
    listContainer.innerHTML = MONTHS_DATA.map((month, monthIdx) => {
      const holidayEntries = Object.entries(month.events).sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10));
      const rowsHtml = holidayEntries.map(([dayNumStr, event]) => {
        const dayNum = parseInt(dayNumStr, 10);
        const tierBadge = event.tier === "main" ? `<span class="px-2.5 py-0.5 rounded-full bg-[#2F9E3B] text-white text-[11px] font-extrabold uppercase">Utama</span>` : event.tier === "related" ? `<span class="px-2.5 py-0.5 rounded-full bg-[#FFB04A] text-white text-[11px] font-extrabold uppercase">Terkait</span>` : `<span class="px-2.5 py-0.5 rounded-full bg-[#7CCB36] text-white text-[11px] font-extrabold uppercase">Rangkaian</span>`;
        return `
        <div
          class="cal-holiday-row"
          data-month-index="${monthIdx}"
          data-day="${dayNum}"
        >
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-[#DDF3B0] text-[#1B6E2A] font-display font-extrabold text-[16px] flex items-center justify-center shrink-0">
              ${dayNum}
            </span>
            <div class="flex flex-col text-left">
              <span class="font-display font-extrabold text-[16px] text-[#0D4A2C] leading-snug">
                ${event.name}
              </span>
              <span class="font-body font-bold text-[13px] text-[#1B84DB]">
                ${event.dateStr}
              </span>
              <p class="font-body font-medium text-[12px] text-[#4A6E63] mt-0.5 line-clamp-2">
                ${event.meaning}
              </p>
            </div>
          </div>
          <div class="shrink-0 ml-2">
            ${tierBadge}
          </div>
        </div>
      `;
      }).join("");
      return `
      <div class="flex flex-col gap-2">
        <h3 class="font-display font-extrabold text-[18px] text-[#2F9E3B] border-b border-[#E2E8F0] pb-1">
          ${month.title}
        </h3>
        <div class="flex flex-col gap-2">
          ${rowsHtml}
        </div>
      </div>
    `;
    }).join("");
    listContainer.addEventListener("click", (e) => {
      const row = e.target.closest(".cal-holiday-row");
      if (!row) return;
      const monthIdx = parseInt(row.dataset.monthIndex, 10);
      const day = parseInt(row.dataset.day, 10);
      closeModal();
      if (!isNaN(monthIdx)) {
        if (monthIdx !== currentMonthIdx) {
          changeMonth(monthIdx);
        }
        setTimeout(() => {
          selectDay(day);
        }, 300);
      }
    });
    function openModal() {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }
    function closeModal() {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
    openBtn.addEventListener("click", openModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  }
  function initCalendar() {
    const initialMonth = MONTHS_DATA[currentMonthIdx];
    currentSelectedDay = initialMonth.defaultDay;
    updateMonthTabs();
    const frontSheet = document.getElementById("calSheetFront");
    const underSheet = document.getElementById("calSheetUnder");
    if (frontSheet) {
      renderSheetContent(frontSheet, initialMonth, currentSelectedDay);
      attachDayClickListeners(frontSheet);
      updateNavButtons(frontSheet, currentMonthIdx);
    }
    if (underSheet) {
      renderSheetContent(underSheet, initialMonth, currentSelectedDay);
      updateNavButtons(underSheet, currentMonthIdx);
    }
    updateStickyNote(initialMonth, currentSelectedDay, false);
    const prevBtn = document.getElementById("calHeaderPrev");
    const nextBtn = document.getElementById("calHeaderNext");
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentMonthIdx > 0) changeMonth(currentMonthIdx - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentMonthIdx < MONTHS_DATA.length - 1) changeMonth(currentMonthIdx + 1);
      });
    }
    setupFullCalendarModal();
    window.addEventListener("keydown", (e) => {
      const calSection = document.getElementById("section-4-4-wrapper");
      if (!calSection) return;
      const rect = calSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === "ArrowLeft" && currentMonthIdx > 0) {
          changeMonth(currentMonthIdx - 1);
        } else if (e.key === "ArrowRight" && currentMonthIdx < MONTHS_DATA.length - 1) {
          changeMonth(currentMonthIdx + 1);
        }
      }
    });
    window.sakalaCalendar = {
      changeMonth,
      selectDay,
      getState: () => ({
        currentMonthIdx,
        currentSelectedDay,
        month: MONTHS_DATA[currentMonthIdx]
      })
    };
  }

  var BADGE_ART_SRC = "assets/eksplorasi/badge/badge_tiga.webp";
  var CATEGORY_ICONS = {
    tari: "assets/eksplorasi/budaya/tarian_icon.webp",
    lukis: "assets/eksplorasi/budaya/lukisan_icon.webp",
    kain: "assets/eksplorasi/budaya/kain_icon.webp",
    ukir: "assets/eksplorasi/budaya/ukir_icon.webp"
  };
  var state = {
    category: "tari",

    selectedId: "tari-legong",
    viewedIds:                 new Set(),
    savedIds:                 new Set(),
    badgeEarned: false
  };
  var ROTATION_PATTERN = [-8, -3, 0, 4];
  var TRANSLATE_Y_PATTERN = [42, 20, 0, 24];
  console.assert(
    works.every((w) => categories.some((c) => c.id === w.category)),
    "Self-test failed: all works must have a valid category id"
  );
  console.assert(
    categories.every((c) => works.filter((w) => w.category === c.id).length >= 4),
    "Self-test failed: each category must have >= 4 works"
  );
  function initApp() {
    try {
      const storedViews = localStorage.getItem("sakala_art_viewed");
      if (storedViews) state.viewedIds = new Set(JSON.parse(storedViews));
      const storedSaves = localStorage.getItem("sakala_art_saved");
      if (storedSaves) state.savedIds = new Set(JSON.parse(storedSaves));
      const storedBadge = localStorage.getItem("sakala_art_badge");
      if (storedBadge) state.badgeEarned = JSON.parse(storedBadge);
    } catch (e) {
      console.warn("Storage access restricted", e);
    }
    state.viewedIds.add(state.selectedId);
    setupStageScaling();
    updateCenterIcon(state.category, false);
    initViewer((newWork) => {
      selectWork(newWork.id);
    });
    setupCategoryPills();
    renderRail(false);
    renderPanel(false);
    updateBadgeUI();
    initBook();
    initLivingCulture();
    initCalendar();
    setupRailInteractions();
    setupMascotAndParallax();
    runLoadTimeline();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
  function setupStageScaling() {
    function handleResize() {
      const vw = window.innerWidth;
      const scalers = document.querySelectorAll(".section-scaler, #stage-scaler");
      const wrappers = document.querySelectorAll(".section-scaler-wrapper, #stage-root");
      if (vw < 1280) {
        scalers.forEach((el) => {
          el.style.transform = "none";
          el.style.transformOrigin = "";
        });
        wrappers.forEach((el) => {
          el.style.height = "auto";
        });
        return;
      }
      const scale = Math.min(vw, 1920) / 1440;
      const scaledHeight = 900 * scale;
      scalers.forEach((el) => {
        el.style.transform = `scale(${scale})`;
        el.style.transformOrigin = "top left";
      });
      wrappers.forEach((el) => {
        const frame = el.querySelector(".section-frame, #stage");
        const baseH = frame ? parseFloat(frame.style.height || getComputedStyle(frame).height) || 900 : 900;
        el.style.height = `${baseH * scale}px`;
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }
  function setupCategoryPills() {
    const container = document.getElementById("categoryPillsContainer");
    if (!container) return;
    container.innerHTML = categories.map((cat) => {
      const isActive = cat.id === state.category;
      return `
        <button
          id="pill-${cat.id}"
          data-category-id="${cat.id}"
          class="category-pill-btn ${isActive ? "pill-active" : "pill-inactive"} interactive-ui"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          ${cat.label}
        </button>
      `;
    }).join("");
    container.querySelectorAll(".category-pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = btn.dataset.categoryId;
        if (catId === state.category) return;
        setCategory(catId);
      });
    });
  }
  function updatePillsUI() {
    const container = document.getElementById("categoryPillsContainer");
    if (!container) return;
    container.querySelectorAll(".category-pill-btn").forEach((btn) => {
      const catId = btn.dataset.categoryId;
      const isActive = catId === state.category;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      if (isActive) {
        btn.classList.add("pill-active");
        btn.classList.remove("pill-inactive");
      } else {
        btn.classList.add("pill-inactive");
        btn.classList.remove("pill-active");
      }
    });
  }
  function setCategory(id) {
    if (!categories.some((c) => c.id === id)) return;
    state.category = id;
    updatePillsUI();
    const catWorks = works.filter((w) => w.category === id);
    if (catWorks.length > 0) {
      state.selectedId = catWorks[0].id;
      recordWorkViewed(state.selectedId);
    }
    renderRail(true);
    renderPanel(true);
    updateCenterIcon(id, true);
  }
  window.setCategory = setCategory;
  function updateCenterIcon(categoryId, animate = true) {
    const img = document.getElementById("artCenterIconImg");
    if (!img) return;
    const newSrc = CATEGORY_ICONS[categoryId] || CATEGORY_ICONS.tari;
    img.style.transformOrigin = "center bottom";
    if (!animate || !window.gsap) {
      img.src = newSrc;
      window.gsap.set(img, { scale: 1, opacity: 1 });
      return;
    }
    window.gsap.killTweensOf(img);
    window.gsap.to(img, {
      scale: 0.78,
      opacity: 0,
      duration: 0.12,
      ease: "power2.in",
      onComplete: () => {
        img.src = newSrc;
        window.gsap.fromTo(
          img,
          { scale: 0.78, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "back.out(1.7)"
          }
        );
      }
    });
  }
  window.updateCenterIcon = updateCenterIcon;
  function selectWork(id) {
    const targetWork = works.find((w) => w.id === id);
    if (!targetWork) return;
    state.selectedId = id;
    recordWorkViewed(id);
    updateRailSelection();
    renderPanel(true);
  }
  window.selectWork = selectWork;
  function recordWorkViewed(workId) {
    if (!state.viewedIds.has(workId)) {
      state.viewedIds.add(workId);
      try {
        localStorage.setItem("sakala_art_viewed", JSON.stringify(Array.from(state.viewedIds)));
      } catch (e) {
      }
      if (state.viewedIds.size >= 3 && !state.badgeEarned) {
        unlockBadge();
      }
      updateBadgeUI();
    }
  }
  function renderRail(isCategoryChange = false) {
    const rail = document.getElementById("workCardsRail");
    if (!rail) return;
    const catWorks = works.filter((w) => w.category === state.category);
    const currentCategoryObj = categories.find((c) => c.id === state.category);
    const cardTag = currentCategoryObj ? currentCategoryObj.cardTag : "Budaya Bali";
    const renderCardsHtml = () => {
      rail.innerHTML = catWorks.map((work, index) => {
        const isSelected = work.id === state.selectedId;
        const rotation = isSelected ? 0 : ROTATION_PATTERN[index % ROTATION_PATTERN.length];
        const translateY = isSelected ? 0 : TRANSLATE_Y_PATTERN[index % TRANSLATE_Y_PATTERN.length];
        const hasRealPhoto = work.photo && work.photo !== "placeholder";
        const photoHtml = hasRealPhoto ? `<img src="${work.photo}" alt="${work.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy">` : `<div class="placeholder-box"><span class="placeholder-text">${work.title}</span></div>`;
        return `
          <div
            id="card-${work.id}"
            data-work-id="${work.id}"
            data-rotation="${rotation}"
            data-translate-y="${translateY}"
            class="work-card-item shrink-0 relative bg-white flex flex-col justify-between cursor-pointer interactive-ui transition-all duration-200 group ${isSelected ? "w-[180px] rounded-[20px] p-[10px] outline outline-4 outline-lime shadow-selectedCard z-30" : "w-[170px] rounded-[18px] p-[8px_8px_10px] shadow-card z-20 hover:z-25"}"
            style="transform: translateY(${translateY}px) rotate(${rotation}deg);"
          >
            <!-- Card Photo Box (fixed 130px, selected 140px, radius 12/14) -->
            <div class="card-photo-box w-full overflow-hidden ${isSelected ? "h-[140px] rounded-[14px]" : "h-[130px] rounded-[12px]"}">
              ${photoHtml}
            </div>

            <!-- Title & Subtitle (Subtitle = category cardTag) -->
            <div class="flex flex-col mt-[8px]">
              <h3 class="font-display font-extrabold text-textDarkGreen leading-tight truncate ${isSelected ? "text-[17px]" : "text-[16px]"}">
                ${work.title}
              </h3>
              <span class="font-body font-bold text-[12px] text-primaryGreen mt-[2px] truncate">
                ${cardTag}
              </span>
            </div>

            <!-- View Hint Overlay on Hover -->
            <div class="card-view-hint absolute inset-0 bg-primaryGreen/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-[inherit] transition-opacity pointer-events-none">
              <span class="bg-white/95 px-3 py-1 rounded-full font-body font-extrabold text-[11px] text-textDarkGreen shadow-sm">
                 Lihat Detail
              </span>
            </div>
          </div>
        `;
      }).join("");
      rail.querySelectorAll(".work-card-item").forEach((card) => {
        const workId = card.dataset.workId;
        card.addEventListener("mouseenter", () => {
          const rot = parseFloat(card.dataset.rotation) || 0;
          const transY = parseFloat(card.dataset.translateY) || 0;
          card.style.transform = `translateY(${transY - 10}px) rotate(${rot * 0.4}deg) scale(1.03)`;
        });
        card.addEventListener("mouseleave", () => {
          const rot = parseFloat(card.dataset.rotation) || 0;
          const transY = parseFloat(card.dataset.translateY) || 0;
          card.style.transform = `translateY(${transY}px) rotate(${rot}deg) scale(1)`;
        });
        card.addEventListener("click", () => {
          selectWork(workId);
          const targetWork = works.find((w) => w.id === workId);
          openViewer(targetWork, catWorks, card);
        });
      });
      if (isCategoryChange) {
        rail.scrollTo({ left: 0, behavior: "smooth" });
        if (window.gsap) {
          window.gsap.from(".work-card-item", {
            y: 50,
            opacity: 0,
            stagger: 0.06,
            duration: 0.45,
            ease: "power3.out"
          });
        }
      }
    };
    if (isCategoryChange && window.gsap && rail.children.length > 0) {
      window.gsap.to(".work-card-item", {
        opacity: 0,
        y: 20,
        duration: 0.2,
        ease: "power2.in",
        onComplete: renderCardsHtml
      });
    } else {
      renderCardsHtml();
    }
  }
  function updateRailSelection() {
    const rail = document.getElementById("workCardsRail");
    if (!rail) return;
    rail.querySelectorAll(".work-card-item").forEach((card, index) => {
      const isSelected = card.dataset.workId === state.selectedId;
      const rotation = isSelected ? 0 : ROTATION_PATTERN[index % ROTATION_PATTERN.length];
      const translateY = isSelected ? 0 : TRANSLATE_Y_PATTERN[index % TRANSLATE_Y_PATTERN.length];
      card.dataset.rotation = rotation;
      card.dataset.translateY = translateY;
      card.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
      const photoBox = card.querySelector(".card-photo-box");
      const titleEl = card.querySelector("h3");
      if (isSelected) {
        card.className = "work-card-item shrink-0 relative bg-white flex flex-col justify-between cursor-pointer interactive-ui transition-all duration-200 group w-[180px] rounded-[20px] p-[10px] outline outline-4 outline-lime shadow-selectedCard z-30";
        if (photoBox) photoBox.className = "card-photo-box w-full overflow-hidden h-[140px] rounded-[14px]";
        if (titleEl) {
          titleEl.className = "font-display font-extrabold text-textDarkGreen leading-tight truncate text-[17px]";
        }
      } else {
        card.className = "work-card-item shrink-0 relative bg-white flex flex-col justify-between cursor-pointer interactive-ui transition-all duration-200 group w-[170px] rounded-[18px] p-[8px_8px_10px] shadow-card z-20 hover:z-25";
        if (photoBox) photoBox.className = "card-photo-box w-full overflow-hidden h-[130px] rounded-[12px]";
        if (titleEl) {
          titleEl.className = "font-display font-extrabold text-textDarkGreen leading-tight truncate text-[16px]";
        }
      }
    });
  }
  function renderPanel(isAnimated = false) {
    const work = works.find((w) => w.id === state.selectedId) || works.find((w) => w.category === state.category);
    if (!work) return;
    const titleEl = document.getElementById("panelWorkTitle");
    const maknaEl = document.getElementById("panelMaknaText");
    const asalEl = document.getElementById("panelAsalText");
    const konteksEl = document.getElementById("panelKonteksText");
    const placesList = document.getElementById("panelPlacesList");
    if (!titleEl || !maknaEl || !asalEl || !konteksEl || !placesList) return;
    titleEl.textContent = work.title;
    if (work.title.length > 20) {
      titleEl.classList.remove("text-[30px]");
      titleEl.classList.add("text-[24px]");
    } else {
      titleEl.classList.remove("text-[24px]");
      titleEl.classList.add("text-[30px]");
    }
    maknaEl.textContent = work.makna;
    asalEl.textContent = work.asal;
    konteksEl.textContent = work.konteks;
    const firstPlace = work.places && work.places.length > 0 ? work.places[0] : null;
    if (firstPlace) {
      const gmapsQuery = encodeURIComponent(`${firstPlace.name}, ${firstPlace.area || "Bali"}`);
      placesList.innerHTML = `
      <div class="flex flex-col text-left">
        <span class="font-body font-extrabold text-[13px] text-textDarkGreen leading-snug">
          ${firstPlace.name}
        </span>
        <span class="font-body font-bold text-[11px] text-textMuted leading-tight mt-[1px]">
           ${firstPlace.area || "Bali"}
        </span>
        <a
          href="https://www.google.com/maps/search/?api=1&query=${gmapsQuery}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 font-body font-extrabold text-[11px] text-blueAccent hover:underline mt-[4px]"
        >
          <span>Get Directions</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;
    } else {
      placesList.innerHTML = `
      <div class="flex flex-col text-left">
        <span class="font-body font-extrabold text-[13px] text-textDarkGreen leading-snug">
          Pusat Kebudayaan Bali
        </span>
        <span class="font-body font-bold text-[11px] text-textMuted leading-tight mt-[1px]">
           Gianyar / Denpasar
        </span>
      </div>
    `;
    }
    if (isAnimated && window.gsap) {
      window.gsap.fromTo(
        ".panel-crossfade-block",
        { opacity: 0.3, y: 6 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.04 }
      );
    }
    updateSaveButtonUI(work.id);
  }
  function updateSaveButtonUI(workId) {
    const saveBtn = document.getElementById("panelSaveBtn");
    if (!saveBtn) return;
    const isSaved = state.savedIds.has(workId);
    if (isSaved) {
      saveBtn.innerHTML = `
      <span class="flex items-center justify-center gap-2">
        <svg class="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <span>Tersimpan di Koleksi</span>
      </span>
    `;
      saveBtn.className = "w-full bg-pastelMint text-textDarkGreen border-2 border-primaryGreen font-display font-extrabold text-[15px] py-[8px] px-[16px] rounded-full shadow-sm transition-all";
    } else {
      saveBtn.innerHTML = `
      <span class="flex items-center justify-center gap-2">
        <svg class="w-4 h-4 text-textOnGreen" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <span>Simpan ke koleksi</span>
      </span>
    `;
      saveBtn.className = "w-full bg-primaryGreen text-textOnGreen font-display font-extrabold text-[16px] py-[9px] px-[16px] rounded-full shadow-btnGreen transition-all active:scale-95";
    }
    saveBtn.onclick = () => {
      toggleSaveWork(workId);
    };
  }
  function toggleSaveWork(workId) {
    const saveBtn = document.getElementById("panelSaveBtn");
    if (state.savedIds.has(workId)) {
      state.savedIds.delete(workId);
    } else {
      state.savedIds.add(workId);
      triggerSparkleBurst(saveBtn);
    }
    try {
      localStorage.setItem("sakala_art_saved", JSON.stringify(Array.from(state.savedIds)));
    } catch (e) {
    }
    updateSaveButtonUI(workId);
  }
  function unlockBadge() {
    state.badgeEarned = true;
    try {
      localStorage.setItem("sakala_art_badge", JSON.stringify(true));
    } catch (e) {
    }
    const pillNode = document.getElementById("page4BadgeNode");
    if (pillNode) triggerSparkleBurst(pillNode);
    showBadgeToast();
  }
  function updateBadgeUI() {
    const page4Node = document.getElementById("page4BadgeNode");
    const counterText = document.getElementById("counterPillText");
    const badgeHintBox = document.getElementById("badgeHintBox");
    if (page4Node && counterText) {
      if (state.badgeEarned) {
        page4Node.className = "w-[26px] h-[26px] rounded-full bg-lime flex items-center justify-center text-textDarkGreen text-[14px] font-extrabold shadow-sm";
        page4Node.innerHTML = "\u2713";
        counterText.innerText = "4/10";
      } else {
        page4Node.className = "w-[26px] h-[26px] rounded-full border-[3px] border-lime bg-white flex items-center justify-center";
        page4Node.innerHTML = `<img src="assets/eksplorasi/icon_pulau/gembok_kunci.webp" alt="Lock" class="w-[14px] h-[14px] object-contain">`;
        counterText.innerText = "3/10";
      }
    }
    if (badgeHintBox) {
      if (state.badgeEarned) {
        badgeHintBox.innerHTML = `
        <div class="w-[20px] h-[20px] rounded-full bg-lime flex items-center justify-center text-textDarkGreen font-bold text-xs shrink-0">\u2713</div>
        <span class="font-body font-extrabold text-[11px] text-textGreen leading-snug">Badge Sahabat Seni terbuka! </span>
      `;
      } else {
        const remaining = Math.max(0, 3 - state.viewedIds.size);
        badgeHintBox.innerHTML = `
        <img src="assets/eksplorasi/icon_pulau/gembok_kunci.webp" alt="Lock" class="w-[18px] h-[18px] object-contain shrink-0">
        <span class="font-body font-extrabold text-[11px] text-textGreen leading-snug">
          Lihat ${remaining} karya lagi untuk membuka badge Sahabat Seni
        </span>
      `;
      }
    }
  }
  function showBadgeToast() {
    const toast = document.getElementById("artBadgeToast");
    if (!toast) return;
    toast.classList.remove("hidden");
    toast.classList.add("flex");
    if (window.gsap) {
      window.gsap.fromTo(
        toast,
        { y: -30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)" }
      );
    }
    setTimeout(hideBadgeToast, 4800);
  }
  function hideBadgeToast() {
    const toast = document.getElementById("artBadgeToast");
    if (!toast) return;
    if (window.gsap) {
      window.gsap.to(toast, {
        y: -20,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          toast.classList.add("hidden");
          toast.classList.remove("flex");
        }
      });
    } else {
      toast.classList.add("hidden");
      toast.classList.remove("flex");
    }
  }
  window.hideBadgeToast = hideBadgeToast;
  function triggerSparkleBurst(targetEl) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    for (let i = 0; i < 8; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "fixed w-2 h-2 rounded-full pointer-events-none z-50";
      sparkle.style.backgroundColor = i % 2 === 0 ? "#9ACD5A" : "#2169B5";
      sparkle.style.left = `${originX}px`;
      sparkle.style.top = `${originY}px`;
      document.body.appendChild(sparkle);
      const angle = i / 8 * Math.PI * 2;
      const dist = 24 + Math.random() * 24;
      const destX = originX + Math.cos(angle) * dist;
      const destY = originY + Math.sin(angle) * dist;
      if (window.gsap) {
        window.gsap.to(sparkle, {
          left: destX,
          top: destY,
          opacity: 0,
          scale: 0.2,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => sparkle.remove()
        });
      } else {
        setTimeout(() => sparkle.remove(), 600);
      }
    }
  }
  function setupRailInteractions() {
    const rail = document.getElementById("workCardsRail");
    const leftBtn = document.getElementById("artRailLeftBtn");
    const rightBtn = document.getElementById("artRailRightBtn");
    if (!rail) return;
    if (leftBtn) {
      leftBtn.addEventListener("click", () => {
        rail.scrollBy({ left: -220, behavior: "smooth" });
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener("click", () => {
        rail.scrollBy({ left: 220, behavior: "smooth" });
      });
    }
    rail.addEventListener(
      "wheel",
      (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          rail.scrollLeft += e.deltaY;
        }
      },
      { passive: false }
    );
    let isDown = false;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let lastX = 0;
    rail.addEventListener("mousedown", (e) => {
      isDown = true;
      isDragging = false;
      startX = e.pageX;
      scrollLeft = rail.scrollLeft;
      lastX = e.pageX;
      velocity = 0;
    });
    window.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      rail.style.cursor = "default";
      if (isDragging && Math.abs(velocity) > 2) {
        rail.scrollBy({ left: -velocity * 8, behavior: "smooth" });
      }
      setTimeout(() => {
        isDragging = false;
      }, 50);
    });
    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 6) {
        isDragging = true;
        e.preventDefault();
        rail.style.cursor = "grabbing";
        rail.scrollLeft = scrollLeft - dx * 1.2;
        velocity = e.pageX - lastX;
        lastX = e.pageX;
      }
    });
  }
  function runLoadTimeline() {
    if (!window.gsap) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const tl = window.gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.from("#bgGateImg", { opacity: 0, duration: 0.6 });
    const headerEls = document.querySelectorAll("#headerLogo, #headerProgress");
    if (headerEls.length > 0) {
      tl.from(headerEls, { y: -20, opacity: 0, duration: 0.5, stagger: 0.08 }, 0.1);
    }
    tl.from("#headerEyebrow, #headerH1", { y: 20, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.15).from(".category-pill-btn", { x: -24, opacity: 0, duration: 0.4, stagger: 0.05, clearProps: "opacity,transform" }, 0.2).from("#artPedestalContainer", { scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.5)", clearProps: "opacity,transform" }, 0.2).from("#artCenterIconContainer", { scale: 0.85, opacity: 0, duration: 0.5, ease: "back.out(1.5)", clearProps: "opacity,transform" }, 0.25).from("#artPanel", { x: 30, opacity: 0, duration: 0.5, clearProps: "opacity,transform" }, 0.2).from("#artMascotContainer", { x: -30, opacity: 0, duration: 0.5, clearProps: "opacity,transform" }, 0.25).from("#artMascotBubble", { scale: 0.8, opacity: 0, duration: 0.4, ease: "back.out(1.7)", clearProps: "opacity,transform" }, 0.35);
  }
  function setupMascotAndParallax() {
    if (!window.gsap) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const mascot = document.getElementById("artMascotContainer");
    if (mascot) {
      window.gsap.to(mascot, {
        y: -8,
        rotation: 1.5,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }
    const bubble = document.getElementById("artMascotBubble");
    if (bubble) {
      window.gsap.to(bubble, {
        y: -3,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }
    const clouds = document.getElementById("cloudDivs");
    if (clouds) {
      window.gsap.to(clouds, {
        x: 50,
        duration: 50,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }
    const cloudsQuickX = window.gsap.quickTo("#cloudDivs", "x", { duration: 0.8, ease: "power2.out" });
    window.addEventListener("mousemove", (e) => {
      const normX = e.clientX / window.innerWidth - 0.5;
      cloudsQuickX(normX * 30);
    });
  }
})();
