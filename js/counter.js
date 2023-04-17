class LogicHandler {
    constructor() {
        this.initialTimeToElapse = 0;
        this.timeToElapse = 0;

        this.runPomodoroFunction = () => {
            this.runPomodoro();
        };
        this.runShortBreakFunction = () => {
            this.runShortBreak();
        };
        this.runLongBreakFunction = () => {
            this.runLongBreak();
        };

        this.startCounterListener = () => {
            this.startCounter();
        };

        this.stopCounterListener = () => {
            this.stopCounter();
        };

        this.resumeCounterListener = () => {
            this.resumeCounter();
        };

        this.showPlayButtonListener = () => {
            this.showPlayButton();
        };

        this.hidePlayButtonListener = () => {
            this.hidePlayButton();
        };

        this.showPauseButtonListener = () => {
            this.showPauseButton();
        };

        this.hidePauseButtonListener = () => {
            this.hidePauseButton();
        };

        this.playButton = document.querySelector('.play-button');
        this.playButton.addEventListener("click", this.startCounterListener);

        this.pauseButton = document.querySelector(".pause-button");
        this.pauseButton.addEventListener("click", this.stopCounterListener);

        this.timeElapsed = document.querySelector(".time-elapsed");
        this.timeElapsed.addEventListener("mouseover", this.showPauseButtonListener);
        this.timeElapsed.addEventListener("mouseout", this.hidePauseButtonListener);

        this.isRunningDefaultItinerary = false;

        // This variable will be used to register which is the following cycle to execute:
        this.itineraryListIndex = 0;

        // This variable will control if the counter is running:
        this.appIsRunning = false;

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
        counter.delayCycleChangeButton.innerHTML = "Delay Break";
        counter.delayCycleChangeDescription.innerHTML = "Add 1' of extra work!"
    }

    runShortBreak() {
        this.initialTimeToElapse = this.shortbreakTimeToElapse;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.shortbreakTimeToElapse / 60);
        counter.seconds = this.shortbreakTimeToElapse % 60;

        themeColor.changeToShortBreak();

        // The text of the delay cycle button changes:
        counter.delayCycleChangeButton.innerHTML = "Delay Pomodoro";
        counter.delayCycleChangeDescription.innerHTML = "Add 1' of extra break!"
    }

    runLongBreak() {
        this.initialTimeToElapse = this.longbreakTimeToElapse;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.longbreakTimeToElapse / 60);
        counter.seconds = this.longbreakTimeToElapse % 60;

        themeColor.changeToLongBreak();

        // The text of the delay cycle button changes:
        counter.delayCycleChangeButton.innerHTML = "Delay Pomodoro";
        counter.delayCycleChangeDescription.innerHTML = "Add 1' of extra break!"
    }

    showPlayButton() {
        this.playButton.classList.add("visible");
        this.playButton.style.display = "block"
    }

    hidePlayButton() {
        this.playButton.classList.remove("visible");
    }

    showPauseButton() {
        if (this.appIsRunning == true) {
            this.pauseButton.classList.add("visible");
        }
    }

    hidePauseButton() {
        if (this.appIsRunning == true) {
            this.pauseButton.classList.remove("visible");
        }
    }

    stopCounter() {
        this.appIsRunning = false;

        // agregar eventListeners usando las funciones de listener
        this.pauseButton.removeEventListener("click", this.stopCounterListener);
        this.pauseButton.addEventListener("click", this.resumeCounterListener);

        this.pauseButton.addEventListener("mouseover", this.showPlayButtonListener);
        this.pauseButton.addEventListener("mouseout", this.hidePlayButtonListener);
    }

    resumeCounter() {
        this.appIsRunning = true;

        this.hidePauseButton()
        this.hidePlayButton()

        this.pauseButton.removeEventListener("click", this.resumeCounterListener);
        this.pauseButton.removeEventListener("mouseover", this.showPlayButtonListener);
        this.pauseButton.removeEventListener("mouseout", this.hidePlayButtonListener);

        this.pauseButton.addEventListener("click", this.stopCounterListener);

        // Se quita el efecto de mostrar el botón de pausa solo cuando se reactiva el contador. Luego se reintroduce el event en el intervalo.
        this.timeElapsed.removeEventListener("mouseover", this.showPauseButtonListener);
    }

    runDefaultItinerary() {
        this.isRunningDefaultItinerary = true;
        this.itineraryList = [
            this.runShortBreakFunction,
            this.runPomodoroFunction,
            this.runShortBreakFunction,
            this.runPomodoroFunction,
            this.runShortBreakFunction,
            this.runPomodoroFunction,
            this.runLongBreakFunction
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
                // Se reintroduce el eventListener de mostrar el botón de pausa:
                if (!(this.timeElapsed && this.timeElapsed.mouseover)) {
                    this.timeElapsed.addEventListener("mouseover", this.showPauseButtonListener);
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
            counter.delayCycleChangeDescription.innerHTML = `Add ${this.timeToDelay/60}' of extra break!`;
        }
    }
}

