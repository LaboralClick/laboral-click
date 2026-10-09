// menu.js - Versión Final Completa (Menú Restaurado + Botón Canal WA)

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Cargar/Restaurar el Menú de Navegación Completo
  loadNavigationMenu();

  // 2. Inyectar el Botón Flotante del Canal de WhatsApp
  injectWhatsAppChannelButton();
});

/**
 * FUNCION DE MENÚ (Actualizada con TODOS los enlaces principales)
 */
function loadNavigationMenu() {
  const container = document.getElementById('menu-container');
  if (!container) return; 

  // Lista completa de enlaces según la estructura de tu sitio
  const links = [
    { text: 'Inicio', href: 'index.html' },
    { text: 'Diagnóstico', href: 'diagnostico.html' },
    { text: 'Calculadoras', href: 'calculadoras.html' },
    { text: 'Blog', href: 'blog.html' },
    { text: 'Promociones', href: 'promociones.html' }, // <-- Agregado este que faltaba
    { text: 'Contacto', href: 'contacto.html' }
  ];

  let html = '';
  links.forEach(link => {
    // Usamos clase 'nav-link' para que CSS lo estilice correctamente
    html += `<a href="${link.href}" class="nav-link">${link.text}</a>`;
  });
  
  container.innerHTML = html;
}

/**
 * FUNCIÓN NUEVA: Inyecta el botón flotante del Canal de WhatsApp
 */
function injectWhatsAppChannelButton() {
  // Evitar duplicados
  if (document.querySelector('.lc-wa-channel-btn')) return;

  const waLink = document.createElement('a');
  
  // IMPORTANTE: Pega aquí tu URL REAL del canal
  waLink.href = "https://whatsapp.com/channel/0029VaZuGSxEawvhKZGwuT0V"; 
  
  waLink.target = "_blank";       
  waLink.rel = "noopener noreferrer"; 
  waLink.className = "lc-wa-channel-btn";
  
  // TEXTO CORREGIDO: Ahora dice "Canal de WhatsApp"
  waLink.innerHTML = '<span class="wa-icon">📢</span> <span class="texto">Canal de WhatsApp</span>';
  
  document.body.appendChild(waLink);
}
