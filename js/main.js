const botones = document.querySelectorAll(".categoria");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const contenido = boton.nextElementSibling;
    contenido.style.display = contenido.style.display === "block" ? "none" : "block";
  });
});
