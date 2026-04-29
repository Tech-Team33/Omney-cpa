/* Omney CPA — shared behaviors (theme + tweaks) */
(function () {
  const storedTheme = localStorage.getItem('cpa-theme') || 'light';
  document.documentElement.setAttribute('data-theme', storedTheme);

  document.addEventListener('click', (e) => {
    const tgl = e.target.closest('[data-theme-toggle]');
    if (!tgl) return;
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cpa-theme', next);
  });
})();
