(function () {
  const root = document.documentElement;
  if (localStorage.getItem('sf-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  if (localStorage.getItem('sf-dir') === 'rtl') root.setAttribute('dir', 'rtl');
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-sf-theme-toggle]');
    if (t) {
      const isDark = root.getAttribute('data-theme') === 'dark';
      root.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('sf-theme', isDark ? 'light' : 'dark');
      const icon = t.querySelector('i');
      if (icon) icon.className = isDark ? 'ri-moon-line' : 'ri-sun-line';
    }
    const r = e.target.closest('[data-sf-rtl-toggle]');
    if (r) {
      const isRtl = root.getAttribute('dir') === 'rtl';
      root.setAttribute('dir', isRtl ? 'ltr' : 'rtl');
      localStorage.setItem('sf-dir', isRtl ? 'ltr' : 'rtl');
    }
  });
  window.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('[data-sf-theme-toggle] i');
    if (icon) icon.className = root.getAttribute('data-theme') === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
  });
})();