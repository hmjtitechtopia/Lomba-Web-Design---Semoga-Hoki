
'use strict';

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
const icon = (name) =>
  `<img class="icon" src="assets/images/icons/icon-${name}.png" alt="" aria-hidden="true">`;
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

const mapIds = ['tegallalang', 'melasti', 'ulun-danu', 'nusa-penida'];
let selectedId = 'tegallalang';
let category = 'Semua';
let currentDays = 3;
let visibleIds = [...mapIds];
let toastTimer;
let lastDialogTrigger;
let memory = {};
function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return memory[key] ?? fallback;
  }
}
function writeStore(key, value) {
  memory[key] = value;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
let favorites = new Set(readStore('sakala-favorites', []).filter((id) => destinations[id]));

function resizeLayout() {
  const mapWindow = $('.map-window');

  const scale = Math.min(1, mapWindow.clientWidth / 1140);
  mapWindow.style.setProperty('--map-scale', scale);
  mapWindow.style.setProperty('--pin-scale', Math.max(1, 0.38 / scale));
}
resizeLayout();
new ResizeObserver(resizeLayout).observe($('.map-window'));
addEventListener(
  'resize',
  () => {
    resizeLayout();
  },
  { passive: true },
);

function animate(element, keyframes, options = {}) {
  if (!reducedMotion.matches && element?.animate)
    element.animate(keyframes, { duration: 240, easing: 'cubic-bezier(.2,.75,.25,1)', ...options });
}
function toast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 3300);
}
function scrollToSection(id) {
  $('#' + id)?.scrollIntoView({
    behavior: reducedMotion.matches ? 'instant' : 'smooth',
    block: 'start',
  });
}
function updateFavorites() {
  $$('.save').forEach((button) => {
    const id = button.dataset.save;
    const saved = favorites.has(id);
    button.setAttribute('aria-pressed', String(saved));
    button.setAttribute(
      'aria-label',
      `${saved ? 'Hapus dari favorit:' : 'Simpan'} ${destinations[id]?.name || ''}`,
    );
  });
}
function toggleFavorite(id) {
  const saved = favorites.has(id);
  saved ? favorites.delete(id) : favorites.add(id);
  const persisted = writeStore('sakala-favorites', [...favorites]);
  updateFavorites();
  toast(
    `${destinations[id].name} ${saved ? 'dihapus dari favorit' : 'ditambahkan ke favorit'}${persisted ? '' : ' untuk sesi ini'}.`,
  );
}

$$('.postcard').forEach((card) => {
  const id = card.dataset.destination;
  $('.save', card).dataset.save = id;
  const open = document.createElement('button');
  open.type = 'button';
  open.className = 'postcard-open';
  open.dataset.select = id;
  open.setAttribute('aria-label', `Pilih ${destinations[id].name} di peta`);
  open.append($('h3', card), $('p', card));
  card.append(open);
});
$$('.photo-marker').forEach((marker) =>
  marker.setAttribute('aria-pressed', String(marker.dataset.destination === selectedId)),
);

