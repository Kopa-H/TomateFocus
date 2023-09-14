class PlanSessionEstimations {

    constructor() {
        this.studyTimeEstimation = document.querySelector('.plan-session-estimations-section-study-time');
        this.breakTimeEstimation = document.querySelector('.plan-session-estimations-section-break-time');
        this.totalTimeEstimation = document.querySelector('.plan-session-estimations-section-total-time');

        // A function to compare equal functions is created to be used when calculating the time estimations:
        this.areEqualFunctions = (fn1, fn2) => fn1.toString() === fn2.toString();

        this.pomodoroFunction = () => {this.runPomodoro()};
        this.shortBreakFunction = () => {this.runShortBreak()};
        this.longBreakFunction = () => {this.runLongBreak()};

        this.numberOfPomodoroCycles = 0;
        this.numberOfShortBreakCycles = 0;
        this.numberOfLongBreakCycles = 0;

        this.calculateTimeEstimations();
    }

    calculateTimeEstimations() {
        // The number of Cycles are reset:
        this.numberOfPomodoroCycles = 0;
        this.numberOfShortBreakCycles = 0;
        this.numberOfLongBreakCycles = 0;

        logicHandler.itineraryList.forEach((element, index) => {
            if (this.areEqualFunctions(element, this.pomodoroFunction)) {
                this.numberOfPomodoroCycles++
            } else if (this.areEqualFunctions(element, this.shortBreakFunction)) {
                this.numberOfShortBreakCycles++
            } else if (this.areEqualFunctions(element, this.longBreakFunction)) {
                this.numberOfLongBreakCycles++
            }
        });

        this.pomodoroTime = (this.numberOfPomodoroCycles * logicHandler.pomodoroTimeToElapse) / 60;
        this.pomodoroTimeToHours = `${Math.floor(this.pomodoroTime / 60)}h ${Math.floor(this.pomodoroTime % 60)}min`;

        this.breakTime = ((this.numberOfShortBreakCycles * logicHandler.shortbreakTimeToElapse) / 60) + ((this.numberOfLongBreakCycles * logicHandler.longbreakTimeToElapse) / 60);
        this.breakTimeToHours = `${Math.floor(this.breakTime / 60)}h ${Math.floor(this.breakTime % 60)}min`;

        this.totalTime = this.pomodoroTime + this.breakTime;
        this.totalTimeToHours = `${Math.floor(this.totalTime / 60)}h ${Math.floor(this.totalTime % 60)}min`;

        this.studyTimeEstimation.innerHTML = this.pomodoroTimeToHours;
        this.breakTimeEstimation.innerHTML = this.breakTimeToHours;
        this.totalTimeEstimation.innerHTML = this.totalTimeToHours;
    }

    calculateTimeEstimationsForTimeModifications() {
        this.pomodoroTime = (logicHandler.pomodoroTimeToElapse / 60) * this.numberOfPomodoroCycles;
        this.pomodoroTimeToHours = `${Math.floor(this.pomodoroTime / 60)}h ${Math.floor(this.pomodoroTime % 60)}min`;

        this.breakTime = ((logicHandler.shortbreakTimeToElapse / 60) * this.numberOfShortBreakCycles) + ((logicHandler.longbreakTimeToElapse / 60) * this.numberOfLongBreakCycles);
        this.breakTimeToHours = `${Math.floor(this.breakTime / 60)}h ${Math.floor(this.breakTime % 60)}min`;

        this.totalTime = this.pomodoroTime + this.breakTime;
        this.totalTimeToHours = `${Math.floor(this.totalTime / 60)}h ${Math.floor(this.totalTime % 60)}min`;

        this.studyTimeEstimation.innerHTML = this.pomodoroTimeToHours;
        this.breakTimeEstimation.innerHTML = this.breakTimeToHours;
        this.totalTimeEstimation.innerHTML = this.totalTimeToHours;
    }
}

window.PlanSessionEstimations = PlanSessionEstimations;
const planSessionEstimations = new PlanSessionEstimations();