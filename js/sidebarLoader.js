(function() {
    'use strict';
    
    let sidebarVisible = true;
    const animationSpeed = 300;
    let sidebarLoaded = false;

    // Función para activar submenús
    function activarSubmenus() {
        const $padres = $(".menu-padre");
        
        if ($padres.length === 0) {
            console.warn('No se encontraron elementos .menu-padre');
            return;
        }

        $padres.each(function() {
            const $padre = $(this);
            const $toggle = $padre.find(".toggle");
            const $submenu = $padre.find(".submenu");
            const $icon = $toggle.find('.toggle-icon');

            if ($toggle.length === 0 || $submenu.length === 0) {
                console.warn('Elementos de submenú no encontrados');
                return;
            }

            // Estado inicial cerrado
            $submenu.css({
                'max-height': '0',
                'overflow': 'hidden',
                'transition': 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            });

            // Asegurar que tenga el icono correcto
            if ($icon.length === 0) {
                $toggle.append('<i class="fas fa-chevron-down toggle-icon"></i>');
            }

            $toggle.off('click').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Cerrar otros submenús
                $padres.not($padre).each(function() {
                    const $otroPadre = $(this);
                    const $otroSubmenu = $otroPadre.find(".submenu");
                    const $otroIcon = $otroPadre.find(".toggle-icon");
                    
                    if ($otroSubmenu.css('max-height') !== '0px') {
                        $otroSubmenu.css('max-height', '0');
                        $otroPadre.removeClass("abierto");
                        if ($otroIcon.length) {
                            $otroIcon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
                        }
                    }
                });

                // Alternar este submenú
                if ($padre.hasClass("abierto")) {
                    $submenu.css('max-height', '0');
                    $padre.removeClass("abierto");
                    if ($icon.length) {
                        $icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
                    }
                } else {
                    $submenu.css('max-height', $submenu[0].scrollHeight + 'px');
                    $padre.addClass("abierto");
                    if ($icon.length) {
                        $icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
                    }
                }
            });
        });
        
        console.log('✅ Submenús activados:', $padres.length, 'secciones');
    }

    // Crear botón toggle
    function crearToggleButton() {
        $('#sidebarToggle').remove();
        
        const $toggleBtn = $(`
            <button id="sidebarToggle" class="sidebar-toggle" aria-label="Alternar menú lateral" aria-expanded="true">
                <i class="fas fa-bars"></i>
            </button>
        `);
        
        $('body').prepend($toggleBtn);
        
        $toggleBtn.on('click', function(e) {
            e.stopPropagation();
            toggleSidebar();
        });
        
        // Cerrar sidebar al hacer clic fuera (solo móvil)
        $(document).on('click', function(e) {
            if ($(window).width() <= 1 && 
                sidebarVisible && 
                !$(e.target).closest('#sidebar, #sidebarToggle').length) {
                toggleSidebar();
            }
        });
        
        console.log('✅ Botón toggle creado');
    }

    // Función para alternar sidebar
    function toggleSidebar() {
        const $sidebar = $('#sidebar');
        const $toggleIcon = $('#sidebarToggle i');
        const $mainContent = $('.contenido');
        
        if (sidebarVisible) {
            $sidebar.stop().slideUp(animationSpeed, function() {
                $(this).addClass('sidebar-oculto');
                $(this).attr('aria-hidden', 'true');
            });
            $toggleIcon.removeClass('fa-bars').addClass('fa-times');
            $('#sidebarToggle').attr('aria-expanded', 'false');
            $mainContent.addClass('sidebar-oculto');
            sidebarVisible = false;
        } else {
            $sidebar.stop().slideDown(animationSpeed, function() {
                $(this).removeClass('sidebar-oculto');
                $(this).attr('aria-hidden', 'false');
            });
            $toggleIcon.removeClass('fa-times').addClass('fa-bars');
            $('#sidebarToggle').attr('aria-expanded', 'true');
            $mainContent.removeClass('sidebar-oculto');
            sidebarVisible = true;
        }
    }

    // Corregir rutas
    function corregirRutasSidebar(contenedor) {
        const $enlaces = $(contenedor).find('a[href]');
        const estaEnContent = window.location.pathname.includes('/content/');
        
        if ($enlaces.length === 0) {
            console.warn('No se encontraron enlaces en el sidebar');
            return;
        }
        
        $enlaces.each(function() {
            const $enlace = $(this);
            let href = $enlace.attr('href');
            
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('javascript:')) {
                return;
            }
            
            if (estaEnContent && !href.startsWith('../') && !href.startsWith('/')) {
                if (href.startsWith('content/')) {
                    $enlace.attr('href', '../' + href);
                } else {
                    $enlace.attr('href', '../' + href);
                }
            }
        });
        
        console.log('✅ Rutas corregidas:', $enlaces.length, 'enlaces');
    }

    // Cargar sidebar
    function cargarSidebar() {
        const $cont = $("#sidebar");
        
        if ($cont.length === 0) {
            console.error('Contenedor #sidebar no encontrado');
            return;
        }
        
        if (sidebarLoaded) {
            console.log('Sidebar ya cargado');
            return;
        }
        
        const estaEnContent = window.location.pathname.includes('/content/');
        const basePath = estaEnContent ? '..' : '.';
        const rutaSidebar = `${basePath}/sidebar.html`;
        
        console.log('📂 Cargando sidebar desde:', rutaSidebar);
        
        $.ajax({
            url: rutaSidebar,
            method: 'GET',
            dataType: 'html',
            timeout: 10000,
            beforeSend: function() {
                $cont.html('<div class="sidebar-loading" style="padding: 2rem; text-align: center; color: #5a2a27;"><i class="fas fa-spinner fa-spin"></i> Cargando menú...</div>');
            },
            success: function(html) {
                if (!html || html.trim().length === 0) {
                    throw new Error('HTML del sidebar vacío');
                }
                
                $cont.html(html);
                corregirRutasSidebar($cont);
                activarSubmenus();
                crearToggleButton();
                sidebarLoaded = true;
                
                // Ocultar automáticamente en móvil
                if ($(window).width() <= 768) {
                    $('#sidebar').hide().addClass('sidebar-oculto');
                    $('#sidebarToggle i').removeClass('fa-times').addClass('fa-bars');
                    sidebarVisible = false;
                    $('.contenido').addClass('sidebar-oculto');
                    $('#sidebarToggle').attr('aria-expanded', 'false');
                } else {
                    $('#sidebar').show().removeClass('sidebar-oculto');
                    $('#sidebarToggle').attr('aria-expanded', 'true');
                }
                
                console.log('✅ Sidebar cargado correctamente');
                console.log('📊 Estructura: 11 secciones totales (9 con submenús)');
            },
            error: function(xhr, status, error) {
                console.error('Error cargando sidebar:', status, error);
                crearSidebarFallback();
            }
        });
    }

    // Crear sidebar de fallback
    function crearSidebarFallback() {
        const $cont = $("#sidebar");
        const estaEnContent = window.location.pathname.includes('/content/');
        const basePath = estaEnContent ? '..' : '.';
        
        const fallbackHTML = `
            <aside class="sidebar" aria-label="Menú principal">
                <h2>Contramuseo</h2>
                <nav>
                    <ul>
                        <li><a href="${basePath}/index.html"><i class="fas fa-home"></i> Inicio</a></li>
                        <li class="menu-padre">
                            <a href="#" class="toggle">
                                <i class="fas fa-bone"></i> Restos humanos
                                <i class="fas fa-chevron-down toggle-icon"></i>
                            </a>
                            <ul class="submenu">
                                <li><a href="${basePath}/content/coleccionesOseas.html">Colecciones óseas</a></li>
                                <li><a href="${basePath}/content/individuo150.html">El individuo 150 (Vanessa)</a></li>
                                <li><a href="${basePath}/content/Omichicahuaztli.html">Omichicahuaztli (Alex)</a></li>
                            </ul>
                        </li>
                        <!-- Continuar con las demás secciones... -->
                        <li><a href="${basePath}/contacto.html"><i class="fas fa-envelope"></i> Contacto</a></li>
                    </ul>
                </nav>
            </aside>
        `;
        
        $cont.html(fallbackHTML);
        activarSubmenus();
        crearToggleButton();
        sidebarLoaded = true;
        
        console.log('✅ Sidebar de fallback cargado');
    }

    // Inicializar cuando jQuery esté listo
    $(document).ready(function() {
        if (typeof jQuery === 'undefined') {
            console.error('jQuery no está cargado');
            return;
        }
        
        cargarSidebar();
        
        // Manejar redimensionamiento
        let resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if ($(window).width() > 768 && !sidebarVisible) {
                    $('#sidebar').show().removeClass('sidebar-oculto');
                    $('#sidebarToggle i').removeClass('fa-times').addClass('fa-bars');
                    sidebarVisible = true;
                    $('.contenido').removeClass('sidebar-oculto');
                    $('#sidebarToggle').attr('aria-expanded', 'true');
                }
                
                // Recalcular altura de submenús abiertos
                $('.menu-padre.abierto .submenu').each(function() {
                    $(this).css('max-height', this.scrollHeight + 'px');
                });
            }, 250);
        });
        
        // Keyboard accessibility
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape' && $(window).width() <= 768 && sidebarVisible) {
                toggleSidebar();
            }
        });
    });

    // Manejar errores
    window.addEventListener('error', function(e) {
        if (e.message.includes('sidebar') || e.filename && e.filename.includes('sidebarLoader')) {
            console.error('Error en sidebarLoader:', e);
            crearSidebarFallback();
        }
    });

})();