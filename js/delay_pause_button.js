// Obtenemos el botón y el texto oculto
var button = document.querySelector('.delay-pause-button');
var hiddenText = document.querySelector('.delay-pause-button-description');

// Añadimos un evento click al botón
button.addEventListener('click', function() {
  // Mostramos el texto oculto
  hiddenText.style.display = 'inline';
});