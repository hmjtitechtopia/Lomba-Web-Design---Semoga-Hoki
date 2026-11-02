(() => {
  'use strict';

  const reader = document.querySelector('#reader');
  const readerContent = document.querySelector('#reader-content');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let readerTrigger;

  function openArticle(articleId, trigger) {
    const article = storyArticles[articleId];
    if (!article) return;
    readerTrigger = trigger;
    readerContent.replaceChildren();

    const title = document.createElement('h2');
    title.id = 'reader-title';
    title.textContent = article.title;
    const image = document.createElement('img');
    image.src = `assets/images/photos/${article.image}`;
    image.alt = article.title;
    readerContent.append(title, image);

    for (const text of article.body) {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      readerContent.append(paragraph);
    }

    reader.showModal();
    reader.scrollTop = 0;
    document.body.classList.add('reading');
    if (!reducedMotion.matches) {
      reader.animate(
        [
          { opacity: 0, transform: 'translateY(12px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 220, easing: 'ease-out' },
      );
    }
  }

  document.querySelectorAll('[data-story]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openArticle(link.dataset.story, link);
    });
  });

  document.querySelector('.close-reader').addEventListener('click', () => reader.close());
  reader.addEventListener('click', (event) => {
    if (event.target !== reader) return;
    const bounds = reader.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) reader.close();
  });
  reader.addEventListener('close', () => {
    document.body.classList.remove('reading');
    readerTrigger?.focus();
  });
})();
