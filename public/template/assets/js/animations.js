(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        if (entry.target.dataset.sfCount) {
          const target = parseInt(entry.target.dataset.sfCount, 10);
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / 1500, 1);
            entry.target.textContent = Math.floor(p * target).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
            else entry.target.textContent = target.toLocaleString() + (entry.target.dataset.sfSuffix || '');
          };
          requestAnimationFrame(step);
          io.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-sf-fade], [data-sf-count]').forEach((el) => io.observe(el));
  });
  const nav = document.querySelector('.sf-navbar');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('is-scrolled', window.scrollY > 20));
  document.addEventListener('mousemove', (e) => {
    const btn = e.target.closest('.btn-sf-primary'); if (!btn) return;
    const r = btn.getBoundingClientRect();
    btn.style.setProperty('--x', ((e.clientX - r.left) / r.width * 100) + '%');
    btn.style.setProperty('--y', ((e.clientY - r.top) / r.height * 100) + '%');
  });
})();