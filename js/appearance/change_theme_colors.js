class ThemeColor {
    constructor() {
        this.line = document.querySelector(".line");
        this.circle = document.querySelector(".circle-progress");
        this.delayCycleButton = document.querySelector(".delay-cycle-button");
        this.toggleMenuContainer = document.querySelector(".toggleMenu-container");
        this.musicPlayerContainer = document.querySelector(".music-player-container");

        this.musicPlayerButton = document.querySelector(".music-icon");
        this.settingsButton = document.querySelector(".settings-icon");

        this.defaultColor = "#B15353";
        this.pomodoroColor = "#CB3333";
        this.shortbreakColor = "#337DCB";
        this.longbreakColor = "#8133CB";
    }

    changeToDefault() {
        this.line.style.borderBottomColor = this.defaultColor;
        this.circle.style.stroke = this.defaultColor;
        this.delayCycleButton.style.backgroundColor = this.defaultColor;
        this.toggleMenuContainer.style.backgroundColor = this.defaultColor;
        this.musicPlayerContainer.style.backgroundColor = this.defaultColor;
        this.musicPlayerButton.style.backgroundColor = this.defaultColor;
        this.settingsButton.style.backgroundColor = this.defaultColor;

        particlesHandler.changeParticleColor(this.defaultColor);
    }

    changeToPomodoro() {
        this.line.style.borderBottomColor = this.pomodoroColor;
        this.circle.style.stroke = this.pomodoroColor;
        this.delayCycleButton.style.backgroundColor = this.pomodoroColor;
        this.toggleMenuContainer.style.backgroundColor = this.pomodoroColor;
        this.musicPlayerContainer.style.backgroundColor = this.pomodoroColor;

        this.musicPlayerButton.classList.add("pomodoro");
        this.settingsButton.classList.add("pomodoro");

        particlesHandler.changeParticleColor(this.pomodoroColor);
    }

    changeToShortBreak() {
        this.line.style.borderBottomColor = this.shortbreakColor;
        this.circle.style.stroke = this.shortbreakColor;
        this.delayCycleButton.style.backgroundColor = this.shortbreakColor;
        this.toggleMenuContainer.style.backgroundColor = this.shortbreakColor;
        this.musicPlayerContainer.style.backgroundColor = this.shortbreakColor;

        this.musicPlayerButton.classList.add("shortbreak");
        this.settingsButton.classList.add("shortbreak");

        particlesHandler.changeParticleColor(this.shortbreakColor);
    }

    changeToLongBreak() {
        this.line.style.borderBottomColor = this.longbreakColor;
        this.circle.style.stroke = this.longbreakColor;
        this.delayCycleButton.style.backgroundColor = this.longbreakColor;
        this.toggleMenuContainer.style.backgroundColor = this.longbreakColor;
        this.musicPlayerContainer.style.backgroundColor = this.longbreakColor;

        this.musicPlayerButton.classList.add("longbreak");
        this.settingsButton.classList.add("longbreak");

        this.musicPlayerButton.style.backgroundColor = this.defaultColor;

        particlesHandler.changeParticleColor(this.longbreakColor);
    }
}

window.ThemeColor = ThemeColor;
const themeColor = new ThemeColor();