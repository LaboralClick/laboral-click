// ============================================
// MENÚ AUTOMÁTICO - LABORAL CLICK
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
        </ul>
    </li>
      <li class="has-dropdown">
        <a href="pymes.html">Servicios</a>
        <ul class="dropdown">
            <li><a href="pymes.html">PyMEs en General</a></li>
            <li><a href="restaurantes.html">Restaurantes</a></li>
        </ul>
    </li>
    <li><a href="calculadoras.html">Calculadoras</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="diagnostico.html">Diagnóstico</a></li>
    <li><a href="contacto.html">Contacto</a></li>
</ul>
<a href="https://wa.me/5213111866901" class="btn-whatsapp" target="_blank">💬 WhatsApp</a>
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
    const container = document.getElementById('menu-container');
    if (container) {
        container.innerHTML = menuHTML;
    }

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menuOverlay';
    overlay.onclick = toggleMenu;
    document.body.appendChild(overlay);

    document.querySelectorAll('#navMenu a').forEach(function(link) {
        link.addEventListener('click', function() {
            const menu = document.getElementById('navMenu');
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});
