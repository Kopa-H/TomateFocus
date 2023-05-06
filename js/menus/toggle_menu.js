class ToggleMenu {
    constructor() {
        this.element = document.querySelector(".toggleMenu-flex");
        this.elementStyles = window.getComputedStyle(element);
        this.displayType = elementStyles.display;

        this.toggleMenuIcon = document.getElementById("settings-icon")
        toggleMenuIcon.onclick = () => {
            this.displayToggleMenu();
        };

        this.pomodoroMinusButton = document.querySelector(".pomodoro .minus-button");
        this.pomodoroPlusButton = document.querySelector(".pomodoro .plus-button");
        this.shortbreakMinusButton = document.querySelector(".short-break .minus-button");
        this.shortbreakPlusButton = document.querySelector(".short-break .plus-button");
        this.longbreakMinusButton = document.querySelector(".long-break .minus-button");
        this.longbreakPlusButton = document.querySelector(".long-break .plus-button");
        this.delayCycleMinusButton = document.querySelector(".delay-break .minus-button");
        this.delayCyclePlusButton = document.querySelector(".delay-break .plus-button");

        this.pomodoroTextMinutes = document.querySelector(".pomodoro .menu-text");
        this.shortbreakTextMinutes = document.querySelector(".short-break .menu-text");
        this.longbreakTextMinutes = document.querySelector(".long-break .menu-text");
        this.delaybreakTextMinutes = document.querySelector(".delay-break .menu-text");

        this.pomodoroPlusButton.addEventListener('click', () => {
            this.pomodoroCurrentMinutes = +this.pomodoroTextMinutes.textContent.match(/\d+/g)
            if (this.pomodoroCurrentMinutes < 60) {
                this.pomodoroTextMinutes.textContent = `${++this.pomodoroCurrentMinutes} minutes`
                logicHandler.pomodoroTimeToElapse = ++this.pomodoroCurrentMinutes;
            }
        });
        this.pomodoroPlusButton.addEventListener('click', () => {
            // Se obtiene el número de minutos actuales del elemento HTML:
            this.pomodoroCurrentMinutes = +this.pomodoroTextMinutes.textContent.match(/\d+/g)
            if (this.pomodoroCurrentMinutes > 10) {
                // Se modifica el texto que se verá en el toggle menu:
                this.pomodoroTextMinutes.textContent = `${--this.pomodoroCurrentMinutes} minutes`
                // Se modifica el tiempo que usará LogicHandler y Counter:
                logicHandler.pomodoroTimeToElapse = --this.pomodoroCurrentMinutes;
            }
        });

        this.shortbreakPlusButton.addEventListener("click", () => {
            this.shortbreakCurrentMinutes = +this.shortbreakTextMinutes.textContent.match(/\d+/g)
            if (this.shortbreakCurrentMinutes < 30) {
                this.shortbreakTextMinutes.textContent = `${++this.shortbreakCurrentMinutes} minutes`
                logicHandler.shortbreakTimeToElapse = ++this.shortbreakCurrentMinutes;
            }
        });
        this.shortbreakMinusButton.addEventListener("click", () => {
            this.shortbreakCurrentMinutes = +this.shortbreakTextMinutes.textContent.match(/\d+/g)
            if (this.shortbreakCurrentMinutes > 1) {
                this.shortbreakTextMinutes.textContent = `${--this.shortbreakCurrentMinutes} minutes`
                logicHandler.shortbreakTimeToElapse = --this.shortbreakCurrentMinutes;
            }
        });

        this.longbreakPlusButton.addEventListener("click", () => {
            this.longbreakCurrentMinutes = +this.longbreakTextMinutes.textContent.match(/\d+/g)
            if (this.longbreakCurrentMinutes < 60) {
                this.longbreakTextMinutes.textContent = `${++this.longbreakCurrentMinutes} minutes`
                logicHandler.longbreakTimeToElapse = ++this.longbreakCurrentMinutes;
            }
        });
        this.longbreakMinusButton.addEventListener("click", () => {
            this.longbreakCurrentMinutes = +this.longbreakTextMinutes.textContent.match(/\d+/g)
            if (this.longbreakCurrentMinutes > 5) {
                this.longbreakTextMinutes.textContent = `${--this.longbreakCurrentMinutes} minutes`
                logicHandler.longbreakTimeToElapse = --this.longbreakCurrentMinutes;
            }
        });

        this.delayCyclePlusButton.addEventListener("click", () => {
            this.delayCycleCurrentMinutes = +this.delaybreakTextMinutes.textContent.match(/\d+/g)
            if (this.delayCycleCurrentMinutes < 5) {
                this.delaybreakTextMinutes.textContent = `${++this.delayCycleCurrentMinutes} minutes`

                logicHandler.timeToDelay = ++this.delayCycleCurrentMinutes*60;
                delayCycle.delayCycleDescription.innerHTML = `Add ${logicHandler.timeToDelay/60}' of extra break!`;
            }
        });
        this.delayCycleMinusButton.addEventListener("click", () => {
            this.delayCycleCurrentMinutes = +this.delaybreakTextMinutes.textContent.match(/\d+/g)
            if (this.delayCycleCurrentMinutes > 1) {
                this.delaybreakTextMinutes.textContent = `${--this.delayCycleCurrentMinutes} minutes`

                logicHandler.timeToDelay = --delayCycleCurrentMinutes*60;
                delayCycle.delayCycleDescription.innerHTML = `Add ${logicHandler.timeToDelay/60}' of extra break!`;
            }
        });

        // Reset Preferences Button
        this.resetPreferencesButton = document.querySelector(".reset-preferences-button")
        this.resetPreferencesButton.addEventListener('click', () => {
            resetPreferences();
        });
    }

    displayToggleMenu() {
        if (this.displayType == "none") {
            this.element.classList.remove("slideOut");
            this.element.classList.add("slideIn");
            this.element.style.display = "flex";

        } else {
            this.element.classList.remove("slideIn");
            this.element.classList.add("slideOut");

            this.element.addEventListener("animationend", () => {
                this.element.style.display = "none"
            }, { once: true })
        }
    }

    resetMinutesPreferences() {
        this.pomodoroMinutes.textContent = `${25} minutes`;
        this.shortbreakMinutes.textContent = `${5} minutes`;
        this.longbreakMinutes.textContent = `${15} minutes`;
        this.delaybreakMinutes.textContent = `${1} minutes`;
    };
}

window.ToggleMenu = ToggleMenu;
const toggleMenu = new ToggleMenu();