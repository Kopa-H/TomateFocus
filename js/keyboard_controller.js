// Space Key --> (Stop / Resume / Start) Counter:
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

// M Key --> Toggle Music Player:
document.addEventListener("keydown", (event) => {
    if (event.key === "m" || event.key === "M") {
        musicButton.musicPlayerTrigger();
    }
});
// ArrowUp Key -- > Increase Song Volume:
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        volumeSlider.changeVolumeViaKeyboard("up");
    }
});
// ArrowDown Key -- > Decrease Song Volume:
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        volumeSlider.changeVolumeViaKeyboard("down");
    }
});

// S Key:
document.addEventListener("keydown", (event) => {
    if (event.key === "s" || event.key === "S") {
        settingsMenu.showOrHideSettingsMenu();
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

// G Key:
document.addEventListener("keydown", (event) => {
    if (event.key === "g" || event.key === "G") {
      enableGodModeButton.activateGodMode();
    }
});