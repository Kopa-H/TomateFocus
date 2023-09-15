class SessionEnding {
    constructor() {
        this.isSessionEnded = false;
        this.confettiCanvas = document.getElementById("confetti-canvas");
    }

    endTheSession() {
        console.log("SESSION END")
        audioHandler.sessionEndingSound.play();
        audioHandler.sessionEndingMusic.play();
        this.cleanInterface();
        this.showSessionStatistics();

        this.showConfetti();
    }

    cleanInterface() {
        // The settings menu is hidden.
        if (settingsMenu.settingsMenuStyles.display != "none") {
            settingsMenu.showOrHideSettingsMenu();
        }

        // The music player menu is hidden.
        if (musicButton.musicPlayerIsShown) {
            musicButton.musicPlayerTrigger();
        }

        // The music stops
        if (musicPlayer.songIsPlaying) {
            musicPlayer.togglePlayPause();
        }
    }

    showSessionStatistics() {
        this.finalStudyTime = (delayCycle.timeOfDelayPomodoroUsage + planSessionEstimations.pomodoroTime);
        this.finalBreakTime = (delayCycle.timeOfDelayBreakUsage + planSessionEstimations.breakTime);
        this.finalTotalTime = (this.finalStudyTime + this.finalBreakTime);

        console.log(`Final Study Time: ${this.finalStudyTime}`);
        console.log(`Final Break Time: ${this.finalBreakTime}`);
        console.log(`Final Total Time: ${this.finalTotalTime}`);
        console.log(`Total Time In Pause: ${counter.totalTimeInPause}`);
        console.log(`Total Times Clock Paused: ${counter.timesClockPaused}`);
        console.log(`God Mode Usages: ${"placeholder"}`);

        console.log("Congratulations! You just finished your study session. Remebember that a great student is that who can also enjoy life, and if you are currently fighting a deadline do whatever you can, but don't forget to take care of yourself and your anxiety.")
    }

        // Función para mostrar el confeti
        showConfetti() {
            this.confettiCanvas.style.display = "block";
    }
}

window.SessionEnding = SessionEnding;
const sessionEnding = new SessionEnding();
