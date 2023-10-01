class ItineraryProgressBar {
    constructor() {
        this.itineraryProgressBarFlex = document.querySelector(".itinerary-progress-bar"); // O document.querySelector(".contenedor") si usaste una clase
        this.itineraryProgressBarFlexWidth = 300;
    }

    fillProgressBar() {
        this.itineraryProgressBarFlex.style.border = "2px solid brown";

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
                newCycleDiv.style.backgroundColor = "red"
            } else if (logicHandler.itineraryList[i] == "() => {this.runShortBreak()}") {
                newCycleDiv.style.backgroundColor = "blue"
            } else if (logicHandler.itineraryList[i] == "() => {this.runLongBreak()}") {
                newCycleDiv.style.backgroundColor = "purple"
            }
        }
    }

    updateProgressBar() {
        // Se vuelven a pintar de color los cycles:
        for (let i = 0; i < this.numOfCycles; i++) {
            let cycle = document.querySelector(`.itinerary-progress-bar-cycle:nth-child(${i})`);
            console.log(i)

            if (i < logicHandler.itineraryListIndex) {
                if (logicHandler.itineraryList[logicHandler.itineraryListIndex] == "() => {this.runPomodoro()}") {
                    cycle.style.backgroundColor = "red"
                } else if (logicHandler.itineraryList[logicHandler.itineraryListIndex] == "() => {this.runShortBreak()}") {
                    cycle.style.backgroundColor = "blue"
                } else if (logicHandler.itineraryList[logicHandler.itineraryListIndex] == "() => {this.runLongBreak()}") {
                    cycle.style.backgroundColor = "purple"
                }
            } else if (i >= logicHandler.itineraryListIndex) {
                cycle.style.backgroundColor = "black";
            }
        }
    }
}

window.ItineraryProgressBar = ItineraryProgressBar;
const itineraryProgressBar = new ItineraryProgressBar();