class Counter {
    constructor() {
        // Seleccionamos el elemento HTML que queremos actualizar
        this.counter = document.getElementById('counter');

        this.timeToElapse = 1500;
    }

    updateCounter() {
        const minutos = Math.floor(timeToElapse / 60);
        const segundos = timeToElapse % 60;
        this.timeToElapse--;
    }

    showCurrentTime() {
        this.contador.innerHTML = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }
}

// Se crea un objeto de la clase Counter:
const counter = new Counter()

// Se llama al método updateCounter cada segundo.
setInterval(counter.updateCounter, 1000);