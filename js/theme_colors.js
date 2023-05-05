class ParticlesHandler {
    constructor() {
        // Almacena la configuración de partículas en una variable
        this.particleSettings = {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                    "width": 0,
                    "color": "#000000"
                    },
                    "polygon": {
                    "nb_sides": 5
                    },
                    "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                    }
                },
                "size": {
                    "value": 12,
                    "random": true,
                    "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                    }
                }
                },
                "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
        particlesJS("particles-js", this.particleSettings);
    }

    changeParticleColor(color) {
        // Se actualiza el valor de la variable del js:
        this.particleSettings.particles.color.value = color;

        // Se espera a que cargue el json:
        return new Promise(resolve => {

            // Se modifican los parámetros del archivo json:
            particlesJS("particles-js", this.particleSettings, () => {
                let pJS = window.pJSDom[0];
                pJS.particles.color.value = color;
                pJS.fn.particlesRefresh();
                resolve();
            });
        });
    }
}

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
const particlesHandler = new ParticlesHandler();