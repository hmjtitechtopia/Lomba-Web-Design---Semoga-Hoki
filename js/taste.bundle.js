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

  var DISH_CARTOON_MAP = {
    "ayambetutu": "assets/eksplorasi/kuliner/betutu_animasi.webp",
    "ayam-betutu": "assets/eksplorasi/kuliner/betutu_animasi.webp",
    "babiguling": "assets/eksplorasi/kuliner/babiguling_animasi.webp",
    "babi-guling": "assets/eksplorasi/kuliner/babiguling_animasi.webp",
    "laklak": "assets/eksplorasi/kuliner/laklak_animasi.webp",
    "jaje-laklak": "assets/eksplorasi/kuliner/laklak_animasi.webp",
    "lawar": "assets/eksplorasi/kuliner/lawar_animasi.webp",
    "nasicampur": "assets/eksplorasi/kuliner/nasicampur_animasi.webp",
    "nasi-campur": "assets/eksplorasi/kuliner/nasicampur_animasi.webp",
    "piesusu": "assets/eksplorasi/kuliner/piesusu_animasi.webp",
    "pie-susu": "assets/eksplorasi/kuliner/piesusu_animasi.webp",
    "rujakbali": "assets/eksplorasi/kuliner/rujak_animasi.webp",
    "rujak-bali": "assets/eksplorasi/kuliner/rujak_animasi.webp",
    "satebabi": "assets/eksplorasi/kuliner/satebabi_animasi.webp",
    "sate-babi": "assets/eksplorasi/kuliner/satebabi_animasi.webp",
    "satelilit": "assets/eksplorasi/kuliner/satelilit_animasi.webp",
    "sate-lilit": "assets/eksplorasi/kuliner/satelilit_animasi.webp",
    "tipatcantok": "assets/eksplorasi/kuliner/tipatcantok_animasi.webp",
    "tipat-cantok": "assets/eksplorasi/kuliner/tipatcantok_animasi.webp"
  };
  var currentPlatterState = "default";
  function initPlatter() {
    const defaultImg = document.getElementById("platterDefaultImg");
    const dishImg = document.getElementById("platterDishImg");
    const targets = [defaultImg, dishImg].filter(Boolean);
    if (targets.length === 0 || !window.gsap) return;
    window.gsap.to(targets, {
      y: -6,
      duration: 4.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }
  function updatePlatterTilt(normX, normY) {
  }
  function swapPlatter(dishId) {
    const defaultLayer = document.getElementById("platterDefaultLayer");
    const dishLayer = document.getElementById("platterDishLayer");
    const dishImg = document.getElementById("platterDishImg");
    if (!defaultLayer || !dishLayer || !dishImg) return;
    const targetDishImg = dishId ? DISH_CARTOON_MAP[dishId] : null;
    const willShowDish = !!targetDishImg;
    if (willShowDish) {
      dishImg.src = targetDishImg;
      dishImg.alt = dishId;
      if (window.gsap) {
        const outgoingLayer = currentPlatterState === "default" ? defaultLayer : dishLayer;
        window.gsap.to(outgoingLayer, {
          y: -20,
          scale: 0.92,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out"
        });
        window.gsap.fromTo(
          dishLayer,
          { y: -24, scale: 0.9, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.4)",
            overwrite: "auto"
          }
        );
      } else {
        defaultLayer.style.opacity = "0";
        dishLayer.style.opacity = "1";
        dishLayer.style.transform = "translateY(0px) scale(1)";
      }
      currentPlatterState = dishId;
    } else {
      if (currentPlatterState === "default") return;
      if (window.gsap) {
        window.gsap.to(dishLayer, {
          opacity: 0,
          scale: 0.98,
          duration: 0.5,
          ease: "power2.out"
        });
        window.gsap.fromTo(
          defaultLayer,
          { opacity: 0, scale: 0.98, y: 0 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto"
          }
        );
      } else {
        dishLayer.style.opacity = "0";
        defaultLayer.style.opacity = "1";
      }
      currentPlatterState = "default";
    }
  }

  var stories = [
    {
      id: "ayambetutu",
      name: "Ayam Betutu",
      intro: "<strong>Ayam berbumbu base genep</strong>, dimasak perlahan sampai meresap. Dari Gilimanuk, Jembrana, sering hadir di upacara ketika keluarga <strong>berkumpul</strong>.",
      body: "Bumbu diulek halus, dibungkus daun pisang, lalu dimasak berjam-jam.",
      p1: "<strong>Ayam berbumbu base genep</strong>, dimasak perlahan sampai meresap. Dari Gilimanuk, Jembrana, sering hadir di upacara ketika keluarga <strong>berkumpul</strong>.",
      p2: "Bumbu diulek halus, dibungkus daun pisang, lalu dimasak berjam-jam.",
      tags: ["Gilimanuk", "Jembrana", "Bali barat", "Base genep"],
      asal: "Gilimanuk, Kabupaten Jembrana, Bali barat.",
      bumbuLabel: "BUMBU",
      bumbu: "Base genep: kunyit, lengkuas, bawang, cabai, dan rempah lain.",
      makna: "Kesabaran dan kebersamaan, dimasak lama dan disantap bersama.",
      photo: "assets/library/kuliner/ayambetutu.jpg",
      caption: "Ayam Betutu \xB7 Gilimanuk",
      related: ["satelilit", "lawar"]
    },
    {
      id: "satelilit",
      name: "Sate Lilit",
      intro: "<strong>Daging atau ikan cincang</strong> yang dilumuri base genep, lalu dililitkan pada batang <strong>serai atau bambu</strong>.",
      body: "Dibakar di atas bara sampai harum, sering disiapkan bersama saat upacara.",
      p1: "<strong>Daging atau ikan cincang</strong> yang dilumuri base genep, lalu dililitkan pada batang <strong>serai atau bambu</strong>.",
      p2: "Dibakar di atas bara sampai harum, sering disiapkan bersama saat upacara.",
      tags: ["Seluruh Bali", "Ikan laut", "Kelapa parut", "Base genep"],
      asal: "Dikenal di seluruh Bali, dari dapur rumah sampai upacara.",
      bumbuLabel: "BUMBU",
      bumbu: "Base genep, kelapa parut, dan jeruk limau untuk aroma segar.",
      makna: "Dililit rapat, dikerjakan bersama: simbol kebersamaan.",
      photo: "assets/library/kuliner/satelilit.webp",
      caption: "Sate Lilit \xB7 Bali",
      related: ["ayambetutu", "lawar"]
    },
    {
      id: "lawar",
      name: "Lawar",
      intro: "<strong>Campuran sayur cincang</strong>, kelapa parut, dan daging, diaduk dengan <strong>base genep</strong> sampai rata.",
      body: "Dibuat bergotong royong menjelang upacara; ada versi sayur dan ayam.",
      p1: "<strong>Campuran sayur cincang</strong>, kelapa parut, dan daging, diaduk dengan <strong>base genep</strong> sampai rata.",
      p2: "Dibuat bergotong royong menjelang upacara; ada versi sayur dan ayam.",
      tags: ["Sayur", "Kelapa parut", "Gotong royong", "Base genep"],
      asal: "Hidangan upacara yang dibuat bersama di banyak desa di Bali.",
      bumbuLabel: "BUMBU",
      bumbu: "Base genep, kelapa parut sangrai, dan sayur muda seperti nangka atau kacang panjang.",
      makna: "Mengaduk bersama, menyiapkan upacara bersama: gotong royong.",
      photo: "assets/library/kuliner/lawar.webp",
      caption: "Lawar \xB7 Bali",
      related: ["ayambetutu", "satelilit"]
    },
    {
      id: "babiguling",
      name: "Babi Guling",
      intro: "<strong>Babi guling adalah babi panggang utuh berbumbu base genep</strong>",
      body: "Dagingnya diisi bumbu dan daun singkong, lalu diputar di atas bara sampai kulitnya renyah.",
      p1: "<strong>Babi guling adalah babi panggang utuh berbumbu base genep</strong>",
      p2: "Dagingnya diisi bumbu dan daun singkong, lalu diputar di atas bara sampai kulitnya renyah.",
      tags: ["Gianyar", "Ubud", "Base genep", "Upacara"],
      asal: "Dikenal kuat di Gianyar dan Ubud, Bali tengah.",
      bumbuLabel: "BUMBU",
      bumbu: "Perut diisi base genep dan daun singkong, lalu diputar di atas bara berjam-jam.",
      makna: "Hidangan perayaan yang hadir saat upacara adat dan kumpul keluarga besar.",
      photo: "assets/eksplorasi/kuliner/babiguling.webp",
      caption: "Babi Guling \xB7 Gianyar & Ubud",
      related: ["satebabi", "lawar"]
    },
    {
      id: "laklak",
      name: "Jaje Laklak",
      intro: "<strong>Jaje laklak adalah kue beras mungil berwarna hijau</strong>",
      body: "Dimasak di cetakan tanah liat kecil, lalu disiram gula merah cair dan kelapa parut.",
      p1: "<strong>Jaje laklak adalah kue beras mungil berwarna hijau</strong>",
      p2: "Dimasak di cetakan tanah liat kecil, lalu disiram gula merah cair dan kelapa parut.",
      tags: ["Buleleng", "Kue beras", "Daun suji", "Gula merah"],
      asal: "Jajanan tradisional Bali yang populer di Buleleng dan pasar pagi.",
      bumbuLabel: "BAHAN",
      bumbu: "Tepung beras, santan, dan daun suji; disajikan dengan gula merah cair dan kelapa parut.",
      makna: "Kesederhanaan dan kehangatan pagi hari di pasar tradisional.",
      photo: "assets/eksplorasi/kuliner/laklak.jpg",
      caption: "Jaje Laklak \xB7 Buleleng",
      related: ["piesusu", "rujakbali"]
    },
    {
      id: "piesusu",
      name: "Pie Susu",
      intro: "<strong>Pie susu adalah kue kecil berkulit renyah dengan isian susu manis yang lembut</strong>",
      body: "Kini jadi oleh-oleh yang paling sering dibawa pulang dari Bali.",
      p1: "<strong>Pie susu adalah kue kecil berkulit renyah dengan isian susu manis yang lembut</strong>",
      p2: "Kini jadi oleh-oleh yang paling sering dibawa pulang dari Bali.",
      tags: ["Oleh-oleh", "Denpasar", "Susu manis", "Kulit renyah"],
      asal: "Kue oleh-oleh khas Bali yang banyak dijual di Denpasar dan sekitarnya.",
      bumbuLabel: "BAHAN",
      bumbu: "Adonan mentega yang renyah dengan isian susu, telur, dan gula.",
      makna: "Cara membawa pulang rasa Bali dan berbagi dengan orang tersayang.",
      photo: "assets/eksplorasi/kuliner/piesusu.jpg",
      caption: "Pie Susu \xB7 Denpasar",
      related: ["laklak", "rujakbali"]
    },
    {
      id: "rujakbali",
      name: "Rujak Bali",
      intro: "<strong>Rujak Bali memadukan buah dan sayur segar dengan kuah pedas yang asam</strong>",
      body: "Rasa asam, manis, dan pedas bertemu dalam satu suapan, sering dengan kuah pindang.",
      p1: "<strong>Rujak Bali memadukan buah dan sayur segar dengan kuah pedas yang asam</strong>",
      p2: "Rasa asam, manis, dan pedas bertemu dalam satu suapan, sering dengan kuah pindang.",
      tags: ["Buah segar", "Kuah pindang", "Pedas", "Asam manis"],
      asal: "Hidangan rakyat Bali yang dijual di warung dan pinggir jalan.",
      bumbuLabel: "BUMBU",
      bumbu: "Mangga muda, bengkuang, dan buah segar, disiram bumbu cabai, asam, dan kuah pindang.",
      makna: "Keseimbangan rasa: asam, manis, pedas, dan segar.",
      photo: "assets/eksplorasi/kuliner/rujakbali.webp",
      caption: "Rujak Bali \xB7 Seluruh Bali",
      related: ["tipatcantok", "laklak"]
    },
    {
      id: "satebabi",
      name: "Sate Babi",
      intro: "<strong>Sate babi Bali adalah tusukan daging babi bakar berbumbu</strong>",
      body: "Sering disantap dengan sambal plecing; aroma bara dan base genep membuatnya khas.",
      p1: "<strong>Sate babi Bali adalah tusukan daging babi bakar berbumbu</strong>",
      p2: "Sering disantap dengan sambal plecing; aroma bara dan base genep membuatnya khas.",
      tags: ["Bali", "Bakar bara", "Sambal plecing", "Non-halal"],
      asal: "Olahan daging babi yang umum di Bali dan dijual di banyak kabupaten.",
      bumbuLabel: "BUMBU",
      bumbu: "Daging babi ditusuk, dibumbui base genep, lalu dibakar di atas bara.",
      makna: "Dibuat dan disantap bersama saat gotong royong dan perayaan.",
      photo: "assets/eksplorasi/kuliner/satebabi.webp",
      caption: "Sate Babi \xB7 Bali",
      related: ["babiguling", "satelilit"]
    },
    {
      id: "tipatcantok",
      name: "Tipat Cantok",
      intro: "<strong>Tipat cantok adalah ketupat dengan sayur rebus dan bumbu kacang yang diulek langsung</strong>",
      body: "Cantok berarti diulek; bumbunya dibuat baru di cobek untuk setiap porsi.",
      p1: "<strong>Tipat cantok adalah ketupat dengan sayur rebus dan bumbu kacang yang diulek langsung</strong>",
      p2: "Cantok berarti diulek; bumbunya dibuat baru di cobek untuk setiap porsi.",
      tags: ["Ketupat", "Sayur rebus", "Bumbu kacang", "Diulek"],
      asal: "Hidangan rakyat Bali yang dijual di warung dan pinggir jalan.",
      bumbuLabel: "BUMBU",
      bumbu: "Bumbu kacang, cabai, bawang putih, dan gula merah diulek halus.",
      makna: "Kesederhanaan: bahan murah, rasa kaya, dibuat saat dipesan.",
      photo: "assets/eksplorasi/kuliner/tipatcantok.webp",
      caption: "Tipat Cantok \xB7 Bali",
      related: ["rujakbali", "satebabi"]
    }
  ];
  var SPICES = [
    { id: "genep", name: "Base Genep", file: "base_genep.webp", glow: "255,200,110", fungsi: "Bumbu dasar yang menyatukan banyak rempah.", aroma: "Hangat, kaya, dan berlapis.", unik: "Diulek dari belasan bahan segar.", keunikan: "Diulek dari belasan bahan segar.", kombinasi: "Ayam Betutu, Sate Lilit, Lawar." },

    { id: "kunyit", name: "Kunyit", file: "kunyit.webp", glow: "255,214,90", fungsi: "Memberi warna, aroma, dan rasa kompleks.", aroma: "Hangat, segar, dan khas pulau tropis.", unik: "Banyak tumbuh di Bali, berkualitas tinggi.", keunikan: "Banyak tumbuh di Bali, berkualitas tinggi.", kombinasi: "Kunci kelezatan Ayam Betutu, Sate Lilit, Nasi Campur." },

    { id: "cabai", name: "Cabai", file: "cabai.webp", glow: "255,110,95", fungsi: "Memberi rasa pedas dan warna merah.", aroma: "Tajam dan menggugah selera.", unik: "Dipakai segar atau diulek jadi sambal.", keunikan: "Dipakai segar atau diulek jadi sambal.", kombinasi: "Sambal Matah, Ayam Betutu, Lawar." },

    { id: "bawang_merah", name: "Bawang Merah", file: "bawang_merah.webp", glow: "205,95,150", fungsi: "Memberi rasa manis dan gurih pada bumbu.", aroma: "Tajam saat mentah, harum saat ditumis.", unik: "Sering diiris tipis untuk sambal matah.", keunikan: "Sering diiris tipis untuk sambal matah.", kombinasi: "Sambal Matah, Ayam Betutu, Lawar." },

    { id: "bawang_putih", name: "Bawang Putih", file: "bawang_putih.webp", glow: "232,222,196", fungsi: "Memperkuat rasa gurih dan harum.", aroma: "Tajam dan hangat.", unik: "Bahan wajib dalam base genep.", keunikan: "Bahan wajib dalam base genep.", kombinasi: "Base Genep, Sate Lilit, Ayam Betutu." },

    { id: "jahe", name: "Jahe", file: "jahe.webp", glow: "240,190,110", fungsi: "Memberi rasa hangat dan sedikit pedas.", aroma: "Segar, hangat, dan menyengat.", unik: "Rimpang yang juga dipakai untuk minuman hangat.", keunikan: "Rimpang yang juga dipakai untuk minuman hangat.", kombinasi: "Base Genep, Ayam Betutu, Lawar." },

    { id: "lengkuas", name: "Lengkuas", file: "lengkuas.webp", glow: "250,215,150", fungsi: "Memberi aroma segar dan rasa pedas lembut.", aroma: "Segar seperti pinus dan jeruk.", unik: "Rimpang keras, biasanya digeprek atau diulek.", keunikan: "Rimpang keras, biasanya digeprek atau diulek.", kombinasi: "Ayam Betutu, Base Genep." },

    { id: "ketumbar", name: "Ketumbar", file: "ketumbar.webp", glow: "214,184,110", fungsi: "Memberi aroma hangat dan rasa gurih.", aroma: "Hangat dan sedikit manis.", unik: "Biji disangrai dulu supaya harum.", keunikan: "Biji disangrai dulu supaya harum.", kombinasi: "Base Genep, Sate Lilit, Ayam Betutu." },

    { id: "lada", name: "Lada", file: "lada.webp", glow: "140,140,150", fungsi: "Memberi rasa pedas yang hangat.", aroma: "Tajam dan hangat.", unik: "Dipakai sebagai butiran atau bubuk.", keunikan: "Dipakai sebagai butiran atau bubuk.", kombinasi: "Base Genep, Sate Lilit." },

    { id: "cengkeh", name: "Cengkeh", file: "cengkeh.webp", glow: "160,95,65", fungsi: "Memberi aroma kuat dan rasa hangat.", aroma: "Pekat, manis, dan hangat.", unik: "Kuncup bunga yang dikeringkan.", keunikan: "Kuncup bunga yang dikeringkan.", kombinasi: "Base Genep, Ayam Betutu." },

    { id: "kemiri", name: "Kemiri", file: "kemiri.webp", glow: "220,205,170", fungsi: "Mengentalkan dan memberi rasa gurih.", aroma: "Lembut dan seperti kacang.", unik: "Disangrai dulu sebelum diulek.", keunikan: "Disangrai dulu sebelum diulek.", kombinasi: "Base Genep, Lawar, Sate Lilit." },

    { id: "kapulaga", name: "Kapulaga", file: "kapulaga.webp", glow: "140,205,110", fungsi: "Memberi aroma wangi dan segar.", aroma: "Manis, harum, dan sedikit pedas.", unik: "Dipakai dalam jumlah kecil.", keunikan: "Dipakai dalam jumlah kecil.", kombinasi: "Base Genep, Ayam Betutu." },

    { id: "pala", name: "Pala", file: "pala.webp", glow: "195,135,85", fungsi: "Memberi rasa hangat dan sedikit manis.", aroma: "Hangat dan wangi.", unik: "Biji pohon pala yang diparut.", keunikan: "Biji pohon pala yang diparut.", kombinasi: "Base Genep, Sate Lilit." },

    { id: "kelapa", name: "Kelapa", file: "kelapa.webp", glow: "165,225,215", fungsi: "Memberi rasa gurih, lembut, dan sedikit manis.", aroma: "Gurih dan harum, terutama saat disangrai.", unik: "Kelapa parut jadi bahan utama sate lilit dan lawar.", keunikan: "Kelapa parut jadi bahan utama sate lilit dan lawar.", kombinasi: "Sate Lilit, Lawar." },

    { id: "terasi", name: "Terasi", file: "terasi.webp", glow: "135,85,95", fungsi: "Menambah rasa gurih yang dalam.", aroma: "Kuat dan khas.", unik: "Dibakar sebentar sebelum diulek.", keunikan: "Dibakar sebentar sebelum diulek.", kombinasi: "Sambal, Base Genep." },

    { id: "sereh", name: "Sereh", file: "sereh.webp", glow: "170,225,110", fungsi: "Menyegarkan dan menghilangkan bau amis.", aroma: "Segar seperti jeruk.", unik: "Batangnya juga dipakai sebagai tusuk sate lilit.", keunikan: "Batangnya juga dipakai sebagai tusuk sate lilit.", kombinasi: "Sate Lilit, Ayam Betutu." },

    { id: "daun_jeruk", name: "Daun Jeruk", file: "daun_jeruk.webp", glow: "95,195,105", fungsi: "Memberi aroma segar dan menghilangkan bau amis.", aroma: "Segar seperti jeruk.", unik: "Daun diiris tipis atau diremas.", keunikan: "Daun diiris tipis atau diremas.", kombinasi: "Sambal Matah, Sate Lilit." }

  ];
  var DISH_PHOTO_MAP = {
    "ayambetutu": "assets/library/kuliner/ayambetutu.jpg",
    "babiguling": "assets/eksplorasi/kuliner/babiguling.webp",
    "laklak": "assets/eksplorasi/kuliner/laklak.jpg",
    "lawar": "assets/library/kuliner/lawar.webp",
    "nasicampur": "assets/library/kuliner/nasicampur.webp",
    "piesusu": "assets/eksplorasi/kuliner/piesusu.jpg",
    "rujakbali": "assets/eksplorasi/kuliner/rujakbali.webp",
    "satebabi": "assets/eksplorasi/kuliner/satebabi.webp",
    "satelilit": "assets/library/kuliner/satelilit.webp",
    "tipatcantok": "assets/eksplorasi/kuliner/tipatcantok.webp"
  };
  function getDishPhoto(dishIdOrName) {
    if (!dishIdOrName) return "assets/library/kuliner/satelilit.webp";
    const norm = dishIdOrName.toLowerCase().replace(/[^a-z0-9]/g, "");
    return DISH_PHOTO_MAP[norm] || "assets/library/kuliner/satelilit.webp";
  }
  var REGIONS = {
    jembrana: {
      name: "Jembrana",
      note: "Kabupaten di Bali barat. Asal Ayam Betutu Gilimanuk dengan bumbu base genep pedas.",
      fx: 0.112,
      fy: 0.328,
      side: "below",
      dishes: [
        { id: "ayambetutu", n: "Ayam Betutu", tag: "Halal" },
        { id: "satelilit", n: "Sate Lilit", tag: "Halal" }
      ],
      places: [
        { name: "Ayam Betutu Khas Gilimanuk", dish: "Ayam Betutu", dishId: "ayambetutu", photo: "assets/eksplorasi/kuliner/ayambetutu_1.jpeg", price: "$", rating: "4.7", url: "https://www.google.com/maps/search/?api=1&query=Ayam+Betutu+Khas+Gilimanuk" },
        { name: "Ayam Betutu Men Tempeh", dish: "Ayam Betutu", dishId: "ayambetutu", photo: "assets/eksplorasi/kuliner/ayambetutu_2.webp", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Ayam+Betutu+Men+Tempeh" },
        { name: "Warung Betutu Mek Nengah", dish: "Ayam Betutu", dishId: "ayambetutu", photo: "assets/eksplorasi/kuliner/ayambetutu_3.webp", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Warung+Betutu+Mek+Nengah+Gilimanuk" }
      ]
    },
    buleleng: {
      name: "Buleleng",
      note: "Kabupaten di pesisir utara Bali, terkenal dengan jaje laklak dan sajian pasar tradisional.",
      fx: 0.253,
      fy: 0.436,
      side: "above",
      dishes: [
        { id: "laklak", n: "Jaje Laklak", tag: "Halal" },
        { id: "satebabi", n: "Sate Babi", tag: "Non-halal" },
        { id: "tipatcantok", n: "Tipat Cantok", tag: "Halal" }
      ],
      places: [
        { name: "Laklak Buleleng Laku 168", dish: "Jaje Laklak", dishId: "laklak", photo: "assets/eksplorasi/kuliner/laklak_3.webp", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Laklak+Buleleng+Laku+168" },
        { name: "Warung Sate Babi Men Seger", dish: "Sate Babi", dishId: "satebabi", photo: "assets/eksplorasi/kuliner/satebabi_2.jpeg", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Warung+Sate+Babi+Men+Seger+Singaraja" },
        { name: "Warung Tipat Cantok Buleleng", dish: "Tipat Cantok", dishId: "tipatcantok", photo: "assets/eksplorasi/kuliner/tipatcantok_1.webp", price: "$", rating: "4.4", url: "https://www.google.com/maps/search/?api=1&query=Warung+Tipat+Cantok+Singaraja" }
      ]
    },
    tabanan: {
      name: "Tabanan",
      note: "Kabupaten lumbung beras di Bali barat daya, terkenal dengan olahan beras dan sayur segar.",
      fx: 0.166,
      fy: 0.503,
      side: "below",
      dishes: [
        { id: "laklak", n: "Jaje Laklak", tag: "Halal" },
        { id: "tipatcantok", n: "Tipat Cantok", tag: "Halal" },
        { id: "lawar", n: "Lawar Bali", tag: "Halal" }
      ],
      places: [
        { name: "Laklak Biu Penebel Men Bayu", dish: "Jaje Laklak", dishId: "laklak", photo: "assets/eksplorasi/kuliner/laklak_2.jpeg", price: "$", rating: "4.7", url: "https://www.google.com/maps/search/?api=1&query=Laklak+Biu+Penebel+Men+Bayu" },
        { name: "Warung Tipat Cantok Bu Made", dish: "Tipat Cantok", dishId: "tipatcantok", photo: "assets/eksplorasi/kuliner/tipatcantok_3.jpeg", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Warung+Tipat+Cantok+Bu+Made+Tabanan" },
        { name: "Warung Lawar Men Santun", dish: "Lawar Bali", dishId: "lawar", photo: "assets/eksplorasi/kuliner/lawar_1.webp", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Warung+Lawar+Men+Santun+Tabanan" }
      ]
    },
    badung: {
      name: "Badung",
      note: "Kawasan pesisir selatan Bali, dari sate lilit tepi pantai hingga babi guling legendaris.",
      fx: 0.31,
      fy: 0.455,
      side: "below",
      dishes: [
        { id: "satelilit", n: "Sate Lilit", tag: "Halal" },
        { id: "ayambetutu", n: "Ayam Betutu", tag: "Halal" },
        { id: "babiguling", n: "Babi Guling", tag: "Non-halal" }
      ],
      places: [
        { name: "Babi Guling Pak Melen", dish: "Babi Guling", dishId: "babiguling", photo: "assets/eksplorasi/kuliner/babiguling_4.webp", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Babi+Guling+Pak+Melen+Kuta" },
        { name: "Ayam Betutu Pak Man", dish: "Ayam Betutu", dishId: "ayambetutu", photo: "assets/eksplorasi/kuliner/ayambetutu_4.jpeg", price: "$", rating: "4.4", url: "https://www.google.com/maps/search/?api=1&query=Ayam+Betutu+Pak+Man+Kuta" },
        { name: "Warung Sate Lilit Jimbaran", dish: "Sate Lilit", dishId: "satelilit", photo: "assets/eksplorasi/kuliner/satelilit_1.webp", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Warung+Sate+Lilit+Jimbaran" }
      ]
    },
    denpasar: {
      name: "Denpasar",
      note: "Ibu kota Bali, pusat pasar pagi, aneka oleh-oleh kue manis dan warung rasa autentik.",
      fx: 0.336,
      fy: 0.686,
      side: "below",
      dishes: [
        { id: "satelilit", n: "Sate Lilit", tag: "Halal" },
        { id: "piesusu", n: "Pie Susu", tag: "Halal" },
        { id: "satebabi", n: "Sate Babi", tag: "Non-halal" },
        { id: "rujakbali", n: "Rujak Bali", tag: "Halal" }
      ],
      places: [
        { name: "Warung Wardani", dish: "Sate Lilit", dishId: "satelilit", photo: "assets/eksplorasi/kuliner/satelilit_2.webp", price: "$", rating: "4.7", url: "https://www.google.com/maps/search/?api=1&query=Warung+Wardani+Denpasar" },
        { name: "Sate Plecing Arjuna", dish: "Sate Babi", dishId: "satebabi", photo: "assets/eksplorasi/kuliner/satebabi_1.jpeg", price: "$", rating: "4.7", url: "https://www.google.com/maps/search/?api=1&query=Sate+Plecing+Arjuna+Denpasar" },
        { name: "Pie Susu Dhian", dish: "Pie Susu", dishId: "piesusu", photo: "assets/eksplorasi/kuliner/piesusu_1.jpg", price: "$", rating: "4.7", url: "https://www.google.com/maps/search/?api=1&query=Pie+Susu+Dhian+Denpasar" },
        { name: "Warung Kuah Pindang", dish: "Rujak Bali", dishId: "rujakbali", photo: "assets/eksplorasi/kuliner/rujakbali_1.jpeg", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Warung+Kuah+Pindang+Sanur" }
      ]
    },
    ubud: {
      name: "Ubud",
      note: "Pusat seni, budaya dan dapur rempah pusaka Bali di dataran sejuk Gianyar.",
      fx: 0.408,
      fy: 0.649,
      side: "above",
      dishes: [
        { id: "babiguling", n: "Babi Guling", tag: "Non-halal" },
        { id: "nasicampur", n: "Nasi Campur Bali", tag: "Halal" },
        { id: "laklak", n: "Jaje Laklak", tag: "Halal" }
      ],
      places: [
        { name: "Warung Nasi Ayam Kedewatan", dish: "Nasi Campur Bali", dishId: "nasicampur", photo: "assets/eksplorasi/kuliner/nasicampur_1.jpeg", price: "$", rating: "4.7", url: "https://www.google.com/maps/search/?api=1&query=Warung+Nasi+Ayam+Kedewatan+Ibu+Mangku+Ubud" },
        { name: "Babi Guling Gung Cung", dish: "Babi Guling", dishId: "babiguling", photo: "assets/eksplorasi/kuliner/babiguling_3.jpeg", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Babi+Guling+Gung+Cung+Ubud" },
        { name: "Laklak Mek Mangku", dish: "Jaje Laklak", dishId: "laklak", photo: "assets/eksplorasi/kuliner/laklak_1.jpeg", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Laklak+Mek+Mangku+Ubud" },
        { name: "Warung The Uma Ubud", dish: "Tipat Cantok", dishId: "tipatcantok", photo: "assets/eksplorasi/kuliner/tipatcantok_2.webp", price: "$", rating: "4.7", url: "https://www.google.com/maps/search/?api=1&query=Warung+The+Uma+Ubud" }
      ]
    },
    gianyar: {
      name: "Gianyar",
      note: "Kabupaten di Bali tengah, kampung halaman babi guling berempah dan rujak pedas.",
      fx: 0.469,
      fy: 0.571,
      side: "below",
      dishes: [
        { id: "babiguling", n: "Babi Guling", tag: "Non-halal" },
        { id: "rujakbali", n: "Rujak Bali", tag: "Halal" },
        { id: "lawar", n: "Lawar Bali", tag: "Halal" }
      ],
      places: [
        { name: "Warung Babi Guling Pande Egi", dish: "Babi Guling", dishId: "babiguling", photo: "assets/eksplorasi/kuliner/babiguling_2.webp", price: "$", rating: "4.8", url: "https://www.google.com/maps/search/?api=1&query=Warung+Babi+Guling+Pande+Egi+Gianyar" },
        { name: "Warung Babi Guling Dayu Kencani", dish: "Babi Guling", dishId: "babiguling", photo: "assets/eksplorasi/kuliner/babiguling_1.jpg", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Warung+Babi+Guling+Dayu+Kencani+Gianyar" },
        { name: "Warung Rujak Bali D'Tepi Sawah", dish: "Rujak Bali", dishId: "rujakbali", photo: "assets/eksplorasi/kuliner/rujakbali_3.webp", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Warung+Rujak+Bali+D+Tepi+Sawah+Gianyar" }
      ]
    },
    klungkung: {
      name: "Klungkung",
      note: "Kabupaten pesisir timur Bali, tanah kelahiran sate lilit ikan laut bercita rasa harum.",
      fx: 0.396,
      fy: 0.418,
      side: "above",
      dishes: [
        { id: "satelilit", n: "Sate Lilit", tag: "Halal" },
        { id: "rujakbali", n: "Rujak Bali", tag: "Halal" }
      ],
      places: [
        { name: "Warung Lesehan Mertha Sari", dish: "Sate Lilit", dishId: "satelilit", photo: "assets/eksplorasi/kuliner/satelilit_3.jpg", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Warung+Lesehan+Mertha+Sari+Klungkung" },
        { name: "Warung Sate Lilit Men Gede", dish: "Sate Lilit", dishId: "satelilit", photo: "assets/eksplorasi/kuliner/satelilit_4.jpg", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Warung+Sate+Lilit+Men+Gede+Klungkung" },
        { name: "Warung Rujak Khas Kusamba", dish: "Rujak Bali", dishId: "rujakbali", photo: "assets/eksplorasi/kuliner/rujakbali_2.jpg", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Warung+Rujak+Kusamba+Klungkung" }
      ]
    },
    karangasem: {
      name: "Karangasem",
      note: "Ujung timur Bali di lereng Gunung Agung, sentra tipat santan dan aneka sate pesisir.",
      fx: 0.434,
      fy: 0.437,
      side: "below",
      dishes: [
        { id: "satelilit", n: "Sate Lilit", tag: "Halal" },
        { id: "tipatcantok", n: "Tipat Cantok", tag: "Halal" },
        { id: "nasicampur", n: "Nasi Campur Bali", tag: "Halal" }
      ],
      places: [
        { name: "Warung Lesehan Mertha Segara", dish: "Sate Lilit", dishId: "satelilit", photo: "assets/eksplorasi/kuliner/satelilit_1.webp", price: "$", rating: "4.6", url: "https://www.google.com/maps/search/?api=1&query=Warung+Lesehan+Mertha+Segara+Karangasem" },
        { name: "Warung Tipat Men Ririh", dish: "Tipat Cantok", dishId: "tipatcantok", photo: "assets/eksplorasi/kuliner/tipatcantok_1.webp", price: "$", rating: "4.5", url: "https://www.google.com/maps/search/?api=1&query=Warung+Tipat+Men+Ririh+Amlapura" },
        { name: "Warung Nasi Campur Tulamben", dish: "Nasi Campur Bali", dishId: "nasicampur", photo: "assets/eksplorasi/kuliner/nasicampur_2.webp", price: "$", rating: "4.4", url: "https://www.google.com/maps/search/?api=1&query=Warung+Nasi+Campur+Tulamben+Karangasem" }
      ]
    }
  };
  for (const [rKey, rData] of Object.entries(REGIONS)) {
    rData.places?.forEach((p) => {
      const fileName = (p.photo || "").split("/").pop().toLowerCase();
      const expectedId = (p.dishId || "").toLowerCase();
      console.assert(
        fileName.startsWith(expectedId),
        `Photo mismatch in region "${rKey}", place "${p.name}": photo "${p.photo}" does not start with dishId "${expectedId}"`
      );
    });
  }
  var REGION_KEYS_ORDER = [
    "jembrana",
    "buleleng",
    "tabanan",
    "badung",
    "denpasar",
    "ubud",
    "gianyar",
    "klungkung",
    "karangasem"
  ];
  var currentStoryIndex = 0;
  var currentRegionId = "ubud";
  function fitItems(viewport, track, items, gap = 16) {
    if (!viewport || !track) {
      return { N: 1, maxItemWidth: 160, exactWidth: 160 };
    }
    const itemList = items && items.length > 0 ? items : Array.from(track.children);
    if (!itemList || itemList.length === 0) {
      return { N: 1, maxItemWidth: 160, exactWidth: 160 };
    }
    const parent = viewport.parentElement;
    let availWidth = viewport.clientWidth;
    if (parent) {
      const parentWidth = parent.clientWidth;
      let siblingWidth = 0;
      Array.from(parent.children).forEach((child) => {
        if (child !== viewport && child.offsetWidth > 0) {
          siblingWidth += child.offsetWidth + 12;
        }
      });
      const calcAvail = parentWidth - siblingWidth;
      if (calcAvail > 60) {
        availWidth = calcAvail;
      }
    }
    let maxItemWidth = 0;
    itemList.forEach((item) => {
      const w = item.offsetWidth || parseFloat(window.getComputedStyle(item).width);
      if (w > maxItemWidth) maxItemWidth = w;
    });
    if (maxItemWidth <= 0) maxItemWidth = 160;
    let N = Math.floor((availWidth + gap) / (maxItemWidth + gap));
    if (window.innerWidth < 640) {
      N = 1;
    } else if (window.innerWidth < 1024) {
      N = Math.min(2, Math.max(1, N));
    }
    if (N < 1) N = 1;
    if (N > itemList.length) N = itemList.length;
    const exactWidth = N * maxItemWidth + (N - 1) * gap;
    if (window.innerWidth < 1024) {
      const pad = window.innerWidth < 640 ? 16 : 24;
      const totalViewportWidth = Math.min(availWidth, exactWidth + pad * 2);
      viewport.style.maxWidth = "100%";
      viewport.style.width = totalViewportWidth + "px";
      viewport.style.flex = "1 1 auto";
      viewport.style.paddingInline = pad + "px";
      viewport.style.marginInline = -pad + "px";
    } else {
      const totalViewportWidth = exactWidth + 96;
      viewport.style.maxWidth = totalViewportWidth + "px";
      viewport.style.width = totalViewportWidth + "px";
      viewport.style.flex = "0 0 " + totalViewportWidth + "px";
      viewport.style.paddingInline = "48px";
      viewport.style.marginInline = "-48px";
    }
    return { N, maxItemWidth, exactWidth };
  }
  function setupCarousel({
    container,
    viewport,
    track,
    getItems,
    gap = 16,
    prevBtn,
    nextBtn,
    initialIndex = 0,
    syncPlatter = false,
    onIndexChange = null
  }) {
    let currentIndex = initialIndex;
    let items = getItems ? getItems() : Array.from(track.children);
    let N = 1;
    let itemWidth = 160;
    function maxIndex() {
      items = getItems ? getItems() : Array.from(track.children);
      return Math.max(0, items.length - N);
    }
    function syncPlatterCenter() {
      if (!syncPlatter) return;
      const platter = document.getElementById("platterContainer");
      const stage = document.getElementById("stage");
      if (platter && stage && viewport) {
        const railRect = viewport.getBoundingClientRect();
        const stageRect = stage.getBoundingClientRect();
        const contentLeft = railRect.left - stageRect.left + 48;
        const contentWidth = Math.max(0, railRect.width - 96);
        platter.style.left = contentLeft + "px";
        platter.style.width = contentWidth + "px";
        platter.style.display = "flex";
        platter.style.justifyContent = "center";
        platter.style.alignItems = "center";
      }
    }
    function recalculate() {
      items = getItems ? getItems() : Array.from(track.children);
      if (!items || items.length === 0) return;
      const res = fitItems(viewport, track, items, gap);
      if (res) {
        N = res.N;
        itemWidth = res.maxItemWidth;
      }
      syncPlatterCenter();
      clampAndMove(currentIndex, 0);
    }
    function clampAndMove(targetIdx, duration = 0.35) {
      items = getItems ? getItems() : Array.from(track.children);
      const maxI = Math.max(0, items.length - N);
      currentIndex = Math.max(0, Math.min(maxI, targetIdx));
      const targetX = -currentIndex * (itemWidth + gap);
      if (window.gsap) {
        window.gsap.to(track, {
          x: targetX,
          duration,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        track.style.transform = "translateX(" + targetX + "px)";
      }
      if (typeof onIndexChange === "function") {
        onIndexChange(currentIndex, N);
      }
    }
    function scrollIntoView(itemIdx) {
      if (itemIdx < currentIndex) {
        clampAndMove(itemIdx);
      } else if (itemIdx >= currentIndex + N) {
        clampAndMove(itemIdx - N + 1);
      }
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const maxI = maxIndex();
        if (currentIndex <= 0) {
          clampAndMove(maxI);
        } else {
          clampAndMove(currentIndex - 1);
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const maxI = maxIndex();
        if (currentIndex >= maxI) {
          clampAndMove(0);
        } else {
          clampAndMove(currentIndex + 1);
        }
      });
    }
    let isDown = false;
    let startX = 0;
    let startTrackX = 0;
    let dragMoved = false;
    viewport.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button:not(.story-selector-pill):not(.spice-item-pill)") || e.target.closest("a")) return;
      isDown = true;
      dragMoved = false;
      startX = e.clientX;
      startTrackX = window.gsap ? window.gsap.getProperty(track, "x") || 0 : 0;
      viewport.style.cursor = "grabbing";
    });
    window.addEventListener("pointermove", (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) dragMoved = true;
      if (window.gsap) {
        window.gsap.set(track, { x: startTrackX + dx });
      }
    });
    const onPointerUp = () => {
      if (!isDown) return;
      isDown = false;
      viewport.style.cursor = "grab";
      if (dragMoved) {
        const currentX = window.gsap ? window.gsap.getProperty(track, "x") || 0 : 0;
        const targetIdx = Math.round(-currentX / (itemWidth + gap));
        clampAndMove(targetIdx);
      }
    };
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    viewport.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
        if (delta > 20) clampAndMove(currentIndex + 1);
        else if (delta < -20) clampAndMove(currentIndex - 1);
      }
    }, { passive: false });
    window.addEventListener("resize", recalculate);
    window.addEventListener("load", recalculate);
    if (document.fonts) {
      document.fonts.ready.then(recalculate);
    }
    setTimeout(recalculate, 80);
    setTimeout(recalculate, 300);
    return {
      recalculate,
      clampAndMove,
      scrollIntoView,
      getCurrentIndex: () => currentIndex,
      setIndex: (idx) => clampAndMove(idx),
      getVisibleCount: () => N,
      isDragging: () => dragMoved
    };
  }
  function initNewSections() {
    initSection52();
    initSection53();
    initSection54();
    setupSectionScrollTriggers();
  }
  var pillDragDist = 0;
  function initSection52() {
    const findPlacesBtn = document.getElementById("storyFindPlacesBtn");
    const prevBtn = document.getElementById("storyPillPrevBtn");
    const nextBtn = document.getElementById("storyPillNextBtn");
    const track = document.getElementById("storyPillScrollTrack");
    if (findPlacesBtn) {
      findPlacesBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const story = stories[currentStoryIndex];
        if (story) {
          if (typeof window.selectDish === "function") {
            window.selectDish(story.id);
          }
          const section1 = document.getElementById("stage-wrapper") || document.body;
          section1.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    setupPillScroller(track, prevBtn, nextBtn);
    setupFloatingChips();
    updateStoryContainerMinHeight();
    window.addEventListener("resize", updateStoryContainerMinHeight);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateStoryContainerMinHeight);
    }
    renderAllStoryPills();
    showStory(0, true);
  }
  function getInactivePillColors(idx) {
    if (idx % 2 === 0) {
      return { bg: "#BBD5F0", text: "#17518E", shadow: "0 5px 0 #8DB2D9" };
    } else {
      return { bg: "#DDF3B0", text: "#1F8A63", shadow: "0 5px 0 #BFDE86" };
    }
  }
  function renderAllStoryPills() {
    const track = document.getElementById("storyPillScrollTrack");
    if (!track) return;
    track.innerHTML = stories.map((s, idx) => {
      const isCurrent = idx === currentStoryIndex;
      let bg = "#1F8A63";
      let color = "#F2FFE0";
      let shadow = "0 5px 0 #14634A";
      if (!isCurrent) {
        const colors = getInactivePillColors(idx);
        bg = colors.bg;
        color = colors.text;
        shadow = colors.shadow;
      }
      return `
      <button
        type="button"
        class="story-selector-pill btn-chunky interactive-ui h-[48px] px-5 text-[20px] font-display font-extrabold whitespace-nowrap shrink-0 flex items-center justify-center select-none"
        style="background-color: ${bg}; color: ${color}; box-shadow: ${shadow};"
        data-story-index="${idx}"
        data-story-id="${s.id}"
      >
        <span>${s.name}</span>
      </button>
    `;
    }).join("");
    track.querySelectorAll(".story-selector-pill").forEach((pill) => {
      pill.addEventListener("click", (e) => {
        e.preventDefault();
        if (pillDragDist > 6) return;
        const idx = parseInt(pill.dataset.storyIndex, 10);
        if (!isNaN(idx) && idx !== currentStoryIndex) {
          showStory(idx);
        }
      });
    });
  }
  var storyPillCarousel = null;
  function setupPillScroller(track, prevBtn, nextBtn) {
    const viewport = document.getElementById("storyPillTrackContainer");
    const container = document.getElementById("storyPillRowWrapper");
    if (!viewport || !track) return;
    storyPillCarousel = setupCarousel({
      container,
      viewport,
      track,
      getItems: () => Array.from(track.querySelectorAll(".story-selector-pill")),
      gap: 10,
      prevBtn,
      nextBtn,
      initialIndex: 0
    });
  }
  function updateStoryPillStyles(activeIndex) {
    const pills = document.querySelectorAll(".story-selector-pill");
    pills.forEach((pill) => {
      const idx = parseInt(pill.dataset.storyIndex, 10);
      if (idx === activeIndex) {
        pill.style.backgroundColor = "#1F8A63";
        pill.style.color = "#F2FFE0";
        pill.style.boxShadow = "0 5px 0 #14634A";
      } else {
        const colors = getInactivePillColors(idx);
        pill.style.backgroundColor = colors.bg;
        pill.style.color = colors.text;
        pill.style.boxShadow = colors.shadow;
      }
    });
    if (storyPillCarousel) {
      storyPillCarousel.scrollIntoView(activeIndex);
    }
  }
  function updateStoryContainerMinHeight() {
    const container = document.getElementById("storyTextBlock");
    const h1El = document.getElementById("storyDishTitle");
    const p1El = document.getElementById("storyParagraph1");
    const p2El = document.getElementById("storyParagraph2");
    const p3El = document.getElementById("storyParagraph3");
    if (!container || !h1El || !p1El || !p2El) return;
    const currentIdx = currentStoryIndex >= 0 ? currentStoryIndex : 0;
    if (window.innerWidth < 1024) {
      container.style.minHeight = "auto";
      applyStoryDOMUpdates(currentIdx);
      return;
    }
    container.style.minHeight = "0px";
    let maxHeight = 0;
    stories.forEach((s) => {
      h1El.textContent = s.name;
      p1El.innerHTML = s.intro || s.p1;
      p2El.textContent = s.body || s.p2;
      if (p3El) {
        if (s.p3) {
          p3El.textContent = s.p3;
          p3El.style.display = "";
        } else {
          p3El.textContent = "";
          p3El.style.display = "none";
        }
      }
      const h = container.offsetHeight;
      if (h > maxHeight) {
        maxHeight = h;
      }
    });
    container.style.minHeight = maxHeight + "px";
    applyStoryDOMUpdates(currentIdx);
  }
  function applyStoryDOMUpdates(index) {
    const story = stories[index];
    if (!story) return;
    const h1El = document.getElementById("storyDishTitle");
    const p1El = document.getElementById("storyParagraph1");
    const p2El = document.getElementById("storyParagraph2");
    const p3El = document.getElementById("storyParagraph3");
    const counterEl = document.getElementById("storyCounter");
    const chips = [0, 1, 2, 3].map((i) => document.getElementById(`storyChip-${i}`));
    const asalEl = document.getElementById("storyTextAsal");
    const bumbuLabelEl = document.getElementById("storyLabelBumbu");
    const bumbuEl = document.getElementById("storyTextBumbu");
    const maknaEl = document.getElementById("storyTextMakna");
    const photoImg = document.getElementById("storyPhotoImg");
    const photoSkeleton = document.getElementById("storyPhotoSkeleton");
    const captionEl = document.getElementById("storyCaptionPill");
    if (h1El) h1El.textContent = story.name;
    if (p1El) p1El.innerHTML = story.intro || story.p1;
    if (p2El) p2El.textContent = story.body || story.p2;
    if (p3El) {
      if (story.p3) {
        p3El.textContent = story.p3;
        p3El.style.display = "";
      } else {
        p3El.textContent = "";
        p3El.style.display = "none";
      }
    }
    if (counterEl) counterEl.textContent = `CERITA ${index + 1} / 9`;
    if (asalEl) asalEl.textContent = story.asal;
    if (bumbuLabelEl) bumbuLabelEl.textContent = story.bumbuLabel || "BUMBU";
    if (bumbuEl) bumbuEl.textContent = story.bumbu;
    if (maknaEl) maknaEl.textContent = story.makna;
    if (captionEl) captionEl.textContent = story.caption;
    story.tags.forEach((tag, i) => {
      if (chips[i]) {
        chips[i].textContent = tag;
        if (tag.length >= 10) {
          chips[i].classList.add("chip-compact");
        } else {
          chips[i].classList.remove("chip-compact");
        }
      }
    });
    if (photoImg) {
      photoImg.src = story.photo;
      photoImg.alt = `Foto ${story.name} khas Bali`;
      if (photoSkeleton) photoSkeleton.style.display = "none";
    }
  }
  function checkStoryIntersection(storyName = "") {
    if (window.innerWidth < 1024) return;
    function rectsIntersect(r1, r2) {
      return !(r2.left >= r1.right || r2.right <= r1.left || r2.top >= r1.bottom || r2.bottom <= r1.top);
    }
    const chips = [0, 1, 2, 3].map((i) => {
      const chipEl = document.getElementById(`storyChip-${i}`);
      if (!chipEl) return null;
      const rect = chipEl.getBoundingClientRect();
      return {
        index: i,
        name: chipEl.textContent.trim(),
        left: rect.left,
        right: rect.right,
        top: rect.top - 3,
        bottom: rect.bottom + 3
      };
    }).filter(Boolean);
    const asalCard = document.getElementById("storyTextAsal")?.closest(".story-bento-tile");
    const bumbuCard = document.getElementById("storyTextBumbu")?.closest(".story-bento-tile");
    const maknaCard = document.getElementById("storyTextMakna")?.closest(".story-bento-tile");
    const cards = [
      { name: "ASAL", el: asalCard },
      { name: "BUMBU", el: bumbuCard },
      { name: "MAKNA", el: maknaCard }
    ].filter((c) => c.el).map((c) => {
      const rect = c.el.getBoundingClientRect();
      return { name: c.name, left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom };
    });
    for (let i = 0; i < chips.length; i++) {
      for (let j = i + 1; j < chips.length; j++) {
        const overlap = rectsIntersect(chips[i], chips[j]);
        console.assert(
          !overlap,
          `Tag overlap detected in story "${storyName}": Tag ${i} ("${chips[i].name}") intersects Tag ${j} ("${chips[j].name}")`
        );
        if (overlap) {
          console.error(`[Overlap failure] story: ${storyName}, tag ${i} and tag ${j}`, chips[i], chips[j]);
        }
      }
    }
    chips.forEach((chip, i) => {
      cards.forEach((card) => {
        const overlap = rectsIntersect(chip, card);
        console.assert(
          !overlap,
          `Tag-card overlap in story "${storyName}": Tag ${i} ("${chip.name}") intersects ${card.name} card`
        );
        if (overlap) {
          console.error(`[Overlap failure] story: ${storyName}, tag ${i} and card ${card.name}`, chip, card);
        }
      });
    });
  }
  var activeStoryTimeline = null;
  function showStory(index, isInitial = false) {
    if (index < 0 || index >= stories.length) return;
    currentStoryIndex = index;
    const h1El = document.getElementById("storyDishTitle");
    const p1El = document.getElementById("storyParagraph1");
    const p2El = document.getElementById("storyParagraph2");
    const counterEl = document.getElementById("storyCounter");
    const chipsArea = document.getElementById("storyTagsArea");
    const chips = [0, 1, 2, 3].map((i) => document.getElementById(`storyChip-${i}`));
    const asalCard = document.getElementById("storyTextAsal")?.closest(".story-bento-tile");
    const bumbuCard = document.getElementById("storyTextBumbu")?.closest(".story-bento-tile");
    const maknaCard = document.getElementById("storyTextMakna")?.closest(".story-bento-tile");
    const photoCard = document.getElementById("storyPhotoCard");
    const photoImg = document.getElementById("storyPhotoImg");
    const leafSvgs = document.querySelectorAll(".story-bento-tile svg");
    const cards = [asalCard, bumbuCard, maknaCard, photoCard].filter(Boolean);
    const p3El = document.getElementById("storyParagraph3");
    const textTargets = [h1El, p1El, p2El, p3El, counterEl].filter(Boolean);
    const allAnimTargets = [
      ...textTargets,
      chipsArea,
      ...cards,
      ...leafSvgs,
      photoImg
    ].filter(Boolean);
    if (activeStoryTimeline) {
      activeStoryTimeline.kill();
      activeStoryTimeline = null;
    }
    if (window.gsap) {
      window.gsap.killTweensOf(allAnimTargets);
    }
    updateStoryPillStyles(index);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isInitial || !window.gsap) {
      applyStoryDOMUpdates(index);
      checkStoryIntersection(stories[index].name);
      return;
    }
    const activePill = document.querySelector(`.story-selector-pill[data-story-index="${index}"]`);
    if (activePill && !prefersReduced) {
      window.gsap.killTweensOf(activePill);
      window.gsap.fromTo(
        activePill,
        { scale: 1 },
        {
          scale: 1.06,
          duration: 0.12,
          ease: "power2.out",
          onComplete: () => {
            window.gsap.to(activePill, { scale: 1, duration: 0.13, ease: "power2.out" });
          }
        }
      );
    }
    if (prefersReduced) {
      const fadeTargets = [...textTargets, chipsArea, ...cards].filter(Boolean);
      window.gsap.to(fadeTargets, {
        opacity: 0,
        duration: 0.075,
        ease: "power2.out",
        onComplete: () => {
          applyStoryDOMUpdates(index);
          window.gsap.to(fadeTargets, {
            opacity: 1,
            duration: 0.075,
            ease: "power2.out",
            onComplete: () => checkStoryIntersection(stories[index].name)
          });
        }
      });
      return;
    }
    const fadeOutTargets = [...textTargets, chipsArea, ...cards].filter(Boolean);
    window.gsap.to(fadeOutTargets, {
      opacity: 0,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        applyStoryDOMUpdates(index);
        const tl = window.gsap.timeline({
          onComplete: () => {
            checkStoryIntersection(stories[index].name);
          }
        });
        activeStoryTimeline = tl;
        tl.fromTo(
          textTargets,
          { opacity: 0, y: 6, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" },
          0
        );
        if (chipsArea) {
          tl.fromTo(
            chipsArea,
            { opacity: 0 },
            { opacity: 1, duration: 0.2, ease: "power2.out" },
            0
          );
        }
        tl.fromTo(
          cards,
          { opacity: 0, y: 6, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out", stagger: 0.04 },
          0
        );
        if (leafSvgs.length > 0) {
          tl.fromTo(
            leafSvgs,
            { opacity: 0 },
            { opacity: 1, duration: 0.25, ease: "power2.out" },
            0.04
          );
        }
        if (photoImg) {
          tl.fromTo(
            photoImg,
            { opacity: 0 },
            { opacity: 1, duration: 0.25, ease: "power2.out" },
            0.04
          );
        }
      }
    });
  }
  window.showStory = showStory;
  window.stories = stories;
  var tagTweens = [];
  function setupFloatingChips() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !window.gsap) return;
    tagTweens.forEach((tw) => tw && tw.kill());
    tagTweens.length = 0;
    const chips = [0, 1, 2, 3].map((i) => document.getElementById(`storyChip-${i}`)).filter(Boolean);
    const durations = [4.2, 5.5, 4.8, 5.2];
    const delays = [0, 0.8, 1.6, 2.4];
    chips.forEach((chip, i) => {
      const tw = window.gsap.fromTo(
        chip,
        { y: -3 },
        {
          y: 3,
          duration: durations[i],
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: delays[i]
        }
      );
      tagTweens.push(tw);
    });
  }
  var spiceCarousel = null;
  function initSection53() {
    const container = document.getElementById("spiceRowContainer");
    const viewport = document.getElementById("spiceTrackViewport");
    const nextBtn = document.getElementById("spiceNextArrowBtn");
    const prevBtn = document.getElementById("spicePrevArrowBtn");
    const mascot = document.getElementById("spiceMascot");
    if (mascot && window.gsap) {
      window.gsap.to(mascot, {
        y: 5,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }
    if (!container || !viewport) return;
    container.innerHTML = SPICES.map((spice, idx) => `
    <div
      class="spice-carousel-item ${idx === 1 ? "is-selected" : ""}"
      id="spiceItem-${idx}"
      role="option"
      aria-selected="${idx === 1}"
      data-index="${idx}"
      data-spice="${idx}"
      tabindex="-1"
    >
      <!-- Ground contact shadow -->
      <div class="spice-ground-shadow"></div>

      <!-- Float wrapper for idle floating -->
      <div class="spice-float-wrapper">
        <!-- Glow circle (300px unselected, 400px selected) -->
        <div
          class="spice-item-glow"
          style="background: radial-gradient(circle, rgba(${spice.glow}, ${idx === 1 ? "1" : "0.5"}) 0%, rgba(${spice.glow}, 0) 68%); width: ${idx === 1 ? "360px" : "270px"}; height: ${idx === 1 ? "360px" : "270px"};"
        ></div>

        <!-- Pulsing ring (only visible when is-selected) -->
        <div
          class="spice-pulse-ring"
          style="border: 3px solid rgba(${spice.glow}, 0.55);"
        ></div>

        <!-- 4-point sparkle stars -->
        <div class="spice-sparkles-container">
          <svg class="spice-sparkle-star" style="left: -120px; top: -90px;" width="16" height="16" viewBox="0 0 24 24" fill="#FFD15C">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
          </svg>
          <svg class="spice-sparkle-star" style="left: 130px; top: -70px;" width="18" height="18" viewBox="0 0 24 24" fill="#FFF275">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
          </svg>
          <svg class="spice-sparkle-star" style="left: -100px; top: 80px;" width="14" height="14" viewBox="0 0 24 24" fill="#FFE58F">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
          </svg>
          <svg class="spice-sparkle-star" style="left: 110px; top: 95px;" width="15" height="15" viewBox="0 0 24 24" fill="#FFD15C">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
          </svg>
        </div>

        <!-- 3D Perspective Box for tilt tracking -->
        <div class="spice-perspective-box">
          <div class="spice-item-imgbox" style="transform: scale(${idx === 1 ? "1.45" : "0.9"}) translateY(${idx === 1 ? "-24px" : "0px"}) rotate(${idx === 1 ? "-8deg" : "0deg"});">
            <img
              src="assets/eksplorasi/kuliner/${spice.file}"
              alt="${spice.name}"
              draggable="false"
              decoding="async"
              onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';"
            >
            <div
              class="spice-fallback-circle"
              style="width: 140px; height: 140px; border-radius: 50%; background: rgb(${spice.glow}); display: none; align-items: center; justify-content: center; text-align: center; color: #0F4D3A; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 20px; line-height: 1.1; padding: 10px; box-shadow: 0 8px 16px rgba(0,0,0,0.15);"
            >
              ${spice.name}
            </div>
            <!-- Soft light sheen overlay -->
            <div class="spice-sheen-overlay"></div>
          </div>
        </div>
      </div>

      <!-- Chunky pill button -->
      <button
        class="spice-item-pill"
        type="button"
        data-spice="${idx}"
        aria-label="${spice.name}"
        style="width: ${idx === 1 ? "198px" : "189px"}; background-color: ${idx === 1 ? "#1F8A63" : "#FFFFFF"}; color: ${idx === 1 ? "#F2FFE0" : "#14634A"}; box-shadow: 0 5px 0 ${idx === 1 ? "#14634A" : "#CFE3C4"};"
      >
        ${spice.name}
      </button>
    </div>
  `).join("");
    const items = Array.from(container.querySelectorAll(".spice-carousel-item"));
    items.forEach((item, i) => {
      const floatEl = item.querySelector(".spice-float-wrapper");
      if (floatEl && window.gsap) {
        const yOff = i % 2 === 0 ? 6 : -6;
        const rotOff = i % 2 === 0 ? 1 : -1;
        const dur = 3.6 + i % 5 * 0.35;
        window.gsap.to(floatEl, {
          y: yOff,
          rotation: rotOff,
          duration: dur,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      }
    });
    let selectedSpiceIndex = 1;
    let popTween = null;
    function updatePills(activeIdx) {
      items.forEach((item, i) => {
        const pillEl = item.querySelector(".spice-item-pill");
        if (!pillEl) return;
        if (i === activeIdx) {
          pillEl.style.backgroundColor = "#1F8A63";
          pillEl.style.color = "#F2FFE0";
          pillEl.style.boxShadow = "0 5px 0 #14634A";
          pillEl.style.width = "198px";
        } else {
          pillEl.style.backgroundColor = "#FFFFFF";
          pillEl.style.color = "#14634A";
          pillEl.style.boxShadow = "0 5px 0 #CFE3C4";
          pillEl.style.width = "189px";
        }
      });
    }
    function updateSpiceInfo(idx) {
      const spice = SPICES[idx];
      if (!spice) return;
      const targets = [
        document.getElementById("spiceInfoFungsi"),
        document.getElementById("spiceInfoAroma"),
        document.getElementById("spiceInfoKeunikan"),
        document.getElementById("spiceInfoKombinasi")
      ].filter(Boolean);
      if (window.gsap && targets.length > 0) {
        window.gsap.to(targets, {
          opacity: 0,
          y: -4,
          duration: 0.15,
          ease: "power1.in",
          onComplete: () => {
            if (targets[0]) targets[0].textContent = spice.fungsi;
            if (targets[1]) targets[1].textContent = spice.aroma;
            if (targets[2]) targets[2].textContent = spice.keunikan || spice.unik || "";
            if (targets[3]) targets[3].textContent = spice.kombinasi;
            window.gsap.fromTo(
              targets,
              { opacity: 0, y: 6 },
              { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", stagger: 0.04 }
            );
          }
        });
      } else {
        if (targets[0]) targets[0].textContent = spice.fungsi;
        if (targets[1]) targets[1].textContent = spice.aroma;
        if (targets[2]) targets[2].textContent = spice.keunikan || spice.unik || "";
        if (targets[3]) targets[3].textContent = spice.kombinasi;
      }
    }
    function playPopEffect(newIdx, prevIdx) {
      if (popTween) popTween.kill();
      items.forEach((item, i) => {
        const isSelected = i === newIdx;
        item.setAttribute("aria-selected", isSelected ? "true" : "false");
        if (isSelected) {
          item.classList.add("is-selected");
        } else {
          item.classList.remove("is-selected");
        }
        const imgbox = item.querySelector(".spice-item-imgbox");
        const glow = item.querySelector(".spice-item-glow");
        const spice = SPICES[i];
        if (i === newIdx) {
          if (window.gsap && imgbox) {
            const tl = window.gsap.timeline();
            tl.fromTo(
              imgbox,
              { scale: 0.8, y: 0, rotation: -14 },
              { scale: 1.62, y: -34, rotation: -10, duration: 0.22, ease: "power2.out" }
            );
            tl.to(imgbox, {
              scale: 1.45,
              y: -24,
              rotation: -8,
              duration: 0.5,
              ease: "elastic.out(1, 0.5)"
            });
            if (glow) {
              window.gsap.to(glow, {
                width: 360,
                height: 360,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(2)"
              });
              glow.style.background = `radial-gradient(circle, rgba(${spice.glow}, 1) 0%, rgba(${spice.glow}, 0) 68%)`;
            }
            const pill = item.querySelector(".spice-item-pill");
            if (pill) {
              window.gsap.fromTo(
                pill,
                { scale: 1 },
                { scale: 1.08, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.out" }
              );
            }
          } else if (imgbox) {
            imgbox.style.transform = "scale(1.45) translateY(-24px) rotate(-8deg)";
            if (glow) {
              glow.style.width = "360px";
              glow.style.height = "360px";
              glow.style.opacity = "1";
            }
          }
        } else if (i === prevIdx || !prevIdx && i !== newIdx) {
          if (window.gsap && imgbox) {
            window.gsap.to(imgbox, {
              scale: 0.9,
              y: 0,
              rotation: 0,
              duration: 0.4,
              ease: "power2.inOut"
            });
            if (glow) {
              window.gsap.to(glow, {
                width: 270,
                height: 270,
                opacity: 0.5,
                duration: 0.4,
                ease: "power2.inOut"
              });
              glow.style.background = `radial-gradient(circle, rgba(${spice.glow}, 0.5) 0%, rgba(${spice.glow}, 0) 68%)`;
            }
          } else if (imgbox) {
            imgbox.style.transform = "scale(0.9) translateY(0px) rotate(0deg)";
            if (glow) {
              glow.style.width = "270px";
              glow.style.height = "270px";
              glow.style.opacity = "0.5";
            }
          }
        }
      });
    }
    spiceCarousel = setupCarousel({
      container: document.getElementById("spiceCarouselWrapper"),
      viewport,
      track: container,
      getItems: () => items,
      gap: 22,
      prevBtn,
      nextBtn,
      initialIndex: 0
    });
    function selectSpice(i) {
      const prevIdx = selectedSpiceIndex;
      selectedSpiceIndex = i;
      updatePills(i);
      updateSpiceInfo(i);
      playPopEffect(i, prevIdx !== i ? prevIdx : null);
      if (spiceCarousel) {
        spiceCarousel.scrollIntoView(i);
      }
    }
    items.forEach((item, idx) => {
      item.addEventListener("click", () => {
        if (spiceCarousel && spiceCarousel.isDragging()) return;
        selectSpice(idx);
      });
      const pill = item.querySelector(".spice-item-pill");
      if (pill) {
        pill.addEventListener("click", (e) => {
          e.stopPropagation();
          if (spiceCarousel && spiceCarousel.isDragging()) return;
          selectSpice(idx);
        });
      }
    });
    viewport.addEventListener("mousemove", (e) => {
      const selectedItem = items[selectedSpiceIndex];
      if (!selectedItem) return;
      const box = selectedItem.querySelector(".spice-perspective-box");
      if (!box) return;
      const rect = box.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1.8) {
        const rotY = Math.max(-14, Math.min(14, dx * 14));
        const rotX = Math.max(-10, Math.min(10, -dy * 10));
        if (window.gsap) {
          window.gsap.to(box, {
            rotateY: rotY,
            rotateX: rotX,
            duration: 0.35,
            ease: "power1.out"
          });
        }
      }
    });
    viewport.addEventListener("mouseleave", () => {
      const selectedItem = items[selectedSpiceIndex];
      if (!selectedItem) return;
      const box = selectedItem.querySelector(".spice-perspective-box");
      if (box && window.gsap) {
        window.gsap.to(box, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      }
    });
    updatePills(1);
    updateSpiceInfo(1);
    playPopEffect(1, null);
  }
  var pinTweens = {};
  function initSection54() {
    const container = document.getElementById("mapPinsContainer");
    const mapLayer = document.getElementById("mapLayer");
    const rightSheet = document.getElementById("mapRightSheet");
    const viewAllBtn = document.getElementById("mapSheetViewAllBtn");
    const debugToolbar = document.getElementById("pinsDebugToolbar");
    const debugInfo = document.getElementById("pinsDebugInfo");
    const debugCopyBtn = document.getElementById("pinsDebugCopyBtn");
    if (!container || !mapLayer) return;
    const urlParams = new URLSearchParams(window.location.search);
    const isDebugMode = urlParams.has("pins") && urlParams.get("pins") === "edit";
    if (isDebugMode && debugToolbar) {
      debugToolbar.classList.remove("hidden");
    }
    const mapImg = document.getElementById("mapBgImg");
    function playMapEntrance() {
      if (window.gsap) {
        window.gsap.to(mapLayer, {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out"
        });
      } else {
        mapLayer.style.opacity = "1";
        mapLayer.style.transform = "scale(1)";
      }
    }
    if (mapImg && mapImg.complete) {
      playMapEntrance();
    } else if (mapImg) {
      mapImg.addEventListener("load", playMapEntrance);
      setTimeout(playMapEntrance, 300);
    }
    container.innerHTML = REGION_KEYS_ORDER.map((key) => {
      const reg = REGIONS[key];
      const isSelected = key === currentRegionId;
      return `
      <button
        class="map-pin-btn ${isSelected ? "is-selected" : ""} ${isDebugMode ? "debug-draggable-pin" : ""}"
        id="mapPin-${key}"
        data-region="${key}"
        aria-label="${reg.name}"
        type="button"
        style="left: ${reg.fx * 100}%; top: ${reg.fy * 100}%;"
      >
        <!-- Ground contact shadow -->
        <div class="pin-ground-shadow"></div>

        <!-- Pin pushpin image -->
        <div class="pin-img-wrapper">
          <img src="assets/eksplorasi/kuliner/pin.webp" alt="" class="pin-img" draggable="false">
        </div>

        <!-- Name label pill -->
        <div class="map-pin-label label-${reg.side}">
          ${reg.name}
        </div>

        ${isDebugMode ? `<div class="debug-coord-tag">${reg.fx.toFixed(3)}, ${reg.fy.toFixed(3)}</div>` : ""}
      </button>
    `;
    }).join("");
    function initPinIdleFloat(pin, idx) {
      if (!pin || !window.gsap) return;
      const prefersReduced2 = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced2) return;
      const key = pin.dataset.region;
      if (pinTweens[key]) {
        pinTweens[key].kill();
      }
      const dur = 6 + idx % 7 * 0.5;
      const delay = idx * 0.8 % 3;
      pinTweens[key] = window.gsap.to(pin, {
        y: -10,
        duration: 6.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay
      });
    }
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    REGION_KEYS_ORDER.forEach((key, idx) => {
      const pin = document.getElementById(`mapPin-${key}`);
      if (!pin) return;
      initPinIdleFloat(pin, idx);
      if (key === currentRegionId && window.gsap && !prefersReduced) {
        window.gsap.set(pin, { scale: 1.06 });
      }
      pin.addEventListener("click", () => {
        selectMapRegion(key);
      });
    });
    window.addEventListener("keydown", (e) => {
      const sec54 = document.getElementById("section-5-4-wrapper");
      if (!sec54) return;
      const rect = sec54.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const currIdx = REGION_KEYS_ORDER.indexOf(currentRegionId);
        const nextIdx = Math.max(0, currIdx - 1);
        selectMapRegion(REGION_KEYS_ORDER[nextIdx]);
        const nextBtn = document.getElementById(`mapPin-${REGION_KEYS_ORDER[nextIdx]}`);
        if (nextBtn) nextBtn.focus();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const currIdx = REGION_KEYS_ORDER.indexOf(currentRegionId);
        const nextIdx = Math.min(REGION_KEYS_ORDER.length - 1, currIdx + 1);
        selectMapRegion(REGION_KEYS_ORDER[nextIdx]);
        const nextBtn = document.getElementById(`mapPin-${REGION_KEYS_ORDER[nextIdx]}`);
        if (nextBtn) nextBtn.focus();
      }
    });
    if (viewAllBtn) {
      viewAllBtn.addEventListener("click", () => {
        const targetSec = document.getElementById("stage-root") || document.getElementById("restaurantSection") || document.body;
        if (targetSec) {
          targetSec.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    if (isDebugMode) {
      setupPinsDebugEditor(mapLayer, debugInfo, debugCopyBtn);
    }
    updateRightSheet(currentRegionId);
  }
  function updateRightSheet(regionKey) {
    const reg = REGIONS[regionKey.toLowerCase()] || REGIONS.ubud;
    const sheetContent = document.getElementById("mapSheetContent");
    const nameEl = document.getElementById("mapSheetRegionName");
    const noteEl = document.getElementById("mapSheetRegionNote");
    const dishesEl = document.getElementById("mapSheetDishesList");
    const placesEl = document.getElementById("mapSheetPlacesList");
    if (!sheetContent) return;
    if (window.gsap) {
      window.gsap.fromTo(
        [nameEl, noteEl, dishesEl, placesEl].filter(Boolean),
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", stagger: 0.04 }
      );
    }
    if (nameEl) {
      nameEl.textContent = reg.name;
      if (reg.name.length > 9) {
        nameEl.style.fontSize = "clamp(1.6rem, 2.3vw, 2.2rem)";
      } else {
        nameEl.style.fontSize = "clamp(1.9rem, 2.7vw, 2.6rem)";
      }
    }
    if (noteEl) {
      noteEl.textContent = reg.note;
    }
    if (dishesEl) {
      if (!reg.dishes || reg.dishes.length === 0) {
        dishesEl.innerHTML = `<p class="font-body font-bold text-[16px] text-[#14634A] py-1">Data kuliner menyusul.</p>`;
      } else {
        dishesEl.innerHTML = reg.dishes.slice(0, 3).map((d) => {
          const photoUrl = getDishPhoto(d.id || d.n);
          let tagColor = "#8A8A8A";
          let tagBg = "#F0F4E8";
          if (d.tag === "Halal") {
            tagColor = "#1F8A63";
            tagBg = "#EAF8F0";
          } else if (d.tag === "Non-halal") {
            tagColor = "#C0503A";
            tagBg = "#FDF0ED";
          }
          return `
          <div class="flex items-center gap-[12px]">
            <div class="w-[41px] h-[41px] rounded-full shrink-0 border-2 border-[#DDF3B0] overflow-hidden bg-[#FAF5EE] shadow-xs">
              <img src="${photoUrl}" alt="${d.n}" class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col min-w-0">
              <span class="font-display font-extrabold text-[17px] text-[#0F4D3A] leading-tight truncate">
                ${d.n}
              </span>
              <span class="font-body font-bold text-[11px] inline-block px-2 py-0.5 rounded-full w-fit mt-0.5" style="color: ${tagColor}; background-color: ${tagBg};">
                ${d.tag}
              </span>
            </div>
          </div>
        `;
        }).join("");
      }
    }
    if (placesEl) {
      if (!reg.places || reg.places.length === 0) {
        placesEl.innerHTML = `<p class="font-body font-bold text-[16px] text-[#14634A] py-1">Data tempat makan menyusul.</p>`;
      } else {
        placesEl.innerHTML = reg.places.slice(0, 4).map((p) => {
          const photoUrl = p.photo || getDishPhoto(p.dishId || p.dish);
          const mapsUrl = p.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + " Bali")}`;
          return `
          <div class="resto-card-item w-full bg-[#FAF5EE] rounded-[16px] p-[9px_11px] flex items-center justify-between gap-[9px] border border-[#EAF2D8] shadow-xs hover:border-[#1F8A63]/40 transition-colors">
            <div class="flex items-center gap-[10px] min-w-0">
              <div class="w-[38px] h-[38px] rounded-full shrink-0 border-2 border-[#DDF3B0] overflow-hidden bg-white shadow-xs">
                <img src="${photoUrl}" alt="${p.dish || p.name}" class="w-full h-full object-cover">
              </div>
              <div class="flex flex-col min-w-0">
                <h4 class="font-display font-extrabold text-[13.5px] text-[#0F4D3A] leading-tight truncate">
                  ${p.name}
                </h4>
                <span class="font-body font-bold text-[11px] text-[#1F8A63] leading-tight truncate">
                  ${p.dish}
                </span>
                <div class="font-body font-bold text-[10px] text-[#4A6E63] leading-tight flex items-center gap-1.5 mt-0.5">
                  <span>${p.price}</span>
                  <span>\xB7</span>
                  <span class="inline-flex items-center gap-0.5">
                    <svg class="w-3 h-3 text-[#FFB04A] fill-current" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>${p.rating}</span>
                  </span>
                </div>
              </div>
            </div>
            <a
              href="${mapsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Petunjuk arah ${p.name}"
              class="shrink-0 w-[29px] h-[29px] rounded-full bg-white border border-[#DDF3B0] flex items-center justify-center text-[#2169B5] hover:bg-[#2169B5] hover:text-white transition-colors shadow-xs"
              title="Get Directions"
            >
              <svg class="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        `;
        }).join("");
      }
    }
  }
  function selectMapRegion(regionKey) {
    const normKey = regionKey.toLowerCase();
    const reg = REGIONS[normKey];
    if (!reg) return;
    const prevKey = currentRegionId;
    currentRegionId = normKey;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    REGION_KEYS_ORDER.forEach((key) => {
      const pin = document.getElementById(`mapPin-${key}`);
      if (!pin) return;
      if (key === normKey) {
        pin.classList.add("is-selected");
        if (!prefersReduced && window.gsap) {
          window.gsap.to(pin, {
            scale: 1.06,
            duration: 0.6,
            ease: "power2.out"
          });
        } else {
          pin.style.transform = "translate(-50%, -100%) scale(1.06)";
        }
      } else {
        pin.classList.remove("is-selected");
        if (!prefersReduced && window.gsap) {
          window.gsap.to(pin, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          });
        } else {
          pin.style.transform = "translate(-50%, -100%) scale(1)";
        }
      }
    });
    updateRightSheet(normKey);
    if (window.runLayoutSelfTest) setTimeout(window.runLayoutSelfTest, 120);
  }
  function setupPinsDebugEditor(mapLayer, infoEl, copyBtn) {
    REGION_KEYS_ORDER.forEach((key) => {
      const pin = document.getElementById(`mapPin-${key}`);
      if (!pin) return;
      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let initialLeft = 0;
      let initialTop = 0;
      pin.addEventListener("pointerdown", (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        pin.setPointerCapture(e.pointerId);
        startX = e.clientX;
        startY = e.clientY;
        const rect = mapLayer.getBoundingClientRect();
        const pinRect = pin.getBoundingClientRect();
        initialLeft = (pinRect.left + pinRect.width / 2 - rect.left) / rect.width;
        initialTop = (pinRect.bottom - rect.top) / rect.height;
        e.stopPropagation();
      });
      pin.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        const rect = mapLayer.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        const fx = Math.max(0, Math.min(1, currentX / rect.width));
        const fy = Math.max(0, Math.min(1, currentY / rect.height));
        pin.style.left = `${(fx * 100).toFixed(3)}%`;
        pin.style.top = `${(fy * 100).toFixed(3)}%`;
        REGIONS[key].fx = parseFloat(fx.toFixed(3));
        REGIONS[key].fy = parseFloat(fy.toFixed(3));
        const tag = pin.querySelector(".debug-coord-tag");
        if (tag) tag.textContent = `${fx.toFixed(3)}, ${fy.toFixed(3)}`;
        if (infoEl) infoEl.textContent = `${key}: fx ${fx.toFixed(3)}, fy ${fy.toFixed(3)}`;
      });
      const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        try {
          pin.releasePointerCapture(e.pointerId);
        } catch (_) {
        }
      };
      pin.addEventListener("pointerup", endDrag);
      pin.addEventListener("pointercancel", endDrag);
    });
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const exportData = {};
        REGION_KEYS_ORDER.forEach((k) => {
          exportData[k] = { ...REGIONS[k] };
        });
        const jsonStr = JSON.stringify(exportData, null, 2);
        navigator.clipboard.writeText(jsonStr).then(() => {
          alert("Copied REGIONS JSON to clipboard!");
        }).catch(() => {
          prompt("Copy this REGIONS JSON:", jsonStr);
        });
      });
    }
  }
  if (typeof window !== "undefined") {
    window.selectMapRegion = selectMapRegion;
  }
  function setupSectionScrollTriggers() {
    if (!window.gsap || !window.ScrollTrigger) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const sections = ["#section-5-2-wrapper", "#section-5-3-wrapper", "#section-5-4-wrapper"];
    sections.forEach((secId) => {
      const secEl = document.querySelector(secId);
      if (!secEl) return;
      window.ScrollTrigger.create({
        trigger: secEl,
        start: "top 75%",

        once: true,
        onEnter: () => {
          if (secId === "#section-5-4-wrapper") {
            const mapLayer = document.getElementById("mapLayer");
            const rightSheet = document.getElementById("mapRightSheet");
            const pinBtns = REGION_KEYS_ORDER.map((k) => document.getElementById(`mapPin-${k}`)).filter(Boolean);
            const tl = window.gsap.timeline();
            if (mapLayer) {
              tl.to(mapLayer, {
                opacity: 1,
                scale: 1,
                duration: 1.4,
                ease: "power2.out"
              }, 0);
            }
            if (pinBtns.length > 0) {
              tl.fromTo(
                pinBtns,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.out",
                  stagger: 0.05,
                  onComplete: () => {
                    selectMapRegion("ubud");
                  }
                },
                0.2
              );
            }
            if (rightSheet) {
              tl.fromTo(
                rightSheet,
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                0.6
              );
            }
          } else if (secId === "#section-5-3-wrapper") {
            const animElements = secEl.querySelectorAll("h2, span, #spiceNextArrowBtn, #spiceInfoFungsi, #spiceInfoAroma, #spiceInfoKeunikan, #spiceInfoKombinasi");
            window.gsap.fromTo(
              animElements,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }
            );
          } else {
            const animElements = secEl.querySelectorAll("h1, h2, p, button, .story-bento-tile, .story-photo-box, .story-floating-chip");
            window.gsap.fromTo(
              animElements,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }
            );
          }
        }
      });
    });
  }

  var dishRailCarousel = null;
  var BADGE_TASTE_SRC = "assets/eksplorasi/badge/badge_pencicip_rasa.webp";
  var activeStatuses =                 new Set();
  var activeHarga = null;
  var activeWilayah = null;
  var searchQuery = "";
  var selectedDishId = null;
  var savedDishes =                 new Set();
  var badgeEarned = false;
  var searchDebounceTimer = null;
  var TILT_PATTERN = [-4, 0, 3, 5];
  window.addEventListener("DOMContentLoaded", () => {
    try {
      const saved = localStorage.getItem("sakala_saved_dishes");
      if (saved) {
        savedDishes = new Set(JSON.parse(saved));
      }
      const badge = localStorage.getItem("sakala_taste_badge");
      if (badge) {
        badgeEarned = JSON.parse(badge);
      }
    } catch (e) {
      console.warn("Storage access restricted", e);
    }
    setupStageScaling();
    initPlatter();
    renderDishCardsRail();
    renderRestaurantsDrawer();
    setupFilterHandlers();
    setupSearchHandlers();
    setupRailInteractions();
    setupParallaxAndAnimations();
    initNewSections();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
  function setupStageScaling() {
    function handleResize() {
      const vw = window.innerWidth;
      const sec54Scaler = document.getElementById("section-5-4-scaler");
      const sec54 = document.getElementById("section-5-4-wrapper");
      if (vw < 1280) {
        if (sec54Scaler) {
          sec54Scaler.style.transform = "none";
          sec54Scaler.style.transformOrigin = "";
        }
        if (sec54) sec54.style.height = "auto";
        return;
      }
      const scale = Math.min(vw, 1920) / 1440;
      if (sec54Scaler) {
        sec54Scaler.style.transform = `scale(${scale})`;
        sec54Scaler.style.transformOrigin = "top left";
      }
      if (sec54) sec54.style.height = `${752 * scale}px`;
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }
  function normalizeText(text) {
    return (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function matchesSearch(itemText, query) {
    if (!query) return true;
    return normalizeText(itemText).includes(normalizeText(query));
  }
  function setupSearchHandlers() {
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("searchClearBtn");
    if (!searchInput) return;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        searchQuery = e.target.value.trim();
        if (clearBtn) {
          clearBtn.style.display = searchQuery ? "flex" : "none";
        }
        applyAllFilters();
      }, 150);
    });
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearBtn.style.display = "none";
        applyAllFilters();
        searchInput.focus();
      });
    }
  }
  function setupFilterHandlers() {
    ["Halal", "Non-halal", "Belum terverifikasi"].forEach((status) => {
      const btn = document.getElementById(`chip-${status.replace(/\s+/g, "-")}`);
      if (!btn) return;
      btn.addEventListener("click", () => {
        if (activeStatuses.has(status)) {
          activeStatuses.delete(status);
          btn.setAttribute("aria-pressed", "false");
        } else {
          activeStatuses.add(status);
          btn.setAttribute("aria-pressed", "true");
        }
        applyAllFilters();
      });
    });
    setupDropdown("Harga", ["Semua", "$", "$$", "$$$"], (val) => {
      activeHarga = val === "Semua" ? null : val;
      updateChipLabel("Harga", activeHarga ? `Harga: ${activeHarga}` : "Harga");
      applyAllFilters();
    });
    const wilayahOptions = [
      "Semua",
      ...Array.from(new Set(restaurants.map((r) => r.area))).sort()
    ];
    setupDropdown("Wilayah", wilayahOptions, (val) => {
      activeWilayah = val === "Semua" ? null : val;
      updateChipLabel("Wilayah", activeWilayah ? `Wilayah: ${activeWilayah}` : "Wilayah");
      applyAllFilters();
    });
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeStatuses.clear();
        activeHarga = null;
        activeWilayah = null;
        selectedDishId = null;
        searchQuery = "";
        swapPlatter(null);
        const searchInput = document.getElementById("searchInput");
        const clearBtn = document.getElementById("searchClearBtn");
        if (searchInput) searchInput.value = "";
        if (clearBtn) clearBtn.style.display = "none";
        document.querySelectorAll(".filter-chip").forEach((btn) => {
          btn.setAttribute("aria-pressed", "false");
        });
        updateChipLabel("Harga", "Harga");
        updateChipLabel("Wilayah", "Wilayah");
        applyAllFilters();
      });
    }
  }
  function setupDropdown(name, options, onSelect) {
    const chip = document.getElementById(`chip-${name}`);
    const dropdown = document.getElementById(`dropdown-${name}`);
    if (!chip || !dropdown) return;
    dropdown.innerHTML = options.map(
      (opt) => `<button class="dropdown-item" data-value="${opt}">${opt}</button>`
    ).join("");
    chip.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".filter-dropdown-menu").forEach((el) => {
        if (el !== dropdown) el.classList.add("hidden");
      });
      dropdown.classList.toggle("hidden");
    });
    dropdown.addEventListener("click", (e) => {
      const item = e.target.closest(".dropdown-item");
      if (!item) return;
      const value = item.dataset.value;
      onSelect(value);
      dropdown.classList.add("hidden");
    });
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !chip.contains(e.target)) {
        dropdown.classList.add("hidden");
      }
    });
  }
  function updateChipLabel(name, text) {
    const chip = document.getElementById(`chip-${name}`);
    if (!chip) return;
    const isFiltered = text !== name;
    chip.innerHTML = `
    <span>${text}</span>
    ${isFiltered ? `<svg class="w-3.5 h-3.5 ml-1 inline-block hover:text-red-300 chip-clear cursor-pointer" data-chip="${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>` : ""}
  `;
    chip.setAttribute("aria-pressed", isFiltered ? "true" : "false");
    const clearIcon = chip.querySelector(".chip-clear");
    if (clearIcon) {
      clearIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        if (name === "Harga") activeHarga = null;
        if (name === "Wilayah") activeWilayah = null;
        updateChipLabel(name, name);
        applyAllFilters();
      });
    }
  }
  function applyAllFilters() {
    const resetBtn = document.getElementById("resetFiltersBtn");
    const hasActiveFilters = activeStatuses.size > 0 || activeHarga !== null || activeWilayah !== null || searchQuery !== "" || selectedDishId !== null;
    if (resetBtn) {
      if (hasActiveFilters) {
        resetBtn.classList.remove("inactive");
        resetBtn.classList.add("active");
      } else {
        resetBtn.classList.remove("active");
        resetBtn.classList.add("inactive");
      }
    }
    renderDishCardsRail();
    renderRestaurantsDrawer();
  }
  function getFilteredDishes() {
    return dishes.filter((dish) => {
      if (activeStatuses.size > 0 && !activeStatuses.has(dish.tag)) {
        return false;
      }
      if (searchQuery) {
        const combined = `${dish.name} ${dish.description} ${dish.tag} ${dish.comment}`;
        if (!matchesSearch(combined, searchQuery)) return false;
      }
      return true;
    });
  }
  function renderDishCardsRail() {
    const rail = document.getElementById("dishCardsRail");
    const track = document.getElementById("dishCardsTrack") || rail;
    if (!rail || !track) return;
    const filteredDishes = getFilteredDishes();
    if (filteredDishes.length === 0) {
      track.innerHTML = `
      <div class="w-full flex items-center justify-center py-10 px-4">
        <div class="bg-white/80 rounded-full px-6 py-3 border border-commentBorder shadow-sm text-textGreen font-body font-bold text-[13px]">
          Belum ketemu hidangan yang sesuai, coba kata lain ya!
        </div>
      </div>
    `;
      if (dishRailCarousel) dishRailCarousel.recalculate();
      return;
    }
    track.innerHTML = filteredDishes.map((dish, idx) => {
      const tilt = TILT_PATTERN[idx % TILT_PATTERN.length];
      const isSelected = selectedDishId === dish.id;
      const isSaved = savedDishes.has(dish.id);
      const photoHtml = dish.photo && dish.photo !== "placeholder" ? `<img src="${dish.photo}" alt="${dish.name}">` : `<div class="placeholder-box"><span class="placeholder-text">Foto ${dish.name}</span></div>`;
      return `
        <div
          id="card-${dish.id}"
          data-dish-id="${dish.id}"
          data-tilt="${tilt}"
          class="dish-card-item shrink-0 relative w-[160px] h-[244px] bg-white rounded-[22px] p-[12px] shadow-dishCard border border-black/5 flex flex-col justify-between cursor-pointer overflow-hidden interactive-ui ${isSelected ? "selected" : ""}"
          style="transform: rotate(${tilt}deg);"
        >
          <!-- Heart Button Top-Right -->
          <button
            data-save-id="${dish.id}"
            class="save-heart-btn absolute top-[8px] right-[8px] w-[28px] h-[28px] rounded-full flex items-center justify-center shadow-xs z-20 transition-transform active:scale-90 ${isSaved ? "bg-lime text-textDarkGreen" : "bg-white/90 text-textMuted hover:text-primaryGreen"}"
            title="${isSaved ? "Tersimpan" : "Simpan hidangan"}"
            aria-label="${isSaved ? "Hapus dari koleksi" : "Simpan hidangan"}"
          >
            <svg class="w-[14px] h-[14px] ${isSaved ? "fill-current text-[#0F4D3A]" : "text-textMuted"}" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <!-- Fixed Photo Box (136x120) with clip-path -->
          <div class="photo-box ${dish.clipClass || "clip-circle"} mx-auto">
            ${photoHtml}
          </div>

          <!-- Title & Description -->
          <div class="flex flex-col mt-[4px]">
            <h3 class="font-display font-extrabold text-[17px] text-textGreen leading-tight truncate">
              ${dish.name}
            </h3>
            <p class="font-body font-bold text-[11px] text-textGreen/85 leading-snug line-clamp-2 mt-[2px]">
              ${dish.description}
            </p>
          </div>

          <!-- Comment Pill -->
          <div class="w-full bg-commentFill border-2 border-commentBorder rounded-full px-[8px] py-[3px] flex items-center gap-[6px] shadow-xs">
            <div class="w-[7px] h-[7px] rounded-full shrink-0" style="background-color: ${dish.dotColor || "#1F8A63"};"></div>
            <span class="font-body font-bold text-[10px] text-textGreen truncate">
              ${dish.comment || "Sangat direkomendasikan!"}
            </span>
          </div>
        </div>
      `;
    }).join("");
    if (window.lucide) {
      window.lucide.createIcons();
    }
    rail.querySelectorAll(".dish-card-item").forEach((card) => {
      const dishId = card.dataset.dishId;
      const tilt = parseFloat(card.dataset.tilt) || 0;
      card.addEventListener("mouseenter", () => {
        card.style.transform = `translateY(-8px) scale(1.03) rotate(${tilt}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = `translateY(0) scale(1) rotate(${tilt}deg)`;
      });
      card.addEventListener("click", (e) => {
        if (e.target.closest(".save-heart-btn")) return;
        if (selectedDishId === dishId) {
          selectedDishId = null;
          swapPlatter(null);
          card.classList.remove("selected");
          applyAllFilters();
        } else {
          selectDish(dishId);
        }
      });
    });
    track.querySelectorAll(".save-heart-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dishId = btn.dataset.saveId;
        toggleSaveDish(dishId, btn);
      });
    });
    if (dishRailCarousel) {
      dishRailCarousel.recalculate();
    }
  }
  function selectDish(dishId) {
    selectedDishId = dishId;
    swapPlatter(dishId);
    applyAllFilters();
    const rail = document.getElementById("dishCardsRail");
    const track = document.getElementById("dishCardsTrack") || rail;
    if (track) {
      const cards = Array.from(track.querySelectorAll(".dish-card-item"));
      cards.forEach((c, idx) => {
        if (c.dataset.dishId === dishId) {
          c.classList.add("selected");
          if (dishRailCarousel) {
            dishRailCarousel.scrollIntoView(idx);
          }
        } else {
          c.classList.remove("selected");
        }
      });
    }
  }
  window.selectDish = selectDish;
  function getFilteredRestaurants() {
    return restaurants.filter((r) => {
      if (activeStatuses.size > 0 && !activeStatuses.has(r.status) && !activeStatuses.has(r.halal)) {
        return false;
      }
      if (activeHarga && r.price !== activeHarga) {
        return false;
      }
      if (activeWilayah && r.area !== activeWilayah) {
        return false;
      }
      if (selectedDishId && r.dishId !== selectedDishId && (!r.serves || !r.serves.includes(selectedDishId))) {
        return false;
      }
      if (searchQuery) {
        const combined = `${r.name} ${r.area} ${r.status || r.halal} ${r.dishId || ""}`;
        if (!matchesSearch(combined, searchQuery)) return false;
      }
      return true;
    });
  }
  function renderRestaurantsDrawer() {
    const container = document.getElementById("restaurantCardsList");
    const countEl = document.getElementById("drawerMatchCount");
    if (!container) return;
    const filtered = getFilteredRestaurants();
    if (countEl) {
      countEl.innerText = `${filtered.length} tempat`;
    }
    if (filtered.length === 0) {
      container.innerHTML = `
      <div class="py-12 px-2 text-center flex flex-col items-center justify-center gap-2">
        <div class="w-10 h-10 rounded-full bg-pastelMint flex items-center justify-center text-textGreen font-bold">
          <svg class="w-5 h-5 text-textGreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <p class="font-display font-bold text-[14px] text-textGreen">
          Belum ketemu, coba kata lain ya
        </p>
        <span class="font-body text-[11px] text-textMuted">
          Atau ubah pilihan filter di bagian atas.
        </span>
      </div>
    `;
      return;
    }
    container.innerHTML = filtered.map((r) => {
      let statusBadge = "";
      const statusVal = r.status || r.halal;
      if (statusVal === "Halal") {
        statusBadge = `<span class="bg-primaryGreen text-white text-[10px] font-body font-extrabold px-[10px] py-[2px] rounded-full shadow-xs">Halal</span>`;
      } else if (statusVal === "Belum terverifikasi") {
        statusBadge = `<span class="bg-[#BFEAA6] text-textGreen text-[10px] font-body font-extrabold px-[8px] py-[2px] rounded-full shadow-xs">Belum terverifikasi</span>`;
      } else {
        statusBadge = `<span class="bg-transparent border-2 border-primaryGreen text-primaryGreen text-[10px] font-body font-extrabold px-[8px] py-[1px] rounded-full">Non-halal</span>`;
      }
      const photoHtml = r.photo && r.photo !== "placeholder" ? `<img src="${r.photo}" alt="${r.name}" class="w-full h-full object-cover rounded-[14px]">` : `<div class="placeholder-box"><span class="placeholder-text">Foto ${r.name}</span></div>`;
      const mapsUrl = r.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " Bali")}`;
      return `
        <div class="resto-card-item w-full bg-cardRestaurant rounded-[18px] p-[12px] flex flex-col gap-[8px] border border-white/60 shadow-xs">
          <!-- Top Photo: 96px high, full width, rounded 14 -->
          <div class="resto-photo-box w-full h-[96px] rounded-[14px] overflow-hidden bg-pastelMint/40">
            ${photoHtml}
          </div>

          <!-- Status Badge -->
          <div>
            ${statusBadge}
          </div>

          <!-- Title & Meta -->
          <div class="flex flex-col gap-[2px]">
            <h4 class="font-body font-extrabold text-[14px] text-textGreen leading-snug">
              ${r.name}
            </h4>
            <div class="font-body font-bold text-[11px] text-textMuted leading-tight">
              ${r.area} \xB7 ${r.hours}
            </div>
            <div class="font-body font-bold text-[11px] text-textMuted leading-tight flex items-center gap-1.5 mt-0.5">
              <span>${r.price}</span>
              <span>\xB7</span>
              <span class="inline-flex items-center gap-0.5">
                <svg class="w-3 h-3 text-[#FFB04A] fill-current" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span>${r.rating}</span>
              </span>
            </div>
          </div>

          <!-- Visitor Comment Pill -->
          <div class="w-full bg-commentFill border border-commentBorder rounded-full px-[8px] py-[3px] flex items-center gap-[6px] shadow-xs mt-[2px]">
            <div class="w-[6px] h-[6px] rounded-full shrink-0" style="background-color: ${r.dotColor || "#1F8A63"};"></div>
            <span class="font-body font-bold text-[10px] text-textGreen truncate">
              ${r.comment || "Pilihan kuliner favorit khas Bali."}
            </span>
          </div>

          <!-- Get Directions Link -->
          <div class="pt-[4px]">
            <a
              href="${mapsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-[4px] font-body font-extrabold text-[12px] text-blueAccent hover:underline"
            >
              <span>Get Directions</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      `;
    }).join("");
    container.scrollTop = 0;
  }
  function setupRailInteractions() {
    const rail = document.getElementById("dishCardsRail");
    const track = document.getElementById("dishCardsTrack") || rail;
    const leftBtn = document.getElementById("railLeftBtn");
    const rightBtn = document.getElementById("railRightBtn");
    if (!rail || !track) return;
    dishRailCarousel = setupCarousel({
      container: document.getElementById("heroRailContainer"),
      viewport: rail,
      track,
      getItems: () => Array.from(track.querySelectorAll(".dish-card-item")),
      gap: 18,
      prevBtn: leftBtn,
      nextBtn: rightBtn,
      syncPlatter: true
    });
  }
  function toggleSaveDish(dishId, btnEl) {
    if (savedDishes.has(dishId)) {
      savedDishes.delete(dishId);
    } else {
      savedDishes.add(dishId);
      triggerSparkleBurst(btnEl);
      if (!badgeEarned) {
        badgeEarned = true;
        showToast();
        try {
          localStorage.setItem("sakala_taste_badge", JSON.stringify(true));
        } catch (e) {
        }
      }
    }
    try {
      localStorage.setItem(
        "sakala_saved_dishes",
        JSON.stringify(Array.from(savedDishes))
      );
    } catch (e) {
    }
    renderDishCardsRail();
  }
  function updateBadgeUI() {
  }
  function showToast() {
    const toast = document.getElementById("badgeToast");
    if (!toast) return;
    toast.classList.remove("hidden");
    toast.classList.add("flex");
    if (window.gsap) {
      window.gsap.fromTo(
        toast,
        { y: -30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
    setTimeout(hideToast, 4800);
  }
  function hideToast() {
    const toast = document.getElementById("badgeToast");
    if (!toast) return;
    if (window.gsap) {
      window.gsap.to(toast, {
        y: -20,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
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
  window.hideToast = hideToast;
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
      const dist = 24 + Math.random() * 20;
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
  function setupParallaxAndAnimations() {
    if (!window.gsap) return;
    const mascot = document.getElementById("mascotContainer");
    if (mascot) {
      window.gsap.to(mascot, {
        y: -8,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }
    const bgImg = document.getElementById("section1Bg");
    if (bgImg) {
      if (bgImg.decode) {
        bgImg.decode().catch(() => {
        });
      }
      if (window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.gsap.fromTo(
          bgImg,
          { y: 0, scale: 1.06, transformOrigin: "center bottom" },
          {
            y: 30,
            scale: 1.06,
            transformOrigin: "center bottom",
            ease: "none",
            scrollTrigger: {
              trigger: "#stage-root",
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          }
        );
      } else {
        window.gsap.set(bgImg, { scale: 1.06, transformOrigin: "center bottom" });
      }
    }
    window.addEventListener("mousemove", (e) => {
      const normX = e.clientX / window.innerWidth - 0.5;
      const normY = e.clientY / window.innerHeight - 0.5;
      updatePlatterTilt(normX, normY);
    });
  }
})();
