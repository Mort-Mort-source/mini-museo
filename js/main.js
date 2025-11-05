// main.js — controla el zoom de imágenes

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  const zoomables = document.querySelectorAll(".zoomable");

  // Al hacer clic en una imagen, mostrarla ampliada
  zoomables.forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlay.classList.add("mostrar");
    });
  });

  // Cerrar al hacer clic en el fondo oscuro
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target === overlayImg) {
      overlay.classList.remove("mostrar");
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("mostrar");
    }
  });
});
