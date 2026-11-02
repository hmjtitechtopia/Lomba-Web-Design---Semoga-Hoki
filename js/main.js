

document.addEventListener('DOMContentLoaded', () => {

  if (typeof I !== 'undefined') {
    document.querySelectorAll('[data-i]').forEach(el => {
      const key = el.dataset.i;
      if (I[key]) {
        el.src = I[key];
      }
    });
  }

  initMascot();

  initConfetti();

  initScrollAnimations();

  initClickMicroInteractions();
});

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
});

function initMascot() {
  const mascot = document.getElementById('mascot');
  if (!mascot) return;

  const mascotImg = mascot.querySelector('img');
  const bub = document.getElementById('mascot-bubble');
  let isDragging = false, startX, startY, origX, origY;

  mascot.addEventListener('pointerdown', e => {
    isDragging = true;
    mascot.setPointerCapture(e.pointerId);
    const r = mascot.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    origX = r.left;
    origY = r.top;
    mascot.style.right = 'auto';
    mascot.style.bottom = 'auto';
    mascot.style.left = origX + 'px';
    mascot.style.top = origY + 'px';
    mascot.classList.add('drag');
    if (typeof I !== 'undefined' && I.adv) mascotImg.src = I.adv;
  });

  mascot.addEventListener('pointermove', e => {
    if (!isDragging) return;
    const r = mascot.getBoundingClientRect();
    let x = origX + e.clientX - startX;
    let y = origY + e.clientY - startY;
    x = Math.max(0, Math.min(innerWidth - r.width, x));
    y = Math.max(0, Math.min(innerHeight - r.height, y));
    mascot.style.left = x + 'px';
    mascot.style.top = y + 'px';
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    mascot.classList.remove('drag');
    if (typeof I !== 'undefined' && I.happy) mascotImg.src = I.happy;
  };

  mascot.addEventListener('pointerup', endDrag);
  mascot.addEventListener('pointercancel', endDrag);

  setTimeout(() => {
    if (bub) {
      bub.classList.add('show');
      setTimeout(() => bub.classList.remove('show'), 5000);
    }
  }, 2200);
}

let confettiParticles = [];
let confettiCtx = null;
let confettiCanvas = null;

function initConfetti() {
  confettiCanvas = document.getElementById('confetti-canvas');
  if (!confettiCanvas) {
    confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'confetti-canvas';
    confettiCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:999999;';
    document.body.appendChild(confettiCanvas);
  }
  confettiCtx = confettiCanvas.getContext('2d');

  const resize = () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  function render() {
    if (confettiCtx) {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      for (let i = confettiParticles.length - 1; i >= 0; i--) {
        const p = confettiParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.vRot;
        p.life -= 1.4;

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
        confettiCtx.restore();

        if (p.life <= 0 || p.y > confettiCanvas.height) {
          confettiParticles.splice(i, 1);
        }
      }
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function triggerConfetti() {
  const colors = ['#FF6636', '#FFC727', '#5CD852', '#3264FE', '#8B5CF6', '#F472B6', '#D7A747'];
  for (let i = 0; i < 75; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 18,
      color: colors[Math.floor(Math.random() * colors.length)],
      radius: Math.random() * 6 + 4,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      life: 100
    });
  }
}

function initScrollAnimations() {

  if (!document.getElementById('scroll-progress')) {
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.prepend(bar);
  }

  let btnScrollTop = document.getElementById('btn-scroll-top');
  if (!btnScrollTop) {
    btnScrollTop = document.createElement('button');
    btnScrollTop.id = 'btn-scroll-top';
    btnScrollTop.className = 'btn-scroll-top';
    btnScrollTop.setAttribute('title', 'Scroll Naik ke Atas');
    btnScrollTop.setAttribute('aria-label', 'Scroll Naik ke Atas');
    btnScrollTop.innerHTML = `
      <div class="scroll-top-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </div>
      <span class="scroll-top-text">Naik</span>
    `;
    btnScrollTop.onclick = scrollToTopAnimated;
    document.body.appendChild(btnScrollTop);
  } else {
    btnScrollTop.onclick = scrollToTopAnimated;
  }

  const progressBar = document.getElementById('scroll-progress');
  const nav = document.querySelector('.nav-holder nav.pill-nav');

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const winScroll = window.pageYOffset || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if (height > 0 && progressBar) {
          const scrolled = (winScroll / height) * 100;
          progressBar.style.width = scrolled + '%';
        }

        if (btnScrollTop) {
          if (winScroll > 260) {
            btnScrollTop.classList.add('visible');
          } else {
            btnScrollTop.classList.remove('visible');
          }
        }

        if (winScroll > lastScrollY) {
          document.body.classList.add('scrolling-down');
          document.body.classList.remove('scrolling-up');
        } else if (winScroll < lastScrollY) {
          document.body.classList.add('scrolling-up');
          document.body.classList.remove('scrolling-down');
        }

        if (winScroll <= 30) {
          document.body.classList.remove('scrolling-down', 'scrolling-up');
        }

        if (nav) {
          if (winScroll > 50) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }

          if (winScroll > 150) {
            if (winScroll > lastScrollY) {

              nav.classList.add('nav-hidden');
              nav.classList.remove('nav-scrolled-up');
            } else if (winScroll < lastScrollY) {

              nav.classList.remove('nav-hidden');
              nav.classList.add('nav-scrolled-up');
            }
          } else {

            nav.classList.remove('nav-hidden');
            nav.classList.remove('nav-scrolled-up');
          }
        }

        lastScrollY = winScroll <= 0 ? 0 : winScroll;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  const autoRevealSelectors = [
    '.kl-section-header',
    '.kl-pillar-card',
    '.kl-cinema-stage',
    '.kl-artisan-card',
    '.kl-closing-card',
    '.cerita-featured-card',
    '.cerita-item-card',
    '.cerita-wisdom-box',
    '.story-row-section',
    '.about-hero-card',
    '.team-showcase-card',
    '.cta-banner-card'
  ];

  autoRevealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, index) => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll', 'fade-up');
        const staggerIndex = (index % 4) + 1;
        el.classList.add(`stagger-${staggerIndex}`);
      }
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const scrollObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
}

