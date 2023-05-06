class PlanStudy {

    constructor() {
        this.planStudyButton = document.querySelector('.plan-study-button');
        this.planStudyDescription = document.querySelector('.plan-study-description');
        this.planStudyButton.addEventListener('mouseover', () => {
        this.planStudyDescription.style.opacity = '0.8';
        });
        this.planStudyButton.addEventListener('mouseleave', () => {
        this.planStudyDescription.style.opacity = '0';
        });
    }
}

window.PlanStudy = PlanStudy;
const planStudy = new PlanStudy();