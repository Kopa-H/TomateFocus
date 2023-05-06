class DelayCycle {

    constructor() {
        this.delayCycleButton = document.querySelector('.delay-cycle-button');
        this.delayCycleDescription = document.querySelector('.delay-cycle-description');
        this.delayCycleButton.addEventListener('mouseover', () => {
        this.delayCycleDescription.style.opacity = '0.8';
        });
        this.delayCycleButton.addEventListener('mouseleave', () => {
        this.delayCycleDescription.style.opacity = '0';
        });
    }
}

window.DelayCycle = DelayCycle;
const delayCycle = new DelayCycle();