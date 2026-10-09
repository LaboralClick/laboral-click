// menu.js - Lógica de navegación e inyección de componentes globales

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Inyección Automática del Botón Flotante de Canal WhatsApp
  injectWhatsAppChannelButton();

  // 2. Lógica adicional del menú (si existe)
  initMenuLogic();
});

/**
 * Crea e inserta el botón flotante del Canal de WhatsApp en el body.
 * Se ejecuta en TODAS las páginas que carguen este script.
 */
function injectWhatsAppChannelButton() {
  // Evitar duplicados si el script se recarga
  if (document.querySelector('.lc-wa-channel-btn')) return;

  const waLink = document.createElement('a');
  
  // IMPORTANTE: Pega aquí tu URL REAL del canal de WhatsApp
  // Ejemplo: https://whatsapp.com/channel/0029VaZuGSxEawvhKZGwuT0V
  waLink.href = "https://whatsapp.com/channel/0029VaZuGSxEawvhKZGwuT0V"; 
  
  waLink.target = "_blank";       // Abre en pestaña nueva
  waLink.rel = "noopener noreferrer"; // Seguridad estándar
  waLink.className = "lc-wa-channel-btn";
  
  // Contenido interno: Icono + Texto
  waLink.innerHTML = '<span class="wa-icon">📢</span> <span class="texto">Síguenos en WhatsApp</span>';
  
  // Insertar al final del body para que quede por encima de todo
  document.body.appendChild(waLink);
}

/**
 * Función auxiliar para cualquier otra lógica de menú que tengas actualmente.
 * Si tu menu.js actual tiene otras funciones, cópialas aquí dentro o debajo.
 */
function initMenuLogic() {
  // Placeholder para mantener compatibilidad si tenías código aquí antes.
  // Si no tenías nada específico, esta función puede quedar vacía.
}
