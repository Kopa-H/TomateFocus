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

      this.fireplaceSoundBeingPlayed = false
      this.rainSoundBeingPlayed = false
      this.forestSoundBeingPlayed = false

      this.fireplaceButton.addEventListener('click', () => {
        if (this.fireplaceSoundBeingPlayed == false) {
          this.fireplaceSoundBeingPlayed = true;
          this.playSoundInLoop(this.fireplaceSound, this.fireplaceSound2);
          this.fireplaceButton.style.backgroundColor = "rgb(125, 45, 126)";
        } else {
          this.fireplaceSoundBeingPlayed = false;
          this.fireplaceSound.pause();
          this.fireplaceSound2.pause();
          this.fireplaceButton.style.backgroundColor = "gray";
        }
      });

      this.rainButton.addEventListener('click', () => {
        if (this.rainSoundBeingPlayed == false) {
          this.rainSoundBeingPlayed = true;
          this.playSoundInLoop(this.rainSound, this.rainSound2);
          this.rainButton.style.backgroundColor = "rgb(125, 45, 126)";
        } else {
          this.rainSoundBeingPlayed = false;
          this.rainSound.pause();
          this.rainSound2.pause();
          this.rainButton.style.backgroundColor = "gray";
        }
      });

      this.forestButton.addEventListener('click', () => {
        if (this.forestSoundBeingPlayed == false) {
          this.forestSoundBeingPlayed = true;
          this.playSoundInLoop(this.forestSound, this.forestSound2);
          this.forestButton.style.backgroundColor = "rgb(125, 45, 126)";
        } else {
          this.forestSoundBeingPlayed = false;
          this.forestSound.pause();
          this.forestSound2.pause();
          this.forestButton.style.backgroundColor = "gray";
        }
      });
    };

    playSoundInLoop(sound, sound2) {
      let soundBeingPlayed = sound;

      // Entrada del efecto suave:
      soundBeingPlayed.volume = 0;
      const volumeIncreaseInterval = setInterval(() => {
        if ((this.fireplaceSoundBeingPlayed || this.rainSoundBeingPlayed || this.forestSoundBeingPlayed) && soundBeingPlayed.volume <= 0.9) {
            soundBeingPlayed.volume += 0.1;
            soundBeingPlayed.volume = parseFloat(soundBeingPlayed.volume.toFixed(1)); // Redondea a 1 decimal
            console.log(soundBeingPlayed.volume)
          if (soundBeingPlayed.volume >= 1) {
            clearInterval(volumeIncreaseInterval);
          }
        }
      }, 250);

      soundBeingPlayed.play();

      // Intervalo para intercalar el mismo audio de 5 segundos constantemente:
      setInterval(() => {
        if (this.fireplaceSoundBeingPlayed || this.rainSoundBeingPlayed || this.forestSoundBeingPlayed) {
          // Se va calculando el tiempo restante del sonido que se está reproduciendo:
          const remainingTime = soundBeingPlayed.duration - soundBeingPlayed.currentTime;
          if (remainingTime < 5 && soundBeingPlayed == sound) {
            console.log("Comienza a sonar el segundo audio!");
            soundBeingPlayed = sound2;
            soundBeingPlayed.play();
          } else if (remainingTime < 5 && soundBeingPlayed == sound2) {
            console.log("Comienza a sonar el primer audio!");
            soundBeingPlayed = sound;
            soundBeingPlayed.play();
          };
        };
      }, 1000);
    }
};

const climateStates = new ClimateStates();