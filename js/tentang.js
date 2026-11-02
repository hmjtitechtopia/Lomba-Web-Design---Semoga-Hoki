

document.addEventListener('DOMContentLoaded', () => {

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px 40px 0px'
  };

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      revealObserver.observe(el);
    });
  } else {

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
  }

  initPillarsSlider();
});

function scrollToAboutSection(id, event) {
  const evt = event || window.event;
  if (evt && evt.preventDefault) {
    evt.preventDefault();
  }

  let target = document.getElementById(id);
  if (!target && (id === 'empat-pilar' || id === 'pillars-slider')) {
    target = document.getElementById('eksplorasi-sakala') || document.getElementById('empat-pilar');
  } else if (!target && id === 'eksplorasi-sakala') {
    target = document.getElementById('empat-pilar') || document.getElementById('pillars-slider');
  }

  if (target) {

    const navbar = document.querySelector('.nav-holder') || document.querySelector('.pill-nav');
    let navHeight = 75;
    if (navbar) {
      const rect = navbar.getBoundingClientRect();
      navHeight = rect.height > 0 ? rect.height : 75;
      const computedTop = parseInt(window.getComputedStyle(navbar).top, 10) || 18;
      navHeight += computedTop;
    }

    const safeOffset = navHeight + 28;
    const targetY = window.pageYOffset + target.getBoundingClientRect().top - safeOffset;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth'
    });

    if (window.history && window.history.pushState) {
      window.history.pushState(null, null, '#' + id);
    }
  }
  return false;
}

function handleQrDemoNotice() {
  alert('Silakan pindai kode QR ini menggunakan kamera ponsel Anda untuk langsung membuka web resmi SAKALA di perangkat mobile!');
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('newsletter-email');
  const feedback = document.getElementById('newsletter-feedback');
  if (input && feedback) {
    const email = input.value.trim();
    if (email) {
      feedback.style.display = 'block';
      feedback.style.color = '#0F4D3A';
      feedback.style.backgroundColor = '#FFFFFF';
      feedback.style.border = '1px solid #BFE0CD';
      feedback.style.borderRadius = '12px';
      feedback.style.padding = '12px 16px';
      feedback.style.marginTop = '14px';
      feedback.style.fontSize = '13px';
      feedback.style.lineHeight = '1.5';
      feedback.innerHTML = `🎉 <strong>Berhasil Mendaftar!</strong><br>Terima kasih telah bergabung. Kami telah mengirimkan tautan konfirmasi beserta <strong>E-Guide SAKALA: Tata Krama Pura & Rute Budaya (PDF)</strong> ke <u>${email}</u>. Silakan periksa kotak masuk Anda!`;
      input.value = '';
    }
  }
}

