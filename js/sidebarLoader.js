(function () {

  function activarSubmenus() {
    const padres = document.querySelectorAll(".menu-padre");

    padres.forEach(padre => {
      const toggle = padre.querySelector(".toggle");
      const submenu = padre.querySelector(".submenu");

      if (!toggle || !submenu) return;

      submenu.style.maxHeight = "0px";

      toggle.addEventListener("click", () => {

        // Cerrar todos los demás
        document.querySelectorAll(".submenu").forEach(s => {
          if (s !== submenu) {
            s.style.maxHeight = "0px";
            s.classList.remove("activo");
          }
        });

        // Alternar el actual
        if (submenu.classList.contains("activo")) {
          submenu.classList.remove("activo");
          submenu.style.maxHeight = "0px";
        } else {
          submenu.classList.add("activo");
          submenu.style.maxHeight = submenu.scrollHeight + "px";
        }
      });
    });
  }

  // === Cargar el sidebar ===
  const loaderPath = document.currentScript.src;
  const base = loaderPath.substring(0, loaderPath.lastIndexOf("/") + 1);
  const sidebarURL = base + "../componentes/sideBar.html";

  fetch(sidebarURL)
    .then(res => res.text())
    .then(html => {
      const cont = document.getElementById("sidebar");
      if (!cont) return;
      cont.innerHTML = html;
      activarSubmenus();   // <-- IMPORTANTÍSIMO
    })
    .catch(err => console.error("Error cargando sidebar:", err));

})();
