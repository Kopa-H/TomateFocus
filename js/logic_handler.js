class LogicHandler {
    constructor() {
        this.initialTimeToElapse = 0;
        this.timeToElapse = 0;

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

        this.itineraryList = [
            () => {this.runPomodoro()},
            () => {this.runShortBreak()},
            () => {this.runPomodoro()},
            () => {this.runShortBreak()},
            () => {this.runPomodoro()},
            () => {this.runLongBreak()},
        ];
        this.itineraryListIndex = 0;
    }

    startCounter() {
        // The plan session button disappears:
        planSessionButton.erasePlanSessionButton();
        settingsMenu.cleanSettingsMenu();

        // Play button image is hidden:
        playAndPauseIconsHandler.hidePlayButton();

        // Cambia el estado de hide particles del Settings Menu:
        particlesHandler.manageFirstParticlesAppearance();

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

    runNextCycle() {
        if (this.itineraryListIndex < this.itineraryList.length) {
            this.itineraryListIndex++;
            let currentFunction = this.itineraryList[this.itineraryListIndex];

            // Si ya se había iniciado el contador antes:
            if (this.itineraryListIndex >= 2) {
                // Se espera X segundos:
                setTimeout(() => {
                    currentFunction();
                    circleAnimation.updateProgress();
                }, 3000);
                audioHandler.clockAlarmSound.play();

            // Si se acaba de accionar el contador:
            } else {
                this.itineraryListIndex--;
                let currentFunction = this.itineraryList[this.itineraryListIndex];
                currentFunction();
                audioHandler.clockStartSound.play();
            }
        } else {
            alert("La sesión de estudio ha concluido!");
        }
    }

    runApp() {
        // When the web is opened, the playButton is shown.
        playAndPauseIconsHandler.showPlayButton()

        setInterval(() => {
            if (this.appIsRunning == true) {
                // If the time of the counter ends, the next cycle is executed:
                if (this.timeToElapse <= 0) {
                    this.runNextCycle()
                    console.log(this.timeToElapse)
                }

                counter.updateCounter();
                circleAnimation.updateProgress();
            }
        }, 1000);
    }

    updateItineraryList() {
        this.itineraryList = [];
        planSessionEstimationsSection.chooseSections.forEach((element) => {
            if (element.innerHTML != "None") {
                let cycleFunction = eval(`() => {this.run${element.innerHTML}()}`);
                this.itineraryList.push(cycleFunction)
            }
        });
    }
}

window.LogicHandler = LogicHandler;
const logicHandler = new LogicHandler();

logicHandler.runApp();