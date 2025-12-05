// MOSAICO 3x6 - EXACTAMENTE 18 ELEMENTOS (nueva estructura)
const mosaicItems = [
    // Colecciones Oseas
    {
        id: 1,
        title: "Colecciones Oseas",
        description: "Estudios osteológicos y antropológicos",
        images: ["img/colecciones_oseas_1.jpg", "img/colecciones_oseas_2.jpg", "img/colecciones_oseas_3.jpg"],
        link: "content/coleccionesOseas.html",
        category: "Colecciones Oseas"
    },
    {
        id: 2,
        title: "Individuo 150",
        description: "Memoria en resistencia bajo la ciudad (Vanessa)",
        images: ["img/Individuo 150_imagen_1.jpg", "img/Individuo_150_Imagen_3.png", "img/individuo 150_Imagen_4.jpg"],
        link: "content/individuo150.html",
        category: "Colecciones Oseas"
    },
    {
        id: 3,
        title: "Omichicahuaztli",
        description: "Instrumento musical prehispánico (Alex)",
        images: ["img/Omichicahuaztli Foto 1.jpeg", "img/Omichicahuaztli Foto 2.jpeg", "img/Omichicahuaztli Foto 3.jpeg"],
        link: "content/Omichicahuaztli.html",
        category: "Colecciones Oseas"
    },
    
    // Falsos y réplicas/restauraciones
    {
        id: 4,
        title: "Tumba de Pakal",
        description: "Réplica arqueológica (Valeria)",
        images: ["img/Tumba_de_Pakal.jpeg", "https://source.unsplash.com/random/400x400/?mayan", "https://source.unsplash.com/random/400x400/?tomb"],
        link: "content/tumba_pakal.html",
        category: "Falsos y réplicas/restauraciones"
    },
    {
        id: 5,
        title: "Falsos",
        description: "Colección de falsificaciones (Isabela)",
        images: ["img/Falsos_foto 1.jpg", "img/Falso_foto 2.jpg", "img/Falsos_ foto 3.gif"],
        link: "content/falsos.html",
        category: "Falsos y réplicas/restauraciones"
    },
    {
        id: 6,
        title: "Maqueta Templo Mayor",
        description: "Réplica arquitectónica (Samanta)",
        images: ["img/templo_mayor1.jpg", "img/templo_mayor2.jpg", "img/templo_mayor3.jpg"],
        link: "content/maqueta_templo_mayor.html",
        category: "Falsos y réplicas/restauraciones"
    },
    
    // Cultura en disputa
    {
        id: 7,
        title: "Tonalámatl",
        description: "Códice y saqueos históricos (Aaron)",
        images: ["img/tonalamatl.jpg", "img/tonalamatl_2.jpg", "https://source.unsplash.com/random/400x400/?codex"],
        link: "content/tonalamatl.html",
        category: "Cultura en disputa"
    },
    {
        id: 8,
        title: "Crâneo Mixteco",
        description: "Devoluciones y diplomacia (Ana)",
        images: ["img/cráneo mixteco - foto 1.jpg", "img/cráneo mixteco - foto 2.jpg", "img/cráneo mixteco - foto 3.jpg"],
        link: "content/craneo_mixteco.html",
        category: "Cultura en disputa"
    },
    
    // Archivos vivos
    {
        id: 9,
        title: "Xochipilli",
        description: "Archivos vivos y cultura (Daniela)",
        images: ["img/Xochipilli Fuente.DanielaJuarez.foto1.jpg", "https://source.unsplash.com/random/400x400/?statue", "https://source.unsplash.com/random/400x400/?aztec"],
        link: "content/xochipilli.html",
        category: "Archivos vivos"
    },
    {
        id: 10,
        title: "Códice Ñunaha",
        description: "Documentos históricos (Miranda)",
        images: ["img/codice_nuna1.jpg", "img/Codice nunaha_foto 2.jpg", "img/Codice nunaha_foto 3.jpg"],
        link: "content/codice_nunaha.html",
        category: "Archivos vivos"
    },
    {
        id: 11,
        title: "Cuauhtémoc",
        description: "Aquí le quemaron las patas (Raziel)",
        images: ["img/cuauhtemoc_foto1.jpg", "img/cuauhtemoc_foto2.jpg", "img/cuauhtemoc_foto3.jpg"],
        link: "content/cuauhtemoc.html",
        category: "Archivos vivos"
    },
    
    // Ingenierías
    {
        id: 12,
        title: "Tlaltecuhtli",
        description: "Mover la Tlaltecuhtli (Angel)",
        images: ["img/la_tlaltecuhtli_1.png", "img/la_tlaltecuhtli_2.png", "https://source.unsplash.com/random/400x400/?stone"],
        link: "content/tlaltecuhtli.html",
        category: "Ingenierías"
    },
    
    // Sobre ruedas
    {
        id: 13,
        title: "Carroza de Carlota",
        description: "Transporte histórico (Andrea)",
        images: ["img/La carroza de Carlota- foto 1_.jpg", "img/La_carroza_de_carlota.jpg", "img/La_carroza_de_carlota(2).jpg"],
        link: "content/carroza_carlota.html",
        category: "Sobre ruedas"
    },
    
    // Ciencia y arte
    {
        id: 14,
        title: "Descubrimiento del Pulque",
        description: "Ciencia y arte ancestral (Erik)",
        images: ["img/eldescubrimientodelpulque--foto1.png", "https://source.unsplash.com/random/400x400/?drink", "https://source.unsplash.com/random/400x400/?ancient"],
        link: "content/pulque.html",
        category: "Ciencia y arte"
    },
    {
        id: 15,
        title: "Pinturas de Casta",
        description: "Arte y clasificación social (Mauricio)",
        images: ["img/Pintura de castas foto 1.jpg", "https://source.unsplash.com/random/400x400/?painting", "https://source.unsplash.com/random/400x400/?colonial"],
        link: "content/pinturas_casta.html",
        category: "Ciencia y arte"
    },
    
    // Cotidianeidades
    {
        id: 16,
        title: "Cabina Telefónica",
        description: "Cotidianeidad y comunicación (Aranza)",
        images: ["img/cabina_telefonica2.jpg", "img/cabina_telefonica.jpg", "img/cabina_telefonica2.jpg"],
        link: "content/cabina_telefonica.html",
        category: "Cotidianeidades"
    },
    {
        id: 17,
        title: "Muñecos Luchadores",
        description: "Caleidoscopio cultural (Diego)",
        images: ["img/Caleidoscopio de munecos luchadores--foto3.jpg", "img/Caleidoscopio de munecos luchadores--foto1.jpg", "img/Caleidoscopio de munecos luchadores--foto2.jpg"],
        link: "content/munecos_luchadores.html",
        category: "Cotidianeidades"
    },
    {
        id: 18,
        title: "Barbie",
        description: "Icono cultural (Nicole)",
        images: ["img/barbie_imagen1.jpg", "img/barbie_imagen 2.jpg", "img/barbie_imagen3.jpg"],
        link: "content/barbie.html",
        category: "Cotidianeidades"
    }
];