$$('.photo-marker').forEach((marker) => {
  marker.setAttribute('role', 'button');
  marker.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      marker.click();
    }
  });
});
$('.main-photo .save').dataset.save = selectedId;
$$('.place-row').forEach((row, i) => {
  const button = document.createElement('button');
  button.className = row.className;
  button.dataset.select = ['melasti', 'ulun-danu'][i];
  button.innerHTML = row.innerHTML;
  row.replaceWith(button);
});
function selectDestination(id, feedback = true) {
  if (!destinations[id]) return;
  selectedId = id;
  const d = destinations[id];
  const photo = $('.main-photo img');
  photo.src = `assets/images/photos/${d.image}`;
  photo.alt = `Pemandangan ${d.name}`;
  $('.photo-badge').textContent = d.badge;
  $('.side-body h3').textContent = d.name;
  $('.side-body .loc').innerHTML = `${icon('location')}${escapeHTML(d.region)}, Bali`;
  $('.side-body>p:not(.source)').textContent = d.description;
  $('.side-body .source').textContent = `Foto: ${d.photographer} / Pexels`;
  $('.main-photo .save').dataset.save = id;
  $$('.photo-marker').forEach((marker) => {
    const active = marker.dataset.destination === id;
    marker.classList.toggle('chosen', active);
    marker.setAttribute('aria-pressed', String(active));
    marker.classList.remove('just-selected');
    if (active && feedback) {
      void marker.offsetWidth;
      marker.classList.add('just-selected');
    }
  });
  $$('.postcard').forEach((card) => {
    const active = card.dataset.destination === id;
    card.classList.toggle('selected', active);
    $('.postcard-open', card).setAttribute('aria-pressed', String(active));
  });
  $('.speech').innerHTML = `${escapeHTML(d.name)}?<br>Yuk, kenali tempatnya!`;
  const others = mapIds.filter((key) => key !== id && visibleIds.includes(key));
  $$('.place-row').forEach((row, i) => {
    const key = others[i];
    row.hidden = !key;
    if (!key) return;
    const place = destinations[key];
    row.dataset.select = key;
    $('img', row).src = `assets/images/photos/${place.image}`;
    $('img', row).alt = place.name;
    $('h3', row).textContent = place.name;
    $('p', row).textContent = `${place.region} · ${place.category}`;
  });
  updateFavorites();
  const activeCard = $(`.postcard[data-destination="${id}"]`);
  const carousel = $('.postcards');
  if (feedback && activeCard && carousel.scrollWidth > carousel.clientWidth) {
    const offset = activeCard.offsetLeft - (carousel.clientWidth - activeCard.offsetWidth) / 2;
    carousel.scrollTo({ left: offset, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  if (feedback) {
    animate($('.main-photo'), [{ opacity: 0.6 }, { opacity: 1 }]);
    animate($('.side-body'), [
      { opacity: 0.4, translate: '0 5px' },
      { opacity: 1, translate: '0 0' },
    ]);
    $('.filter-status').textContent = `${d.name} dipilih. Lihat ringkasannya di panel destinasi.`;
  }
}
$$('.pill').forEach((button) => {
  button.dataset.category = button.textContent.trim();
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
  button.addEventListener('click', () => {
    category = button.dataset.category;
    applyFilters();
  });
});
function applyFilters() {
  const query = $('#destination-search').value.trim().toLocaleLowerCase('id');
  const region = $('#region-filter').value;
  visibleIds = mapIds.filter((id) => {
    const d = destinations[id];
    return (
      (category === 'Semua' || d.category === category) &&
      (!region || d.region === region) &&
      `${d.name} ${d.region} ${d.category}`.toLocaleLowerCase('id').includes(query)
    );
  });
  $$('[data-destination]').forEach((el) => {
    el.hidden = !visibleIds.includes(el.dataset.destination);
  });
  $$('.pill').forEach((button) => {
    const active = button.dataset.category === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $('.empty-results').hidden = visibleIds.length > 0;
  $('.sidebar').hidden = !visibleIds.length;
  $('.map-route').style.opacity = visibleIds.length === 4 ? '1' : '.18';
  $('.carousel-arrow').disabled = visibleIds.length < 2;
  if (visibleIds.length) {
    if (!visibleIds.includes(selectedId)) selectDestination(visibleIds[0], false);
    else selectDestination(selectedId, false);
  }
  const filtering = query || region || category !== 'Semua';
  $('.filter-status').textContent = filtering
    ? `${visibleIds.length} destinasi sesuai pencarian${category !== 'Semua' ? ' · ' + category : ''}${region ? ' · ' + region : ''}.`
    : '';
}
function resetFilters(focus = false) {
  category = 'Semua';
  $('#destination-search').value = '';
  $('#region-filter').value = '';
  applyFilters();
  if (focus) $('#destination-search').focus();
}
$('.search').addEventListener('submit', (event) => {
  event.preventDefault();
  applyFilters();
});
$('#destination-search').addEventListener('input', applyFilters);
$('#region-filter').addEventListener('change', applyFilters);
$('.reset').addEventListener('click', () => resetFilters(true));
$('.carousel-arrow').addEventListener('click', () => {
  const index = visibleIds.indexOf(selectedId);
  selectDestination(visibleIds[(index + 1) % visibleIds.length]);
});
$('.side-body>.btn').addEventListener('click', () => openDestination(selectedId));

const dialog = $('#content-dialog');
function openDialog(markup) {
  if (!dialog.open) lastDialogTrigger = document.activeElement;
  $('#dialog-content').innerHTML = markup;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  $('.dialog-close').focus({ preventScroll: true });
  document.body.style.overflow = 'hidden';
  animate(
    dialog,
    [
      { opacity: 0, translate: '0 12px', scale: '.98' },
      { opacity: 1, translate: '0 0', scale: '1' },
    ],
    { duration: 220 },
  );
}
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  if (lastDialogTrigger?.isConnected) lastDialogTrigger.focus({ preventScroll: true });
});
function openDestination(id) {
  const d = destinations[id];
  openDialog(
    `<img class="dialog-image" src="assets/images/photos/${d.image}" alt="${d.name}"><div class="dialog-copy"><p class="dialog-eyebrow">${d.region}, Bali · ${d.badge}</p><h2 id="dialog-title">${d.name}</h2><p>${d.description}</p><p>${d.detail}</p><ul class="dialog-list">${d.tips.map((t) => `<li>${t}</li>`).join('')}</ul><p class="dialog-eyebrow">Foto: ${d.photographer} / Pexels</p><div class="dialog-actions"><button class="btn" data-add-stop="${id}">Masukkan ke rencana ${icon('arrow')}</button><button class="secondary-btn" data-favorite="${id}">${favorites.has(id) ? 'Hapus dari favorit' : 'Simpan destinasi'}</button></div></div>`,
  );
}

$$('.r-duration button').forEach((button, i) => {
  button.dataset.days = i + 1;
  button.setAttribute('aria-pressed', String(i === 2));
  button.addEventListener('click', () => setDuration(i + 1));
});
$$('.r-day').forEach((day, i) => {
  day.dataset.dayDestination = dayDescriptions[i].id;
  day.tabIndex = 0;
  day.setAttribute('role', 'button');
  day.setAttribute('aria-label', `Lihat tujuan hari ${i + 1}: ${dayDescriptions[i].title}`);
  day.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      day.click();
    }
  });
});
function setDuration(days, feedback = true) {
  currentDays = days;
  $('.r-plan').dataset.days = days;
  const names = ['Satu hari', 'Dua hari', 'Tiga hari'];
  $('.r-plan-heading h2').innerHTML = `${names[days - 1]},<br>banyak cerita.`;
  $$('.r-duration button').forEach((button) => {
    const active = Number(button.dataset.days) === days;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $$('.r-day').forEach((day, i) => {
    day.hidden = i >= days;
    if (feedback && !day.hidden)
      animate(
        day,
        [
          { opacity: 0.3, translate: '0 10px' },
          { opacity: 1, translate: '0 0' },
        ],
        { delay: i * 45 },
      );
  });
  $('.r-plan-caption').innerHTML = `${icon('location')}Contoh perjalanan ${days} hari di Bali`;
  if (feedback) toast(`Rencana ${days} hari ditampilkan.`);
}
function openPlanner(extraStop) {
  const saved = readStore('sakala-plan', null);
  const stops =
    saved?.stops?.length === currentDays
      ? [...saved.stops]
      : dayDescriptions.slice(0, currentDays).map((d) => d.id);
  if (extraStop) stops[stops.length - 1] = extraStop;
  const localToday = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  const options = (chosen) =>
    Object.entries(destinations)
      .map(
        ([id, d]) => `<option value="${id}" ${id === chosen ? 'selected' : ''}>${d.name}</option>`,
      )
      .join('');
  openDialog(
    `<div class="dialog-copy"><p class="dialog-eyebrow">Rencana perjalanan Bali</p><h2 id="dialog-title">Atur ${currentDays} hari versimu.</h2><p>Pilih tanggal mulai dan tujuan setiap hari. Rencana tersimpan di browser ini dan bisa diunduh.</p><form class="planner-form" id="planner-form"><label>Mulai perjalanan<input type="date" name="date" required min="${localToday}" value="${escapeHTML(saved?.date && saved.date >= localToday ? saved.date : localToday)}"></label><div class="planner-stops">${stops.map((id, i) => `<label>Tujuan hari ${i + 1}<select name="stop-${i}">${options(id)}</select></label>`).join('')}</div><p class="planner-saved" id="planner-status" role="status" hidden></p><div class="dialog-actions"><button class="btn" type="submit">Simpan rencana ${icon('arrow')}</button><button class="secondary-btn" type="button" id="download-plan">Unduh rencana (.txt)</button></div></form></div>`,
  );
  const form = $('#planner-form');
  const getPlan = () => ({
    date: form.elements.date.value,
    days: currentDays,
    stops: $$('select', form).map((select) => select.value),
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const plan = getPlan();
    const persisted = writeStore('sakala-plan', plan);
    $('#planner-status').hidden = false;
    $('#planner-status').textContent = persisted
      ? 'Rencana tersimpan di browser ini. Anda bisa kembali untuk mengubahnya.'
      : 'Rencana siap untuk sesi ini. Unduh salinannya agar tetap tersedia.';
    toast('Rencana perjalanan disimpan.');
  });
  $('#download-plan').addEventListener('click', () => {
    if (!form.reportValidity()) return;
    const plan = getPlan();
    const text = [
      'SAKALA — Rencana perjalanan Bali',
      `Mulai: ${plan.date}`,
      `Durasi: ${plan.days} hari`,
      '',
      ...plan.stops.map(
        (id, i) => `Hari ${i + 1} — ${destinations[id].name}\n${destinations[id].description}`,
      ),
      '',
      'Contoh rencana sebagai inspirasi. Cek akses, cuaca, dan transportasi sebelum berangkat.',
    ].join('\n');
    const link = document.createElement('a');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    link.href = url;
    link.download = `sakala-rencana-${plan.days}-hari.txt`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('Rencana perjalanan diunduh.');
  });
}

function openStory(id) {
  if (id === 'all')
    return openDialog(
      `<div class="dialog-copy"><p class="dialog-eyebrow">Cerita Bali</p><h2 id="dialog-title">Kenali Bali, lewat ceritanya.</h2><div class="story-index">${Object.entries(
        stories,
      )
        .map(
          ([key, s]) =>
            `<button data-story="${key}"><img src="assets/images/photos/${s.image}" alt="">${s.title}</button>`,
        )
        .join('')}</div></div>`,
    );
  const s = stories[id];
  openDialog(
    `<img class="dialog-image" src="assets/images/photos/${s.image}" alt="${s.title}"><article class="dialog-copy"><p class="dialog-eyebrow">${s.label}</p><h2 id="dialog-title">${s.title}</h2>${s.paragraphs.map((p) => `<p>${p}</p>`).join('')}<p class="dialog-eyebrow">Catatan editorial SAKALA · Foto: ${s.credit} / Pexels</p><button class="secondary-btn" data-story="all">Lihat cerita lainnya</button></article>`,
  );
}
$$('.r-small-story').forEach((article, i) => {
  const button = document.createElement('button');
  button.className = 'story-open';
  button.dataset.story = ['budaya', 'penida'][i];
  const copy = $('div', article);
  button.append(...copy.childNodes);
  copy.append(button);
});
$$('.r-photo').forEach((figure, i) => {
  const button = document.createElement('button');
  button.className = 'photo-open';
  button.dataset.detail = ['nusa-penida', 'batur', 'waterfall', 'tegallalang'][i];
  button.setAttribute('aria-label', `Kenali ${destinations[button.dataset.detail].name}`);
  figure.append(button);
});

function openInfo(id) {
  if (id === 'kuliner')
    return openDialog(
      `<div class="dialog-copy"><p class="dialog-eyebrow">Kenali rasa Bali</p><h2 id="dialog-title">Cerita juga datang dari rasa.</h2><p>Beberapa hidangan Bali untuk dikenali selama perjalanan. Tanyakan bahan dan pilihan penyajian kepada penjual sesuai kebutuhan Anda.</p><div class="food-index">${[
        ['satelilit.webp', 'Sate lilit'],
        ['ayambetutu.jpg', 'Ayam betutu'],
        ['nasicampur.webp', 'Nasi campur'],
      ]
        .map(
          ([image, name]) =>
            `<div><img src="assets/library/kuliner/${image}" alt="${name}"><p>${name}</p></div>`,
        )
        .join('')}</div></div>`,
    );
  if (info[id])
    openDialog(
      `<div class="dialog-copy"><h2 id="dialog-title">${info[id][0]}</h2><p>${info[id][1]}</p></div>`,
    );
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('button,a,[data-day-destination]');
  if (!target) return;
  const prevent = () => event.preventDefault();
  if (target.matches('.photo-marker')) {
    prevent();
    selectDestination(target.dataset.destination);
  } else if (target.dataset.select) {
    prevent();
    selectDestination(target.dataset.select);
  } else if (target.dataset.save) {
    prevent();
    toggleFavorite(target.dataset.save);
  } else if (target.dataset.favorite) {
    prevent();
    toggleFavorite(target.dataset.favorite);
    target.textContent = favorites.has(target.dataset.favorite)
      ? 'Hapus dari favorit'
      : 'Simpan destinasi';
  } else if (target.hasAttribute('data-reset')) {
    prevent();
    resetFilters(true);
  } else if (target.hasAttribute('data-scroll-plan')) {
    prevent();
    scrollToSection('rencana');
  } else if (target.hasAttribute('data-explore-nature')) {
    prevent();
    category = 'Alam';
    $('#destination-search').value = '';
    $('#region-filter').value = '';
    applyFilters();
    scrollToSection('hero');
  } else if (target.hasAttribute('data-planner')) {
    prevent();
    openPlanner();
  } else if (target.dataset.addStop) {
    prevent();
    openPlanner(target.dataset.addStop);
  } else if (target.dataset.detail) {
    prevent();
    openDestination(target.dataset.detail);
  } else if (target.dataset.dayDestination) {
    prevent();
    openDestination(target.dataset.dayDestination);
  } else if (target.dataset.story) {
    prevent();
    openStory(target.dataset.story);
  } else if (target.dataset.info) {
    prevent();
    openInfo(target.dataset.info);
  }
});
updateFavorites();
setDuration(3, false);
$$('img.icon').forEach((img) => img.setAttribute('aria-hidden', 'true'));

function openNavigationInfo() {
  const section = location.hash.slice(1);
  if (section === 'kuliner' || section === 'tentang') openInfo(section);
}
window.addEventListener('hashchange', openNavigationInfo);
openNavigationInfo();
