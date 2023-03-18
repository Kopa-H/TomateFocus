class Counter {
    constructor() {
        // Seleccionamos el elemento HTML que queremos actualizar
        this.counter = document.getElementById("counter");

        // Se establece el tiempo total del ciclo:
        this.timeToElapse = 1500;

        // Se extrae el número de minutos restantes (de los milisegundos restantes):
        this.minutes = Math.floor(this.timeToElapse / 60);
        // Se extrae el número de segundos restantes (de los milisegundos restantes):
        this.seconds = this.timeToElapse % 60;
    }

    showCurrentTime() {
        this.counter.innerHTML = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
    }

    updateCounter() {
        if (this.seconds == 0) {
            this.minutes -= 1;
            this.seconds = 59;
        } else {
            // Se resta un segundo al tiempo restante:
            this.seconds -= 1;
        }

        // Se llama al método que muestra el tiempo restante en pantalla:
        this.showCurrentTime();
    }
}

// Se crea un objeto de la clase Counter:
const counter = new Counter()

// Se llama al método updateCounter cada segundo mediante una función flecha:
setInterval(() => { counter.updateCounter() }, 1000);