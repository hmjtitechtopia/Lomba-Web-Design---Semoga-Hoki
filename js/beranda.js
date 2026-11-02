

function triggerCameraFlash() {
  const flash = document.getElementById('camera-flash');
  if (flash) {
    flash.style.opacity = '0.92';
    setTimeout(() => {
      flash.style.opacity = '0';
    }, 120);
  }
  triggerConfetti();
}

function handleHeroChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('phone-chat-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  const toast = document.getElementById('hero-chat-reply-toast');
  if (toast) {
    toast.style.display = 'inline-block';
    toast.textContent = 'Mickey sedang mengetik pesan... 💬';
  }
  input.value = '';

  setTimeout(() => {
        const replies = [
      "Om Swastiastu! 🌺 Di Bali, tradisi bukanlah peninggalan masa lalu, melainkan nafas hidup sehari-hari yang dijaga dengan ketulusan hati.",
      "Canang sari yang kamu lihat di jalanan adalah wujud persembahan terkecil namun penuh cinta kasih kepada semesta dan Sang Hyang Widhi. ✨",
      "Filosofi Tri Hita Karana mengajarkan bahwa kebahagiaan sejati tercapai jika kita hidup harmonis dengan Tuhan, sesama manusia, dan alam sekitar. 🛕🌿",
      "Dalam seni tari Bali, setiap lirikan mata (seledet) dan posisi jemari memiliki getaran spiritual untuk menyelaraskan energi mikrokosmos dan makrokosmos. 💃",
      "Tradisi Megibung mengajarkan kita arti sejati kebersamaan—semua krama duduk sama rendah dan makan bersama tanpa membedakan status sosial. 🍲"
    ];
    const replyMsg = document.createElement('div');
    replyMsg.className = 'chat-bubble out';
    replyMsg.textContent = replies[Math.floor(Math.random() * replies.length)];
    stream.appendChild(replyMsg);
    stream.scrollTop = stream.scrollHeight;
  }, 650);
}

function openVideoModal() {
  openModal('video-modal');
  triggerConfetti();
}

const BALI_LANDMARKS = {
  besakih: {
    id: 'besakih',
    title: 'Pura Agung Besakih',
    subtitle: 'Ibu Segala Pura (Mother Temple of Bali)',
    location: 'Karangasem, Lereng Gunung Agung',
    pillar: 'parhyangan',
    pillarName: 'Parhyangan (Spiritual)',
    pillarColor: '#F59E0B',
    icon: 'assets/editorial/home/pura.webp',
    badgeId: 1,
    audioFreq: 587.33,
    quote: 'Pusat spiritual tertinggi di lereng Gunung Agung yang merangkul 23 kompleks pura, lambang kepatuhan dan keharmonisan makrokosmos.',
    funFact: 'Didirikan oleh Rsi Markandeya pada abad ke-8 Masehi sebagai cikal bakal peradaban spiritual Bali.'
  },
  tanahlot: {
    id: 'tanahlot',
    title: 'Pura Tanah Lot',
    subtitle: 'Keagungan Suci Penjaga Lautan Selatan',
    location: 'Beraban, Tabanan (Pesisir Selatan)',
    pillar: 'parhyangan',
    pillarName: 'Parhyangan (Spiritual)',
    pillarColor: '#F59E0B',
    icon: 'assets/editorial/home/tanah-lot.webp',
    badgeId: 2,
    audioFreq: 440.00,
    quote: 'Tempat pemujaan Bhatara Segara dan Dang Hyang Nirartha di atas batu karang megah penahan gelombang samudra.',
    funFact: 'Ular suci berbelang hitam-putih (poleng) dipercaya sebagai penjaga setia kesucian pura ini dari aura negatif.'
  },
  jatiluwih: {
    id: 'jatiluwih',
    title: 'Subak Jatiluwih',
    subtitle: 'Warisan Dunia UNESCO Pembagian Air Demokratis',
    location: 'Penebel, Tabanan (Kaki Gunung Batukaru)',
    pillar: 'palemahan',
    pillarName: 'Palemahan (Harmoni Alam)',
    pillarColor: '#1F8A63',
    icon: 'assets/editorial/home/sawah.webp',
    badgeId: 3,
    audioFreq: 493.88,
    quote: 'Sistem irigasi terasering komunal sejak abad ke-9 yang membuktikan bahwa menjaga kesuburan bumi adalah bentuk ibadah.',
    funFact: 'Sistem Subak tidak mengenal kasta atau hierarki modal; setiap petani menerima distribusi air secara adil dan musyawarah.'
  },
  batur: {
    id: 'batur',
    title: 'Gunung & Danau Batur',
    subtitle: 'Kaldera Purba & Sumber Kehidupan Air Suci',
    location: 'Kintamani, Bangli (Geopark UNESCO)',
    pillar: 'palemahan',
    pillarName: 'Palemahan (Harmoni Alam)',
    pillarColor: '#1F8A63',
    icon: 'assets/editorial/home/gunung-api.webp',
    badgeId: 4,
    audioFreq: 659.25,
    quote: 'Danau kawah terbesar di Bali yang menjadi sumber mata air utama persawahan dan dipuja melalui Pura Ulun Danu Batur.',
    funFact: 'Diakui sebagai UNESCO Global Geopark karena struktur kaldera ganda purba yang spektakuler.'
  },
  uluwatu: {
    id: 'uluwatu',
    title: 'Tari Kecak Uluwatu',
    subtitle: 'Kidung Suci Ramayana di Tebing Samudra Senja',
    location: 'Pecatu, Kuta Selatan (Tebing Karang 70m)',
    pillar: 'pawongan',
    pillarName: 'Pawongan (Harmoni Manusia)',
    pillarColor: '#FF6636',
    icon: 'assets/editorial/home/penari.webp',
    badgeId: 5,
    audioFreq: 392.00,
    quote: 'Puluhan pria melantunkan paduan suara poliritmik cak-cak-cak tanpa alat musik, membangkitkan getaran sakral epos Ramayana.',
    funFact: 'Kecak berakar dari tarian Sanghyang kuno—tarian trans sakral untuk mengusir bala wabah dan memohon keselamatan krama.'
  },
  penglipuran: {
    id: 'penglipuran',
    title: 'Desa Adat Penglipuran',
    subtitle: 'Kearifan Tata Ruang Tri Mandala & Kebersihan Jiwa',
    location: 'Kubugiri, Bangli (Desa Tradisional Bambu)',
    pillar: 'pawongan',
    pillarName: 'Pawongan (Harmoni Manusia)',
    pillarColor: '#FF6636',
    icon: 'assets/editorial/home/barong.webp',
    badgeId: 6,
    audioFreq: 523.25,
    quote: 'Desa terbersih di dunia yang mempertahankan arsitektur bambu seragam dan larangan poligami demi keharmonisan rumah tangga.',
    funFact: 'Setiap pekarangan rumah saling terhubung melalui pintu samping (kori) sebagai lambang keterbukaan dan gotong royong.'
  }
};

