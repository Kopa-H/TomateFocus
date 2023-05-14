class SettingsMenu {
    constructor() {
        this.settingsMenuFlex = document.querySelector(".settings-menu-flex");
        this.settingsMenuStyles = window.getComputedStyle(this.settingsMenuFlex);

        this.settingsMenuIcon = document.getElementById("settings-icon")
        this.settingsMenuIcon.addEventListener('click', () => {
            this.showOrHideSettingsMenu();
        });

        this.pomodoroMinusButton = document.querySelector(".pomodoro .minus-button");
        this.pomodoroPlusButton = document.querySelector(".pomodoro .plus-button");
        this.shortbreakMinusButton = document.querySelector(".short-break .minus-button");
        this.shortbreakPlusButton = document.querySelector(".short-break .plus-button");
        this.longbreakMinusButton = document.querySelector(".long-break .minus-button");
        this.longbreakPlusButton = document.querySelector(".long-break .plus-button");

        this.pomodoroTextMinutes = document.querySelector(".pomodoro .menu-text");
        this.shortbreakTextMinutes = document.querySelector(".short-break .menu-text");
        this.longbreakTextMinutes = document.querySelector(".long-break .menu-text");

        this.pomodoroPlusButton.addEventListener('click', () => {
            this.pomodoroCurrentMinutes = +this.pomodoroTextMinutes.textContent.match(/\d+/g)
            if (this.pomodoroCurrentMinutes < 60) {
                this.pomodoroTextMinutes.textContent = `${++this.pomodoroCurrentMinutes} minutes`
                logicHandler.pomodoroTimeToElapse = this.pomodoroCurrentMinutes*60;
            }
        });
        this.pomodoroMinusButton.addEventListener('click', () => {
            // Se obtiene el número de minutos actuales del elemento HTML:
            this.pomodoroCurrentMinutes = +this.pomodoroTextMinutes.textContent.match(/\d+/g)
            if (this.pomodoroCurrentMinutes > 10) {
                // Se modifica el texto que se verá en el settings menu:
                this.pomodoroTextMinutes.textContent = `${--this.pomodoroCurrentMinutes} minutes`
                // Se modifica el tiempo que usará LogicHandler y Counter:
                logicHandler.pomodoroTimeToElapse = this.pomodoroCurrentMinutes*60;
            }
        });

        this.shortbreakPlusButton.addEventListener("click", () => {
            this.shortbreakCurrentMinutes = +this.shortbreakTextMinutes.textContent.match(/\d+/g)
            if (this.shortbreakCurrentMinutes < 30) {
                this.shortbreakTextMinutes.textContent = `${++this.shortbreakCurrentMinutes} minutes`
                logicHandler.shortbreakTimeToElapse = this.shortbreakCurrentMinutes*60;
            }
        });
        this.shortbreakMinusButton.addEventListener("click", () => {
            this.shortbreakCurrentMinutes = +this.shortbreakTextMinutes.textContent.match(/\d+/g)
            if (this.shortbreakCurrentMinutes > 1) {
                this.shortbreakTextMinutes.textContent = `${--this.shortbreakCurrentMinutes} minutes`
                logicHandler.shortbreakTimeToElapse = this.shortbreakCurrentMinutes*60;
            }
        });

        this.longbreakPlusButton.addEventListener("click", () => {
            this.longbreakCurrentMinutes = +this.longbreakTextMinutes.textContent.match(/\d+/g)
            if (this.longbreakCurrentMinutes < 60) {
                this.longbreakTextMinutes.textContent = `${++this.longbreakCurrentMinutes} minutes`
                logicHandler.longbreakTimeToElapse = this.longbreakCurrentMinutes*60;
            }
        });
        this.longbreakMinusButton.addEventListener("click", () => {
            this.longbreakCurrentMinutes = +this.longbreakTextMinutes.textContent.match(/\d+/g)
            if (this.longbreakCurrentMinutes > 5) {
                this.longbreakTextMinutes.textContent = `${--this.longbreakCurrentMinutes} minutes`
                logicHandler.longbreakTimeToElapse = this.longbreakCurrentMinutes*60;
            }
        });

        // Reset Preferences Button
        this.resetPreferencesButton = document.querySelector(".reset-preferences-button")
        this.resetPreferencesButton.addEventListener('click', () => {
            this.resetMinutesPreferences();
        });
    }

    showOrHideSettingsMenu() {
        if (this.settingsMenuStyles.display == "none") {
            this.settingsMenuFlex.classList.remove("slideOut");
            this.settingsMenuFlex.classList.add("slideIn");
            this.settingsMenuFlex.style.display = "flex";
        } else {
            this.settingsMenuFlex.classList.remove("slideIn");
            this.settingsMenuFlex.classList.add("slideOut");

            this.settingsMenuFlex.addEventListener("animationend", () => {
                this.settingsMenuFlex.style.display = "none"
            }, { once: true })
        }
    }

    resetMinutesPreferences() {
        this.pomodoroTextMinutes.textContent = `${25} minutes`;
        this.shortbreakTextMinutes.textContent = `${5} minutes`;
        this.longbreakTextMinutes.textContent = `${15} minutes`;
    };
}

window.SettingsMenu = SettingsMenu;
const settingsMenu = new SettingsMenu();