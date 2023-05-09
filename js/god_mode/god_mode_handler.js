class GodModeHandler {
    constructor() {
        this.godModeIsActive = false;
    }

    changeToNextCycle() {
        // Si ya se ha iniciado el primer ciclo y Si aun queda un ciclo por delante:
        if (logicHandler.itineraryListIndex < logicHandler.itineraryList.length - 1) {

            // Se consigue el siguiente índice:
            logicHandler.itineraryListIndex++;
            let NextCycleFunction = logicHandler.itineraryList[logicHandler.itineraryListIndex];

            NextCycleFunction();
            circleAnimation.updateProgress();
            console.log("Se avanza al siguiente cycle!")
        }
    }

    changeToPrevCycle() {
        // Si ya se ha iniciado el primer ciclo:
        if (logicHandler.itineraryListIndex >= 1) {

            logicHandler.itineraryListIndex--;
            let PrevCycleFunction = logicHandler.itineraryList[logicHandler.itineraryListIndex];

            PrevCycleFunction();
            circleAnimation.updateProgress();
            console.log("Se retrocede al anterior cycle!")
        }
    }
}

window.GodModeHandler = GodModeHandler;
const godModeHandler = new GodModeHandler();