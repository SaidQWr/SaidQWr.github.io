// Función para cambiar entre modo oscuro y claro
function cambiarModo() {
  const body = document.querySelector('body');
  body.classList.toggle('modo-oscuro');
}

// Evento para alternar entre el modo oscuro y claro al hacer clic en el botón
const modoBtn = document.getElementById('modoBtn');
modoBtn.addEventListener('click', () => {
  cambiarModo();
});

// Función para manejar el envío del formulario
function enviarFormulario(event) {
  event.preventDefault(); // Prevenir el envío por defecto del formulario
  // Aquí puedes agregar el código para enviar la información a través de una solicitud HTTP (por ejemplo, usando fetch o XMLHttpRequest).
  // También puedes agregar código para mostrar un mensaje de éxito o error después de enviar la información.
  console.log('Formulario enviado correctamente');
}

// Evento para manejar el envío del formulario al hacer clic en el botón "Enviar"
const enviarBtn = document.getElementById('enviarBtn');
enviarBtn.addEventListener('click', enviarFormulario);
