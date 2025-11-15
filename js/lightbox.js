// Lightbox mejorado
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Todas las imágenes ampliables
const zoomImages = document.querySelectorAll(".zoom-img");

// Abrir lightbox
zoomImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden"; // Evitar scroll
  });
});

// Cerrar lightbox al hacer clic en el fondo
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lightboxImg) {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto"; // Restaurar scroll
  }
});

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.style.display === "flex") {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }
});