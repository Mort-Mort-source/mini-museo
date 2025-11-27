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
    if (!cont) return;

    // Ruta simple - sidebar está en la raíz
    const rutaSidebar = '/sidebar.html';

    fetch(rutaSidebar)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el sidebar');
        return res.text();
      })
      .then(html => {
        cont.innerHTML = html;
        activarSubmenus();
      })
      .catch(err => {
        console.error("Error cargando sidebar:", err);
        // Fallback: mostrar menú básico
        cont.innerHTML = `
          <aside class="sidebar">
            <h2>Contra<br>Museo</h2>
            <nav>
              <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="coleccionesOseas.html">Colecciones óseas</a></li>
                <li><a href="omichicahuaztli.html">Omichicahuaztli</a></li>
              </ul>
            </nav>
          </aside>
        `;
      });
  }

  // Cargar el sidebar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarSidebar);
  } else {
    cargarSidebar();
  }

})();