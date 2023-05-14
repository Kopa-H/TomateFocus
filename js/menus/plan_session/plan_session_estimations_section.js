class PlanSessionEstimations {

    constructor() {
        this.studyTimeEstimation = document.querySelector('.plan-session-estimations-section-study-time');
        this.breakTimeEstimation = document.querySelector('.plan-session-estimations-section-break-time');
        this.totalTimeEstimation = document.querySelector('.plan-session-estimations-section-total-time');
	}
}

window.PlanSessionEstimations = PlanSessionEstimations;
const planSessionEstimations = new PlanSessionEstimations();