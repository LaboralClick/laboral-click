document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.lc-menu-toggle');
    const closeBtn = document.querySelector('.lc-menu-close');
    const drawer = document.querySelector('.lc-side-drawer');
    const overlay = document.querySelector('.lc-overlay');
    const links = document.querySelectorAll('.lc-drawer-links a');

    function openMenu() {
        drawer.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // no scroll
    }

    function closeMenu() {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    
    // Cierra al dar clic en un link
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
