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
        images: ["img/individuo_150.jpg", "https://source.unsplash.com/random/400x400/?subway", "https://source.unsplash.com/random/400x400/?archaeology"],
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
        images: ["img/Templo Mayor-imagen1.jpg", "https://source.unsplash.com/random/400x400/?temple", "https://source.unsplash.com/random/400x400/?model"],
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
        images: ["img/cráneo mixteco - foto 1.jpg", "https://source.unsplash.com/random/400x400/?skull", "https://source.unsplash.com/random/400x400/?artifact"],
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
        title: "Códice Nunaha",
        description: "Documentos históricos (Miranda)",
        images: ["img/Codice nunaha-Foto 1.jpg", "https://source.unsplash.com/random/400x400/?document", "https://source.unsplash.com/random/400x400/?manuscript"],
        link: "content/codice_nunaha.html",
        category: "Archivos vivos"
    },
    {
        id: 11,
        title: "Cuauhtémoc",
        description: "Aquí le quemaron las patas (Raziel)",
        images: ["img/Cuauhtémoc. foto 1..jpg", "https://source.unsplash.com/random/400x400/?portrait", "https://source.unsplash.com/random/400x400/?history"],
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
        images: ["img/La carroza de Carlota- foto 1_.jpg", "img/La carroza de Carlota- foto 2.jpg", "https://source.unsplash.com/random/400x400/?carriage"],
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
        images: ["img/Telefono TELMEX - imagen 1.jpg", "https://source.unsplash.com/random/400x400/?telephone", "https://source.unsplash.com/random/400x400/?vintage"],
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
        images: ["img/barbie.jpg", "https://source.unsplash.com/random/400x400/?doll", "https://source.unsplash.com/random/400x400/?toy"],
        link: "content/barbie.html",
        category: "Cotidianeidades"
    }
];

// Array para almacenar instancias de Swiper
const swiperInstances = [];

// Función para generar el mosaico 3x6
function generateMosaic() {
    const mosaicContainer = document.querySelector('.mosaic-grid');
    
    if (!mosaicContainer) {
        console.error('Contenedor del mosaico no encontrado');
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
        console.warn(`Se esperaban 18 elementos pero hay ${mosaicItems.length}`);
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
            
            img.onerror = function() {
                this.src = `https://source.unsplash.com/random/400x300/?museum,${encodeURIComponent(item.category)}`;
                this.alt = `${item.title} - Imagen de ejemplo`;
            };
            
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        });
        
        swiperContainer.appendChild(swiperWrapper);
        
        // Paginación (solo si hay más de 1 imagen)
        if (item.images.length > 1) {
            const pagination = document.createElement('div');
            pagination.className = 'swiper-pagination';
            swiperContainer.appendChild(pagination);
        }
        
        // Controles de navegación
        const nextBtn = document.createElement('div');
        nextBtn.className = 'swiper-button-next';
        nextBtn.setAttribute('aria-label', 'Siguiente imagen');
        
        const prevBtn = document.createElement('div');
        prevBtn.className = 'swiper-button-prev';
        prevBtn.setAttribute('aria-label', 'Imagen anterior');
        
        swiperContainer.appendChild(nextBtn);
        swiperContainer.appendChild(prevBtn);
        
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
            const isControl = e.target.closest('.swiper-button-next') || 
                             e.target.closest('.swiper-button-prev') ||
                             e.target.closest('.swiper-pagination');
            
            if (!isControl) {
                window.location.href = item.link;
            }
        });
        
        mosaicContainer.appendChild(mosaicItem);
    });
    
    console.log(`Mosaico renderizado: ${mosaicItems.length} elementos`);
    
    // Inicializar Swipers después de un breve delay
    setTimeout(initializeSwipers, 100);
}

// Función para inicializar todos los Swipers
function initializeSwipers() {
    const mosaicItems = document.querySelectorAll('.mosaic-item');
    
    mosaicItems.forEach((item, index) => {
        const swiperEl = item.querySelector('.mosaic-swiper');
        if (!swiperEl) return;
        
        const images = item.querySelectorAll('.swiper-slide img');
        const hasMultipleImages = images.length > 1;
        
        const swiperConfig = {
            direction: 'horizontal',
            loop: hasMultipleImages,
            speed: 500,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: hasMultipleImages ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            } : false,
            grabCursor: true,
            watchSlidesProgress: true
        };
        
        if (hasMultipleImages) {
            swiperConfig.pagination = {
                el: item.querySelector('.swiper-pagination'),
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3
            };
        }
        
        swiperConfig.navigation = {
            nextEl: item.querySelector('.swiper-button-next'),
            prevEl: item.querySelector('.swiper-button-prev'),
        };
        
        const swiperInstance = new Swiper(swiperEl, swiperConfig);
        swiperInstances.push(swiperInstance);
    });
    
    console.log(`${swiperInstances.length} carruseles Swiper inicializados`);
}

// Función para ajustar altura de los items
function adjustMosaicItemsHeight() {
    const mosaicItems = document.querySelectorAll('.mosaic-item');
    
    if (mosaicItems.length > 0) {
        const firstItem = mosaicItems[0];
        const width = firstItem.offsetWidth;
        const height = width * (2/3);
        
        mosaicItems.forEach(item => {
            item.style.height = `${height}px`;
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    generateMosaic();
    
    setTimeout(adjustMosaicItemsHeight, 100);
    
    // Ajustar al redimensionar
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            adjustMosaicItemsHeight();
            
            swiperInstances.forEach(swiper => {
                if (swiper && typeof swiper.update === 'function') {
                    swiper.update();
                }
            });
        }, 250);
    });
});

// Inicializar después de cargar todas las imágenes
window.addEventListener('load', () => {
    adjustMosaicItemsHeight();
    
    setTimeout(() => {
        const items = document.querySelectorAll('.mosaic-item');
        console.log(`Grid 3x6 final: ${items.length} elementos`);
        
        if (items.length === 18) {
            console.log('Perfecto: 3 columnas × 6 filas = 18 elementos');
            
            // Mostrar distribución por categorías
            const categories = {};
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                categories[category] = (categories[category] || 0) + 1;
            });
            
            console.log('Distribución por categorías:', categories);
        }
    }, 500);
});