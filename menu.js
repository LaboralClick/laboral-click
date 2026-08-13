// ============================================
// MENÚ AUTOMÁTICO - LABORAL CLICK
// Este archivo genera el menú en todas las páginas
// ============================================

const menuHTML = `
<button class="menu-toggle" onclick="toggleMenu()"></button>
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
        <a href="restaurantes.html">Servicios</a>
        <ul class="dropdown">
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

// Función para abrir/cerrar menú
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

// Inyectar menú cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    const navElement = document.querySelector('.nav');
    if (navElement) {
        // Buscar y eliminar el menú existente
        const existingMenu = navElement.querySelector('.nav-links, .menu-toggle, .btn-whatsapp');
        if (existingMenu) {
            // Eliminar todos los elementos del menú viejo
            const elementsToRemove = navElement.querySelectorAll('.menu-toggle, .nav-links, .btn-whatsapp');
            elementsToRemove.forEach(el => el.remove());
        }
        
        // Insertar el nuevo menú después del logo
        const logo = navElement.querySelector('.logo');
        if (logo) {
            logo.insertAdjacentHTML('afterend', menuHTML);
        }
    }
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menuOverlay';
    overlay.onclick = toggleMenu;
    document.body.appendChild(overlay);
});
