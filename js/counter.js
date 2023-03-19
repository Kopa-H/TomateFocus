class LogicHandler {
    constructor() {
        this.timeToElapse = 0;
    }

    runPomodoro() {
        this.timeToElapse = 1500;
    }

    runShortBreak() {
        this.timeToElapse = 300;
    }

    runLongBreak() {
        this.timeToElapse = 900;
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

        // Si se ha completado el ciclo:
        if (this.seconds == 50) {
            this.changeCycle()
        }
    }

    changeCycle() {
        this.line.style.borderBottomColor = "blue";
        this.circle.style.stroke = "blue";
        this.tasksButton.style.backgroundColor = "blue";
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
        const totalTimeElapsed = (logicHandler.timeToElapse / 60) / 25;

        // Calcula la fracción del círculo que se ha completado, restando el tiempo transcurrido del ciclo de 1.
        const fractionOfCircleCompleted = 1 - totalTimeElapsed;

        // Calcula el offset necesario para completar la fracción del círculo utilizando la circunferencia del círculo y la fracción del círculo completada.
        const offset = this.circumference * fractionOfCircleCompleted;

        // Actualiza el valor de la propiedad CSS 'strokeDashoffset' del círculo para mostrar el crecimiento.
        this.circle.style.strokeDashoffset = offset;

        // Resta 1 segundo del tiempo restante del ciclo.
        logicHandler.timeToElapse -= 1;
    }
}

// Se crea un objeto de la clase Counter:
const logicHandler = new LogicHandler()
const counter = new Counter()
const circleAnimation = new CircleAnimation()

logicHandler.runPomodoro();

// Se llama al método updateCounter cada segundo mediante una función flecha:
setInterval(() => {
    counter.updateCounter();
    circleAnimation.updateProgress();
    console.log(logicHandler.timeToElapse)
  }, 1000);