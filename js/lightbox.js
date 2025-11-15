// Seleccionamos elementos
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Todas las imágenes ampliables
const zoomImages = document.querySelectorAll(".zoom-img");

// Abrir lightbox
zoomImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

// Cerrar lightbox al hacer clic en el fondo
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
