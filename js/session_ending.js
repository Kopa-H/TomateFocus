class SessionEnding {
    constructor() {

    }

    endTheSession() {
        console.log("SESSION END")
        audioHandler.playEndSessionSound();
        audioHandler.playEndSessionMusic();
        this.cleanInterface();
        this.showSessionStatistics();
    }

    cleanInterface() {
        // The settings menu is hidden.
        if (settingsMenu.settingsMenuStyles.display != "none") {
            settingsMenu.showOrHideSettingsMenu();
        }

        // The music player menu is hidden.
        if (!musicPlayer.musicPlayerIsShown) {
            musicPlayer.musicPlayerTrigger();
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
        console.log(`Final Total Time: ${this.finalTotalTime}`)
        console.log(`Total Time In Pause: ${counter.totalTimeInPause}`);
        console.log(`Total Times Clock Paused: ${counter.timesClockPaused}`);
    }
}

window.SessionEnding = SessionEnding;
const sessionEnding = new SessionEnding();