class Counter {
    constructor() {
        // Seleccionamos el elemento HTML que queremos actualizar
        this.counter = document.getElementById("counter");

        // Se extrae el número de minutos restantes (de los milisegundos restantes):
        this.minutes = 0;
        // Se extrae el número de segundos restantes (de los milisegundos restantes):
        this.seconds = 0;

        // Se accede a los diferentes elementos HTML:
        this.line = document.querySelector(".line");
        this.circle = document.querySelector(".circle-progress");

        this.delayCycleChangeButton = document.querySelector('.delay-cycle-change-button');
        this.delayCycleChangeDescription = document.querySelector('.delay-cycle-change-description');
        this.delayCycleChangeButton.addEventListener('click', () => {
            if (this.seconds != 0 && this.minutes != 0 && (this.minutes*60 + this.seconds + logicHandler.timeToDelay) <= logicHandler.initialTimeToElapse) {
                this.minutes += logicHandler.timeToDelay/60;
                logicHandler.timeToElapse = this.minutes*60 + this.seconds
                this.updateCounter();
            // Si el tiempo a añadir supera el tiempo original del ciclo:
            } else if ((this.minutes*60 + this.seconds + logicHandler.timeToDelay) >= logicHandler.initialTimeToElapse) {
                this.minutes = logicHandler.initialTimeToElapse/60;
                this.seconds = 0;
                logicHandler.timeToElapse = this.minutes*60 + this.seconds
                this.updateCounter();
            }
        });
    }

    showCurrentTime() {
        // Se usa la función toString() para convertir los valores numéricos de this.minutes y this.seconds en cadenas de texto.
        // Luego, se utiliza el método padStart() para asegurarse de que cada cadena tenga una longitud de dos caracteres, añadiendo un cero a la izquierda si es necesario.
        this.counter.innerHTML = `${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
    }

    updateCounter() {
        // Se llama al método que muestra el tiempo restante en pantalla:
        this.showCurrentTime();

        // Si los segundos han llegado a 0 se pasa al siguiente minuto, sino solamente se resta un segundo:
        if (this.seconds == 0 && this.minutes != 0) {
            this.minutes -= 1;
            this.seconds = 59;
            logicHandler.timeToElapse --
        } else if (this.seconds != 0) {
            this.seconds -= 1;
            logicHandler.timeToElapse --
        }
    }
}

class CircleAnimation {
    constructor() {
        // Se extrae el elemento HTML:
        this.circle = document.querySelector(".circle-progress");

        // Se calcula el radio y la circumferencia del elemento HTML:
        this.radius = this.circle.r.baseVal.value;
        this.circumference = 2 * Math.PI * this.radius;
        this.circle.style.strokeDasharray = this.circumference
    }

    updateProgress() {
        // Calcula el tiempo que ha transcurrido desde la puesta en marcha del contador.
            // Se hace dividiendo el tiempo restante del ciclo por los minutos totales del ciclo.
        this.totalTimeElapsed = logicHandler.timeToElapse / logicHandler.initialTimeToElapse;

        // Calcula la fracción del círculo que se ha completado, restando el tiempo transcurrido del ciclo de 1.
        this.fractionOfCircleCompleted = 1 - this.totalTimeElapsed;

        // Calcula el offset necesario para completar la fracción del círculo utilizando la circunferencia del círculo y la fracción del círculo completada.
        this.offset = this.circumference * this.fractionOfCircleCompleted;

        // Actualiza el valor de la propiedad CSS 'strokeDashoffset' del círculo para mostrar el crecimiento.
        this.circle.style.strokeDashoffset = this.offset;
    }
}

class ThemeColor {
    constructor() {
        // Se accede a los diferentes elementos HTML:
        this.line = document.querySelector(".line");
        this.circle = document.querySelector(".circle-progress");
        this.delayCycleChangeButton = document.querySelector('.delay-cycle-change-button');
    }

    changeToPomodoro() {
        this.line.style.borderBottomColor = "red";
        this.circle.style.stroke = "red";
        this.delayCycleChangeButton.style.backgroundColor = "red";
    }

    changeToShortBreak() {
        this.line.style.borderBottomColor = "blue";
        this.circle.style.stroke = "blue";
        this.delayCycleChangeButton.style.backgroundColor = "blue";
    }

    changeToLongBreak() {
        this.line.style.borderBottomColor = "purple";
        this.circle.style.stroke = "purple";
        this.delayCycleChangeButton.style.backgroundColor = "purple";
    }
}

class AudioHandler {
    constructor() {
        this.clockAlarmSound = document.querySelector('.clock-alarm-sound');
        this.clockAlarmSound.volume = 0.5;
    }
}

// Se crea un objeto de la clase Counter:
const logicHandler = new LogicHandler();
const counter = new Counter();
const circleAnimation = new CircleAnimation();
const themeColor = new ThemeColor();
const audioHandler = new AudioHandler();

logicHandler.runDefaultItinerary();
logicHandler.runApp();