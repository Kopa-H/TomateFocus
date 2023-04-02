class ClimateStates {
    constructor() {
      this.fireplaceButton = document.querySelector(".fireplace-state-button");
      this.rainButton = document.querySelector(".rain-state-button");
      this.forestButton = document.querySelector(".forest-state-button");

      this.fireplaceSound = document.querySelector(".fireplace-sound");
      this.fireplaceSound2 = document.querySelector(".fireplace-sound-2");
      this.fireplaceSound.volume = 0.5;
      this.fireplaceSound2.volume = 0.5;

      this.rainSound = document.querySelector(".rain-sound");
      this.rainSound2 = document.querySelector(".rain-sound-2");
      this.rainSound.volume = 0.05;
      this.rainSound2.volume = 0.05;

      this.forestSound = document.querySelector(".forest-sound");
      this.forestSound2 = document.querySelector(".forest-sound-2");
      this.forestSound.volume = 0.05;
      this.forestSound2.volume = 0.05;

      this.fireplaceSoundBeingPlayed = false
      this.rainSoundBeingPlayed = false
      this.forestSoundBeingPlayed = false

      this.fireplaceButton.addEventListener('click', () => {
        if (this.fireplaceSoundBeingPlayed == false) {
          this.playSoundInLoop(this.fireplaceSound, this.fireplaceSound2, this.fireplaceSoundBeingPlayed);
          this.fireplaceButton.style.backgroundColor = "rgb(125, 45, 126)";
          this.fireplaceSoundBeingPlayed = true;
        } else {
          this.fireplaceSound.pause();
          this.fireplaceSound2.pause();
          this.fireplaceButton.style.backgroundColor = "gray";
          this.fireplaceSoundBeingPlayed = false;
        }
      });

      this.rainButton.addEventListener('click', () => {
        if (this.rainSoundBeingPlayed == false) {
          this.playSoundInLoop(this.rainSound, this.rainSound2, this.rainSoundBeingPlayed);
          this.rainButton.style.backgroundColor = "rgb(125, 45, 126)";
          this.rainSoundBeingPlayed = true;
        } else {
          this.rainSound.pause();
          this.rainSound2.pause();
          this.rainButton.style.backgroundColor = "gray";
          this.rainSoundBeingPlayed = false;
        }
      });

      this.forestButton.addEventListener('click', () => {
        if (this.forestSoundBeingPlayed == false) {
          this.playSoundInLoop(this.forestSound, this.forestSound2, this.forestSoundBeingPlayed);
          this.forestButton.style.backgroundColor = "rgb(125, 45, 126)";
          this.forestSoundBeingPlayed = true;
        } else {
          this.forestSound.pause();
          this.forestSound2.pause();
          this.forestButton.style.backgroundColor = "gray";
          this.forestSoundBeingPlayed = false;
        }
      });
    };

    playSoundInLoop(sound, sound2, isSoundBeingPlayed) {
      let soundBeingPlayed = sound;

      // Entrada del efecto suave:
      soundBeingPlayed.volume = 0;
      const volumeIncreaseInterval = setInterval(() => {
        soundBeingPlayed.volume += 0.1;
        soundBeingPlayed.volume = parseFloat(soundBeingPlayed.volume.toFixed(1)); // Redondea a 1 decimal
        if (soundBeingPlayed.volume >= 1) {
          clearInterval(volumeIncreaseInterval);
        }
        console.log(soundBeingPlayed.volume)
      }, 250);

      soundBeingPlayed.play();

      // Intervalo para intercalar el mismo audio de 5 segundos constantemente:
      setInterval(() => {
        if (isSoundBeingPlayed == true) {
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