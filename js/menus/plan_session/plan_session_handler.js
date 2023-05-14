class PlanSessionHandler {

    constructor() {
        document.addEventListener("keydown", function(event) {
            if ((event.key === "Escape" || event.key === "Enter") && planSessionButton.planSessionStyles.display != "none") {
                planSessionButton.togglePlanSession();
            }
        });
	}
}

window.PlanSessionHandler = PlanSessionHandler;
const planSessionHandler = new PlanSessionHandler();