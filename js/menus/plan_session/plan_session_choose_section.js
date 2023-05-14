class PlanSessionEstimationsSection {

    constructor() {
        this.chooseSection1 = document.querySelector('.plan-session-choose-section-1');
        this.chooseSection2 = document.querySelector('.plan-session-choose-section-2');
        this.chooseSection3 = document.querySelector('.plan-session-choose-section-3');
        this.chooseSection4 = document.querySelector('.plan-session-choose-section-4');
        this.chooseSection5 = document.querySelector('.plan-session-choose-section-5');
        this.chooseSection6 = document.querySelector('.plan-session-choose-section-6');

        this.nextButton1 = document.querySelector('.plan-session-choose-section-next-button-1');
        this.nextButton2 = document.querySelector('.plan-session-choose-section-next-button-2');
        this.nextButton3 = document.querySelector('.plan-session-choose-section-next-button-3');
        this.nextButton4 = document.querySelector('.plan-session-choose-section-next-button-4');
        this.nextButton5 = document.querySelector('.plan-session-choose-section-next-button-5');
        this.nextButton6 = document.querySelector('.plan-session-choose-section-next-button-6');

        this.prevButton1 = document.querySelector('.plan-session-choose-section-prev-button-1');
        this.prevButton2 = document.querySelector('.plan-session-choose-section-prev-button-2');
        this.prevButton3 = document.querySelector('.plan-session-choose-section-prev-button-3');
        this.prevButton4 = document.querySelector('.plan-session-choose-section-prev-button-4');
        this.prevButton5 = document.querySelector('.plan-session-choose-section-prev-button-5');
        this.prevButton6 = document.querySelector('.plan-session-choose-section-prev-button-6');
	}
}

window.PlanSessionEstimationsSection = PlanSessionEstimationsSection;
const planSessionEstimationsSection = new PlanSessionEstimationsSection();