// Array para almacenar instancias de Swiper
const swiperInstances = [];

// Verificar si Swiper está disponible
function isSwiperAvailable() {
    if (typeof Swiper === 'undefined') {
        console.error('❌ Swiper no está disponible. Verifica que esté cargado antes de mosaic.js');
        console.log('💡 Solución: Asegúrate de cargar Swiper en index.html:');
        console.log('<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>');
        return false;
    }
    return true;
}

// Función para generar el mosaico 3x6
function generateMosaic() {
    console.log('🚀 Generando mosaico...');
    
    const mosaicContainer = document.querySelector('.mosaic-grid');
    
    if (!mosaicContainer) {
        console.error('❌ Contenedor del mosaico (.mosaic-grid) no encontrado');
        return;
    }
    
    // Limpiar contenedor y detener Swipers anteriores
    swiperInstances.forEach(swiper => {
        if (swiper && typeof swiper.destroy === 'function') {
            swiper.destroy(true, true);
        }
    });
    swiperInstances.length = 0;
    
    mosaicContainer.innerHTML = '';
    
    // Verificar que tenemos exactamente 18 elementos
    if (mosaicItems.length !== 18) {
        console.warn(`⚠️ Se esperaban 18 elementos pero hay ${mosaicItems.length}`);
    }
    
    // Verificar que Swiper esté disponible
    if (!isSwiperAvailable()) {
        console.warn('⚠️ Renderizando mosaico sin Swiper (fallback)');
    }
    
    // Crear elementos del mosaico
    mosaicItems.forEach((item, index) => {
        const row = Math.floor(index / 3) + 1;
        const col = (index % 3) + 1;
        
        const mosaicItem = document.createElement('div');
        mosaicItem.className = `mosaic-item`;
        mosaicItem.setAttribute('data-id', item.id);
        mosaicItem.setAttribute('data-category', item.category);
        mosaicItem.setAttribute('data-position', `${row}-${col}`);
        
        // Contenedor interno
        const mosaicContent = document.createElement('div');
        mosaicContent.className = 'mosaic-content';
        
        // Badge de categoría
        const categoryBadge = document.createElement('div');
        categoryBadge.className = 'mosaic-counter';
        categoryBadge.textContent = index + 1;
        categoryBadge.title = item.category;
        mosaicContent.appendChild(categoryBadge);
        
        // Contenedor Swiper
        const swiperContainer = document.createElement('div');
        swiperContainer.className = 'mosaic-swiper swiper';
        
        // Slides wrapper
        const swiperWrapper = document.createElement('div');
        swiperWrapper.className = 'swiper-wrapper';
        
        // Añadir imágenes al carrusel
        item.images.forEach((imageUrl, imgIndex) => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${item.title} - Imagen ${imgIndex + 1}`;
            img.loading = 'lazy';
            img.decoding = 'async';
            
            // Fallback para imágenes rotas
            img.onerror = function() {
                console.warn(`⚠️ Imagen no encontrada: ${imageUrl}`);
                this.src = `https://source.unsplash.com/random/400x300/?museum,${encodeURIComponent(item.category)}`;
                this.alt = `${item.title} - Imagen de ejemplo`;
            };
            
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        });
        
        swiperContainer.appendChild(swiperWrapper);
        
        // Paginación (solo si hay más de 1 imagen)
        if (item.images.length > 1 && isSwiperAvailable()) {
            const pagination = document.createElement('div');
            pagination.className = 'swiper-pagination';
            swiperContainer.appendChild(pagination);
        }
        
        // Controles de navegación (solo si hay más de 1 imagen)
        if (item.images.length > 1 && isSwiperAvailable()) {
            const nextBtn = document.createElement('div');
            nextBtn.className = 'swiper-button-next';
            nextBtn.setAttribute('aria-label', 'Siguiente imagen');
            
            const prevBtn = document.createElement('div');
            prevBtn.className = 'swiper-button-prev';
            prevBtn.setAttribute('aria-label', 'Imagen anterior');
            
            swiperContainer.appendChild(nextBtn);
            swiperContainer.appendChild(prevBtn);
        }
        
        // Overlay con título y categoría
        const overlay = document.createElement('div');
        overlay.className = 'mosaic-overlay';
        overlay.innerHTML = `
            <div class="mosaic-title">${item.title}</div>
            <div class="mosaic-description">${item.description}</div>
            <div class="mosaic-category" style="font-size: 0.7rem; margin-top: 5px; opacity: 0.8;">
                ${item.category}
            </div>
        `;
        
        mosaicContent.appendChild(swiperContainer);
        mosaicContent.appendChild(overlay);
        mosaicItem.appendChild(mosaicContent);
        
        // Evento de clic para redireccionar
        mosaicItem.addEventListener('click', (e) => {
            // Prevenir clics en controles Swiper
            const isControl = e.target.closest('.swiper-button-next') || 
                             e.target.closest('.swiper-button-prev') ||
                             e.target.closest('.swiper-pagination') ||
                             e.target.closest('.swiper-pagination-bullet');
            
            if (!isControl) {
                window.location.href = item.link;
            }
        });
        
        // Añadir hover effects
        mosaicItem.addEventListener('mouseenter', () => {
            // Activar autoplay si existe
            const instance = swiperInstances[index];
            if (instance && instance.autoplay && instance.autoplay.running === false) {
                instance.autoplay.start();
            }
        });
        
        mosaicItem.addEventListener('mouseleave', () => {
            // Pausar autoplay si existe
            const instance = swiperInstances[index];
            if (instance && instance.autoplay && instance.autoplay.running) {
                instance.autoplay.stop();
            }
        });
        
        mosaicContainer.appendChild(mosaicItem);
    });
    
    console.log(`✅ Mosaico renderizado: ${mosaicItems.length} elementos`);
    
    // Inicializar Swipers después de que el DOM esté listo
    if (isSwiperAvailable()) {
        setTimeout(initializeSwipers, 300);
    } else {
        // Fallback: mostrar solo primera imagen
        setupImageFallback();
    }
}

