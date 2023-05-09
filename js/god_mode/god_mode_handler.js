class GodModeHandler {
    constructor() {
        this.godModeIsActive = false;
    }

    changeToNextCycle() {
        // Si ya se ha iniciado el primer ciclo y Si aun queda un ciclo por delante:
        if (logicHandler.itineraryListIndex >= 1 && logicHandler.itineraryListIndex <= logicHandler.itineraryList.length - 1) {
            let NextCycleFunction = logicHandler.itineraryList[logicHandler.itineraryListIndex];
            NextCycleFunction();
            circleAnimation.updateProgress();
            this.itineraryListIndex++;
        }
        console.log("Se avanza al siguiente cycle!")
    }

    changeToPrevCycle() {
        // Si ya se ha iniciado el primer ciclo:
        if (logicHandler.itineraryListIndex >= 1) {
            // Si aun quedan ciclos por recorrer:
            let PrevCycleFunction = logicHandler.itineraryList[logicHandler.itineraryListIndex];

            PrevCycleFunction();
            circleAnimation.updateProgress();
            this.itineraryListIndex++;
        }
        console.log("Se retrocede al anterior cycle!")
    }
}

window.GodModeHandler = GodModeHandler;
const godModeHandler = new GodModeHandler();