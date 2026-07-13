(function () {
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-year]').forEach((n) => (n.textContent = new Date().getFullYear()));
    const cd = document.querySelector('[data-sf-countdown]');
    if (cd) {
      const target = new Date(cd.dataset.sfCountdown).getTime();
      const tick = () => {
        const diff = Math.max(0, target - Date.now());
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff / 3600000) % 24);
        const m = Math.floor((diff / 60000) % 60);
        const s = Math.floor((diff / 1000) % 60);
        cd.querySelector('[data-d]').textContent = String(d).padStart(2, '0');
        cd.querySelector('[data-h]').textContent = String(h).padStart(2, '0');
        cd.querySelector('[data-m]').textContent = String(m).padStart(2, '0');
        cd.querySelector('[data-s]').textContent = String(s).padStart(2, '0');
      };
      tick(); setInterval(tick, 1000);
    }
  });
})();