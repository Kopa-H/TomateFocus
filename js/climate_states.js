class ClimateStates {
    constructor() {
      this.fireplaceButton = document.querySelector(".fireplace-state-button");
      this.rainButton = document.querySelector(".rain-state-button");
      this.forestButton = document.querySelector(".forest-state-button");

      this.fireplaceSound = document.querySelector(".fireplace-sound");
      this.rainSound = document.querySelector(".rain-sound");
      this.forestSound = document.querySelector(".forest-sound");

      this.fireplaceButton.addEventListener('click', () => {
        this.playFireplaceSounds();
      });
      this.rainButton.addEventListener('click', () => {
        this.playRainSounds();
      });
      this.forestButton.addEventListener('click', () => {
        this.playForestSounds();
      });
    };

    playFireplaceSounds() {
        console.log("Se cambia al estado climático de Fireplace");
        this.fireplaceSound.play();
    };

    playRainSounds() {
        console.log("Se cambia al estado climático de Rain");
        this.rainSound.play();
    };

    playForestSounds() {
        console.log("Se cambia al estado climático de Forest");
        this.forestSound.play();
    };
}

const climateStates = new ClimateStates();