const LANDMARK_SEQUENCE = ['tanahlot', 'uluwatu', 'jatiluwih', 'penglipuran', 'batur', 'besakih'];
let currentLandmarkKey = 'besakih';
const unlockedBadges = new Set();

function playGamelanChime(freq = 520) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(freq * 0.99, ctx.currentTime + 1.2);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.76, ctx.currentTime);

    gain1.gain.setValueAtTime(0.35, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);

    gain2.gain.setValueAtTime(0.15, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 1.4);
    osc2.stop(ctx.currentTime + 0.9);
  } catch (err) {
    console.warn('Audio note skipped:', err);
  }
}

function playCurrentLandmarkSound() {
  const data = BALI_LANDMARKS[currentLandmarkKey];
  const freq = data && data.audioFreq ? data.audioFreq : 520;
  playGamelanChime(freq);

  const waveBars = document.querySelector('.sound-wave-bars');
  if (waveBars) {
    waveBars.classList.add('playing');
    setTimeout(() => waveBars.classList.remove('playing'), 1400);
  }
}

function selectMapLandmark(landmarkKey, showPopup = true) {
  const data = BALI_LANDMARKS[landmarkKey];
  if (!data) return;

  currentLandmarkKey = landmarkKey;

  document.querySelectorAll('.map-quest-pin').forEach(p => p.classList.remove('active-pin'));
  const pinEl = document.getElementById('pin-' + landmarkKey);
  if (pinEl) {
    pinEl.classList.add('active-pin');
  }

  document.querySelectorAll('.landmark-quick-chip').forEach(c => c.classList.remove('active'));
  const chipEl = document.getElementById('chip-' + landmarkKey);
  if (chipEl) {
    chipEl.classList.add('active');
  }

  document.querySelectorAll('.passport-badge-item').forEach(b => b.classList.remove('active-badge-item'));
  const badgeEl = document.getElementById('passport-badge-' + landmarkKey);
  if (badgeEl) {
    badgeEl.classList.add('active-badge-item');
  }

  const guideQuote = document.getElementById('map-mascot-speech-text');
  if (guideQuote) {
    guideQuote.innerHTML = `<strong>${data.title}:</strong> "${data.quote}"`;
  }

  const dossierCard = document.getElementById('dossier-card');
  if (dossierCard) {
    const pillarTag = document.getElementById('dossier-pillar-badge');
    if (pillarTag) {
      pillarTag.textContent = data.pillarName;
      pillarTag.style.background = data.pillarColor;
    }
    const titleEl = document.getElementById('dossier-title');
    if (titleEl) titleEl.textContent = data.title;
    const subEl = document.getElementById('dossier-sub');
    if (subEl) subEl.textContent = data.subtitle;
    const quoteEl = document.getElementById('dossier-quote');
    if (quoteEl) quoteEl.textContent = `"${data.quote}"`;
    const funfactEl = document.getElementById('dossier-funfact');
    if (funfactEl) funfactEl.textContent = data.funFact;
    const iconEl = document.getElementById('dossier-icon');
    if (iconEl) iconEl.src = data.icon;

    dossierCard.classList.remove('dossier-updated');
    void dossierCard.offsetWidth;
    dossierCard.classList.add('dossier-updated');
  }

  if (showPopup) {
    openDestinationPopup(data);
  }

  unlockBadge(landmarkKey);
}

