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

        this.pomodoroMinutes = document.querySelector(".pomodoro .menu-text");
        this.shortbreakMinutes = document.querySelector(".short-break .menu-text");
        this.longbreakMinutes = document.querySelector(".long-break .menu-text");
        this.delaybreakMinutes = document.querySelector(".delay-break .menu-text");

        this.pomodoroMinutesButton.addEventListener('click', () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue > 10) {
                textMinutes.textContent = `${--textMinutesValue} minutes`

                logicHandler.pomodoroTimeToElapse = time;
            }
        });
        this.pomodoroPlusButton.addEventListener('click', () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue < 60) {
                textMinutes.textContent = `${++textMinutesValue} minutes`

                logicHandler.pomodoroTimeToElapse = time;
            };
        });
        this.shortbreakMinusButton.addEventListener("click", () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue > 1) {
                textMinutes.textContent = `${--textMinutesValue} minutes`

                logicHandler.shortbreakTimeToElapse = time;
            }
        });
        this.shortbreakPlusButton.addEventListener("click", () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue < 30) {
                textMinutes.textContent = `${++textMinutesValue} minutes`

                logicHandler.shortbreakTimeToElapse = time;
            };
        });
        this.longbreakMinusButton.addEventListener("click", () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue > 5) {
                textMinutes.textContent = `${--textMinutesValue} minutes`

                logicHandler.longbreakTimeToElapse = time;
            };
        });
        this.longbreakPlusButton.addEventListener("click", () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue < 60) {
                textMinutes.textContent = `${++textMinutesValue} minutes`

                logicHandler.longbreakTimeToElapse = time;
            };
        });
        this.delayCycleMinusButton.addEventListener("click", () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue > 1) {
                textMinutes.textContent = `${--textMinutesValue} minutes`

                logicHandler.timeToDelay = time*60;
                delayCycle.delayCycleDescription.innerHTML = `Add ${logicHandler.timeToDelay/60}' of extra break!`;
            };
        });
        this.delayCyclePlusButton.addEventListener("click", () => {
            let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
            if (textMinutesValue < 5) {
                textMinutes.textContent = `${++textMinutesValue} minutes`

                logicHandler.timeToDelay = time*60;
                delayCycle.delayCycleDescription.innerHTML = `Add ${logicHandler.timeToDelay/60}' of extra break!`;
            };
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