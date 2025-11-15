// main.js — controla zoom de imágenes y acordeones del sidebar

document.addEventListener("DOMContentLoaded", () => {

  /* ============================================
     ZOOM DE IMÁGENES
  ============================================ */

  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  const zoomables = document.querySelectorAll(".zoomable");

  if (overlay && overlayImg && zoomables.length > 0) {

    zoomables.forEach(img => {
      img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlay.classList.add("mostrar");
      });
    });

    // Cerrar al hacer clic en el fondo (no en la imagen)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("mostrar");
      }
    });

    // Cerrar con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        overlay.classList.remove("mostrar");
      }
    });
  }



  /* ============================================
     SIDEBAR — ACORDEONES
  ============================================ */

  const toggles = document.querySelectorAll(".menu .toggle");

  if (toggles.length > 0) {

    toggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {

        e.stopPropagation();  
        // evita que otros clics activen cosas arriba

        const parent = toggle.closest(".seccion");
        if (!parent) return;

        // Cerrar otras secciones abiertas
        document.querySelectorAll(".seccion.abierta").forEach(sec => {
          if (sec !== parent) sec.classList.remove("abierta");
        });

        // Abrir/cerrar la sección actual
        parent.classList.toggle("abierta");
      });
    });

  }

});


