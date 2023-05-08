class ClimateStates {
    constructor() {
      this.fireplaceButton = document.querySelector(".fireplace-state-button");
      this.rainButton = document.querySelector(".rain-state-button");
      this.forestButton = document.querySelector(".forest-state-button");

      this.fireplaceSound = document.querySelector(".fireplace-sound");
      this.fireplaceSound2 = document.querySelector(".fireplace-sound-2");

      this.rainSound = document.querySelector(".rain-sound");
      this.rainSound2 = document.querySelector(".rain-sound-2");

      this.forestSound = document.querySelector(".forest-sound");
      this.forestSound2 = document.querySelector(".forest-sound-2");

      // The proportion of volume of all climate sounds:
      this.maxClimateSoundsVolume = 0.5;

      this.fireplaceSoundBeingPlayed = false;
      this.rainSoundBeingPlayed = false;
      this.forestSoundBeingPlayed = false;

      this.firstFireplaceBeingPlayed = true;
      this.firtRainBeingPlayed = true;
      this.firstForestBeingPlayed = true;

      this.defaultButtonColor = "#4D4D4D";
      this.semiDefaultButtonColor = "#666666"
      this.hoverButtonColor = "rgb(104, 38, 105)";
      this.activeButtonColor = "rgb(125, 45, 126)";

      this.fireplaceButton.addEventListener('click', () => {
        if (this.fireplaceSoundBeingPlayed == false) {
          this.fireplaceSoundBeingPlayed = true;
          this.playFireplaceInLoop();
          this.fireplaceButton.style.backgroundColor = this.activeButtonColor;
        } else {
          this.fireplaceSoundBeingPlayed = false;
          this.fadeToSilence(this.fireplaceSound, this.fireplaceSound2);
          this.fireplaceButton.style.backgroundColor = this.defaultButtonColor;
        }
      });
      this.fireplaceButton.addEventListener('mouseover', () => {
        if (!this.fireplaceSoundBeingPlayed) {
          this.fireplaceButton.style.backgroundColor = this.hoverButtonColor;
        } else {
          this.fireplaceButton.style.backgroundColor = this.semiDefaultButtonColor;
        }
      });
      this.fireplaceButton.addEventListener('mouseleave', () => {
        if (!this.fireplaceSoundBeingPlayed) {
          this.fireplaceButton.style.backgroundColor = this.defaultButtonColor;
        } else {
          this.fireplaceButton.style.backgroundColor = this.activeButtonColor;
        }
      });

      this.rainButton.addEventListener('click', () => {
        if (this.rainSoundBeingPlayed == false) {
          this.rainSoundBeingPlayed = true;
          this.playRainInLoop();
          this.rainButton.style.backgroundColor = this.activeButtonColor;
        } else {
          this.rainSoundBeingPlayed = false;
          this.fadeToSilence(this.rainSound, this.rainSound2);
          this.rainButton.style.backgroundColor = this.defaultButtonColor;
        }
      });
      this.rainButton.addEventListener('mouseover', () => {
        if (!this.rainSoundBeingPlayed) {
          this.rainButton.style.backgroundColor = this.hoverButtonColor;
        } else {
          this.rainButton.style.backgroundColor = this.semiDefaultButtonColor;
        }
      });
      this.rainButton.addEventListener('mouseleave', () => {
        if (!this.rainSoundBeingPlayed) {
          this.rainButton.style.backgroundColor = this.defaultButtonColor;
        } else {
          this.rainButton.style.backgroundColor = this.activeButtonColor;
        }
      });

      this.forestButton.addEventListener('click', () => {
        if (this.forestSoundBeingPlayed == false) {
          this.forestSoundBeingPlayed = true;
          this.playForestInLoop();
          this.forestButton.style.backgroundColor = this.activeButtonColor;
        } else {
          this.forestSoundBeingPlayed = false;
          this.fadeToSilence(this.forestSound, this.forestSound2);
          this.forestButton.style.backgroundColor = this.defaultButtonColor;
        }
      });
      this.forestButton.addEventListener('mouseover', () => {
        if (!this.forestSoundBeingPlayed) {
          this.forestButton.style.backgroundColor = this.hoverButtonColor;
        } else {
          this.forestButton.style.backgroundColor = this.semiDefaultButtonColor;
        }
      });
      this.forestButton.addEventListener('mouseleave', () => {
        if (!this.forestSoundBeingPlayed) {
          this.forestButton.style.backgroundColor = this.defaultButtonColor;
        } else {
          this.forestButton.style.backgroundColor = this.activeButtonColor;
        }
      });
    };

    // Método para realizar la transición de volumen gradual hasta 0
    fadeToSilence(audioElement, audioElement2) {
      const fadeOutInterval = setInterval(() => {
        const volume = audioElement.volume - 0.05; // Disminuir el volumen en 0.05 cada intervalo
        // Mientras el volumen sea igual o superior a 0:
        if (volume >= 0) {
          audioElement.volume = volume;
          audioElement2.volume = volume; // Establecer el nuevo volumen
        } else {
          // Cuando el volumen llega a 0, detener el intervalo y pausar el audio
          clearInterval(fadeOutInterval);
          audioElement.pause();
        }
      }, 100); // Intervalo de tiempo para la transición en milisegundos (200ms = 0.2s)
    }

    playFireplaceInLoop() {
      // Entrada del efecto suave:
      this.fireplaceSound.volume = 0;
      const volumeIncreaseInterval = setInterval(() => {
        if (this.fireplaceSoundBeingPlayed && this.fireplaceSound.volume <= this.maxClimateSoundsVolume) {
          this.fireplaceSound.volume += 0.1;
          this.fireplaceSound.volume = parseFloat(this.fireplaceSound.volume.toFixed(1)); // Redondea a 1 decimal
          this.fireplaceSound2.volume = this.fireplaceSound.volume;
          if (this.fireplaceSound.volume >= this.maxClimateSoundsVolume) {
            clearInterval(volumeIncreaseInterval);
          }
        }
      }, 250);

      this.fireplaceSound.play();

      // Intervalo para intercalar el mismo audio de 5 segundos constantemente:
      setInterval(() => {
        if (this.fireplaceSoundBeingPlayed) {
          // Se va calculando el tiempo restante del sonido que se está reproduciendo:
          const remainingTime = this.fireplaceSound.duration - this.fireplaceSound.currentTime;
          if (remainingTime < 5 && this.firstFireplaceBeingPlayed) {
            this.fireplaceSound.play();
            this.firstFireplaceBeingPlayed = false;
          } else if (remainingTime < 5 && !this.firstFireplaceBeingPlayed) {
            this.fireplaceSound2.play();
            this.firstFireplaceBeingPlayed = true;
          };
        };
      }, 1000);
    }

    playRainInLoop() {
      // Entrada del efecto suave:
      this.rainSound.volume = 0;
      const volumeIncreaseInterval = setInterval(() => {
        if (this.rainSoundBeingPlayed && this.rainSound.volume <= this.maxClimateSoundsVolume) {
          this.rainSound.volume += 0.1;
          this.rainSound.volume = parseFloat(this.rainSound.volume.toFixed(1)); // Redondea a 1 decimal
          this.rainSound2.volume = this.rainSound.volume;
          if (this.rainSound.volume >= this.maxClimateSoundsVolume) {
            clearInterval(volumeIncreaseInterval);
          }
        }
      }, 250);

      this.rainSound.play();

      // Intervalo para intercalar el mismo audio de 5 segundos constantemente:
      setInterval(() => {
        if (this.rainSoundBeingPlayed) {
          // Se va calculando el tiempo restante del sonido que se está reproduciendo:
          const remainingTime = this.rainSound.duration - this.rainSound.currentTime;
          if (remainingTime < 5 && this.firstRainBeingPlayed) {
            this.rainSound.play();
            this.firstRainBeingPlayed = false;
          } else if (remainingTime < 5 && !this.firstRainBeingPlayed) {
            this.rainSound2.play();
            this.firstRainBeingPlayed = true;
          };
        };
      }, 1000);
    }

    playForestInLoop() {
      // Entrada del efecto suave:
      this.forestSound.volume = 0;
      const volumeIncreaseInterval = setInterval(() => {
        if (this.forestSoundBeingPlayed && this.forestSound.volume <= this.maxClimateSoundsVolume) {
          this.forestSound.volume += 0.1;
          this.forestSound.volume = parseFloat(this.forestSound.volume.toFixed(1)); // Redondea a 1 decimal
          this.forestSound2.volume = this.forestSound.volume;
          if (this.forestSound.volume >= this.maxClimateSoundsVolume) {
            clearInterval(volumeIncreaseInterval);
          }
        }
      }, 250);

      this.forestSound.play();

      // Intervalo para intercalar el mismo audio de 5 segundos constantemente:
      setInterval(() => {
        if (this.forestSoundBeingPlayed) {
          // Se va calculando el tiempo restante del sonido que se está reproduciendo:
          const remainingTime = this.forestSound.duration - this.forestSound.currentTime;
          if (remainingTime < 5 && this.firstForestBeingPlayed) {
            this.forestSound.play();
            this.firstForestBeingPlayed = false;
          } else if (remainingTime < 5 && !this.firstForestBeingPlayed) {
            this.forestSound2.play();
            this.firstForestBeingPlayed = true;
          };
        };
      }, 1000);
    }
};

const climateStates = new ClimateStates();