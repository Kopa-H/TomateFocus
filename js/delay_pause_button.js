// Obtenemos el botón y el texto oculto
var button = document.querySelector('.delay-pause-button');
var hiddenText = document.querySelector('.delay-pause-button-description');

button.addEventListener('mouseover', function() {
  // Mostramos el texto oculto
  hiddenText.style.opacity = '0.8';
});

button.addEventListener('mouseleave', function() {
  // Mostramos el texto oculto
  hiddenText.style.opacity = '0';
});