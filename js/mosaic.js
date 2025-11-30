// Datos para los elementos del mosaico - algunos con carrusel, otros sin carrusel
const mosaicItems = [
    {
        id: 1,
        title: "Colecciones óseas",
        description: "Restos humanos y análisis óseo",
        images: [
            "img/colecciones_oseas_1.jpg",
            "img/colecciones_oseas_2.jpg",
            "img/colecciones_oseas_3.jpg"  //REVISAR
        ],
        link: "content/coleccionesOseas.html",
        size: "large",
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
        size: "wide",
        carousel: true
    },
    {
        id: 3,
        title: "Individuo 150",
        description: "Memoria en resistencia bajo la ciudad",
        image: "img/individuo_150.jpg",                         //SIN IMAGEN
        link: "content/individuo150.html",
        size: "medium",
        carousel: false
    },
    {
        id: 4,
        title: "Tumba de Pakal",
        description: "Falsos y réplicas arqueológicas",
        image: "img/Tumba_de_Pakal.jpeg",                 //YA
        link: "content/tumba_pakal.html",
        size: "large",
        carousel: false
    },
    {
        id: 5,
        title: "Falsos",
        description: "Colección de falsificaciones",
        images: [
            "img/Falsos_foto 1.jpg",                         
            "img/Falso_foto 2.jpg", 
            "img/Falsos_ foto 3.gif"                       //ya
        ],
        link: "content/falsos.html",
        size: "wide",
        carousel: true
    },
    {
        id: 6,
        title: "Maqueta Templo Mayor",
        description: "Réplica arquitectónica",
        image: "img/Templo Mayor-imagen1.jpg",                    //YA
        link: "content/maqueta_templo_mayor.html",
        size: "tall",
        carousel: false
    },
    {
        id: 7,
        title: "Tonalámatl",
        description: "Códice y saqueos históricos",
        images: [
            "img/tonalamatl.jpg",
            "img/tonalamatl_2.jpg"            //Ya
        ],
        link: "content/tonalamatl.html",
        size: "large",
        carousel: true
    },
    {
        id: 8,
        title: "Crâneo Mixteco",
        description: "Devoluciones y diplomacia",
        image: "img/cráneo mixteco - foto 1.jpg", //Ya
        link: "content/craneo_mixteco.html",
        size: "medium",
        carousel: false
    },
    {
        id: 9,
        title: "Xochipilli",
        description: "Archivos vivos y cultura",
        image: "img/Xochipilli Fuente.DanielaJuarez.foto1.jpg",
        link: "content/xochipilli.html",   //ya
        size: "tall",
        carousel: false
    },
    {
        id: 10,
        title: "Códice Nunaha",
        description: "Documentos históricos",
        image: "img/Codice nunaha-Foto 1.jpg", //Ya
        link: "content/codice_nunaha.html",
        size: "small",
        carousel: false
    },
    {
        id: 11,
        title: "Cuauhtémoc",
        description: "Aquí le quemaron las patas",
        image: "img/Cuauhtémoc. foto 1..jpg",                  //YA
        link: "content/cuauhtemoc.html",
        size: "medium",
        carousel: false
    },
    {
        id: 12,
        title: "Tlaltecuhtli",
        description: "Ingeniería y movimiento",
        images: [
            "img/la_tlaltecuhtli_1.png",
            "img/la_tlaltecuhtli_2.png"  //ya
        ],
        link: "content/tlaltecuhtli.html",
        size: "xlarge",
        carousel: true
    },
    {
        id: 13,
        title: "Carroza de Carlota",
        description: "Transporte histórico sobre ruedas",
        image: "img/La carroza de Carlota- foto 1_.jpg",             //ya                         
        link: "content/carroza_carlota.html",
        size: "wide",
        carousel: false
    },
    {
        id: 14,
        title: "Descubrimiento del Pulque",
        description: "Ciencia y arte ancestral",
        image: "img/eldescubrimientodelpulque--foto1.png",                          //YA
        link: "content/pulque.html",
        size: "medium",
        carousel: false
    },
    {
        id: 15,
        title: "Pinturas de Casta",
        description: "Arte y clasificación social",
        images: [
            "img/Pintura de castas foto 1.jpg", //ya
        ],
        link: "content/pinturas_casta.html",
        size: "large",
        carousel: true
    },
    {
        id: 16,
        title: "Cabina Telefónica",
        description: "Cotidianeidades y comunicación",
        image: "img/Telefono TELMEX - imagen 1.jpg",  //ya
        link: "content/cabina_telefonica.html",
        size: "small",
        carousel: false
    },
    {
        id: 17,
        title: "Muñecos Luchadores",
        description: "Caleidoscopio cultural",
        images: [
            "img/Caleidoscopio de munecos luchadores--foto3.jpg",
            "img/Caleidoscopio de munecos luchadores--foto1.jpg",  //ya
             "img/Caleidoscopio de munecos luchadores--foto2.jpg"
        ],
        link: "content/munecos_luchadores.html",
        size: "medium",
        carousel: true
    },
    {
        id: 18,
        title: "Barbie",
        description: "Icono cultural y cotidianeidad",
        image: "img/barbie.jpg",
        link: "content/barbie.html",               //sin fotos
        size: "small",
        carousel: false
    },
    {
        id: 19,
        title: "Contacto",
        description: "Información y ubicación",
        image: "img/contacto.jpg",                //YA
        link: "contacto.html",
        size: "tall",
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
            img.onerror = function() {
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
    
    if (!mosaicContainer) {
        console.log('Contenedor del mosaico no encontrado');
        return;
    }
    
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
            // Manejar errores de imagen
            staticImage.onerror = function() {
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