function openDestinationPopup(data) {
  const overlay = document.getElementById('map-popup-overlay');
  const card = document.getElementById('map-destination-card');
  if (!overlay || !card) return;

  const pillarTag = document.getElementById('popup-pillar-pill');
  if (pillarTag) {
    pillarTag.textContent = data.pillarName;
    pillarTag.style.background = data.pillarColor;
  }
  const locTag = document.getElementById('popup-loc-tag');
  if (locTag) locTag.textContent = `📍 ${data.location || 'Episentrum Budaya'}`;

  const titleEl = document.getElementById('popup-landmark-title');
  if (titleEl) titleEl.textContent = data.title;
  const subEl = document.getElementById('popup-landmark-sub');
  if (subEl) subEl.textContent = data.subtitle;
  const quoteEl = document.getElementById('popup-landmark-quote');
  if (quoteEl) quoteEl.textContent = `"${data.quote}"`;
  const funfactEl = document.getElementById('popup-landmark-funfact');
  if (funfactEl) funfactEl.textContent = data.funFact;
  const iconEl = document.getElementById('popup-landmark-icon');
  if (iconEl) iconEl.src = data.icon;

  if (data.audioFreq) {
    playGamelanChime(data.audioFreq);
  }

  if (typeof triggerConfetti === 'function') {
    setTimeout(() => {
      triggerConfetti();
    }, 140);
  }

  document.body.classList.add('map-popup-active');
  overlay.classList.add('popup-active');
  card.classList.remove('card-unfold-in', 'card-fold-out');
  requestAnimationFrame(() => {
    card.classList.add('card-unfold-in');
  });
}

function closeDestinationPopup() {
  document.body.classList.remove('map-popup-active');
  const overlay = document.getElementById('map-popup-overlay');
  const card = document.getElementById('map-destination-card');
  if (!overlay) return;

  if (card) {
    card.classList.add('card-fold-out');
    setTimeout(() => {
      overlay.classList.remove('popup-active');
      card.classList.remove('card-unfold-in', 'card-fold-out');
    }, 240);
  } else {
    overlay.classList.remove('popup-active');
  }
}

function handleMapOverlayClick(e) {
  if (e.target && e.target.id === 'map-popup-overlay') {
    closeDestinationPopup();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDestinationPopup();
  }
});

function goToNextLandmark() {
  const currentIdx = LANDMARK_SEQUENCE.indexOf(currentLandmarkKey);
  const nextIdx = (currentIdx + 1) % LANDMARK_SEQUENCE.length;
  const nextKey = LANDMARK_SEQUENCE[nextIdx];
  selectMapLandmark(nextKey, true);
}

function unlockBadge(landmarkKey) {
  const data = BALI_LANDMARKS[landmarkKey];
  if (!data) return;

  const badgeItem = document.getElementById('passport-badge-' + landmarkKey);
  if (badgeItem && !badgeItem.classList.contains('badge-unlocked')) {
    badgeItem.classList.add('badge-unlocked');
    const lockIcon = badgeItem.querySelector('.badge-lock-status');
    if (lockIcon) {
      lockIcon.textContent = '✓';
      lockIcon.style.background = '#1F8A63';
    }
  }

  if (!unlockedBadges.has(landmarkKey)) {
    unlockedBadges.add(landmarkKey);
    const count = unlockedBadges.size;
    const countEl = document.getElementById('passport-counter-text');
    const barEl = document.getElementById('passport-progress-bar');
    const consoleText = document.getElementById('console-progress-text');

    const progressStr = `${count} / 6 Terkumpul`;
    if (countEl) countEl.textContent = progressStr;
    if (consoleText) consoleText.textContent = progressStr;
    if (barEl) barEl.style.width = `${Math.round((count / 6) * 100)}%`;
  }
}

