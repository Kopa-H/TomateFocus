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
                this.handleCircleClick(event);
                console.log("Circumference clicked!")
            }
        });

        this.secondaryCircle.addEventListener("click", (event) => {
            if (godModeHandler.godModeIsActive && logicHandler.timeToElapse < logicHandler.initialTimeToElapse) {
                this.handleCircleClick(event);
                console.log("Circumference clicked!")
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

    getPositionOnCircle(event) {
        const clickPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const circleCenter = {
          x: this.secondaryCircle.getBoundingClientRect().left + this.radius,
          y: this.secondaryCircle.getBoundingClientRect().top + this.radius
        };
        const angleInRadians = Math.atan2(clickPosition.y - circleCenter.y, clickPosition.x - circleCenter.x);
        const angleInDegrees = angleInRadians * 180 / Math.PI;
        const positionOnCircle = 360 - (angleInDegrees >= 0 ? angleInDegrees : angleInDegrees + 360);
        return positionOnCircle;
    }

    handleCircleClick(event) {
        const positionOnCircle = this.getPositionOnCircle(event);
        const fractionOfCircleClicked = positionOnCircle / 360;
        const timeElapsed = (1 - fractionOfCircleClicked) * logicHandler.initialTimeToElapse;
        logicHandler.timeToElapse = timeElapsed;
        counter.updateCounter();
        counter.showCurrentTime();
        this.updateProgress();

        console.log("se actualiza el Counter!")
    }
}
window.CircleAnimation = CircleAnimation;
const circleAnimation = new CircleAnimation();