class ToggleMenu {
    constructor() {
        this.toggleMenuFlex = document.querySelector(".toggle-menu-flex");
        this.toggleMenuStyles = window.getComputedStyle(this.toggleMenuFlex);

        this.toggleMenuIcon = document.getElementById("settings-icon")
        this.toggleMenuIcon.addEventListener('click', () => {
            this.showOrHideToggleMenu();
        });

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
        this.pomodoroMinusButton.addEventListener('click', () => {
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

                logicHandler.timeToDelay = --this.delayCycleCurrentMinutes*60;
                delayCycle.delayCycleDescription.innerHTML = `Add ${logicHandler.timeToDelay/60}' of extra break!`;
            }
        });

        // Reset Preferences Button
        this.resetPreferencesButton = document.querySelector(".reset-preferences-button")
        this.resetPreferencesButton.addEventListener('click', () => {
            this.resetMinutesPreferences();
        });
    }

    showOrHideToggleMenu() {
        if (this.toggleMenuStyles.display == "none") {
            this.toggleMenuFlex.classList.remove("slideOut");
            this.toggleMenuFlex.classList.add("slideIn");
            this.toggleMenuFlex.style.display = "flex";
        } else {
            this.toggleMenuFlex.classList.remove("slideIn");
            this.toggleMenuFlex.classList.add("slideOut");

            this.toggleMenuFlex.addEventListener("animationend", () => {
                this.toggleMenuFlex.style.display = "none"
            }, { once: true })
        }
    }

    resetMinutesPreferences() {
        this.pomodoroTextMinutes.textContent = `${25} minutes`;
        this.shortbreakTextMinutes.textContent = `${5} minutes`;
        this.longbreakTextMinutes.textContent = `${15} minutes`;
        this.delaybreakTextMinutes.textContent = `${1} minutes`;
    };
}

window.ToggleMenu = ToggleMenu;
const toggleMenu = new ToggleMenu();