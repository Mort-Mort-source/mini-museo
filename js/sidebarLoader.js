(function () {

  // Función para activar los submenús después de cargar el sidebar
  function activarSubmenus() {
    const padres = document.querySelectorAll(".menu-padre");

    padres.forEach(padre => {
      const toggle = padre.querySelector(".toggle");
      const submenu = padre.querySelector(".submenu");

      if (!toggle || !submenu) return;

      // Estado inicial cerrado
      submenu.style.maxHeight = "0px";

      toggle.addEventListener("click", (e) => {
        e.stopPropagation();

        // Cerrar los demás
        document.querySelectorAll(".menu-padre").forEach(p => {
          if (p !== padre) {
            const s = p.querySelector(".submenu");
            if (s) {
              s.style.maxHeight = "0px";
              p.classList.remove("abierto");
            }
          }
        });

        // Alternar este
        if (padre.classList.contains("abierto")) {
          padre.classList.remove("abierto");
          submenu.style.maxHeight = "0px";
        } else {
          padre.classList.add("abierto");
          submenu.style.maxHeight = submenu.scrollHeight + "px";
        }
      });
    });
  }

  // Función para determinar la ruta correcta del sidebar
  function cargarSidebar() {
    const cont = document.getElementById("sidebar");
    if (!cont) return;

    // Intentar diferentes rutas según la ubicación
    const rutasPosibles = [
      'componentes/sidebar.html',
      './componentes/sidebar.html',
      '../componentes/sidebar.html',
      '/MINI-MUSEO/componentes/sidebar.html' // Si tu repo se llama MINI-MUSEO
    ];

    const intentarCargar = (index) => {
      if (index >= rutasPosibles.length) {
        console.error("No se pudo cargar el sidebar desde ninguna ruta");
        return;
      }

      fetch(rutasPosibles[index])
        .then(res => {
          if (!res.ok) throw new Error('No se pudo cargar');
          return res.text();
        })
        .then(html => {
          cont.innerHTML = html;
          activarSubmenus();
        })
        .catch(err => {
          console.warn(`Error con ruta ${rutasPosibles[index]}, intentando siguiente...`);
          intentarCargar(index + 1);
        });
    };

    intentarCargar(0);
  }

  // Cargar el sidebar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarSidebar);
  } else {
    cargarSidebar();
  }

})();