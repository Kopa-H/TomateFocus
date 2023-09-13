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
            if (this.pomodoroCurrentMinutes < 90) {
                this.pomodoroTextMinutes.textContent = `${++this.pomodoroCurrentMinutes} minutes`
                logicHandler.pomodoroTimeToElapse = this.pomodoroCurrentMinutes*60;
                planSessionEstimations.calculateTimeEstimationsForTimeModifications();
            }
        });
        this.pomodoroMinusButton.addEventListener('click', () => {
            this.pomodoroCurrentMinutes = +this.pomodoroTextMinutes.textContent.match(/\d+/g)
            if (this.pomodoroCurrentMinutes > 10) {
                this.pomodoroTextMinutes.textContent = `${--this.pomodoroCurrentMinutes} minutes`
                logicHandler.pomodoroTimeToElapse = this.pomodoroCurrentMinutes*60;
                planSessionEstimations.calculateTimeEstimationsForTimeModifications();
            }
        });

        this.shortbreakPlusButton.addEventListener("click", () => {
            this.shortbreakCurrentMinutes = +this.shortbreakTextMinutes.textContent.match(/\d+/g)
            if (this.shortbreakCurrentMinutes < 30) {
                this.shortbreakTextMinutes.textContent = `${++this.shortbreakCurrentMinutes} minutes`
                logicHandler.shortbreakTimeToElapse = this.shortbreakCurrentMinutes*60;
                planSessionEstimations.calculateTimeEstimationsForTimeModifications();
            }
        });
        this.shortbreakMinusButton.addEventListener("click", () => {
            this.shortbreakCurrentMinutes = +this.shortbreakTextMinutes.textContent.match(/\d+/g)
            if (this.shortbreakCurrentMinutes > 1) {
                this.shortbreakTextMinutes.textContent = `${--this.shortbreakCurrentMinutes} minutes`
                logicHandler.shortbreakTimeToElapse = this.shortbreakCurrentMinutes*60;
                planSessionEstimations.calculateTimeEstimationsForTimeModifications();
            }
        });

        this.longbreakPlusButton.addEventListener("click", () => {
            this.longbreakCurrentMinutes = +this.longbreakTextMinutes.textContent.match(/\d+/g)
            if (this.longbreakCurrentMinutes < 60) {
                this.longbreakTextMinutes.textContent = `${++this.longbreakCurrentMinutes} minutes`
                logicHandler.longbreakTimeToElapse = this.longbreakCurrentMinutes*60;
                planSessionEstimations.calculateTimeEstimationsForTimeModifications();
            }
        });
        this.longbreakMinusButton.addEventListener("click", () => {
            this.longbreakCurrentMinutes = +this.longbreakTextMinutes.textContent.match(/\d+/g)
            if (this.longbreakCurrentMinutes > 5) {
                this.longbreakTextMinutes.textContent = `${--this.longbreakCurrentMinutes} minutes`
                logicHandler.longbreakTimeToElapse = this.longbreakCurrentMinutes*60;
                planSessionEstimations.calculateTimeEstimationsForTimeModifications();
            }
        });

        // Reset Preferences Button
        this.resetPreferencesButton = document.querySelector(".reset-preferences-button")
        this.resetPreferencesButton.addEventListener('click', () => {
            this.resetMinutesPreferences();
            planSessionEstimations.calculateTimeEstimationsForTimeModifications();
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
        logicHandler.pomodoroTimeToElapse = 25*60;

        this.shortbreakTextMinutes.textContent = `${5} minutes`;
        logicHandler.shortbreakTimeToElapse = 5*60;

        this.longbreakTextMinutes.textContent = `${15} minutes`;
        logicHandler.longbreakTimeToElapse = 15*60;
    };
}

window.SettingsMenu = SettingsMenu;
const settingsMenu = new SettingsMenu();