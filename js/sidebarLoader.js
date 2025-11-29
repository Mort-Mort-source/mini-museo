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

  // Función para cargar el sidebar
  function cargarSidebar() {
    const cont = document.getElementById("sidebar");
    if (!cont) {
      console.log("Contenedor del sidebar no encontrado");
      return;
    }

    // Determinar la ruta base según la ubicación actual
    const basePath = window.location.pathname.includes('/content/') ? '..' : '.';
    const rutaSidebar = `${basePath}/sidebar.html`;

    console.log("Cargando sidebar desde:", rutaSidebar);

    fetch(rutaSidebar)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el sidebar: ' + res.status);
        return res.text();
      })
      .then(html => {
        cont.innerHTML = html;
        activarSubmenus();
        console.log("Sidebar cargado correctamente");
      })
      .catch(err => {
        console.error("Error cargando sidebar:", err);
        // Fallback: mostrar menú básico
        cont.innerHTML = `
          <aside class="sidebar">
            <h2>Contra<br>Museo</h2>
            <nav>
              <ul>
                <li><a href="${basePath}/index.html">Inicio</a></li>
                <li><a href="${basePath}/contacto.html">Contacto</a></li>
                <li><a href="${basePath}/content/coleccionesOseas.html">Colecciones óseas</a></li>
                <li><a href="${basePath}/content/Omichicahuaztli.html">Omichicahuaztli</a></li>
              </ul>
            </nav>
          </aside>
        `;
        console.log("Usando sidebar de fallback");
      });
  }

  // Cargar el sidebar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarSidebar);
  } else {
    cargarSidebar();
  }

})();