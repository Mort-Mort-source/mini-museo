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

  // Cargar el HTML del sidebar
  fetch("../componentes/sidebar.html")
    .then(res => {
      if (!res.ok) {
        return fetch("./componentes/sidebar.html");
      }
      return res.text();
    })
    .then(html => {
      const cont = document.getElementById("sidebar");
      if (!cont) return;
      cont.innerHTML = html;
      activarSubmenus();  
    })
    .catch(err => {
      console.error("Error cargando sidebar:", err);
      fetch("./componentes/sidebar.html")
        .then(res => res.text())
        .then(html => {
          const cont = document.getElementById("sidebar");
          if (cont) {
            cont.innerHTML = html;
            activarSubmenus();
          }
        })
        .catch(err2 => console.error("Error definitivo:", err2));
    });

})();