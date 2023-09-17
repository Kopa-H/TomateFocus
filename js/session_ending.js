class SessionEnding {
    constructor() {
        this.isSessionEnded = false;
        this.confettiCanvas = document.getElementById("confetti-canvas");

        this.centralZone = document.querySelector(".central-zone-wrapper");
        this.statisticsContainer = document.querySelector('.statistics-container');
    }

    endTheSession() {
        console.log("SESSION END")
        audioHandler.sessionEndingSound.play();
        audioHandler.sessionEndingMusic.play();
        this.cleanInterface();
        this.cleanCentralZone();
        this.showSessionStatistics();

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

    showSessionStatistics() {
        this.finalStudyTime = (delayCycle.timeOfDelayPomodoroUsage + planSessionEstimations.pomodoroTime);
        this.finalBreakTime = (delayCycle.timeOfDelayBreakUsage + planSessionEstimations.breakTime);
        this.finalTotalTime = (this.finalStudyTime + this.finalBreakTime);

        const data = [
            { label: "Times Clock Paused  -------->", value: this.finalBreakTime },
            { label: "Total Time In Pause  -------->", value: this.finalStudyTime },
            { label: "God Mode Usages  ---------->", value: this.finalBreakTime },
            { label: "Final Study Time  ------------>", value: this.finalStudyTime },
            { label: "Final Break Time  ------------>", value: this.finalBreakTime },
            { label: "Final Total Time  ------------->", value: this.finalStudyTime },
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
