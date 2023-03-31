class ClimateStates {
    constructor() {
      this.fireplaceButton = document.querySelector(".fireplace-state-button");
      this.rainButton = document.querySelector(".rain-state-button");
      this.forestButton = document.querySelector(".forest-state-button");

      this.fireplaceSound = document.querySelector(".fireplace-sound");
      this.fireplaceSound.volume = 0.5;
      this.rainSound = document.querySelector(".rain-sound");
      this.rainSound.volume = 0.05;
      this.forestSound = document.querySelector(".forest-sound");
      this.forestSound.volume = 0.05;

      this.fireplaceSoundBeingPlayed = false
      this.rainSoundBeingPlayed = false
      this.forestSoundBeingPlayed = false

      this.fireplaceButton.addEventListener('click', () => {
        if (this.fireplaceSoundBeingPlayed == false) {
          this.playSoundInLoop(this.fireplaceSound);
          this.fireplaceButton.style.backgroundColor = "rgb(125, 45, 126)";
          this.fireplaceSoundBeingPlayed = true;
        } else {
          this.fireplaceSound.pause();
          this.fireplaceButton.style.backgroundColor = "gray";
          this.fireplaceSoundBeingPlayed = false;
        }
      });

      this.rainButton.addEventListener('click', () => {
        if (this.rainSoundBeingPlayed == false) {
          this.playSoundInLoop(this.rainSound);
          this.rainButton.style.backgroundColor = "rgb(125, 45, 126)";
          this.rainSoundBeingPlayed = true;
        } else {
          this.rainSound.pause();
          this.rainButton.style.backgroundColor = "gray";
          this.rainSoundBeingPlayed = false;
        }
      });

      this.forestButton.addEventListener('click', () => {
        if (this.forestSoundBeingPlayed == false) {
          this.playSoundInLoop(this.forestSound);
          this.forestButton.style.backgroundColor = "rgb(125, 45, 126)";
          this.forestSoundBeingPlayed = true;
        } else {
          this.forestSound.pause();
          this.forestButton.style.backgroundColor = "gray";
          this.forestSoundBeingPlayed = false;
        }
      });
    };

    playSoundInLoop(sound) {
      sound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
      sound.play();
    };
};

const climateStates = new ClimateStates();