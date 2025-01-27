class ParticlesHandler {
    constructor() {
        this.particlesAreActive = false;

        // Almacena la configuración de partículas en una variable
        this.particleSettings = {
            "particles": {
                "number": {
                    "value": 0,
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

    changeParticlesNumberAndColor(particlesColor, particlesNumber) {
        this.particlesAreActive = true;

        // Se actualiza el valor de la variable del js:
        if (typeof particlesNumber !== 'undefined' && particlesNumber !== "none") {
            this.particleSettings.particles.number.value = particlesNumber;
        }
        if (typeof particlesColor !== 'undefined' && particlesColor !== "none") {
            this.particleSettings.particles.color.value = particlesColor;
        }

        // Se espera a que cargue el json:
        return new Promise(resolve => {

            // Se modifican los parámetros del archivo json:
            particlesJS("particles-js", this.particleSettings, () => {
                let pJS = window.pJSDom[0];
                if (typeof particlesNumber !== 'undefined' && particlesNumber !== "none") {
                    pJS.particles.number.value = particlesNumber;
                }
                if (typeof particlesColor !== 'undefined' && particlesColor !== "none") {
                    pJS.particles.color.value = particlesColor;
                }
                pJS.fn.particlesRefresh();
                resolve();
            });
        });
    }

    hideParticles() {
        this.particlesAreActive = false;

        // Se actualiza el valor de la variable del js:
        this.particleSettings.particles.number.value = 0;

        // Se espera a que cargue el json:
        return new Promise(resolve => {

            // Se modifican los parámetros del archivo json:
            particlesJS("particles-js", this.particleSettings, () => {
                let pJS = window.pJSDom[0];
                pJS.particles.number.value = 0;
                pJS.fn.particlesRefresh();
                resolve();
            });
        });
    }

    manageFirstParticlesAppearance() {
        particlesHandler.changeParticlesNumberAndColor(themeColor.pomodoroColor, 50);
        hideParticlesButton.toggleX();
    }
}

window.ParticlesHandler = ParticlesHandler;
const particlesHandler = new ParticlesHandler();