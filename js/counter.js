class LogicHandler {
    constructor() {
        this.initialTimeToElapse = 0;

        // definir funciones de listener por separado
        this.changeCycleListener = () => {
            this.changeCycle();
        }

        this.stopCounterListener = () => {
            this.stopCounter();
        }

        this.resumeCounterListener = () => {
            this.resumeCounter();
        }

        this.showPlayButtonListener = () => {
            this.showPlayButton();
        }

        this.hidePlayButtonListener = () => {
            this.hidePlayButton();
        }

        this.showPauseButtonListener = () => {
            this.showPauseButton();
        }

        this.hidePauseButtonListener = () => {
            this.hidePauseButton();
        }

        // agregar eventListeners usando las funciones de listener
        this.playButton = document.querySelector('.play-button');
        this.playButton.addEventListener("click", this.changeCycleListener);

        this.pauseButton = document.querySelector(".pause-button")
        this.pauseButton.addEventListener("click", this.stopCounterListener);

        this.timeElapsed = document.querySelector(".time-elapsed")
        this.timeElapsed.addEventListener("mouseover", this.showPauseButtonListener);
        this.timeElapsed.addEventListener("mouseout", this.hidePauseButtonListener);

        // This variable will be used to register which is the following cycle to execute:
        this.itineraryListIndex = 0;
    }

    runPomodoro() {
        // this.initialTimeToElapse = 1500;
        this.initialTimeToElapse = 10;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.timeToElapse / 60);
        counter.seconds = this.timeToElapse % 60;

        themeColor.changeToPomodoro();
    }

    runShortBreak() {
        // this.initialTimeToElapse = 300;
        this.initialTimeToElapse = 10;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.timeToElapse / 60);
        counter.seconds = this.timeToElapse % 60;

        themeColor.changeToShortBreak()
    }

    runLongBreak() {
        // this.initialTimeToElapse = 900;
        this.initialTimeToElapse = 10;
        this.timeToElapse = this.initialTimeToElapse;

        // Se reinicia el contador:
        counter.minutes = Math.floor(this.timeToElapse / 60);
        counter.seconds = this.timeToElapse % 60;

        themeColor.changeToLongBreak()
    }

    changeCycle() {
        console.log("Se ha activado el contador!")
        // Se elimina la imagen:
        this.hidePlayButton();

        // Se da inicio a la ejecución de la aplicación:
        this.appIsRunning = true;
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
        console.log("Se ha detenido el contador")

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

        console.log("En teoría se reactiva el contador")
    }

    runDefaultItenerary() {
        this.runDefaultItenerary = true
        this.itineraryList = [this.runPomodoro(), this.runShortBreak(), this.runPomodoro(), this.runShortBreak(), this.runPomodoro(), this.runLongBreak(), this.runPomodoro()]
    }

    runNextCycle() {
        // The following cycle is executed:
        this.itineraryList[this.itineraryListIndex]

        // The itinerary list index is updated:
        this.itineraryListIndex ++
    }

    runApp() {
        // When the web is opened, the playButton is shown.
        this.showPlayButton()

        if (this.appIsRunning == true) {
            setInterval(() => {
                counter.updateCounter();
                circleAnimation.updateProgress();

                // If the time of the counter ends:
                // I have to do that timeToElapse starts being 0:
                console.log(counter.timeToElapse)
                if (counter.timeToElapse == 0) {
                    if (this.runDefaultItenerary == true) {
                        this.runNextCycle()
                    }
                }
                // Se reintroduce el eventListener de mostrar el botón de pausa:
                if (!(this.timeElapsed && this.timeElapsed.mouseover)) {
                    this.timeElapsed.addEventListener("mouseover", this.showPauseButtonListener);
                }
            }, 1000);
        }
    }
}

class Counter {
    constructor() {
        // Seleccionamos el elemento HTML que queremos actualizar
        this.counter = document.getElementById("counter");

        // Se extrae el número de minutos restantes (de los milisegundos restantes):
        this.minutes = Math.floor(logicHandler.timeToElapse / 60);
        // Se extrae el número de segundos restantes (de los milisegundos restantes):
        this.seconds = logicHandler.timeToElapse % 60;

        // Se accede a los diferentes elementos HTML:
        this.line = document.querySelector(".line");
        this.circle = document.querySelector(".circle-progress");
        this.tasksButton = document.querySelector(".tasks-button");
    }

    showCurrentTime() {
        // Se usa la función toString() para convertir los valores numéricos de this.minutes y this.seconds en cadenas de texto.
        // Luego, se utiliza el método padStart() para asegurarse de que cada cadena tenga una longitud de dos caracteres, añadiendo un cero a la izquierda si es necesario.
        this.counter.innerHTML = `${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
    }

    updateCounter() {
        // Si los segundos han llegado a 0 se pasa al siguiente minuto, sino solamente se resta un segundo:
        if (this.seconds == 0) {
            this.minutes -= 1;
            this.seconds = 59;
        } else {
            this.seconds -= 1;
        }

        // Se llama al método que muestra el tiempo restante en pantalla:
        this.showCurrentTime();
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

        // Resta 1 segundo del tiempo restante del ciclo.
        logicHandler.timeToElapse -= 1;
    }
}

class ThemeColor {
    constructor() {
        // Se accede a los diferentes elementos HTML:
        this.line = document.querySelector(".line");
        this.circle = document.querySelector(".circle-progress");
        this.tasksButton = document.querySelector(".tasks-button");
    }

    changeToPomodoro() {
        this.line.style.borderBottomColor = "red";
        this.circle.style.stroke = "red";
        this.tasksButton.style.backgroundColor = "red";
    }

    changeToShortBreak() {
        this.line.style.borderBottomColor = "blue";
        this.circle.style.stroke = "blue";
        this.tasksButton.style.backgroundColor = "blue";
    }

    changeToLongBreak() {
        this.line.style.borderBottomColor = "purple";
        this.circle.style.stroke = "purple";
        this.tasksButton.style.backgroundColor = "purple";
    }
}

// Se crea un objeto de la clase Counter:
const logicHandler = new LogicHandler();
const counter = new Counter();
const circleAnimation = new CircleAnimation();
const themeColor = new ThemeColor();

logicHandler.runDefaultItenerary();
logicHandler.runApp();