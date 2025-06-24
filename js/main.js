document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll('.categoria');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const contenido = btn.nextElementSibling;
      contenido.style.display = (contenido.style.display === 'block') ? 'none' : 'block';
    });
  });
});