function filterMapByPillar(pillarKey, btnEl) {
  document.querySelectorAll('.pillar-filter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const pins = document.querySelectorAll('.map-quest-pin');
  pins.forEach(pin => {
    const pinPillar = pin.getAttribute('data-pillar');
    if (pillarKey === 'all' || pinPillar === pillarKey) {
      pin.classList.remove('pin-dimmed');
      pin.classList.add('pin-highlight');
      setTimeout(() => pin.classList.remove('pin-highlight'), 900);
    } else {
      pin.classList.add('pin-dimmed');
    }
  });

  document.querySelectorAll('.landmark-quick-chip').forEach(chip => {
    const chipKey = chip.id.replace('chip-', '');
    const data = BALI_LANDMARKS[chipKey];
    if (data) {
      if (pillarKey === 'all' || data.pillar === pillarKey) {
        chip.style.opacity = '1';
        chip.style.pointerEvents = 'auto';
      } else {
        chip.style.opacity = '0.4';
        chip.style.pointerEvents = 'auto';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (typeof selectMapLandmark === 'function') {
      selectMapLandmark('besakih', false);
    }
    if (typeof selectDiscoverDestination === 'function') {
      selectDiscoverDestination('jatiluwih');
    }
  }, 200);
});

function openQuestModal(title, desc) {
  const titleEl = document.getElementById('quest-modal-title');
  const descEl = document.getElementById('quest-modal-desc');
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
  openModal('quest-modal');
}

function openBookingSuccess(pkgName) {
  const titleEl = document.getElementById('booking-modal-title');
  if (titleEl) {
    titleEl.textContent = 'Rahajeng! Refleksi ' + (pkgName || 'Budaya Bali') + ' Dipahami! 🌺';
  }
  openModal('booking-modal');
  triggerConfetti();
}

function setCategory(btn, cat) {
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const card = document.getElementById('main-camp-card');
  if (card) {
    card.style.transform = 'scale(0.97)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 180);
  }
}

function filterDestinations() {
  const input = document.getElementById('dest-search');
  if (!input) return;
  const query = input.value.toLowerCase();
  const title = document.querySelector('.camp-title');
  if (title) {
    if (query && !'tri hita karana tari kecak upacara melasti besakih subak jatiluwih penglipuran canang budaya tradisi'.includes(query)) {
      title.style.opacity = '0.5';
    } else {
      title.style.opacity = '1';
    }
  }
}

function toggleFavorite(btn) {
  btn.classList.toggle('liked');
  if (btn.classList.contains('liked')) {
    triggerConfetti();
  }
}

function playGamelanTaksu(btn) {
  if (!btn) return;
  if (btn.classList.contains('playing')) return;
  btn.classList.add('playing');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="gamelan-icon">🎶</span> <span class="gamelan-text">Mengalun Nada Taksu Bali...</span>';

  const notes = [440, 495, 558, 660, 742, 880];
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      if (typeof playGamelanChime === 'function') {
        playGamelanChime(freq);
      }
    }, idx * 160);
  });

  setTimeout(() => {
    btn.classList.remove('playing');
    btn.innerHTML = originalText;
  }, 1300);
}

function toggleEtikaCheck(btn) {
  if (!btn) return;
  btn.classList.toggle('checked');
  if (btn.classList.contains('checked')) {
    btn.innerHTML = '<span>✓</span> <span>Paham &amp; Hormati Kesucian Pura ✨</span>';
    if (typeof triggerConfetti === 'function') {
      triggerConfetti();
    }
  } else {
    btn.innerHTML = '<span class="etika-btn-sparkle">✨</span> <span class="etika-btn-text">Paham Tata Krama Pura</span>';
  }
}

let gearCount = 3;
let basePrice = 285000;

function toggleEquipment(item) {
  item.classList.toggle('selected');
  recalculatePrice();
}

function addNewEquipment() {
    const extraItems = [
    { icon: '🌺', name: 'Canang Sari' },
    { icon: '🕯️', name: 'Dupa Harum' },
    { icon: '🪡', name: 'Kain Endek' },
    { icon: '👘', name: 'Kebaya Bali' }
  ];
  const next = extraItems[gearCount % extraItems.length];
  gearCount++;

  const grid = document.getElementById('equipment-grid');
  const addBtn = grid.querySelector('.equip-add');

  const div = document.createElement('div');
  div.className = 'equip-item selected';
  div.onclick = function() { toggleEquipment(this); };
  div.innerHTML = '<span class="equip-icon">' + next.icon + '</span><span class="equip-name">' + next.name + '</span>';

  grid.insertBefore(div, addBtn);
  recalculatePrice();
  triggerConfetti();
}

function recalculatePrice() {
  const selectedCount = document.querySelectorAll('.equip-item.selected').length;
  const price = basePrice + (selectedCount - 3) * 35000;
  const priceEl = document.getElementById('total-price-val');
  if (priceEl) {
    priceEl.innerHTML = 'Harmoni Nilai <span>/ Tri Hita Karana</span>';
  }
}

function triggerSwipeBooking() {
  const handle = document.getElementById('swipe-handle');
  const label = document.getElementById('swipe-label');
  const slider = document.getElementById('swipe-slider');

  if (!handle || !slider) return;

  const maxSlide = slider.offsetWidth - handle.offsetWidth - 10;
  handle.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
  handle.style.transform = 'translateX(' + maxSlide + 'px)';
  if (label) label.textContent = 'Meresapi Makna Tradisi... 🌺';

  setTimeout(() => {
    openBookingSuccess('Kearifan Budaya & Etika Sakral Bali');
    setTimeout(() => {
      handle.style.transform = 'translateX(0px)';
      if (label) label.textContent = 'Geser untuk Resapi Makna ≫';
    }, 1000);
  }, 450);
}