// Función para inicializar todos los Swipers
function initializeSwipers() {
    console.log('🔄 Inicializando Swipers...');
    
    const mosaicItems = document.querySelectorAll('.mosaic-item');
    let initializedCount = 0;
    
    mosaicItems.forEach((item, index) => {
        const swiperEl = item.querySelector('.mosaic-swiper');
        if (!swiperEl) {
            console.warn(`⚠️ No se encontró swiper en item ${index + 1}`);
            return;
        }
        
        const images = item.querySelectorAll('.swiper-slide img');
        const hasMultipleImages = images.length > 1;
        
        console.log(`📸 Item ${index + 1}: ${images.length} imágenes`);
        
        // Configuración básica
        const swiperConfig = {
            direction: 'horizontal',
            loop: hasMultipleImages,
            speed: 800,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            grabCursor: true,
            watchSlidesProgress: true,
            observer: true, // Observar cambios en el DOM
            observeParents: true, // Observar cambios en padres
            init: false, // Inicializar manualmente
            on: {
                init: function() {
                    console.log(`✅ Swiper ${index + 1} inicializado`);
                    initializedCount++;
                },
                error: function(e) {
                    console.error(`❌ Error en Swiper ${index + 1}:`, e);
                }
            }
        };
        
        // Autoplay solo para múltiples imágenes
        if (hasMultipleImages) {
            swiperConfig.autoplay = {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            };
        }
        
        // Paginación
        const paginationEl = item.querySelector('.swiper-pagination');
        if (paginationEl && hasMultipleImages) {
            swiperConfig.pagination = {
                el: paginationEl,
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3
            };
        }
        
        // Navegación
        const nextBtn = item.querySelector('.swiper-button-next');
        const prevBtn = item.querySelector('.swiper-button-prev');
        
        if (nextBtn && prevBtn && hasMultipleImages) {
            swiperConfig.navigation = {
                nextEl: nextBtn,
                prevEl: prevBtn,
            };
        }
        
        try {
            // Crear instancia
            const swiperInstance = new Swiper(swiperEl, swiperConfig);
            
            // Inicializar después de un breve delay para asegurar renderizado
            setTimeout(() => {
                try {
                    swiperInstance.init();
                    swiperInstances[index] = swiperInstance;
                    
                    // Actualizar después de la inicialización
                    swiperInstance.update();
                } catch (initError) {
                    console.error(`❌ Error al inicializar Swiper ${index + 1}:`, initError);
                    setupSingleImageFallback(item, images[0]);
                }
            }, 100);
            
        } catch (error) {
            console.error(`❌ Error creando Swiper ${index + 1}:`, error);
            setupSingleImageFallback(item, images[0]);
        }
    });
    
    console.log(`✅ ${initializedCount} Swipers inicializados de ${mosaicItems.length} items`);
}

