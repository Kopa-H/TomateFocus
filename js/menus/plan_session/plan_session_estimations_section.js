class PlanSessionEstimations {

    constructor() {
        this.studyTimeEstimation = document.querySelector('.plan-session-estimations-section-study-time');
        this.breakTimeEstimation = document.querySelector('.plan-session-estimations-section-break-time');
        this.totalTimeEstimation = document.querySelector('.plan-session-estimations-section-total-time');

        this.pomodoroFunction = () => {this.runPomodoro()};
        this.shortBreakFunction = () => {this.runShortBreak()};
        this.longBreakFunction = () => {this.runLongBreak()};

        this.numberOfPomodoroCycles = 0;
        this.numberOfShortBreakCycles = 0;
        this.numberOfLongBreakCycles = 0;

        // Se obtiene el itinerario actual
        logicHandler.itineraryList.forEach((element, index) => {

            // Define una función personalizada para comparar las funciones
            const areEqualFunctions = (fn1, fn2) => fn1.toString() === fn2.toString();

            if (areEqualFunctions(element, this.pomodoroFunction)) {
                console.log("ciclo pomodoro");
                this.numberOfPomodoroCycles++

            } else if (areEqualFunctions(element, this.shortBreakFunction)) {
                console.log("ciclo shortBreak");
                this.numberOfShortBreakCycles++

            } else if (areEqualFunctions(element, this.longBreakFunction)) {
                console.log("ciclo longBreak");
                this.numberOfLongBreakCycles++

            } else {
                console.log("Unknown cycle")};

        });

        this.pomodoroTime = (this.numberOfPomodoroCycles * logicHandler.pomodoroTimeToElapse) / 60;
        this.pomodoroTimeToHours = `${Math.floor(this.pomodoroTime / 60)}h ${Math.floor(this.pomodoroTime % 60)}min`;

        this.breakTime = ((this.numberOfShortBreakCycles * logicHandler.shortbreakTimeToElapse) / 60) + ((this.numberOfLongBreakCycles * logicHandler.longbreakTimeToElapse) / 60);
        this.breakTimeToHours = `${Math.floor(this.breakTime / 60)}h ${Math.floor(this.breakTime % 60)}min`;

        this.studyTimeEstimation.innerHTML = this.pomodoroTimeToHours;
        this.breakTimeEstimation.innerHTML = this.shortBreakTimeToHours;
        this.totalTimeEstimation.innerHTML = this.longBreakTimeToHours;
	}
}

window.PlanSessionEstimations = PlanSessionEstimations;
const planSessionEstimations = new PlanSessionEstimations();