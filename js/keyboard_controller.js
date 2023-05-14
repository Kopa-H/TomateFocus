// Space Key:
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        if (logicHandler.appIsRunning) {
            logicHandler.stopCounter();
        } else if (!logicHandler.appIsRunning && logicHandler.timeToElapse < logicHandler.initialTimeToElapse) {
            logicHandler.resumeCounter();
        } else {
            logicHandler.startCounter();
        }
    }
});

// M Key:
document.addEventListener("keydown", (event) => {
    if (event.key === "m" || event.key === "M") {
        musicButton.musicPlayerTrigger();
    }
});

// S Key:
document.addEventListener("keydown", (event) => {
    if (event.key === "s" || event.key === "S") {
        toggleMenu.showOrHideToggleMenu();
    }
});

// + Key:
document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
        delayCycle.delayCycleOneMinute();
    }
});

// ArrowLeft Key:
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && godModeHandler.godModeIsActive) {
        godModeHandler.changeToPrevCycle();
    }
});

// ArrowRight Key:
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && godModeHandler.godModeIsActive) {
        godModeHandler.changeToNextCycle();
    }
});