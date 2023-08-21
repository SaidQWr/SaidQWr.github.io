function selectSize(selectedSize) {
  // Obtener todos los botones de talla
  const sizeButtons = document.querySelectorAll('.size-button');

  // Cambiar el estilo de los botones según la selección
  sizeButtons.forEach(button => {
    if (button.textContent === selectedSize) {
      button.style.backgroundColor = '#ff6600';
      button.style.color = 'white';
    } else {
      button.style.backgroundColor = '#ff9900';
      button.style.color = 'black';
    }
  });
}
