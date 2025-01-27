class PlanSessionEstimationsSection {
    constructor() {
        this.cycles = ['Pomodoro', 'ShortBreak', 'LongBreak', 'None'];
        this.chooseSections = [];

        for (let i = 1; i <= 6; i++) {
            this.chooseSections.push(document.querySelector(`.plan-session-choose-section-cycle-name[data-index="${i}"]`));
        }

        const nextButtons = document.querySelectorAll('.plan-session-choose-section-next-cycle-button');
        nextButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const index = parseInt(button.dataset.index);
                const chooseSection = this.chooseSections[index - 1];
                this.changeToNextCycle(chooseSection);

                themeColor.updatePlanSessionChooseSectionColors(chooseSection, index);

                logicHandler.updateItineraryList();
            });
        });

        const prevButtons = document.querySelectorAll('.plan-session-choose-section-prev-cycle-button');
        prevButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const index = parseInt(button.dataset.index);
                const chooseSection = this.chooseSections[index - 1];
                this.changeToPrevCycle(chooseSection);

                themeColor.updatePlanSessionChooseSectionColors(chooseSection, index);

                logicHandler.updateItineraryList();
            });
        });
    }

    changeToNextCycle(currentCycle) {
        const currentIndex = this.cycles.indexOf(currentCycle.innerHTML);
        currentCycle.innerHTML = this.cycles[(currentIndex + 1) % this.cycles.length];

        logicHandler.updateItineraryList();
        planSessionEstimations.calculateTimeEstimations();
    }

    changeToPrevCycle(currentCycle) {
        const currentIndex = this.cycles.indexOf(currentCycle.innerHTML);
        currentCycle.innerHTML = this.cycles[(currentIndex - 1 + this.cycles.length) % this.cycles.length];

        logicHandler.updateItineraryList();
        planSessionEstimations.calculateTimeEstimations();
    }
}

window.PlanSessionEstimationsSection = PlanSessionEstimationsSection;
const planSessionEstimationsSection = new PlanSessionEstimationsSection();