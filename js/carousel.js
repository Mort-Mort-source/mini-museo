// CARRUSEL SIMPLIFICADO - 100% FUNCIONAL
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 INICIANDO CARRUSEL DE EMERGENCIA');
  
  const track = document.querySelector('.carousel-track-fixed');
  const slides = document.querySelectorAll('.carousel-slide-fixed');
  const dots = document.querySelectorAll('.carousel-dot-fixed');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const currentSlideEl = document.querySelector('.current-slide');
  const totalSlidesEl = document.querySelector('.total-slides');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  // Verificar que todos los elementos existen
  if (!track || !slides.length) {
    console.error('❌ Elementos del carrusel no encontrados');
    return;
  }
  
  console.log('✅ Elementos del carrusel encontrados:', {
    track: !!track,
    slides: slides.length,
    dots: dots.length,
    buttons: { prev: !!prevBtn, next: !!nextBtn }
  });
  
  // Configuración inicial
  totalSlidesEl.textContent = totalSlides;
  updateCarousel();
  
  // Event listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
  
  // Funciones principales
  function prevSlide() {
    console.log('⬅️ Navegando a slide anterior');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
  
  function nextSlide() {
    console.log('➡️ Navegando a slide siguiente');
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }
  
  function goToSlide(index) {
    console.log('🎯 Yendo al slide:', index + 1);
    currentIndex = index;
    updateCarousel();
  }
  
  function updateCarousel() {
    console.log('🔄 Actualizando carrusel a slide:', currentIndex + 1);
    
    // Calcular desplazamiento (cada slide ocupa 33.333% del track)
    const translateX = -currentIndex * 33.333;
    track.style.transform = `translateX(${translateX}%)`;
    
    console.log('📏 Transformación aplicada:', `translateX(${translateX}%)`);
    
    // Actualizar dots
    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle('active', isActive);
      console.log(`🔘 Dot ${index + 1}:`, isActive ? 'ACTIVO' : 'inactivo');
    });
    
    // Actualizar contador
    currentSlideEl.textContent = currentIndex + 1;
    
    // Verificar visibilidad de imágenes
    const currentImage = slides[currentIndex].querySelector('img');
    console.log('🖼️ Imagen actual:', {
      src: currentImage.src,
      complete: currentImage.complete,
      naturalWidth: currentImage.naturalWidth,
      naturalHeight: currentImage.naturalHeight,
      visible: currentImage.offsetWidth > 0 && currentImage.offsetHeight > 0
    });
  }
  
  // Auto-play (opcional)
  let autoPlayInterval = setInterval(nextSlide, 5000);
  
  // Pausar auto-play al interactuar
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  carouselWrapper.addEventListener('mouseenter', () => {
    console.log('⏸️ Auto-play pausado');
    clearInterval(autoPlayInterval);
  });
  
  carouselWrapper.addEventListener('mouseleave', () => {
    console.log('▶️ Auto-play reanudado');
    autoPlayInterval = setInterval(nextSlide, 5000);
  });
  
  console.log('🎉 Carrusel de emergencia inicializado correctamente');
  console.log('📝 Estado inicial:', {
    currentIndex,
    totalSlides,
    trackWidth: track.offsetWidth,
    wrapperWidth: carouselWrapper.offsetWidth
  });
});