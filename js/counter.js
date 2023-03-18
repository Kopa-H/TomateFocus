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

// Se crea un objeto de la clase Counter:
const counter = new Counter()

// Se llama al método updateCounter cada segundo mediante una función flecha:
setInterval(() => { counter.updateCounter() }, 1000);