// Laboral Click - menu.js V9 FINAL UNIFICADO
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.lc-header, #drawer, #overlay, .lc-side-drawer, .lc-overlay').forEach(e=>e.remove());
  const menuHTML = `
<header class="lc-header">
  <a href="/index.html"><img src="/images/logoH.png" alt="Laboral Click" style="height:42px"></a>
  <button class="lc-menu-toggle" id="btnOpen" aria-label="Menú"><span></span><span></span><span></span></button>
</header>
<div id="overlay"></div>
<nav id="drawer">
  <div style="padding:20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f1f5f9"><b style="color:#1e3a5f">Menú</b><button id="btnClose" style="border:none;background:#f1f5f9;width:36px;height:36px;border-radius:50%;font-size:22px;cursor:pointer">×</button></div>
  <a href="/index.html">🏠 Inicio</a>
  <a href="/nosotros.html">👥 Nosotros</a>
  <a href="/nuestro-equipo.html">⚖️ Nuestro Equipo</a>
  <a href="/filosofia.html">💡 Filosofía</a>
  <a href="/servicios.html">📋 Servicios</a>
  <a href="/calculadoras.html">🧮 Calculadoras</a>
  <a href="/blog.html">📝 Blog</a>
  <a href="/diagnostico.html">⚡ Diagnóstico Express</a>
  <a href="/contacto.html">📩 Contacto</a>
</nav>
<a href="https://wa.me/5213111866901" class="whatsapp-float" aria-label="WhatsApp">💬</a>
`;
  document.body.insertAdjacentHTML('afterbegin', menuHTML);
  const style = document.createElement('style');
  style.innerHTML = `
  .lc-header{position:sticky;top:0;z-index:1000;display:flex;justify-content:space-between;align-items:center;padding:12px 20px;background:#fff;border-bottom:1px solid #e5e7eb}
  .lc-menu-toggle{display:flex;flex-direction:column;gap:5px;background:#1e3a5f;border:none;padding:11px;border-radius:8px;cursor:pointer}
  .lc-menu-toggle span{width:22px;height:2px;background:#fff;display:block;border-radius:2px}
  #drawer{position:fixed;top:0;right:-110%;width:360px;max-width:85vw;height:100vh;background:#fff;z-index:9999;transition:right .33s;box-shadow:-12px 0 30px rgba(0,0,0,.18);display:flex;flex-direction:column;overflow-y:auto}
  #drawer.open{right:0 !important}
  #drawer a{padding:16px 24px;text-decoration:none;color:#1e3a5f;border-bottom:1px solid #f8fafc;display:block;font-weight:600}
  #drawer a:hover{background:#f8fafc;color:#b8964a}
  #overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9998;opacity:0;pointer-events:none;transition:opacity .3s}
  #overlay.show{opacity:1;pointer-events:auto}
  .whatsapp-float{position:fixed;bottom:20px;right:20px;background:#25D366;color:#fff;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;text-decoration:none;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,.2)}
  `;
  document.head.appendChild(style);
  const drawer=document.getElementById('drawer');
  const overlay=document.getElementById('overlay');
  const open=()=>{drawer.classList.add('open');overlay.classList.add('show');document.body.style.overflow='hidden';}
  const close=()=>{drawer.classList.remove('open');overlay.classList.remove('show');document.body.style.overflow='';}
  document.getElementById('btnOpen').onclick=open;
  document.getElementById('btnClose').onclick=close;
  overlay.onclick=close;
});
