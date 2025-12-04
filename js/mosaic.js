// MOSAICO 3x6 - EXACTAMENTE 18 ELEMENTOS (nueva estructura)
const mosaicItems = [
    // Colecciones Oseas
    {
        id: 1,
        title: "Colecciones Oseas",
        description: "Estudios osteológicos y antropológicos",
        images: ["img/colecciones_oseas_1.jpg", "img/colecciones_oseas_2.jpg", "img/colecciones_oseas_3.jpg"],
        link: "content/coleccionesOseas.html",
<<<<<<< HEAD
        category: "Colecciones Oseas"
    },
    {
        id: 2,
        title: "Individuo 150",
        description: "Memoria en resistencia bajo la ciudad (Vanessa)",
        images: ["img/individuo_150.jpg", "https://source.unsplash.com/random/400x400/?subway", "https://source.unsplash.com/random/400x400/?archaeology"],
        link: "content/individuo150.html",
        category: "Colecciones Oseas"
=======
        size: "medium",
        carousel: true
    },
    {
        id: 2,
        title: "Omichicahuaztli",
        description: "Instrumento musical prehispánico",
        images: [
            "img/Omichicahuaztli Foto 1.jpeg",
            "img/Omichicahuaztli Foto 2.jpeg",  //ya
            "img/Omichicahuaztli Foto 3.jpeg"
        ],
        link: "content/Omichicahuaztli.html",
        size: "medium",
        carousel: true
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
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
<<<<<<< HEAD
        category: "Falsos y réplicas/restauraciones"
=======
        size: "medium",
        carousel: false
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    },
    {
        id: 5,
        title: "Falsos",
<<<<<<< HEAD
        description: "Colección de falsificaciones (Isabela)",
        images: ["img/Falsos_foto 1.jpg", "img/Falso_foto 2.jpg", "img/Falsos_ foto 3.gif"],
        link: "content/falsos.html",
        category: "Falsos y réplicas/restauraciones"
=======
        description: "Colección de falsificaciones",
        images: [
            "img/Falsos_foto 1.jpg",
            "img/Falso_foto 2.jpg",
            "img/Falsos_ foto 3.gif"                       //ya
        ],
        link: "content/falsos.html",
        size: "medium",
        carousel: true
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    },
    {
        id: 6,
        title: "Maqueta Templo Mayor",
        description: "Réplica arquitectónica (Samanta)",
        images: ["img/Templo Mayor-imagen1.jpg", "https://source.unsplash.com/random/400x400/?temple", "https://source.unsplash.com/random/400x400/?model"],
        link: "content/maqueta_templo_mayor.html",
<<<<<<< HEAD
        category: "Falsos y réplicas/restauraciones"
=======
        size: "medium",
        carousel: false
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    },
    
    // Cultura en disputa
    {
        id: 7,
        title: "Tonalámatl",
        description: "Códice y saqueos históricos (Aaron)",
        images: ["img/tonalamatl.jpg", "img/tonalamatl_2.jpg", "https://source.unsplash.com/random/400x400/?codex"],
        link: "content/tonalamatl.html",
<<<<<<< HEAD
        category: "Cultura en disputa"
    },
    {
        id: 8,
        title: "Crâneo Mixteco",
        description: "Devoluciones y diplomacia (Ana)",
        images: ["img/cráneo mixteco - foto 1.jpg", "https://source.unsplash.com/random/400x400/?skull", "https://source.unsplash.com/random/400x400/?artifact"],
=======
        size: "medium",
        carousel: true
    },
    {
        id: 8,
        title: "Cráneo Mixteco",
        description: "Devoluciones y diplomacia",
        image: "img/cráneo mixteco - foto 1.jpg", //Ya
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
        link: "content/craneo_mixteco.html",
        category: "Cultura en disputa"
    },
    
    // Archivos vivos
    {
        id: 9,
        title: "Xochipilli",
<<<<<<< HEAD
        description: "Archivos vivos y cultura (Daniela)",
        images: ["img/Xochipilli Fuente.DanielaJuarez.foto1.jpg", "https://source.unsplash.com/random/400x400/?statue", "https://source.unsplash.com/random/400x400/?aztec"],
        link: "content/xochipilli.html",
        category: "Archivos vivos"
=======
        description: "Archivos vivos y cultura",
        image: "img/Xochipilli Fuente.DanielaJuarez.foto1.jpg",
        link: "content/xochipilli.html",   //ya
        size: "medium",
        carousel: false
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    },
    {
        id: 10,
        title: "Códice Nunaha",
        description: "Documentos históricos (Miranda)",
        images: ["img/Codice nunaha-Foto 1.jpg", "https://source.unsplash.com/random/400x400/?document", "https://source.unsplash.com/random/400x400/?manuscript"],
        link: "content/codice_nunaha.html",
<<<<<<< HEAD
        category: "Archivos vivos"
=======
        size: "medium",
        carousel: false
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
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
<<<<<<< HEAD
        category: "Ingenierías"
=======
        size: "medium",
        carousel: true
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    },
    
    // Sobre ruedas
    {
        id: 13,
        title: "Carroza de Carlota",
        description: "Transporte histórico (Andrea)",
        images: ["img/La carroza de Carlota- foto 1_.jpg", "img/La carroza de Carlota- foto 2.jpg", "https://source.unsplash.com/random/400x400/?carriage"],
        link: "content/carroza_carlota.html",
<<<<<<< HEAD
        category: "Sobre ruedas"
=======
        size: "medium",
        carousel: false
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
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
<<<<<<< HEAD
        category: "Ciencia y arte"
=======
        size: "medium",
        carousel: true
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    },
    
    // Cotidianeidades
    {
        id: 16,
        title: "Cabina Telefónica",
        description: "Cotidianeidad y comunicación (Aranza)",
        images: ["img/Telefono TELMEX - imagen 1.jpg", "https://source.unsplash.com/random/400x400/?telephone", "https://source.unsplash.com/random/400x400/?vintage"],
        link: "content/cabina_telefonica.html",
<<<<<<< HEAD
        category: "Cotidianeidades"
=======
        size: "medium",
        carousel: false
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    },
    {
        id: 17,
        title: "Muñecos Luchadores",
<<<<<<< HEAD
        description: "Caleidoscopio cultural (Diego)",
        images: ["img/Caleidoscopio de munecos luchadores--foto3.jpg", "img/Caleidoscopio de munecos luchadores--foto1.jpg", "img/Caleidoscopio de munecos luchadores--foto2.jpg"],
=======
        description: "Caleidoscopio cultural",
        images: [
            "img/Caleidoscopio de munecos luchadores--foto3.jpg",
            "img/Caleidoscopio de munecos luchadores--foto1.jpg",  //ya
            "img/Caleidoscopio de munecos luchadores--foto2.jpg"
        ],
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
        link: "content/munecos_luchadores.html",
        category: "Cotidianeidades"
    },
    {
        id: 18,
        title: "Barbie",
<<<<<<< HEAD
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
    
=======
        description: "Icono cultural y cotidianeidad",
        image: "img/barbie.jpg",
        link: "content/barbie.html",               //sin fotos
        size: "medium",
        carousel: false
    },
    {
        id: 19,
        title: "Contacto",
        description: "Información y ubicación",
        image: "img/contacto.jpg",                //YA
        link: "contacto.html",
        size: "medium",
        carousel: false
    }
];

