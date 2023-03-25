class MusicPlayer {
    constructor() {
        this.song1 = document.querySelector(".music-player-song-1");
        this.song2 = document.querySelector(".music-player-song-2");
        this.song3 = document.querySelector(".music-player-song-3");
        this.song4 = document.querySelector(".music-player-song-4");

        this.songsList = [this.song1, this.song2, this.song3, this.song4];
        this.songBeingPlayed = this.songsList[0];
        this.songIsPlaying = false;

        this.playButton = document.querySelector(".music-player-play-and-pause-button");
        this.nextSongButton = document.querySelector(".music-next-song-button")
        this.volumeSlider = document.querySelector(".volume-slider")

        this.playButton.addEventListener('click', () => {
            if (!this.songIsPlaying) {
              console.log("The song starts!");
              this.songsList[0].play();
              this.songIsPlaying = true;
              this.songBeingPlayed = this.song1
            } else {
              console.log("The song stops!");
              this.songsList[0].pause();
              this.songIsPlaying = false;
            }
        });

        this.nextSongButton.addEventListener('click', () => {
          this.changeToNextSong()
        });

        this.volumeSlider.addEventListener('input', () => {
          this.songBeingPlayed.volume = this.volumeSlider.value;
        });
    }

    changeToNextSong() {
      // Se detiene la canción que sonaba hasta ahora:
      this.songBeingPlayed.pause();

      // Se obtiene el índice de la siguiente canción:
      const index = this.songsList.indexOf(this.songBeingPlayed);

      // Si el índice es mayor al número de canciones existentes, se pone en marcha la primera:
      if (index >= this.songsList.length) {
        this.songBeingPlayed = this.songsList[0];
        this.songBeingPlayed.play();
        console.log("Hola")
      } else {
        this.songBeingPlayed = this.songsList[index + 1];
        this.songBeingPlayed.play();
        console.log("Empieza a sonar la siguiente canción!")
      }
    }
}

const musicPlayer = new MusicPlayer()