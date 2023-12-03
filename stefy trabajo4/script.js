// Función para alternar entre modo oscuro y claro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Puedes agregar más elementos a modificar aquí si es necesario
  }
  
  // Agregar el evento al botón de alternar modo
  document.getElementById('toggleButton').addEventListener('click', toggleDarkMode);
  