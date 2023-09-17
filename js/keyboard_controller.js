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

// S Key -- > Toggle Settings Menu:
document.addEventListener("keydown", (event) => {
    if (event.key === "s" || event.key === "S") {
        settingsMenu.showOrHideSettingsMenu();
    }
});

// + Key -- > Delay Cycle 1 Minute:
document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
        delayCycle.delayCycleOneMinute();
    }
});

// ArrowLeft Key -- > Change to Prev Cycle:
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && godModeHandler.godModeIsActive) {
        godModeHandler.changeToPrevCycle();
    }
});

// ArrowRight Key -- > Change to Next Cycle:
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && godModeHandler.godModeIsActive) {
        godModeHandler.changeToNextCycle();
    }
});

// G Key -- > Activate God Mode:
document.addEventListener("keydown", (event) => {
    if (event.key === "g" || event.key === "G") {
      enableGodModeButton.activateGodMode();
    }
});

// P Key -- > Toggle Plan Session Menu:
document.addEventListener("keydown", (event) => {
    if ((event.key === "p" || event.key === "P") && (logicHandler.clockHasBeenStarted == false)) {
        planSessionButton.togglePlanSession();
    }
});

// H Key -- > Toggle Particles:
document.addEventListener("keydown", (event) => {
    if (event.key === "h" || event.key === "H") {
        hideParticlesButton.toggleX();
        if (particlesHandler.particlesAreActive) {
            particlesHandler.hideParticles();
        } else {
            particlesHandler.changeParticlesNumberAndColor(themeColor.pomodoroColor, 50);
        }
    }
});

// Shift+Supr Key -- > End Session:
document.addEventListener("keydown", (event) => {
    if (event.key === "Delete" && event.shiftKey && !sessionEnding.isSessionEnded && logicHandler.appIsRunning) {
        sessionEnding.endTheSession();
    }
});