function generateTripPlan() {
  const duration = document.querySelector('input[name="trip-duration"]:checked')?.value || '1 Hari';
  const interest = document.querySelector('input[name="trip-interest"]:checked')?.value || 'Alam & Camping';
  const resultContainer = document.getElementById('trip-plan-result');

  if (!resultContainer) return;

  let planDetails = '';
  if (duration === '1 Hari') {
    planDetails = `
      <div style="background:#F0FDF4; border-left:4px solid #22C55E; padding:12px 16px; border-radius:12px; margin-top:14px;">
        <b style="color:#15803D;">Rencana Singkat 1 Hari (${interest}):</b>
        <p style="margin:4px 0 0; font-size:14px; color:#334155;">
          • <b>05:00 - 08:30:</b> Sunrise view di Kintamani Danau Batur & Sarapan.<br>
          • <b>10:00 - 13:00:</b> Eksplorasi Terasering Sawah Tegallalang & Kopi Luwak.<br>
          • <b>15:30 - 18:30:</b> Sunset di Pantai Kelingking atau Pura Uluwatu.
        </p>
      </div>
    `;
  } else if (duration === '2 Hari') {
    planDetails = `
      <div style="background:#EFF6FF; border-left:4px solid #3B82F6; padding:12px 16px; border-radius:12px; margin-top:14px;">
        <b style="color:#1D4ED8;">Rencana Petualangan 2 Hari 1 Malam (${interest}):</b>
        <p style="margin:4px 0 0; font-size:14px; color:#334155;">
          • <b>Hari 1:</b> Trekking Air Terjun Sekumpul, Check-in Camp Tenda Bintang Kintamani, Api Unggun & BBQ.<br>
          • <b>Hari 2:</b> Sunrise Danau Batur, Kunjungan Desa Adat Penglipuran, dan Kuliner Ayam Betutu.
        </p>
      </div>
    `;
  } else {
    planDetails = `
      <div style="background:#FEF3C7; border-left:4px solid #F59E0B; padding:12px 16px; border-radius:12px; margin-top:14px;">
        <b style="color:#B45309;">Grand Expedition 3 Hari (${interest}):</b>
        <p style="margin:4px 0 0; font-size:14px; color:#334155;">
          • <b>Hari 1:</b> Pesisir Selatan & Tebing Karang Uluwatu + Tari Kecak.<br>
          • <b>Hari 2:</b> Ubud Cultural Heart, Rafting Sungai Ayung, & Tenda Bintang Batur.<br>
          • <b>Hari 3:</b> Danau Beratan Bedugul, Sentra Kerajinan Perak Celuk, & Makan Malam Sate Lilit.
        </p>
      </div>
    `;
  }

  resultContainer.innerHTML = planDetails;
  resultContainer.style.display = 'block';
  triggerConfetti();
}

function openCultureChatModal() {
  const m = document.getElementById('chat-modal-backdrop');
  if (m) {
    m.classList.add('active');
    setTimeout(() => {
      const inp = document.getElementById('modal-chat-input');
      if (inp) inp.focus();
    }, 150);
  }
}

function closeCultureChatModal(e) {
  if (e && e.target && e.target !== document.getElementById('chat-modal-backdrop') && !e.target.classList.contains('modal-close')) {
    return;
  }
  const m = document.getElementById('chat-modal-backdrop');
  if (m) m.classList.remove('active');
}

function handleModalChatSubmit(e) {
  e.preventDefault();
  const inp = document.getElementById('modal-chat-input');
  if (!inp || !inp.value.trim()) return;
  const q = inp.value.trim();
  inp.value = '';

  const stream = document.getElementById('modal-chat-stream');
  if (stream) {
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-bubble out';
    userMsg.textContent = q;
    stream.appendChild(userMsg);
    stream.scrollTop = stream.scrollHeight;

    setTimeout(() => {
      const rep = document.createElement('div');
      rep.className = 'chat-bubble in';
      rep.textContent = 'Matur suksma! 🙏 Pertanyaan indah seputar tradisi Bali. Di SAKALA, kita belajar bahwa kebudayaan Bali selalu berpijak pada ketulusan persembahan dan keharmonisan Tri Hita Karana.';
      stream.appendChild(rep);
      stream.scrollTop = stream.scrollHeight;
    }, 600);
  }
}

