class PlayAndPauseIconsHandler {
    constructor() {
        this.playButton = document.querySelector('.play-button');
        this.pauseButton = document.querySelector(".pause-button");

        this.timeElapsed = document.querySelector(".time-zone");

        // Manejador de eventos del play
        this.timeElapsed = document.querySelector(".time-zone");
        this.timeElapsed.addEventListener("click", () => {
            if (logicHandler.appIsRunning) {
                logicHandler.stopCounter();
            } else if (logicHandler.timeToElapse != 0) {
                logicHandler.startCounter();
            } else {
                logicHandler.resumeCounter();
            }
        });

        this.timeElapsed.addEventListener("mouseover", () => {
            // Si el contador está en marcha:
            if (logicHandler.appIsRunning) {
                this.showPauseButton();
            } else if (logicHandler.timeToElapse != 0) {
                this.pauseButton.classList.remove("visible");
                this.playButton.classList.add("visible");
            }
        });
        this.timeElapsed.addEventListener("mouseout", () => {
            // Si el contador está en marcha:
            if (logicHandler.appIsRunning) {
                this.hidePauseButton();
            } else if (logicHandler.timeToElapse != 0) {
                this.playButton.classList.remove("visible");
                this.pauseButton.classList.add("visible");
            }
        });
    }

    showPlayButton() {
        this.playButton.classList.add("visible");
    }

    hidePlayButton() {
        this.playButton.classList.remove("visible");
    }

    showPauseButton() {
        if (logicHandler.timeToElapse != 0) {
            this.pauseButton.classList.add("visible");
        }
    }

    hidePauseButton() {
        this.pauseButton.classList.remove("visible");
    }
}

window.PlayAndPauseIconsHandler = PlayAndPauseIconsHandler;
const playAndPauseIconsHandler = new PlayAndPauseIconsHandler();