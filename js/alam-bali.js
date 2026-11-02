(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const reducedMotion = matchMedia('(prefers-reducedMotion-motion: reduce)');
  let saved = [];
  try {
    saved = JSON.parse(localStorage.getItem('sakala-nature-saved') || '[]');
    if (!Array.isArray(saved)) saved = [];

    saved = saved
      .filter((value) => typeof value === 'string')
      .map((value) => value.split('/').pop());
  } catch {}
  let toastTimer;
  function showToast(message) {
    $('#toast').textContent = message;
    $('#toast').classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 2600);
  }
  const saves = [...document.querySelectorAll('.save')];
  saves.forEach((button) => {
    button.dataset.key = button
      .closest('article')
      .querySelector('img')
      .getAttribute('src')
      .split('/')
      .pop();
    button.dataset.label = button.getAttribute('aria-label');
  });
  function syncFavorites() {
    saves.forEach((b) => {
      const active = saved.includes(b.dataset.key);
      b.setAttribute('aria-pressed', active);
      b.setAttribute(
        'aria-label',
        active ? b.dataset.label.replace('Simpan', 'Hapus favorit') : b.dataset.label,
      );
    });
  }
  saves.forEach((b) =>
    b.addEventListener('click', () => {
      const exists = saved.includes(b.dataset.key);
      saved = exists ? saved.filter((s) => s !== b.dataset.key) : [...saved, b.dataset.key];
      let persisted = true;
      try {
        localStorage.setItem('sakala-nature-saved', JSON.stringify(saved));
      } catch {
        persisted = false;
      }
      syncFavorites();
      showToast(
        exists
          ? 'Dihapus dari favorit.'
          : persisted
            ? 'Destinasi disimpan ke favorit.'
            : 'Disimpan untuk sesi ini.',
      );
    }),
  );
  syncFavorites();
  const track = $('.hero-cards'),
    cards = [...track.children];
  let activeSlide = 0;
  function updateSlideIndicator() {
    $('.slide-count').innerHTML = `${String(activeSlide + 1).padStart(2, '0')}<small>/ 03</small>`;
    $('.pagination-line span').style.width = `${((activeSlide + 1) / 3) * 100}%`;
  }
  function changeSlide(step) {
    activeSlide = (activeSlide + step + cards.length) % cards.length;
    if (matchMedia('(max-width:700px)').matches) {
      track.scrollTo({
        left: cards[activeSlide].offsetLeft - track.offsetLeft - 12,
        behavior: reducedMotion.matches ? 'instant' : 'smooth',
      });
    } else {
      for (let i = 0; i < cards.length; i++) track.append(cards[(activeSlide + i) % cards.length]);
      if (!reducedMotion.matches)
        track.animate(
          [
            { opacity: 0.45, translate: '12px 0' },
            { opacity: 1, translate: '0 0' },
          ],
          { duration: 280, easing: 'ease-out' },
        );
    }
    updateSlideIndicator();
  }
  const controls = $('.hero-pagination').querySelectorAll('button');
  controls[0].addEventListener('click', () => changeSlide(-1));
  controls[1].addEventListener('click', () => changeSlide(1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      changeSlide(e.key === 'ArrowRight' ? 1 : -1);
    }
  });
  let scrollTimer;
  track.addEventListener(
    'scroll',
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (!matchMedia('(max-width:700px)').matches) return;
        const center = track.getBoundingClientRect().left + track.clientWidth / 2;
        activeSlide = cards.reduce(
          (best, c, i) =>
            Math.abs(c.getBoundingClientRect().left + c.clientWidth / 2 - center) <
            Math.abs(
              cards[best].getBoundingClientRect().left + cards[best].clientWidth / 2 - center,
            )
              ? i
              : best,
          0,
        );
        updateSlideIndicator();
      }, 100);
    },
    { passive: true },
  );
  const filters = [...document.querySelectorAll('.filters button')],
    postcards = [...document.querySelectorAll('.photo-postcard')];
  const categories = ['Pantai', 'Sawah & hutan', 'Sawah & hutan', 'Pegunungan'];
  function filter(value) {
    filters.forEach((b) => {
      const active = b.textContent === value;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active);
    });
    $('.postcard-section').classList.toggle('is-filtered', value !== 'Semua');
    postcards.forEach((c, i) => {
      c.hidden = value !== 'Semua' && categories[i] !== value;
      c.classList.toggle('filtered', value !== 'Semua');
    });
  }
  filters.forEach((b) =>
    b.addEventListener('click', () => {
      filter(b.textContent);
      showToast(`${postcards.filter((c) => !c.hidden).length} inspirasi alam ditampilkan.`);
    }),
  );
  filter('Semua');
  document
    .querySelectorAll('[data-filter-link]')
    .forEach((a) => a.addEventListener('click', () => filter(a.dataset.filterLink)));
})();