const DISCOVER_DESTINATIONS = {
  jatiluwih: {
    id: 'jatiluwih',
    title: 'Jatiluwih',
    subtitle: 'Sawah terasering warisan dunia UNESCO',
    categoryBadge: 'SAWAH',
    categorySlug: 'sawah',
    photo: 'assets/editorial/home/subak.webp',
    ticket: 'Rp100.000',
    ticketSub: 'turis asing',
    hours: '06.00–19.00',
    hoursSub: 'WITA, setiap hari',
    rating: '4.9 / 5',
    ratingSub: 'dari 5 bintang',
    address: 'Jl. Jatiluwih - Penebel No. 202, Desa Jatiluwih, Kec. Penebel, Tabanan, Bali',
    tips: [
      '1. Datang pagi, Mei–Juli paling indah',
      '2. Bawa uang tunai & sepatu nyaman'
    ],
    speech: 'Jatiluwih punya hamparan sawah terasering warisan dunia UNESCO terindah di Bali! 🌾',
    audioFreq: 493.88
  },
  besakih: {
    id: 'besakih',
    title: 'Pura Agung Besakih',
    subtitle: 'Ibu segala pura di lereng megah Gunung Agung',
    categoryBadge: 'PURA',
    categorySlug: 'pura',
    photo: 'assets/editorial/home/pura-besakih.webp',
    ticket: 'Rp60.000',
    ticketSub: 'domestik / Rp90k wisman',
    hours: '08.00–18.00',
    hoursSub: 'WITA, setiap hari',
    rating: '4.9 / 5',
    ratingSub: 'dari 5 bintang',
    address: 'Desa Besakih, Kec. Rendang, Kab. Karangasem, Bali',
    tips: [
      '1. Wajib kenakan kain kamen & selendang',
      '2. Gunakan pemandu lokal krama resmi'
    ],
    speech: 'Pura Agung Besakih adalah pusat spiritual tertinggi pelindung pulau Bali! 🛕',
    audioFreq: 587.33
  },
  tanahlot: {
    id: 'tanahlot',
    title: 'Pura Tanah Lot',
    subtitle: 'Kawasan karang sakral pemujaan dewa laut samudra',
    categoryBadge: 'PURA',
    categorySlug: 'pura',
    photo: 'assets/editorial/home/pura-leluhur.webp',
    ticket: 'Rp30.000',
    ticketSub: 'domestik / Rp75k wisman',
    hours: '07.00–19.00',
    hoursSub: 'WITA, setiap hari',
    rating: '4.8 / 5',
    ratingSub: 'dari 5 bintang',
    address: 'Beraban, Kec. Kediri, Kabupaten Tabanan, Bali',
    tips: [
      '1. Momen sunset di karang laut paling ikonik',
      '2. Berjalan ke gua ular suci saat surut'
    ],
    speech: 'Tanah Lot berdiri kokoh di atas batu karang di tengah deburan ombak! 🌊',
    audioFreq: 440.00
  },
  uluwatu: {
    id: 'uluwatu',
    title: 'Tari Kecak Uluwatu',
    subtitle: 'Pentas seni sakral epik di tebing karang samudra',
    categoryBadge: 'PANTAI',
    categorySlug: 'pantai',
    photo: 'assets/eksplorasi/budaya/tari_kecak.webp',
    ticket: 'Rp150.000',
    ticketSub: 'tiket pentas senja',
    hours: '17.00–19.30',
    hoursSub: 'WITA, setiap hari',
    rating: '4.9 / 5',
    ratingSub: 'dari 5 bintang',
    address: 'Pecatu, Kec. Kuta Selatan, Kabupaten Badung, Bali',
    tips: [
      '1. Beli tiket sebelum 16.30 untuk kursi terbaik',
      '2. Amankan topi & kacamata dari kera'
    ],
    speech: 'Kidung poliritmik cak-cak-cak saat senja di tebing Uluwatu sangat magis! 🎭',
    audioFreq: 392.00
  },
  batur: {
    id: 'batur',
    title: 'Gunung & Danau Batur',
    subtitle: 'Kaldera vulkanik purba & danau mata air suci',
    categoryBadge: 'PEGUNUNGAN',
    categorySlug: 'pegunungan',
    photo: 'assets/editorial/home/kintamani-camping.webp',
    ticket: 'Rp50.000',
    ticketSub: 'retribusi Kintamani',
    hours: '24 Jam',
    hoursSub: 'Trek subuh 03.30 WITA',
    rating: '4.8 / 5',
    ratingSub: 'dari 5 bintang',
    address: 'Batur Selatan, Kec. Kintamani, Kabupaten Bangli, Bali',
    tips: [
      '1. Udara fajar sejuk 15°C, siapkan jaket tebal',
      '2. Bersantai di kafe lereng menghadap danau'
    ],
    speech: 'Kaldera Danau Batur adalah geopark dunia dengan sunrise paling menawan! 🌋',
    audioFreq: 659.25
  },
  penglipuran: {
    id: 'penglipuran',
    title: 'Desa Adat Penglipuran',
    subtitle: 'Desa terbersih dunia berarsitektur bambu luhur',
    categoryBadge: 'DESA WISATA',
    categorySlug: 'desa-wisata',
    photo: 'assets/editorial/home/kehidupan-lokal.webp',
    ticket: 'Rp25.000',
    ticketSub: 'domestik / Rp50k wisman',
    hours: '08.00–18.30',
    hoursSub: 'WITA, setiap hari',
    rating: '4.9 / 5',
    ratingSub: 'dari 5 bintang',
    address: 'Jl. Penglipuran, Kubu, Kec. Bangli, Kab. Bangli, Bali',
    tips: [
      '1. Nikmati loloh cemcem herbal khas desa',
      '2. Kunjungi hutan bambu sakral di utara desa'
    ],
    speech: 'Penglipuran menjaga kerukunan krama banjar dan kesucian lingkungan! 🏡',
    audioFreq: 523.25
  },
  monyet: {
    id: 'monyet',
    title: 'Monkey Forest Ubud',
    subtitle: 'Suaka hutan beringin sakral & pura kuno',
    categoryBadge: 'DESA WISATA',
    categorySlug: 'desa-wisata',
    photo: 'assets/editorial/home/budaya-tradisi.webp',
    ticket: 'Rp60.000',
    ticketSub: 'domestik / Rp80k wisman',
    hours: '09.00–18.00',
    hoursSub: 'WITA, setiap hari',
    rating: '4.7 / 5',
    ratingSub: 'dari 5 bintang',
    address: 'Jl. Monkey Forest, Ubud, Gianyar, Bali',
    tips: [
      '1. Jangan bawa kantong kresek mencolok',
      '2. Jaga jarak tenang dan jangan ganggu kera'
    ],
    speech: 'Di Monkey Forest Ubud kamu bisa menikmati sejuknya pohon purba dan kera jinak! 🐒',
    audioFreq: 466.16
  }
};

let currentDiscoverKey = null;

