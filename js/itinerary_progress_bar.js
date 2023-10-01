class ItineraryProgressBar {
    constructor() {
        this.itineraryProgressBarFlex = document.querySelector(".itinerary-progress-bar"); // O document.querySelector(".contenedor") si usaste una clase
        this.itineraryProgressBarFlexWidth = 300;
    }

    fillProgressBar() {
        this.itineraryProgressBarFlex.style.opacity = 1;

        if (logicHandler.itineraryList.length == 6) {
            this.numOfCycles = 6;
        } else if (logicHandler.itineraryList.length == 5) {
            this.numOfCycles = 5;
        } else if (logicHandler.itineraryList.length == 4) {
            this.numOfCycles = 4;
        } else if (logicHandler.itineraryList.length == 3) {
            this.numOfCycles = 3;
        } else if (logicHandler.itineraryList.length == 2) {
            this.numOfCycles = 2;
        } else if (logicHandler.itineraryList.length == 1) {
            this.numOfCycles = 1;
        }

        for (let i = 0; i < this.numOfCycles; i++) {
            const newCycleDiv = document.createElement("div");
            newCycleDiv.className = "itinerary-progress-bar-cycle";
            this.itineraryProgressBarFlex.appendChild(newCycleDiv);

            // Calcula el ancho del nuevo ciclo
            const cycleWidth = this.itineraryProgressBarFlexWidth / this.numOfCycles;

            // Establece el ancho del nuevo ciclo
            newCycleDiv.style.width = cycleWidth + "px";

            if (logicHandler.itineraryList[i] == "() => {this.runPomodoro()}") {
                newCycleDiv.style.backgroundColor = "#CB3333";
            } else if (logicHandler.itineraryList[i] == "() => {this.runShortBreak()}") {
                newCycleDiv.style.backgroundColor = "#337DCB";
            } else if (logicHandler.itineraryList[i] == "() => {this.runLongBreak()}") {
                newCycleDiv.style.backgroundColor = "#8133CB";
            }
        }
    }

    updateProgressBar() {
        // Se vuelven a pintar de color los cycles:
        for (let i = 0; i <= this.numOfCycles-1; i++) {
            const cycle = document.querySelector(`.itinerary-progress-bar-cycle:nth-child(${i+1})`);

            if (i >= logicHandler.itineraryListIndex) {
                if (logicHandler.itineraryList[i] == "() => {this.runPomodoro()}") {
                    cycle.style.backgroundColor = "#CB3333";
                    cycle.style.opacity = "1";
                } else if (logicHandler.itineraryList[i] == "() => {this.runShortBreak()}") {
                    cycle.style.backgroundColor = "#337DCB";
                    cycle.style.opacity = "1";
                } else if (logicHandler.itineraryList[i] == "() => {this.runLongBreak()}") {
                    cycle.style.backgroundColor = "#8133CB";
                    cycle.style.opacity = "1";
                }
            } else if (i < logicHandler.itineraryListIndex) {
                cycle.style.opacity = "0.2";
            }
        }
    }
}

window.ItineraryProgressBar = ItineraryProgressBar;
const itineraryProgressBar = new ItineraryProgressBar();