// Clase para gestionar el carrusel de cada elemento
class CarouselManager {
    constructor(element, images) {
        this.element = element;
        this.images = images;
        this.currentIndex = 0;
        this.interval = null;
        this.isPaused = false;

        this.init();
    }

    init() {
        // Crear contenedor del carrusel
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'mosaic-carousel';

        // Añadir imágenes al carrusel
        this.images.forEach((imageUrl, index) => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = '';
            img.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            img.loading = 'lazy';
            // Manejar errores de imagen
            img.onerror = function () {
                this.src = 'https://source.unsplash.com/random/400x400/?museum,artifact,history';
            };
            carouselContainer.appendChild(img);
        });

        // Crear indicadores solo si hay más de 1 imagen
        if (this.images.length > 1) {
            const indicators = document.createElement('div');
            indicators.className = 'carousel-indicators';

            this.images.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.goToSlide(index);
                });
                indicators.appendChild(dot);
            });

            carouselContainer.appendChild(indicators);
        }

        // Reemplazar contenido del elemento
        const overlay = this.element.querySelector('.mosaic-overlay') ||
            this.element.querySelector('.mosaic-overlay-placeholder');
        this.element.innerHTML = '';
        this.element.appendChild(carouselContainer);
        if (overlay) {
            this.element.appendChild(overlay);
        }

        // Iniciar carrusel automático solo si hay más de 1 imagen
        if (this.images.length > 1) {
            this.startAutoPlay();

            // Pausar al hacer hover
            this.element.addEventListener('mouseenter', () => {
                this.pause();
            });

            this.element.addEventListener('mouseleave', () => {
                this.resume();
            });
        }
    }

    startAutoPlay() {
        this.interval = setInterval(() => {
            if (!this.isPaused) {
                this.next();
            }
        }, 3000);
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    next() {
        this.goToSlide((this.currentIndex + 1) % this.images.length);
    }

    goToSlide(index) {
        // Obtener elementos actuales
        const slides = this.element.querySelectorAll('.carousel-slide');
        const dots = this.element.querySelectorAll('.carousel-dot');

        // Remover clase activa actual
        if (slides[this.currentIndex]) {
            slides[this.currentIndex].classList.remove('active');
        }
        if (dots[this.currentIndex]) {
            dots[this.currentIndex].classList.remove('active');
        }

        // Añadir clase activa nueva
        this.currentIndex = index;
        if (slides[this.currentIndex]) {
            slides[this.currentIndex].classList.add('active');
        }
        if (dots[this.currentIndex]) {
            dots[this.currentIndex].classList.add('active');
        }
    }

    destroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

// Algoritmo de empaquetamiento para organizar elementos sin espacios
class MosaicPacker {
    constructor(containerWidth) {
        this.containerWidth = containerWidth;
        this.rows = [];
        this.currentY = 0;
    }

    findBestPosition(width, height) {
        let bestPosition = { x: 0, y: this.currentY };
        let bestFit = Infinity;

        for (let i = 0; i < this.rows.length; i++) {
            const row = this.rows[i];
            const availableSpace = this.containerWidth - row.currentX;

            if (width <= availableSpace && row.height >= height) {
                const fit = availableSpace - width;
                if (fit < bestFit) {
                    bestFit = fit;
                    bestPosition = { x: row.currentX, y: row.y };
                }
            }
        }

        if (bestFit === Infinity) {
            bestPosition = { x: 0, y: this.currentY };
            this.rows.push({
                y: this.currentY,
                height: height,
                currentX: width
            });
            this.currentY += height;
        } else {
            const rowIndex = this.rows.findIndex(row =>
                row.y === bestPosition.y && row.height >= height
            );
            if (rowIndex !== -1) {
                this.rows[rowIndex].currentX += width;
            }
        }

        return bestPosition;
    }

    packItems(items) {
        const sortedItems = [...items].sort((a, b) => {
            const areaA = this.getItemArea(a);
            const areaB = this.getItemArea(b);
            return areaB - areaA;
        });

        const positions = [];

        sortedItems.forEach(item => {
            const { width, height } = this.getItemDimensions(item.size);
            const position = this.findBestPosition(width, height);
            positions.push({
                item: item,
                x: position.x,
                y: position.y,
                width: width,
                height: height
            });
        });

        return positions;
    }

    getItemDimensions(size) {
        const dimensions = {
            'small': { width: 200, height: 200 },
            'medium': { width: 300, height: 305 },
            'large': { width: 400, height: 400 },
            'wide': { width: 600, height: 200 },
            'tall': { width: 200, height: 400 },
            'xlarge': { width: 600, height: 400 }
        };
        return dimensions[size] || dimensions.wide;
    }

    getItemArea(item) {
        const dim = this.getItemDimensions(item.size);
        return dim.width * dim.height;
    }
}

// Array para almacenar los gestores de carrusel
const carouselManagers = [];

// Función para generar el mosaico sin espacios
function generateMosaic() {
    const mosaicContainer = document.getElementById('mosaicPackery');

>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
    if (!mosaicContainer) {
        console.error('Contenedor del mosaico no encontrado');
        return;
    }
<<<<<<< HEAD
    
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
=======

    // Limpiar mosaico existente y detener carruseles
    carouselManagers.forEach(manager => manager.destroy());
    carouselManagers.length = 0;
    mosaicContainer.innerHTML = '';

    // Obtener ancho del contenedor
    const containerWidth = mosaicContainer.offsetWidth;

    // Crear empaquetador
    const packer = new MosaicPacker(containerWidth);

    // Organizar elementos
    const packedItems = packer.packItems(mosaicItems);

    // Crear y posicionar elementos
    packedItems.forEach(({ item, x, y, width, height }) => {
        const mosaicItem = document.createElement('div');
        mosaicItem.className = `mosaic-item mosaic-item--${item.size}`;
        mosaicItem.setAttribute('data-id', item.id);

        // Crear overlay
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
        const overlay = document.createElement('div');
        overlay.className = 'mosaic-overlay';
        overlay.innerHTML = `
            <div class="mosaic-title">${item.title}</div>
            <div class="mosaic-description">${item.description}</div>
            <div class="mosaic-category" style="font-size: 0.7rem; margin-top: 5px; opacity: 0.8;">
                ${item.category}
            </div>
        `;
<<<<<<< HEAD
        
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
=======

        mosaicItem.appendChild(overlay);

        // Posicionar elemento
        mosaicItem.style.position = 'absolute';
        mosaicItem.style.left = `${x}px`;
        mosaicItem.style.top = `${y}px`;
        mosaicItem.style.width = `${width}px`;
        mosaicItem.style.height = `${height}px`;

        // Añadir evento de clic para redireccionar
        mosaicItem.addEventListener('click', () => {
            window.location.href = item.link;
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
        });

        mosaicContainer.appendChild(mosaicItem);
<<<<<<< HEAD
    });
    
    console.log(`Mosaico renderizado: ${mosaicItems.length} elementos`);
    
    // Inicializar Swipers después de un breve delay
    setTimeout(initializeSwipers, 100);
=======

        // Inicializar carrusel solo si el elemento lo requiere
        if (item.carousel && item.images && item.images.length > 0) {
            const carouselManager = new CarouselManager(mosaicItem, item.images);
            carouselManagers.push(carouselManager);

            // Añadir clase para indicar que tiene carrusel
            mosaicItem.classList.add('has-carousel');
        } else {
            // Para elementos sin carrusel, mostrar imagen estática
            const staticImage = document.createElement('img');
            staticImage.src = item.image || (item.images && item.images[0]) || 'https://source.unsplash.com/random/400x400/?museum';
            staticImage.alt = item.title;
            staticImage.className = 'static-image';
            staticImage.loading = 'lazy';
            // Manejar errores de imagen
            staticImage.onerror = function () {
                this.src = 'https://source.unsplash.com/random/400x400/?museum,artifact,history';
            };

            // Insertar la imagen antes del overlay
            mosaicItem.insertBefore(staticImage, overlay);

            // Añadir clase para indicar que no tiene carrusel
            mosaicItem.classList.add('no-carousel');
        }
    });

    // Establecer altura del contenedor
    mosaicContainer.style.height = `${packer.currentY}px`;

    console.log('Mosaico generado correctamente con ' + packedItems.length + ' elementos');
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
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
<<<<<<< HEAD
    
    setTimeout(adjustMosaicItemsHeight, 100);
    
    // Ajustar al redimensionar
=======

    // Reorganizar cuando se redimensiona la ventana
>>>>>>> f2c1a810703a617f3323cf42ab36f3b415ef0bbd
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