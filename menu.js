// MENU.JS V3 - Laboral Click - Funciona en todas las páginas y carpetas
(function() {
  function initMenu() {
    // 1. Limpieza total: borra CUALQUIER header viejo, bueno o malo
    document.querySelectorAll('header, .lc-header, .lc-side-drawer, .lc-overlay, nav').forEach(el => {
      // Solo borra si parece menú, no borres el resto de la página
      if (el.className.includes('lc-') || el.tagName === 'HEADER' || el.className.includes('nav')) {
        // Pero conserva si es footer, no lo borres todo
        if (!el.closest('footer')) el.remove();
      }
    });

    // 2. Crea el menú bueno siempre
    const menuHTML = `
<header class="lc-header">
    <a href="/index.html" class="lc-logo-link" style="display: flex; align-items: center; text-decoration: none;">
        <img src="/images/logoH.png" alt="Laboral Click" style="height: 42px;" onerror="this.src='/images/logoH.png'">
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

    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // 3. Activa el menú
    const toggleBtn = document.querySelector('.lc-menu-toggle');
    const closeBtn = document.querySelector('.lc-menu-close');
    const drawer = document.querySelector('.lc-side-drawer');
    const overlay = document.querySelector('.lc-overlay');

    const openMenu = () => {
      drawer.classList.add('open');
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.lc-drawer-links a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Ejecuta cuando cargue
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();