// Fallback para imágenes individuales
function setupSingleImageFallback(item, image) {
    if (image) {
        const swiperEl = item.querySelector('.mosaic-swiper');
        if (swiperEl) {
            swiperEl.style.overflow = 'hidden';
            swiperEl.style.position = 'relative';
            
            // Ocultar controles
            const nextBtn = item.querySelector('.swiper-button-next');
            const prevBtn = item.querySelector('.swiper-button-prev');
            const pagination = item.querySelector('.swiper-pagination');
            
            if (nextBtn) nextBtn.style.display = 'none';
            if (prevBtn) prevBtn.style.display = 'none';
            if (pagination) pagination.style.display = 'none';
            
            // Asegurar que la imagen se vea bien
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.objectFit = 'cover';
            image.style.display = 'block';
        }
    }
}

// Fallback completo si Swiper no está disponible
function setupImageFallback() {
    console.log('🔄 Configurando fallback de imágenes...');
    
    const mosaicItems = document.querySelectorAll('.mosaic-item');
    mosaicItems.forEach((item, index) => {
        const images = item.querySelectorAll('img');
        if (images.length > 0) {
            setupSingleImageFallback(item, images[0]);
        }
    });
}

// Función para ajustar altura de los items
function adjustMosaicItemsHeight() {
    const mosaicItems = document.querySelectorAll('.mosaic-item');
    
    if (mosaicItems.length > 0) {
        const firstItem = mosaicItems[0];
        const width = firstItem.offsetWidth;
        const height = width * (2/3); // Ratio 3:2
        
        console.log(`📐 Ajustando altura: ${width}px → ${height}px`);
        
        mosaicItems.forEach(item => {
            item.style.height = `${height}px`;
        });
    }
}

