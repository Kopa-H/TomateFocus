class LogicHandler {
    constructor() {
        this.initialTimeToElapse = 0;
        this.timeToElapse = 0;

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
        playAndPauseIconsHandler.hidePlayButton();

        // Cambia el estado de hide particles del Toggle Menu:
        particlesHandler.showParticles();
        hideParticlesButton.toggleX();

        // The execution of the counter starts:
        this.appIsRunning = true;
    }

    stopCounter() {
        this.appIsRunning = false;
    }

    resumeCounter() {
        this.appIsRunning = true;

        playAndPauseIconsHandler.hidePauseButton();
        playAndPauseIconsHandler.hidePlayButton();
    }

    runPomodoro() {
        this.initialTimeToElapse = this.pomodoroTimeToElapse;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.pomodoroTimeToElapse / 60);
        counter.seconds = this.pomodoroTimeToElapse % 60;

        themeColor.changeToPomodoro();

        // The text of the delay cycle button changes:
        delayCycle.changeToDelayBreak();

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
        delayCycle.changeToDelayPomodoro();

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
        delayCycle.changeToDelayPomodoro();

        this.currentCycleRunning = "LongBreak";
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
        playAndPauseIconsHandler.showPlayButton()

        setInterval(() => {
            if (this.appIsRunning == true) {
                // If the time of the counter ends and If the default itinerary is running, the next cycle is executed:
                if (this.timeToElapse <= 0 && this.isRunningDefaultItinerary == true) {
                    this.runNextCycle()
                }
                counter.updateCounter();
                circleAnimation.updateProgress();
            }
        }, 1000);
    }
}

window.LogicHandler = LogicHandler;
const logicHandler = new LogicHandler();

logicHandler.runDefaultItinerary();
logicHandler.runApp();