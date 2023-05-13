class CircleAnimation {
    constructor() {
        // Se extrae el elemento HTML:
        this.circle = document.querySelector(".circle-progress");
        this.secondaryCircle = document.querySelector(".secondary-circle-progress");

        // Se calcula el radio y la circumferencia del elemento HTML:
        this.radius = this.secondaryCircle.r.baseVal.value;
        this.circumference = 2 * Math.PI * this.radius;
        this.circle.style.strokeDasharray = this.circumference

        // Agregar listener de eventos al círculo
        this.circle.addEventListener("click", (event) => {
            if (godModeHandler.godModeIsActive && logicHandler.timeToElapse < logicHandler.initialTimeToElapse) {
                godModeHandler.handleCircleClick(event);
            }
        });

        this.secondaryCircle.addEventListener("click", (event) => {
            if (godModeHandler.godModeIsActive && logicHandler.timeToElapse < logicHandler.initialTimeToElapse) {
                godModeHandler.handleCircleClick(event);
            }
        });
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

    toggleCirclesInteractivity() {
		// If god mode is enabled:
		if (this.circle.style.cursor == "pointer") {
			this.circle.style.cursor = "auto";
			this.secondaryCircle.style.cursor = "auto";
		} else {
			this.circle.style.cursor = "pointer";
			this.secondaryCircle.style.cursor = "pointer";
		}
	}
}
window.CircleAnimation = CircleAnimation;
const circleAnimation = new CircleAnimation();