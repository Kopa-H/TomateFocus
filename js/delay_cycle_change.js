class DelayCycleChange {
  constructor() {
    // Obtenemos el botón y el texto oculto
    this.delayCycleChangeButton = document.querySelector('.delay-cycle-change-button');
    this.delayCycleChangeDescription = document.querySelector('.delay-cycle-change-description');

    this.delayCycleChangeButton.addEventListener('mouseover', () => {

      // Si se está ejecutando un pomodoro:
      if (window.currentCycleRunning = "pomodoro") {
        this.delayCycleChangeDescription.innerHTML = "Add 5' of extra work!";
      } else {
        this.delayCycleChangeDescription.innerHTML = "Add 5' of extra break!";
      }
      this.delayCycleChangeDescription.style.opacity = '0.8';
    });

    this.delayCycleChangeButton.addEventListener('mouseleave', () => {
      this.delayCycleChangeDescription.style.opacity = '0';
    });
  }
}

const delayChangeCycle = new DelayCycleChange()