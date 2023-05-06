class LogicHandler {
    constructor() {
        this.initialTimeToElapse = 0;
        this.timeToElapse = 0;

        this.playButton = document.querySelector('.play-button');
        this.pauseButton = document.querySelector(".pause-button");

        this.timeElapsed = document.querySelector(".time-zone");

        this.timeElapsed.addEventListener("click", () => {
            // Si el contador está en marcha:
            if (this.appIsRunning) {
                this.stopCounter();
            } else if (this.timeToElapse != 0) {
                this.startCounter();
            } else {
                this.resumeCounter();
            }
        });
        this.timeElapsed.addEventListener("mouseover", () => {
            // Si el contador está en marcha:
            if (this.appIsRunning) {
                this.showPauseButton();
            } else if (this.timeToElapse != 0) {
                this.pauseButton.classList.remove("visible");
                this.playButton.classList.add("visible");
            }
        });
        this.timeElapsed.addEventListener("mouseout", () => {
            // Si el contador está en marcha:
            if (this.appIsRunning) {
                this.hidePauseButton();
            } else if (this.timeToElapse != 0) {
                this.playButton.classList.remove("visible");
                this.pauseButton.classList.add("visible");
            }
        });

        this.delayCycleButton = document.querySelector('.delay-cycle-button');
        this.delayCycleDescription = document.querySelector('.delay-cycle-description');
        this.delayCycleButton.addEventListener('mouseover', () => {
          this.delayCycleDescription.style.opacity = '0.8';
        });
        this.delayCycleButton.addEventListener('mouseleave', () => {
          this.delayCycleDescription.style.opacity = '0';
        });

        this.isRunningDefaultItinerary = false;

        // This variable will be used to register which is the following cycle to execute:
        this.itineraryListIndex = 0;

        // This variable will control if the counter is running:
        this.appIsRunning = false;

        this.currentCycleRunning = "none";

        // Create and pre define time variables for each type of timer
        this.pomodoroTimeToElapse = 1500;
        this.shortbreakTimeToElapse = 300;
        this.longbreakTimeToElapse = 600;
        this.delaybreakTimeToElapse = 60;

        // Segundos que se aplicarán de Delay:
        this.timeToDelay = 60;
    }

    startCounter() {
        // Play button image is hidden:
        this.hidePlayButton();

        // The execution of the counter starts:
        this.appIsRunning = true;
    }

    runPomodoro() {
        this.initialTimeToElapse = this.pomodoroTimeToElapse;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.pomodoroTimeToElapse / 60);
        counter.seconds = this.pomodoroTimeToElapse % 60;

        themeColor.changeToPomodoro();

        // The text of the delay cycle button changes:
        counter.delayCycleButton.innerHTML = "Delay Break";
        counter.delayCycleDescription.innerHTML = "Add 1' of extra work!"

        this.currentCycleRunning = "Pomodoro";
    }

    runShortBreak() {
        this.initialTimeToElapse = this.shortbreakTimeToElapse;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.shortbreakTimeToElapse / 60);
        counter.seconds = this.shortbreakTimeToElapse % 60;

        themeColor.changeToShortBreak();

        // The text of the delay cycle button changes:
        counter.delayCycleButton.innerHTML = "Delay Pomodoro";
        counter.delayCycleDescription.innerHTML = "Add 1' of extra break!"

        this.currentCycleRunning = "ShortBreak";
    }

    runLongBreak() {
        this.initialTimeToElapse = this.longbreakTimeToElapse;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.longbreakTimeToElapse / 60);
        counter.seconds = this.longbreakTimeToElapse % 60;

        themeColor.changeToLongBreak();

        // The text of the delay cycle button changes:
        counter.delayCycleButton.innerHTML = "Delay Pomodoro";
        counter.delayCycleDescription.innerHTML = "Add 1' of extra break!"

        this.currentCycleRunning = "LongBreak";
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

    stopCounter() {
        this.appIsRunning = false;
    }

    resumeCounter() {
        this.appIsRunning = true;

        this.hidePauseButton();
        this.hidePlayButton();
    }

    runDefaultItinerary() {
        this.isRunningDefaultItinerary = true;
        this.itineraryList = [
            () => {this.runPomodoro()},
            () => {this.runShortBreak()},
            () => {this.runPomodoro()},
            () => {this.runShortBreak()},
            () => {this.runPomodoro()},
            () => {this.runLongBreak()},
        ];
    }

    runNextCycle() {
        if (this.itineraryListIndex < this.itineraryList.length) {
            let currentFunction = this.itineraryList[this.itineraryListIndex];

            if (this.itineraryListIndex >= 1) {
                audioHandler.clockAlarmSound.play();
                // Se espera X segundos:
                setTimeout(() => {
                    currentFunction();
                    circleAnimation.updateProgress();
                    this.itineraryListIndex++;
                }, 3000);

            } else {
                audioHandler.clockStartSound.play();
                currentFunction();
                this.itineraryListIndex++;
            }
        } else {
            console.log("La sesión de estudio ha concluido!");
        }
    }

    runApp() {
        // When the web is opened, the playButton is shown.
        this.showPlayButton()

        setInterval(() => {
            if (this.appIsRunning == true) {
                // If the time of the counter ends and If the default itinerary is running, the next cycle is executed:
                if (logicHandler.timeToElapse <= 0 && this.isRunningDefaultItinerary == true) {
                    this.runNextCycle()
                }
                counter.updateCounter();
                circleAnimation.updateProgress();
            }
        }, 1000);
    }

    changeTimeElapse(timerType, time) {
        if (timerType === "pomodoro") {
            this.pomodoroTimeToElapse = time;
        }
        else if (timerType === "shortbreak") {
            this.shortbreakTimeToElapse = time;
        }
        else if (timerType === "longbreak") {
            this.longbreakTimeToElapse = time;
        }
        else {
            this.timeToDelay = time*60;
            // Se muestra el tiempo de delay en la descripción del botón:
            counter.delayCycleDescription.innerHTML = `Add ${this.timeToDelay/60}' of extra break!`;
        }
    }
}

window.LogicHandler = LogicHandler;
const logicHandler = new LogicHandler();

logicHandler.runDefaultItinerary();
logicHandler.runApp();