function openContactModal() {
  const modal = document.getElementById('sakalaContactModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeContactModal(event) {
  if (event && event.target && !event.target.classList.contains('sakala-contact-modal-overlay') && !event.target.classList.contains('contact-modal-close')) {
    return;
  }
  const modal = document.getElementById('sakalaContactModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contact-name')?.value.trim();
  const topic = document.getElementById('contact-topic')?.value || 'Masukan Budaya';
  const feedback = document.getElementById('contactModalSuccess');
  const form = document.querySelector('.contact-modal-form');
  if (feedback && form) {
    form.style.display = 'none';
    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>Matur Suksma, ${name || 'Sahabat SAKALA'}!</strong><br>Pesan Anda dengan topik <em>"${topic}"</em> telah berhasil diterima tim kurasi SAKALA. Kami sangat menghargai kontribusi Anda dalam menjaga dan melestarikan kearifan lokal Bali. Kami akan membalas via email secepatnya.`;
  }
}

const kinaraModesData = {
  sapa: {
    counter: '1 / 5',
    src: 'assets/eksplorasi/mascot/mascot_hello.webp',
    badge: 'FILOSOFI MASKOT',
    title: 'Salam Hangat dari Sang Curik Bali',
    quote: '"Om Swastyastu! Saya Kinara, Jalak Bali yang siap memandu perjalanan Anda menyelami kedalaman budaya dan kearifan pulau ini."',
    desc: 'Terinspirasi dari Jalak Bali (Leucopsar rothschildi), fauna endemik langka yang melambangkan kemurnian budi pekerti, kejujuran, dan keanggunan. Kinara hadir bukan sekadar maskot visual, melainkan narator kultural yang menjembatani rasa ingin tahu wisatawan dengan nilai sakral krama Bali.',
    points: [
      'Fauna endemik langka yang dilindungi di kawasan Taman Nasional Bali Barat.',
      'Simbol ketulusan hati masyarakat Bali dalam menyambut dan memandu para tamu.',
      'Pemandu penjelajahan yang mengedepankan etika, rasa hormat, dan kesantunan tradisi.'
    ],
    actionText: 'Mulai Jelajahi Halaman SAKALA',
    actionLink: '#pillars-slider'
  },
  etika: {
    counter: '2 / 5',
    src: 'assets/images/mascots/mascot_happy.webp',
    badge: 'TATA KRAMA PURA',
    title: 'Memahami Kesucian Ruang Sakral',
    quote: '"Pura adalah tempat suci pemujaan Sang Hyang Widhi. Sikap santun dan busana rapi adalah wujud penghormatan tertinggi kita."',
    desc: 'Kinara membimbing wisatawan memahami etika berbusana adat (kamen dan selendang senteng), larangan melintas di depan orang yang sedang sembahyang, serta menjaga ketenangan spiritual di area jeroan pura.',
    points: [
      'Mengenakan kain kamen melingkar rapi dan selendang pengikat di pinggang.',
      'Menghormati batas mandala pura dan tidak menaiki struktur bangunan pelinggih.',
      'Menghargai kekhidmatan upacara dan menghindari penggunaan lampu kilat kamera.'
    ],
    actionText: 'Baca Panduan Budaya Bali',
    actionLink: 'kehidupan-lokal.html'
  },
  alam: {
    counter: '3 / 5',
    src: 'assets/editorial/maskot/mascot-flying.webp',
    badge: 'KELESTARIAN LINGKUNGAN',
    title: 'Menjaga Kemurnian Palemahan Bali',
    quote: '"Bagi masyarakat Bali, alam adalah ibu pertiwi yang menghidupi. Kita berkewajiban merawatnya tanpa meninggalkan jejak sampah."',
    desc: 'Mengajak setiap penjelajah untuk menerapkan prinsip ekowisata: menghargai sistem irigasi subak, menjaga kebersihan sungai dan mata air pegunungan, serta mendukung gerakan bebas sampah plastik di setiap destinasi alam.',
    points: [
      'Mendukung pertanian organik dan kelestarian sistem terasering Subak warisan UNESCO.',
      'Membawa wadah minum sendiri dan tidak membuang sampah di jalur pendakian.',
      'Memilih akomodasi dan pemandu lokal yang berkomitmen pada konservasi alam.'
    ],
    actionText: 'Eksplorasi Bentang Alam Bali',
    actionLink: 'kehidupan-lokal.html'
  },
  budaya: {
    counter: '4 / 5',
    src: 'assets/editorial/maskot/mascot-search.webp',
    badge: 'SENI & KEARIFAN',
    title: 'Menyelami Makna Simbol & Warisan Seni',
    quote: '"Setiap warna bunga pada canang sari dan setiap nada tabuh gamelan memiliki makna filosofis yang mendalam."',
    desc: 'Membuka wawasan penjelajah tentang makna di balik arsitektur Candi Bentar, filosofi Tri Mandala, kehalusan seni ukir kayu, hingga ragam tarian sakral yang menjadi warisan tak ternilai leluhur Bali.',
    points: [
      'Mengenal ragam tarian sakral seperti Barong, Sanghyang, dan Legong keraton.',
      'Memahami makna lima warna bunga canang yang melambangkan arah mata angin.',
      'Mendatangi sanggar kesenian tradisional untuk mendukung seniman lokal.'
    ],
    actionText: 'Telusuri Seni & Warisan',
    actionLink: 'kehidupan-lokal.html'
  },
  kuliner: {
    counter: '5 / 5',
    src: 'assets/eksplorasi/mascot/mascot_eat.webp',
    badge: 'KULINER TRADISIONAL',
    title: 'Menikmati Cita Rasa Autentik Rempah',
    quote: '"Kekayaan rasa kuliner Bali berakar dari base genep, paduan rempah tradisional yang diracik dengan harmoni dan cinta."',
    desc: 'Kinara mengajak Anda mencicipi kelezatan kuliner lokal langsung dari warung legendaris dan pasar tradisional: dari Ayam Betutu bumbu rempah daun pisang, Sate Lilit gurih beraroma serai, hingga Lawar kelapa segar.',
    points: [
      'Menghargai tradisi memasak lambat dengan tungku kayu dan rempah alami.',
      'Mencicipi aneka sambal tradisional seperti sambal matah dan sambal embe.',
      'Mendukung pedagang kuliner tradisional dan warung UMKM keluarga di desa.'
    ],
    actionText: 'Jelajahi Ragam Kuliner Bali',
    actionLink: 'kehidupan-lokal.html'
  }
};

const kinaraOrder = ['sapa', 'etika', 'alam', 'budaya', 'kuliner'];
let currentKinaraIndex = 0;
let isKinaraSliding = false;

function setKinaraMode(modeKey) {
  const data = kinaraModesData[modeKey];
  if (!data) return;

  currentKinaraIndex = kinaraOrder.indexOf(modeKey);

  document.querySelectorAll('.kinara-nav-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-mode') === modeKey;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  const slideContent = document.getElementById('kinara-slide-content') || document.getElementById('kinara-panel');
  const badgeEl = document.getElementById('kinara-badge');
  const counterEl = document.getElementById('kinara-counter');
  const titleEl = document.getElementById('kinara-title');
  const descEl = document.getElementById('kinara-desc');
  const pointsListEl = document.getElementById('kinara-points');
  const actionBtnEl = document.getElementById('kinara-action-btn');
  const actionTextEl = document.getElementById('kinara-action-text');

  const mascotImg = document.getElementById('kinara-active-img');
  const quoteEl = document.getElementById('kinara-quote');
  const speechEl = document.getElementById('kinara-speech');

  if (slideContent) {

    slideContent.classList.remove('slide-in-right');
    slideContent.classList.add('slide-out-left');

    if (speechEl) {
      speechEl.classList.remove('speech-in');
      speechEl.classList.add('speech-out');
    }

    setTimeout(() => {
      if (badgeEl) badgeEl.textContent = data.badge;
      if (counterEl) counterEl.textContent = data.counter;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (pointsListEl) {
        pointsListEl.innerHTML = data.points.map(pt => `<li>${pt}</li>`).join('');
      }
      if (actionBtnEl && actionTextEl) {
        actionTextEl.textContent = data.actionText;
        actionBtnEl.setAttribute('href', data.actionLink);
      }

      if (mascotImg) {
        mascotImg.src = data.src;
        mascotImg.classList.remove('animate-pop');
        void mascotImg.offsetWidth;
        mascotImg.classList.add('animate-pop');
      }

      if (quoteEl) {
        quoteEl.textContent = data.quote;
      }

      slideContent.classList.remove('slide-out-left');
      slideContent.classList.add('slide-in-right');

      if (speechEl) {
        speechEl.classList.remove('speech-out');
        speechEl.classList.add('speech-in');
      }

      setTimeout(() => {
        slideContent.classList.remove('slide-in-right');
        if (speechEl) speechEl.classList.remove('speech-in');
        isKinaraSliding = false;
      }, 350);

    }, 200);
  } else {

    if (badgeEl) badgeEl.textContent = data.badge;
    if (counterEl) counterEl.textContent = data.counter;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
  }
}

function nextKinaraMode() {
  if (isKinaraSliding) return;
  isKinaraSliding = true;
  currentKinaraIndex = (currentKinaraIndex + 1) % kinaraOrder.length;
  setKinaraMode(kinaraOrder[currentKinaraIndex]);
}

let isPillarsSliderInit = false;
let isPillarsSliding = false;
let pillarsSlideTimer = null;

function initPillarsSlider() {
  const slider = document.getElementById('pillars-slider');
  if (!slider || isPillarsSliderInit) return;
  isPillarsSliderInit = true;

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let moved = false;

  slider.addEventListener('mousedown', (e) => {

    if (e.button !== 0 || e.target.closest('button') || e.target.closest('a')) return;
    isDown = true;
    moved = false;
    startX = e.pageX - slider.offsetLeft;
    scrollStart = slider.scrollLeft;
    slider.classList.add('is-dragging');
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('is-dragging');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.35;
    if (Math.abs(walk) > 4) moved = true;
    slider.scrollLeft = scrollStart - walk;
  });

  slider.addEventListener('click', (e) => {
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
      moved = false;
    }
  }, true);
}

function initInfinitePillarsSlider() {
  initPillarsSlider();
}

function scrollPillars(direction) {
  const slider = document.getElementById('pillars-slider');
  if (!slider) return;

  if (!isPillarsSliderInit) {
    initPillarsSlider();
  }

  if (isPillarsSliding) return;
  isPillarsSliding = true;
  clearTimeout(pillarsSlideTimer);
  pillarsSlideTimer = setTimeout(() => {
    isPillarsSliding = false;
  }, 280);

  const firstCard = slider.querySelector('.pillar-interactive-card');
  const secondCard = firstCard ? firstCard.nextElementSibling : null;
  const cardStep = (firstCard && secondCard)
    ? (secondCard.offsetLeft - firstCard.offsetLeft)
    : (firstCard ? firstCard.offsetWidth + 16 : 300);

  const currentScroll = slider.scrollLeft;
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  let targetScroll;

  if (direction > 0 && currentScroll >= maxScroll - 15) {
    targetScroll = 0;
  }

  else if (direction < 0 && currentScroll <= 15) {
    targetScroll = maxScroll;
  }
  else {
    targetScroll = currentScroll + direction * cardStep;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
  }

  slider.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });
}

let sakalaAudioCtx = null;

function playCuteLikeSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!sakalaAudioCtx) {
      sakalaAudioCtx = new AudioContext();
    }
    if (sakalaAudioCtx.state === 'suspended') {
      sakalaAudioCtx.resume();
    }

    const now = sakalaAudioCtx.currentTime;

    const osc1 = sakalaAudioCtx.createOscillator();
    const gain1 = sakalaAudioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now);
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.07);
    osc1.frequency.exponentialRampToValueAtTime(1174.66, now + 0.15);

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.linearRampToValueAtTime(0.09, now + 0.02);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);

    osc1.connect(gain1);
    gain1.connect(sakalaAudioCtx.destination);

    osc1.start(now);
    osc1.stop(now + 0.28);

    const osc2 = sakalaAudioCtx.createOscillator();
    const gain2 = sakalaAudioCtx.createGain();

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(1318.51, now + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(1760, now + 0.16);

    gain2.gain.setValueAtTime(0.001, now + 0.05);
    gain2.gain.linearRampToValueAtTime(0.05, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

    osc2.connect(gain2);
    gain2.connect(sakalaAudioCtx.destination);

    osc2.start(now + 0.05);
    osc2.stop(now + 0.34);
  } catch (err) {

  }
}

function createHeartConfetti(btn) {
  if (!btn) return;

  const rect = btn.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  let layer = document.getElementById('sakala-confetti-layer');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'sakala-confetti-layer';
    layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99999;overflow:hidden;';
    document.body.appendChild(layer);
  }

  const symbols = ['❤️', '💖', '✨', '🌸', '⭐', '🧡', '💕'];
  const colors = ['#FF4D4D', '#FF6636', '#FFD166', '#1F8A63', '#4CC9F0', '#9ACD5A', '#FF85A1'];
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    const isEmoji = i % 2 === 0;

    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.4;
    const distance = 40 + Math.random() * 55;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance - (16 + Math.random() * 26);
    const rot = (Math.random() - 0.5) * 360;
    const scale = 0.6 + Math.random() * 0.6;
    const duration = 0.75 + Math.random() * 0.4;

    if (isEmoji) {
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.cssText = `
        position: fixed;
        left: ${originX}px;
        top: ${originY}px;
        font-size: ${12 + Math.random() * 7}px;
        line-height: 1;
        pointer-events: none;
        user-select: none;
        will-change: transform, opacity;
        transform: translate(-50%, -50%) scale(0.2);
        opacity: 1;
        transition: transform ${duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity ${duration}s ease-in;
      `;
    } else {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 6 + Math.random() * 6;
      p.style.cssText = `
        position: fixed;
        left: ${originX}px;
        top: ${originY}px;
        width: ${size}px;
        height: ${size * (Math.random() > 0.5 ? 1 : 1.5)}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
        pointer-events: none;
        user-select: none;
        will-change: transform, opacity;
        transform: translate(-50%, -50%) scale(0.2);
        opacity: 1;
        transition: transform ${duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity ${duration}s ease-in;
      `;
    }

    layer.appendChild(p);

    requestAnimationFrame(() => {
      p.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) rotate(${rot}deg) scale(${scale})`;
      p.style.opacity = '0';
    });

    setTimeout(() => {
      if (p.parentNode) p.parentNode.removeChild(p);
    }, duration * 1000 + 60);
  }
}

function togglePillarLike(btn) {
  if (!btn) return;
  const isNowLiked = !btn.classList.contains('is-liked');
  btn.classList.toggle('is-liked', isNowLiked);

  const svg = btn.querySelector('svg');
  if (svg) {
    if (isNowLiked) {
      svg.setAttribute('fill', '#FF4D4D');
      svg.setAttribute('stroke', '#FF4D4D');
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', '#FF4D4D');
    }
  }

  btn.classList.remove('pop-anim');
  void btn.offsetWidth;
  btn.classList.add('pop-anim');

  if (isNowLiked) {

    createHeartConfetti(btn);

    playCuteLikeSound();
  }
}
