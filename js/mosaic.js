// Datos para los elementos del mosaico - algunos con carrusel, otros sin carrusel
const mosaicItems = [
    {
        id: 1,
        title: "Omichicahuaztli",
        description: "Colecciones óseas y Omichicahuaztli",
        images: [
            "/img/Omichicahuaztli Foto 1.jpeg",
            "/img/Omichicahuaztli Foto 2.jpeg",
            "/img/Omichicahuaztli Foto 3.jpeg"
        ],
        link: "/content/Omichicahuaztli.html",
        size: "large",
        carousel: true  // ESTE ELEMENTO SÍ TIENE CARRUSEL
    },
    {
        id: 2,
        title: "Falsos y Réplicas",
        description: "Tumba de Pakal y otros falsos",
        image: "https://source.unsplash.com/random/800x400/?fake,replica", // Imagen única
        link: "falsos_tumba_pakal.html",
        size: "wide",
        carousel: false  // ESTE ELEMENTO NO TIENE CARRUSEL
    },
    {
        id: 3,
        title: "Saqueos / Diplomacia",
        description: "Tonalámatl y más",
        images: [
            "/img/tonalamatl.jpg",
            "https://source.unsplash.com/random/1200x400/?treasure,history"
        ],
        link: "saqueos_tonalamatl.html",
        size: "large",
        carousel: true  // SÍ TIENE CARRUSEL
    },
    {
        id: 4,
        title: "Archivos Vivos",
        description: "Xochipilli, Códice y Cuauhtémoc",
        image: "https://source.unsplash.com/random/400x800/?archive,codex",
        link: "archivos_xochipilli.html",
        size: "tall",
        carousel: false  // NO TIENE CARRUSEL
    },
    {
        id: 5,
        title: "Ingenierías",
        description: "Mural DR y Tlaltecuhtli",
        images: [
            "https://source.unsplash.com/random/400x400/?engineering,monument"
        ],
        link: "ingenierias_mural_dr.html",
        size: "wide",
        carousel: true  // SÍ TIENE CARRUSEL
    },
    {
        id: 6,
        title: "Sobre Ruedas",
        description: "Carroza de Carlota y juguetes",
        image: "https://source.unsplash.com/random/800x400/?wheels,carriage",
        link: "ruedas_carlota.html",
        size: "medium",
        carousel: false  // NO TIENE CARRUSEL
    },
    {
        id: 7,
        title: "Ciencia y Arte",
        description: "Pulque y pinturas de casta",
        images: [
            "https://source.unsplash.com/random/400x400/?science,art",
            "https://source.unsplash.com/random/400x400/?painting,history"
        ],
        link: "ciencia_pulque.html",
        size: "small",
        carousel: true  // SÍ TIENE CARRUSEL
    },
    {
        id: 8,
        title: "Contacto",
        description: "Información de contacto",
        image: "https://source.unsplash.com/random/400x800/?contact,location",
        link: "contacto.html",
        size: "tall",
        carousel: false  // NO TIENE CARRUSEL
    },
    {
        id: 9,
        title: "Falsos Generales",
        description: "Colección de falsificaciones",
        images: [
            "https://source.unsplash.com/random/1200x400/?forgery,artifact",
            "https://source.unsplash.com/random/1200x400/?fake,sculpture"
        ],
        link: "falsos_generales.html",
        size: "wide",
        carousel: true  // SÍ TIENE CARRUSEL
    },
    {
        id: 10,
        title: "Códice",
        description: "Documentos antiguos",
        image: "https://source.unsplash.com/random/400x400/?manuscript,codex",
        link: "archivos_codice.html",
        size: "small",
        carousel: false  // NO TIENE CARRUSEL
    },
    {
        id: 11,
        title: "Cuauhtémoc",
        description: "Archivos históricos",
        image: "https://source.unsplash.com/random/800x400/?emperor,history",
        link: "archivos_cuauhtemoc.html",
        size: "medium",
        carousel: false  // NO TIENE CARRUSEL
    },
    {
        id: 12,
        title: "Tlaltecuhtli",
        description: "Escultura e ingeniería",
        images: [
            "https://source.unsplash.com/random/1200x800/?sculpture,monolith",
            "https://source.unsplash.com/random/1200x800/?stone,carving",
            "https://source.unsplash.com/random/1200x800/?monument,ancient"
        ],
        link: "ingenierias_tlaltecuhtli.html",
        size: "wide",
        carousel: true  // SÍ TIENE CARRUSEL
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
        }, 2000); // Cambiar cada 1 segundo
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
            'medium': { width: 400, height: 200 },
            'large': { width: 400, height: 400 },
            'wide': { width: 600, height: 200 },
            'tall': { width: 200, height: 400 },
            'xlarge': { width: 600, height: 400 }
        };
        return dimensions[size] || dimensions.small;
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
        const overlay = document.createElement('div');
        overlay.className = 'mosaic-overlay';
        overlay.innerHTML = `
            <div class="mosaic-title">${item.title}</div>
            <div class="mosaic-description">${item.description}</div>
        `;
        
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
        });
        
        mosaicContainer.appendChild(mosaicItem);
        
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
            
            // Insertar la imagen antes del overlay
            mosaicItem.insertBefore(staticImage, overlay);
            
            // Añadir clase para indicar que no tiene carrusel
            mosaicItem.classList.add('no-carousel');
        }
    });
    
    // Establecer altura del contenedor
    mosaicContainer.style.height = `${packer.currentY}px`;
}

// Inicializar el mosaico cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    generateMosaic();
    
    // Reorganizar cuando se redimensiona la ventana
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(generateMosaic, 250);
    });
});

// También reorganizar cuando todas las imágenes estén cargadas
window.addEventListener('load', generateMosaic);