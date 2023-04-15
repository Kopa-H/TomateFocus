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

      this.fireplaceSoundBeingPlayed = false;
      this.rainSoundBeingPlayed = false;
      this.forestSoundBeingPlayed = false;

      this.firstFireplaceBeingPlayed = true;
      this.firtRainBeingPlayed = true;
      this.firstForestBeingPlayed = true;

      this.fireplaceButton.addEventListener('click', () => {
        if (this.fireplaceSoundBeingPlayed == false) {
          this.fireplaceSoundBeingPlayed = true;
          this.playFireplaceInLoop();
          this.fireplaceButton.style.backgroundColor = "rgb(125, 45, 126)";
        } else {
          this.fireplaceSoundBeingPlayed = false;
          this.fadeToSilence(this.fireplaceSound, this.fireplaceSound2);
          this.fireplaceButton.style.backgroundColor = "gray";
        }
      });

      this.rainButton.addEventListener('click', () => {
        if (this.rainSoundBeingPlayed == false) {
          this.rainSoundBeingPlayed = true;
          this.playRainInLoop();
          this.rainButton.style.backgroundColor = "rgb(125, 45, 126)";
        } else {
          this.rainSoundBeingPlayed = false;
          this.fadeToSilence(this.rainSound, this.rainSound2);
          this.rainButton.style.backgroundColor = "gray";
        }
      });

      this.forestButton.addEventListener('click', () => {
        if (this.forestSoundBeingPlayed == false) {
          this.forestSoundBeingPlayed = true;
          this.playForestInLoop();
          this.forestButton.style.backgroundColor = "rgb(125, 45, 126)";
        } else {
          this.forestSoundBeingPlayed = false;
          this.fadeToSilence(this.forestSound, this.forestSound2);
          this.forestButton.style.backgroundColor = "gray";
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
        if (this.fireplaceSoundBeingPlayed && this.fireplaceSound.volume <= 0.9) {
          this.fireplaceSound.volume += 0.1;
          this.fireplaceSound.volume = parseFloat(this.fireplaceSound.volume.toFixed(1)); // Redondea a 1 decimal
          this.fireplaceSound2.volume = this.fireplaceSound.volume;
          if (this.fireplaceSound.volume >= 1) {
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
        if (this.rainSoundBeingPlayed && this.rainSound.volume <= 0.9) {
          this.rainSound.volume += 0.1;
          this.rainSound.volume = parseFloat(this.rainSound.volume.toFixed(1)); // Redondea a 1 decimal
          this.rainSound2.volume = this.rainSound.volume;
          if (this.rainSound.volume >= 1) {
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
        if (this.forestSoundBeingPlayed && this.forestSound.volume <= 0.9) {
          this.forestSound.volume += 0.1;
          this.forestSound.volume = parseFloat(this.forestSound.volume.toFixed(1)); // Redondea a 1 decimal
          this.forestSound2.volume = this.forestSound.volume;
          if (this.forestSound.volume >= 1) {
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