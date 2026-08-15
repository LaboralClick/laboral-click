// ============================================
// MENÚ AUTOMÁTICO INTELIGENTE - LABORAL CLICK
// Versión final v2 (limpieza siempre activa)
// ============================================

const menuHTML = `
<button class="menu-toggle" onclick="toggleMenu()">☰</button>
<ul class="nav-links" id="navMenu">
    <button class="menu-close-btn" onclick="toggleMenu()">✕</button>
    <li><a href="index.html">Inicio</a></li>
    <li class="has-dropdown">
        <a href="nosotros.html">Nosotros</a>
        <ul class="dropdown">
            <li><a href="nosotros.html">Filosofía</a></li>
            <li><a href="equipo.html">Equipo</a></li>
            <li><a href="casos.html">Casos de Éxito</a></li>
            <li><a href="testimonios.html">Testimonios</a></li>
        </ul>
    </li>
    <li class="has-dropdown">
        <a href="pymes.html">Servicios</a>
        <ul class="dropdown">
            <li><a href="pymes.html">PyMEs en General</a></li>
            <li><a href="restaurantes.html">Restaurantes</a></li>
        </ul>
    </li>
    <li class="has-dropdown">
        <a href="precios.html">Planes y Precios</a>
        <ul class="dropdown">
            <li><a href="precios.html">Precios</a></li>
            <li><a href="promociones.html">Promociones</a></li>
        </ul>
    </li>
    <li><a href="calculadoras.html">Calculadoras</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="diagnostico.html">Diagnóstico</a></li>
    <li><a href="contacto.html">Contacto</a></li>
</ul>
`;

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const overlay = document.getElementById('menuOverlay');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('activo');
        document.body.style.overflow = 'auto';
    } else {
        menu.classList.add('open');
        overlay.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav.nav');
    var container = document.getElementById('menu-container');

    // 1) Limpia SIEMPRE restos de menús viejos (botón verde, listas rotas)
    if (nav) {
        var viejoToggle = nav.querySelector('.menu-toggle');
        var viejosLinks = nav.querySelector('.nav-links');
        var viejoWa = nav.querySelector('.btn-whatsapp');
        if (viejoToggle) { viejoToggle.remove(); }
        if (viejosLinks) { viejosLinks.remove(); }
        if (viejoWa) { viejoWa.remove(); }
    }

    // 2) Si no hay contenedor, lo crea
    if (!container && nav) {
        container = document.createElement('div');
        container.id = 'menu-container';
        nav.appendChild(container);
    }

    // 3) Instala el menú listo
    if (container) {
        container.innerHTML = menuHTML;
    }

    // 4) Capa oscura del menú móvil
    var overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menuOverlay';
    overlay.onclick = toggleMenu;
    document.body.appendChild(overlay);

    // 5) Burbuja flotante estándar (retira flotantes viejos)
    var flotantesViejos = document.querySelectorAll('.whatsapp-float');
    flotantesViejos.forEach(function(el) { el.remove(); });
    if (!document.getElementById('lcWhatsappFloat')) {
        var wa = document.createElement('a');
        wa.href = 'https://wa.me/5213111866901';
        wa.target = '_blank';
        wa.id = 'lcWhatsappFloat';
        wa.textContent = '💬';
        wa.setAttribute('aria-label', 'Contactar por WhatsApp');
        wa.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#25D366;color:white;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 4px 12px rgba(0,0,0,0.25);z-index:9999;text-decoration:none;';
        document.body.appendChild(wa);
    }

    // 6) Cerrar menú al hacer clic en un enlace (móvil)
    var enlaces = document.querySelectorAll('#navMenu a');
    enlaces.forEach(function(link) {
        link.addEventListener('click', function() {
            var menu = document.getElementById('navMenu');
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});
