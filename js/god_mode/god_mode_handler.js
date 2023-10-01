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
            counter.updateCounter();
            console.log("Se avanza al siguiente cycle!")

            itineraryProgressBar.updateProgressBar();
        }
    }

    changeToPrevCycle() {
        // Si ya se ha iniciado el primer ciclo:
        if (logicHandler.itineraryListIndex >= 1) {

            logicHandler.itineraryListIndex--;
            let PrevCycleFunction = logicHandler.itineraryList[logicHandler.itineraryListIndex];

            PrevCycleFunction();
            circleAnimation.updateProgress();
            counter.updateCounter();
            console.log("Se retrocede al anterior cycle!")

            itineraryProgressBar.updateProgressBar();
        }
    }

    getPositionOnCircle(event) {
        const clickPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const circleCenter = {
          x: circleAnimation.secondaryCircle.getBoundingClientRect().left + circleAnimation.radius,
          y: circleAnimation.secondaryCircle.getBoundingClientRect().top + circleAnimation.radius
        };
        const angleInRadians = Math.atan2(clickPosition.y - circleCenter.y, clickPosition.x - circleCenter.x);
        const angleInDegrees = angleInRadians * 180 / Math.PI;
        const positionOnCircle = 360 - (angleInDegrees >= 0 ? angleInDegrees : angleInDegrees + 360);
        return positionOnCircle;
    }

    handleCircleClick(event) {
        const positionOnCircle = this.getPositionOnCircle(event);
        const fractionOfCircleClicked = positionOnCircle / 360;
        const timeElapsed = Math.round((1 - fractionOfCircleClicked) * logicHandler.initialTimeToElapse);
        logicHandler.timeToElapse = timeElapsed;
        counter.updateCounter();
        counter.showCurrentTime();
        circleAnimation.updateProgress();

        console.log("se actualiza el Counter!")
    }
}

window.GodModeHandler = GodModeHandler;
const godModeHandler = new GodModeHandler();