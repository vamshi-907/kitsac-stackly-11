(function () {
  function toast(msg, type) {
    let t = document.querySelector('.sf-toast');
    if (!t) { t = document.createElement('div'); t.className = 'sf-toast'; document.body.appendChild(t); }
    t.className = 'sf-toast ' + (type || '') + ' show';
    t.innerHTML = '<i class="ri-checkbox-circle-fill"></i> ' + msg;
    setTimeout(() => t.classList.remove('show'), 3600);
  }
  window.sfToast = toast;
  document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-sf-form]'); if (!form) return;
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach((f) => {
      if (!f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value))) { f.classList.add('is-invalid'); ok = false; }
      else f.classList.remove('is-invalid');
    });
    if (ok) { toast(form.dataset.sfSuccess || 'Message sent successfully!', 'success'); form.reset(); }
  });
  document.addEventListener('input', (e) => { if (e.target.matches('.is-invalid')) e.target.classList.remove('is-invalid'); });
})();