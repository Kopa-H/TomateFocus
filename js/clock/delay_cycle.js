class DelayCycle {

    constructor() {
        this.timeOfDelayPomodoroUsage = 0;
        this.timeOfDelayBreakUsage = 0;

        this.delayCycleButton = document.querySelector('.delay-cycle-button');
        this.delayCycleDescription = document.querySelector('.delay-cycle-description');

        this.delayCycleButton.addEventListener('mouseover', () => {
        this.delayCycleDescription.style.opacity = '0.8';
        });
        this.delayCycleButton.addEventListener('mouseleave', () => {
        this.delayCycleDescription.style.opacity = '0';
        });

        // Añadir minutos extra:
        this.delayCycleButton.addEventListener('click', () => {
            this.delayCycleOneMinute();
        });
    }

    delayCycleOneMinute() {
        if (logicHandler.timeToElapse >= 1) {
            if (counter.seconds != 0 && counter.minutes != 0 && (counter.minutes*60 + counter.seconds + logicHandler.timeToDelay) <= logicHandler.initialTimeToElapse) {
                counter.minutes += logicHandler.timeToDelay/60;
                logicHandler.timeToElapse = counter.minutes*60 + counter.seconds
                counter.updateCounter();
                circleAnimation.updateProgress();

                if (logicHandler.currentCycleRunning == "Pomodoro") {
                    this.timeOfDelayPomodoroUsage += (counter.minutes*60 + counter.seconds);
                } else if (logicHandler.currentCycleRunning == "ShortBreak" || logicHandler.currentCycleRunning == "LongBreak"){
                    this.timeOfDelayBreakUsage += (counter.minutes*60 + counter.seconds);
                }
            // Si el tiempo a añadir supera el tiempo original del ciclo:
            } else if ((counter.minutes*60 + counter.seconds + logicHandler.timeToDelay) >= logicHandler.initialTimeToElapse) {
                counter.minutes = logicHandler.initialTimeToElapse/60;
                counter.seconds = 0;
                logicHandler.timeToElapse = counter.minutes*60 + counter.seconds
                counter.updateCounter();
                circleAnimation.updateProgress();
            }
        }
    }

    changeToDelayPomodoro() {
        this.delayCycleButton.innerHTML = "Delay Pomodoro";
        this.delayCycleDescription.innerHTML = "Add 1' of extra break!"
    }

    changeToDelayBreak() {
        this.delayCycleButton.innerHTML = "Delay Break";
        this.delayCycleDescription.innerHTML = "Add 1' of extra work!"
    }
}

window.DelayCycle = DelayCycle;
const delayCycle = new DelayCycle();