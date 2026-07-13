(function () {
  window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-grid .g-item');
    if (!items.length) return;
    let lb = document.querySelector('.sf-lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.className = 'sf-lightbox';
      lb.innerHTML = '<button class="close" aria-label="Close">&times;</button><img alt="Gallery image">';
      document.body.appendChild(lb);
    }
    const img = lb.querySelector('img');
    items.forEach((it) => {
      it.addEventListener('click', () => {
        const src = it.querySelector('img')?.src; if (!src) return;
        img.src = src; lb.classList.add('open');
      });
    });
    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target.classList.contains('close')) lb.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.classList.remove('open'); });
  });
})();