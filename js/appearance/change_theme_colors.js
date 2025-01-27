class ThemeColor {
    constructor() {
        this.line = document.querySelector(".line");
        this.circle = document.querySelector(".circle-progress");
        this.delayCycleButton = document.querySelector(".delay-cycle-button");
        this.settingsMenuContainer = document.querySelector(".settings-menu-container");
        this.musicPlayerContainer = document.querySelector(".music-player-container");
        this.changeBetweenCyclesContainer = document.querySelector(".god-mode-change-cycle-container");

        this.musicPlayerButton = document.querySelector(".music-icon");
        this.settingsButton = document.querySelector(".settings-icon");

        this.defaultColor = "#B15353";
        this.pomodoroColor = "#CB3333";
        this.shortbreakColor = "#337DCB";
        this.longbreakColor = "#8133CB";

        this.predefinedChooseSectionColors = ["#CB3333", "#337DCB", "#CB3333", "#337DCB", "#CB3333", "#8133CB"]
    }

    changeToDefault() {
        this.line.style.borderBottomColor = this.defaultColor;
        this.circle.style.stroke = this.defaultColor;
        this.delayCycleButton.style.backgroundColor = this.defaultColor;
        this.settingsMenuContainer.style.backgroundColor = this.defaultColor;
        this.musicPlayerContainer.style.backgroundColor = this.defaultColor;
        sessionEnding.sessionEndingContainer.style.background = this.defaultColor;
        particlesHandler.changeParticlesNumberAndColor(this.defaultColor);
    }

    changeToPomodoro() {
        this.line.style.borderBottomColor = this.pomodoroColor;
        this.circle.style.stroke = this.pomodoroColor;
        this.delayCycleButton.style.backgroundColor = this.pomodoroColor;
        this.settingsMenuContainer.style.backgroundColor = this.pomodoroColor;
        this.musicPlayerContainer.style.backgroundColor = this.pomodoroColor;
        this.changeBetweenCyclesContainer.style.backgroundColor = this.pomodoroColor;

        this.musicPlayerButton.classList.remove("shortbreak");
        this.musicPlayerButton.classList.remove("longbreak");
        this.settingsButton.classList.remove("shortbreak");
        this.settingsButton.classList.remove("longbreak");

        this.musicPlayerButton.classList.add("pomodoro");
        this.settingsButton.classList.add("pomodoro");

        sessionEnding.sessionEndingContainer.style.background = this.pomodoroColor;
        particlesHandler.changeParticlesNumberAndColor(this.pomodoroColor);
    }

    changeToShortBreak() {
        this.line.style.borderBottomColor = this.shortbreakColor;
        this.circle.style.stroke = this.shortbreakColor;
        this.delayCycleButton.style.backgroundColor = this.shortbreakColor;
        this.settingsMenuContainer.style.backgroundColor = this.shortbreakColor;
        this.musicPlayerContainer.style.backgroundColor = this.shortbreakColor;
        this.changeBetweenCyclesContainer.style.backgroundColor = this.shortbreakColor;

        this.musicPlayerButton.classList.remove("pomodoro");
        this.musicPlayerButton.classList.remove("longbreak");
        this.settingsButton.classList.remove("pomodoro");
        this.settingsButton.classList.remove("longbreak");

        this.musicPlayerButton.classList.add("shortbreak");
        this.settingsButton.classList.add("shortbreak");

        sessionEnding.sessionEndingContainer.style.background = this.shortbreakColor;
        particlesHandler.changeParticlesNumberAndColor(this.shortbreakColor);
    }

    changeToLongBreak() {
        this.line.style.borderBottomColor = this.longbreakColor;
        this.circle.style.stroke = this.longbreakColor;
        this.delayCycleButton.style.backgroundColor = this.longbreakColor;
        this.settingsMenuContainer.style.backgroundColor = this.longbreakColor;
        this.musicPlayerContainer.style.backgroundColor = this.longbreakColor;
        this.changeBetweenCyclesContainer.style.backgroundColor = this.longbreakColor;

        this.musicPlayerButton.classList.remove("pomodoro");
        this.musicPlayerButton.classList.remove("shortbreak");
        this.settingsButton.classList.remove("pomodoro");
        this.settingsButton.classList.remove("shortbreak");

        this.musicPlayerButton.classList.add("longbreak");
        this.settingsButton.classList.add("longbreak");

        sessionEnding.sessionEndingContainer.style.background = this.longbreakColor;
        particlesHandler.changeParticlesNumberAndColor(this.longbreakColor);
    }

    updatePlanSessionChooseSectionColors(chooseSection, index) {
        if (chooseSection.innerHTML == "Pomodoro") {
            const row = document.querySelector(`.plan-session-choose-section-row[data-index="${index}"]`);
            row.style.backgroundColor = themeColor.pomodoroColor;
        } else if (chooseSection.innerHTML == "ShortBreak") {
            const row = document.querySelector(`.plan-session-choose-section-row[data-index="${index}"]`);
            row.style.backgroundColor = themeColor.shortbreakColor;
        } else if (chooseSection.innerHTML == "LongBreak") {
            const row = document.querySelector(`.plan-session-choose-section-row[data-index="${index}"]`);
            row.style.backgroundColor = themeColor.longbreakColor;
        } else if (chooseSection.innerHTML == "None") {
            const row = document.querySelector(`.plan-session-choose-section-row[data-index="${index}"]`);
            row.style.backgroundColor = "gray";
        }
    }

    resetPlanSessionChooseSectionColors() {
        for (let i = 0; i < 6; i++) {
            const row = document.querySelector(`.plan-session-choose-section-row[data-index="${i+1}"]`);
            row.style.backgroundColor = this.predefinedChooseSectionColors[i];
        }
    }
}

window.ThemeColor = ThemeColor;
const themeColor = new ThemeColor();