function initClickMicroInteractions() {

  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .btn-orange-pill, .btn-primary-story, .btn-read-featured, .kl-btn-dark-pill, .kl-card-btn, .kl-map-btn, .board-arrow-btn, .cerita-tab-btn, .pillar-capsule-btn, .nav-cta a');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'sakala-click-ripple';

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    target.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 700);
  });

  document.addEventListener('click', (e) => {
    const likeBtn = e.target.closest('.pillar-like-btn, .like-btn');
    if (likeBtn) {
      likeBtn.classList.add('is-liked');
      const svg = likeBtn.querySelector('svg');
      if (svg) {
        svg.style.animation = 'none';
        void svg.offsetWidth;
        svg.style.animation = 'heartPopBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
      }
    }
  });

  const mascot = document.getElementById('mascot');
  if (mascot) {
    mascot.addEventListener('click', () => {
      mascot.classList.remove('mascot-flutter');
      void mascot.offsetWidth;
      mascot.classList.add('mascot-flutter');

      const bub = document.getElementById('mascot-bubble');
      if (bub) {
        const quotes = [
          'Rahayu! Senang melihatmu menjelajahi kearifan Bali! 🌺✨',
          'Tri Hita Karana mengajarkan kita hidup selaras dengan alam! 🌿',
          'Siap melanjutkan petualangan budaya berikutnya? Ayo jelajahi! 🏝️',
          'Setiap pura dan desa di Bali menyimpan cerita ketulusan jiwa! 🕊️'
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        bub.textContent = randomQuote;
        bub.classList.add('show');
        setTimeout(() => bub.classList.remove('show'), 4500);
      }
    });
  }
}

function scrollToTopAnimated(e) {
  if (e) e.preventDefault();

  const btn = document.getElementById('btn-scroll-top');
  if (btn) {
    btn.classList.add('launching');
    setTimeout(() => {
      btn.classList.remove('launching');
    }, 750);
  }

  if (typeof triggerConfetti === 'function') {
    triggerConfetti();
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  const bubble = document.getElementById('mascot-bubble');
  if (bubble) {
    bubble.textContent = 'Kembali ke puncak kearifan Bali! 🌴✨';
    bubble.classList.add('show');
    setTimeout(() => {
      bubble.classList.remove('show');
    }, 3800);
  }
}

function toggleNavDropdown(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const trigger = e ? e.currentTarget : null;
  const dropdownLi = trigger ? trigger.closest('.nav-dropdown') : document.querySelector('.nav-dropdown');
  if (dropdownLi) {
    const wasOpen = dropdownLi.classList.contains('is-open');

    document.querySelectorAll('.nav-dropdown.is-open').forEach(el => {
      el.classList.remove('is-open');
      const m = el.querySelector('.nav-dropdown-menu');
      if (m) {
        m.style.position = '';
        m.style.top = '';
        m.style.left = '';
        m.style.transform = '';
      }
    });

    if (!wasOpen) {
      dropdownLi.classList.add('is-open');
      const menu = dropdownLi.querySelector('.nav-dropdown-menu');
      if (menu && window.innerWidth <= 900 && trigger) {
        const rect = trigger.getBoundingClientRect();
        menu.style.position = 'fixed';
        menu.style.top = (rect.bottom + 10) + 'px';
        const calcLeft = Math.max(16, Math.min(window.innerWidth - 200, rect.left + (rect.width / 2) - 100));
        menu.style.left = calcLeft + 'px';
        menu.style.transform = 'none';
      }
    }
  }
}

document.addEventListener('click', (e) => {

  const disabledNav = e.target.closest('.nav-disabled');
  if (disabledNav) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }

  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown.is-open').forEach(el => {
      el.classList.remove('is-open');
      const m = el.querySelector('.nav-dropdown-menu');
      if (m) {
        m.style.position = '';
        m.style.top = '';
        m.style.left = '';
        m.style.transform = '';
      }
    });
  }
});