// Debug helper
function debugMosaic() {
    console.log('=== 🐛 DEBUG MOSAICO ===');
    console.log('Swiper disponible:', typeof Swiper !== 'undefined' ? '✅ SÍ' : '❌ NO');
    console.log('Items mosaico:', document.querySelectorAll('.mosaic-item').length);
    console.log('Swipers containers:', document.querySelectorAll('.mosaic-swiper').length);
    console.log('Instancias Swiper:', swiperInstances.length);
    
    // Verificar CSS
    const firstSwiper = document.querySelector('.mosaic-swiper');
    if (firstSwiper) {
        const computedStyle = window.getComputedStyle(firstSwiper);
        console.log('CSS Swiper:', {
            display: computedStyle.display,
            overflow: computedStyle.overflow,
            position: computedStyle.position
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM listo, generando mosaico...');
    
    // Esperar a que jQuery esté listo si es necesario
    if (typeof jQuery !== 'undefined') {
        $(document).ready(() => {
            generateMosaic();
        });
    } else {
        generateMosaic();
    }
    
    // Ajustar altura después de generar
    setTimeout(adjustMosaicItemsHeight, 500);
    
    // Ajustar al redimensionar
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            adjustMosaicItemsHeight();
            
            // Actualizar Swipers
            swiperInstances.forEach((swiper, index) => {
                if (swiper && typeof swiper.update === 'function') {
                    try {
                        swiper.update();
                        swiper.updateSlides();
                        console.log(`🔄 Swiper ${index + 1} actualizado por resize`);
                    } catch (error) {
                        console.error(`❌ Error actualizando Swiper ${index + 1}:`, error);
                    }
                }
            });
        }, 250);
    });
});

// Inicializar después de cargar todas las imágenes
window.addEventListener('load', () => {
    console.log('🎉 Página completamente cargada');
    
    setTimeout(() => {
        adjustMosaicItemsHeight();
        debugMosaic();
        
        const items = document.querySelectorAll('.mosaic-item');
        console.log(`📊 Grid final: ${items.length} elementos`);
        
        if (items.length === 18) {
            console.log('🎯 Perfecto: 3 columnas × 6 filas = 18 elementos');
        }
    }, 1000);
});

// Manejar errores no capturados
window.addEventListener('error', function(e) {
    if (e.message.includes('Swiper') || e.filename && e.filename.includes('mosaic')) {
        console.error('❌ Error crítico en mosaico:', e);
        setupImageFallback();
    }
});