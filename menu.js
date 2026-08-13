document.addEventListener('DOMContentLoaded', function() {
    // Si la página no tiene el menú, lo creamos automáticamente
    if (!document.querySelector('.lc-header')) {
        const menuHTML = `
<header class="lc-header">
    <a href="/" class="lc-logo-link" style="display: flex; align-items: center; text-decoration: none;">
        <img src="/images/logoH.png" alt="Laboral Click" style="height: 45px;">
        <span style="font-size: 14px; color: #1e3a5f; font-weight: 600; margin-left: 10px;">Asesoría Legal sin Enredos</span>
    </a>
    <button class="lc-menu-toggle" aria-label="Abrir menú"><span></span><span></span><span></span></button>
</header>
<div class="lc-overlay"></div>
<nav class="lc-side-drawer">
    <div class="lc-drawer-header">
        <span style="font-weight:700; color:#1e3a5f;">Menú</span>
        <button class="lc-menu-close">&times;</button>
    </div>
    <ul class="lc-drawer-links">
        <li><a href="/index.html">🏠 Inicio</a></li>
        <li><a href="/nosotros.html">👥 Nosotros</a></li>
        <li><a href="/servicios.html">⚖️ Servicios</a></li>
        <li><a href="/calculadoras.html">🧮 Calculadoras</a></li>
        <li><a href="/blog.html">📝 Blog</a></li>
        <li><a href="/diagnostico.html">⚡ Diagnóstico Express</a></li>
        <li><a href="/contacto.html">📩 Contacto</a></li>
    </ul>
    <a href="https://wa.me/5213111866901" class="lc-drawer-cta" target="_blank">💬 WhatsApp Directo</a>
</nav>`;
        // Borra headers viejos rotos
        document.querySelectorAll('header').forEach(h => h.remove());
        document.body.insertAdjacentHTML('afterbegin', menuHTML);
    }

    const toggleBtn = document.querySelector('.lc-menu-toggle');
    const closeBtn = document.querySelector('.lc-menu-close');
    const drawer = document.querySelector('.lc-side-drawer');
    const overlay = document.querySelector('.lc-overlay');
    const links = document.querySelectorAll('.lc-drawer-links a');

    function openMenu() {
        if(!drawer || !overlay) return;
        drawer.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        if(!drawer || !overlay) return;
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    links.forEach(link => link.addEventListener('click', closeMenu));
});