function selectDiscoverDestination(key) {
  const data = DISCOVER_DESTINATIONS[key];
  if (!data) return;

  currentDiscoverKey = key;
  const stage = document.getElementById('discover-stage');
  const card = document.getElementById('discover-card-popup');
  if (!stage || !card) return;

  document.querySelectorAll('.discover-pin').forEach(pin => pin.classList.remove('active'));
  const pinEl = document.getElementById('dpin-' + key);
  if (pinEl) pinEl.classList.add('active');

  const photoEl = document.getElementById('card-photo');
  if (photoEl) photoEl.src = data.photo;

  const badgeEl = document.getElementById('card-photo-badge');
  if (badgeEl) badgeEl.textContent = data.categoryBadge;

  const titleEl = document.getElementById('card-title');
  if (titleEl) titleEl.textContent = data.title;

  const subEl = document.getElementById('card-subtitle');
  if (subEl) subEl.textContent = data.subtitle;

  const ticketVal = document.getElementById('card-ticket-val');
  if (ticketVal) ticketVal.textContent = data.ticket;

  const ticketSub = document.getElementById('card-ticket-sub');
  if (ticketSub) ticketSub.textContent = data.ticketSub;

  const hoursVal = document.getElementById('card-hours-val');
  if (hoursVal) hoursVal.textContent = data.hours;

  const hoursSub = document.getElementById('card-hours-sub');
  if (hoursSub) hoursSub.textContent = data.hoursSub;

  const ratingVal = document.getElementById('card-rating-val');
  if (ratingVal) ratingVal.textContent = data.rating;

  const ratingSub = document.getElementById('card-rating-sub');
  if (ratingSub) ratingSub.textContent = data.ratingSub;

  const addressText = document.getElementById('card-address-text');
  if (addressText) addressText.textContent = data.address;

  const tipsList = document.getElementById('card-tips-list');
  if (tipsList && Array.isArray(data.tips)) {
    tipsList.innerHTML = data.tips.map(t => '<span>' + t + '</span>').join('');
  }

  const speechBubble = document.getElementById('discover-mascot-bubble');
  if (speechBubble && data.speech) {
    speechBubble.textContent = data.speech;
  }

  if (data.audioFreq && typeof playGamelanChime === 'function') {
    playGamelanChime(data.audioFreq);
  }

  stage.classList.add('has-card-active');
}

function closeDiscoverCard() {
  const stage = document.getElementById('discover-stage');
  if (stage) {
    stage.classList.remove('has-card-active');
  }
  document.querySelectorAll('.discover-pin').forEach(pin => pin.classList.remove('active'));
  currentDiscoverKey = null;

  const speechBubble = document.getElementById('discover-mascot-bubble');
  if (speechBubble) {
    speechBubble.textContent = 'Lagi mau explore apa nih di Bali? Sentuh destinasi di pulau untuk melihat detailnya! 🌺';
  }
}

function filterDiscoverCategory(catSlug, btnEl) {
  document.querySelectorAll('.discover-cat-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const pins = document.querySelectorAll('.discover-pin');
  pins.forEach(pin => {
    const pinCat = pin.getAttribute('data-cat');
    if (catSlug === 'all' || pinCat === catSlug) {
      pin.classList.remove('dimmed');
    } else {
      pin.classList.add('dimmed');
    }
  });

  if (catSlug !== 'all') {
    const matchingKey = Object.keys(DISCOVER_DESTINATIONS).find(k => DISCOVER_DESTINATIONS[k].categorySlug === catSlug);
    if (matchingKey) {
      selectDiscoverDestination(matchingKey);
    }
  }
}

function syncCovetedFoliageAlignment() {
  const foliageWrap = document.querySelector('.foliage-top-right');
  const foliageImg = document.querySelector('.foliage-img-right');
  const section = document.querySelector('.coveted-destinations-section');
  const btnEl = document.querySelector('.coveted-cta-btn');
  const headerBox = document.querySelector('.coveted-header-box');
  if (!foliageWrap || !foliageImg || !section) return;

  const sectionRect = section.getBoundingClientRect();

  let buttonBottom = 310;
  if (btnEl) {
    const btnRect = btnEl.getBoundingClientRect();
    buttonBottom = Math.round(btnRect.bottom - sectionRect.top);
  } else if (headerBox) {
    const headerRect = headerBox.getBoundingClientRect();
    buttonBottom = Math.round(headerRect.bottom - sectionRect.top);
  }

  const foliageHeight = Math.min(240, Math.max(165, Math.round(window.innerWidth * 0.17)));
  foliageImg.style.height = foliageHeight + 'px';
  foliageImg.style.width = 'auto';
  foliageImg.style.display = 'block';
  foliageImg.style.objectFit = 'contain';
  foliageImg.style.objectPosition = 'right bottom';

  const targetTop = buttonBottom - foliageHeight;

  foliageWrap.style.top = targetTop + 'px';
  foliageWrap.style.height = foliageHeight + 'px';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', syncCovetedFoliageAlignment);
} else {
  syncCovetedFoliageAlignment();
}
window.addEventListener('load', syncCovetedFoliageAlignment);
window.addEventListener('resize', syncCovetedFoliageAlignment);

const folImgEl = document.querySelector('.foliage-img-right');
if (folImgEl) {
  if (folImgEl.complete) {
    syncCovetedFoliageAlignment();
  } else {
    folImgEl.addEventListener('load', syncCovetedFoliageAlignment);
  }
}

if (document.fonts) {
  document.fonts.ready.then(syncCovetedFoliageAlignment);
}
if (typeof ResizeObserver !== 'undefined') {
  const attachObserver = () => {
    const header = document.querySelector('.coveted-header-box');
    if (header) {
      new ResizeObserver(syncCovetedFoliageAlignment).observe(header);
    }
    const btn = document.querySelector('.coveted-cta-btn');
    if (btn) {
      new ResizeObserver(syncCovetedFoliageAlignment).observe(btn);
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachObserver);
  } else {
    attachObserver();
  }
}

function initDynamicCapsuleDate() {
  const dateEl = document.getElementById('hero-capsule-date');
  if (!dateEl) return;
  const now = new Date();
  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ];
  const dayName = dayNames[now.getDay()];
  const dateNum = now.getDate();
  const monthName = monthNames[now.getMonth()];
  const year = now.getFullYear();
  dateEl.innerHTML = `${dayName}, ${dateNum} ${monthName} ${year} <span class="cap-chevron">▾</span>`;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDynamicCapsuleDate);
} else {
  initDynamicCapsuleDate();
}

