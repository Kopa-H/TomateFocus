class SessionEnding {
    constructor() {
        this.isSessionEnded = false;
        this.confettiCanvas = document.getElementById("confetti-canvas");

        this.centralZone = document.querySelector(".central-zone-wrapper");
        this.statisticsContainer = document.querySelector('.statistics-container');
        this.sessionEndingContainer = document.querySelector('.session-ending-container');
    }

    endTheSession() {
        audioHandler.sessionEndingSound.play();
        audioHandler.sessionEndingMusic.play();
        this.cleanInterface();
        this.cleanCentralZone();
        this.showEndingSession();

        this.showConfetti();

        this.isSessionEnded = true;
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

    cleanCentralZone() {
        this.centralZone.style.display = "none";

        if (particlesHandler.particlesAreActive) {
            hideParticlesButton.toggleX();
            particlesHandler.hideParticles();
        }
    }

    showEndingSession() {
        this.sessionEndingContainer.style.display = "block";
        this.showSessionStatistics();
    }

    showSessionStatistics() {
        this.finalStudyTime = (delayCycle.timeOfDelayPomodoroUsage + planSessionEstimations.pomodoroTime);
        this.finalStudyTimeInHours = logicHandler.convertMinutesToHoursAndMinutes(this.finalStudyTime);
        this.finalBreakTime = (delayCycle.timeOfDelayBreakUsage + planSessionEstimations.breakTime);
        this.finalBreakTimeInHours = logicHandler.convertMinutesToHoursAndMinutes(this.finalBreakTime);
        this.finalTotalTime = (this.finalStudyTime + this.finalBreakTime);
        this.finalTotalTimeInHours = logicHandler.convertMinutesToHoursAndMinutes(this.finalTotalTime);

        const data = [
            { label: "God Mode Usages  --------->", value: enableGodModeButton.timesGodModeActivated + "x"},
            { label: "Times Clock Paused  ------->", value: counter.timesClockPaused + "x"},
            { label: "Total Time In Pause  ------->", value: logicHandler.convertMinutesToHoursAndMinutes(counter.totalTimeInPause)},
            { label: "Final Study Time  ----------->", value: this.finalStudyTimeInHours},
            { label: "Final Break Time  ----------->", value: this.finalBreakTimeInHours},
            { label: "Final Total Time  ------------>", value: this.finalTotalTimeInHours},
            // Otros elementos de datos
          ];
          for (const item of data) {
            const paragraph = document.createElement('p');

            // Crea un span para la etiqueta (label)
            const labelSpan = document.createElement('span');
            labelSpan.textContent = item.label;
            labelSpan.classList.add('label');

            // Crea un span para el valor
            const valueSpan = document.createElement('span');
            valueSpan.textContent = item.value;
            valueSpan.classList.add('value');

            // Agrega los spans al párrafo
            paragraph.appendChild(labelSpan);
            paragraph.appendChild(valueSpan);
            this.statisticsContainer.appendChild(paragraph);
          }
    }

        showConfetti() {
            this.confettiCanvas.style.display = "block";
    }
}

window.SessionEnding = SessionEnding;
const sessionEnding = new SessionEnding();
