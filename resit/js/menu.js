(function () {
    const openBtn = document.getElementById('menu-open');
    const closeBtn = document.getElementById('menu-close');
    const overlay = document.getElementById('overlay-menu');

    if (!openBtn || !closeBtn || !overlay) return;

    function openMenu() {
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        openBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        openBtn.setAttribute('aria-expanded', 'false');
    }

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeMenu();
    });

    window.matchMedia('(min-width: 1080px)').addEventListener('change', e => {
        if (e.matches) closeMenu();
    });
})();