const SAKALA_DESTINATIONS = {
  'nusa-penida': {
    name: 'Nusa Penida',
    tag: 'Pantai Tebing & Laut Biru Kristal',
    image: 'assets/editorial/home/nusa-penida.webp',
    rating: '★★★★★ 5.0/5 (1,840+ Ulasan)',
    location: 'Nusa Penida, Klungkung, Bali',
    price: '$ 150',
    unit: '/ Orang · Paket Eksplorasi',
    desc: 'Nikmati panorama tebing Kelingking Beach yang ikonik berbentuk T-Rex, deburan ombak kristal Diamond Beach, serta kejernihan air alami Broken Beach dan Angel’s Billabong.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kelingking+Beach+Nusa+Penida+Bali'
  },
  'kintamani': {
    name: 'Kintamani',
    tag: 'Kaldera Gunung Batur & Danau Batur',
    image: 'assets/editorial/home/kintamani.webp',
    rating: '★★★★☆ 4.8/5 (2,150+ Ulasan)',
    location: 'Kintamani, Bangli, Bali',
    price: '$ 100',
    unit: '/ Orang · Paket Sunrise & Kopi',
    desc: 'Saksikan panorama fajar spektakuler di atas awan berlatar kaldera Gunung Batur dan Danau Batur berkabut, serta rasakan sejuknya pegunungan dengan kehangatan kopi arabika lokal.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mount+Batur+Kintamani+Bali'
  },
  'uluwatu': {
    name: 'Uluwatu',
    tag: 'Pura Luhur & Sunset Tebing Samudra',
    image: 'assets/editorial/home/uluwatu.webp?v=2.0',
    rating: '★★★★★ 4.9/5 (3,420+ Ulasan)',
    location: 'Pecatu, Kuta Selatan, Badung, Bali',
    price: '$ 120',
    unit: '/ Orang · Sunset & Tari Kecak',
    desc: 'Bertengger megah di tebing karang 70 meter di atas Samudra Hindia, Pura Luhur Uluwatu menyuguhkan pemandangan matahari terbenam paling spektakuler dan pertunjukan Tari Kecak magis saat senja.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Uluwatu+Temple+Bali'
  }
};

function openDestinationModal(destKey) {
  const data = SAKALA_DESTINATIONS[destKey];
  if (!data) return;

  const nameEl = document.getElementById('dest-modal-name');
  const tagEl = document.getElementById('dest-modal-tag');
  const imgEl = document.getElementById('dest-modal-img');
  const ratingEl = document.getElementById('dest-modal-rating');
  const locEl = document.getElementById('dest-modal-location');
  const priceEl = document.getElementById('dest-modal-price');
  const unitEl = document.getElementById('dest-modal-unit');
  const descEl = document.getElementById('dest-modal-desc');
  const btnEl = document.getElementById('dest-modal-gmaps-btn');

  if (nameEl) nameEl.textContent = data.name;
  if (tagEl) tagEl.textContent = data.tag;
  if (imgEl) {
    imgEl.src = data.image;
    imgEl.alt = data.name;
  }
  if (ratingEl) ratingEl.textContent = data.rating;
  if (locEl) locEl.textContent = '📍 ' + data.location;
  if (priceEl) priceEl.textContent = data.price;
  if (unitEl) unitEl.textContent = data.unit;
  if (descEl) descEl.textContent = data.desc;
  if (btnEl) btnEl.href = data.mapsUrl;

  const backdrop = document.getElementById('dest-modal-backdrop');
  if (backdrop) {
    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      const card = document.querySelector('.dest-ticket-card');
      const perf = document.querySelector('.ticket-perforation');
      if (card && perf) {
        const y = perf.offsetTop;
        card.style.setProperty('--notch-y', y + 'px');
      }
    });
  }
}

function closeDestinationModal(e) {
  if (e && e.target && e.target !== document.getElementById('dest-modal-backdrop') && !e.target.classList.contains('dest-modal-close')) {
    return;
  }
  const backdrop = document.getElementById('dest-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDestinationModal();
  }
});

