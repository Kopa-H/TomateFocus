class PlanSessionConfirmButton {

    constructor() {
        this.planSessionConfirmButton = document.querySelector('.plan-session-confirm-button');

        this.planSessionConfirmButton.addEventListener('click', () => {;
            planSessionButton.togglePlanSession();
        });
	}
}

window.PlanSessionConfirmButton = PlanSessionConfirmButton;
const planSessionConfirmButton = new PlanSessionConfirmButton();