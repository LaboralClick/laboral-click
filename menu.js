// menu.js V5 - FINAL - fuerza el cajón escondido
document.addEventListener('DOMContentLoaded', function() {
  // Borra menús viejos tirados
  document.querySelectorAll('header, .lc-header, .lc-side-drawer, .lc-overlay').forEach(e => e.remove());

  const html = `
<header class="lc-header">
  <a href="/index.html" style="display:flex;align-items:center;text-decoration:none;">
    <img src="/images/logoH.png" alt="Laboral Click" style="height:40px"><span style="margin-left:10px;color:#1e3a5f;font-weight:700;font-size:14px">Asesoría Legal sin Enredos</span>
  </a>
  <button class="lc-menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
</header>
<div class="lc-overlay"></div>
<nav class="lc-side-drawer">
  <div class="lc-drawer-header"><span style="font-weight:800;color:#1e3a5f">Menú</span><button class="lc-menu-close">×</button></div>
  <ul class="lc-drawer-links">
    <li><a href="/index.html">🏠 Inicio</a></li>
    <li><a href="/nosotros.html">👥 Nosotros</a></li>
    <li><a href="/servicios.html">⚖️ Servicios</a></li>
    <li><a href="/calculadoras.html">🧮 Calculadoras</a></li>
    <li><a href="/blog.html">📝 Blog</a></li>
    <li><a href="/diagnostico.html">⚡ Diagnóstico Express</a></li>
    <li><a href="/contacto.html">📩 Contacto</a></li>
  </ul>
  <a href="https://wa.me/5213111866901" class="lc-drawer-cta">💬 WhatsApp Directo</a>
</nav>`;
  document.body.insertAdjacentHTML('afterbegin', html);

  const drawer = document.querySelector('.lc-side-drawer');
  const overlay = document.querySelector('.lc-overlay');
  const toggle = document.querySelector('.lc-menu-toggle');
  const close = document.querySelector('.lc-menu-close');

  function openM(){drawer.classList.add('open');overlay.classList.add('show');document.body.style.overflow='hidden'}
  function closeM(){drawer.classList.remove('open');overlay.classList.remove('show');document.body.style.overflow=''}
  toggle.addEventListener('click', openM);
  close.addEventListener('click', closeM);
  overlay.addEventListener('click', closeM);
});
