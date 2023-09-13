class PlanSessionResetButton {

    constructor() {
        this.resetButton = document.querySelector(".plan-session-reset-settings-button");
        this.predefinedItinerary = ["Pomodoro", "ShortBreak", "Pomodoro", "ShortBreak", "Pomodoro", "LongBreak"];

        this.resetButton.addEventListener('click', () => {
            planSessionEstimationsSection.chooseSections.forEach((chooseSection, index) => {
                chooseSection.innerHTML = this.predefinedItinerary[index];
            });
            themeColor.resetPlanSessionChooseSectionColors();

            logicHandler.itineraryListIndex = 0;
            logicHandler.itineraryList = [
                () => {this.runPomodoro()},
                () => {this.runShortBreak()},
                () => {this.runPomodoro()},
                () => {this.runShortBreak()},
                () => {this.runPomodoro()},
                () => {this.runLongBreak()},
            ];
            logicHandler.updateItineraryList();

            console.log("hola")
        });
    }
}

window.PlanSessionResetButton = PlanSessionResetButton;
const planSessionResetButton = new PlanSessionResetButton();