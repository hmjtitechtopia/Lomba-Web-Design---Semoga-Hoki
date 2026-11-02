(() => {
  'use strict';
  const navigation = document.querySelector('.site-navigation');
  const capsule = navigation.querySelector('.pill-nav');
  const menuButton = navigation.querySelector('.menu-toggle');
  const links = navigation.querySelector('.nav-links');
  let previousScroll = window.scrollY;
  let scheduled = false;

  function setMenuOpen(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    links.classList.toggle('is-open', open);
    capsule.classList.remove('nav-hidden');
  }
  menuButton.addEventListener('click', () =>
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true'),
  );
  links.addEventListener('click', () => setMenuOpen(false));
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  navigation.addEventListener('focusin', () => capsule.classList.remove('nav-hidden'));
  window.addEventListener('resize', () => {
    if (innerWidth > 1440) setMenuOpen(false);
  });
  window.addEventListener(
    'scroll',
    () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        const position = Math.max(0, window.scrollY);
        if (Math.abs(position - previousScroll) > 8 || position < 80) {
          const focused = navigation.contains(document.activeElement);
          const expanded = menuButton.getAttribute('aria-expanded') === 'true';
          capsule.classList.toggle(
            'nav-hidden',
            position > 180 && position > previousScroll && !focused && !expanded,
          );
          previousScroll = position;
        }
        scheduled = false;
      });
    },
    { passive: true },
  );
})();
