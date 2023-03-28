class DelayCycleChange {
  constructor() {
    // Obtenemos el botón y el texto oculto
    this.delayCycleChangeButton = document.querySelector('.delay-cycle-change-button');
    this.delayCycleChangeDescription = document.querySelector('.delay-cycle-change-description');

    this.delayCycleChangeButton.addEventListener('mouseover', () => {
      this.delayCycleChangeDescription.style.opacity = '0.8';
    });

    this.delayCycleChangeButton.addEventListener('mouseleave', () => {
      this.delayCycleChangeDescription.style.opacity = '0';
    });
  }
}

const delayChangeCycle = new DelayCycleChange();