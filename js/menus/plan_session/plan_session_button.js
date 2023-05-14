class PlanSessionButton {

    constructor() {
        this.planSessionButton = document.querySelector('.plan-session-button');
        this.planSessionDescription = document.querySelector('.plan-session-description');
        this.planSession = document.querySelector('.plan-session-zone');
        this.planSessionStyles = window.getComputedStyle(this.planSession);

        // Para mostrar la descripción:
        this.planSessionButton.addEventListener('mouseover', () => {
            this.planSessionDescription.style.opacity = '0.8';
        });
        this.planSessionButton.addEventListener('mouseleave', () => {
            this.planSessionDescription.style.opacity = '0';
        });

        this.planSessionButton.addEventListener('click', () => {;
            this.togglePlanSession();
        });
	}

    togglePlanSession() {
        if (this.planSessionStyles.display == "none") {
            this.planSession.classList.remove("slideOut");
            this.planSession.classList.add("slideIn");
            this.planSession.style.display = "block";
        } else {
            this.planSession.classList.remove("slideIn");
            this.planSession.classList.add("slideOut");

            this.planSession.addEventListener("animationend", () => {
                this.planSession.style.display = "none"
            }, { once: true })
        }
    }
}

window.PlanSessionButton = PlanSessionButton;
const planSessionButton = new PlanSessionButton();