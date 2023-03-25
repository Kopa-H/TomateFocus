// Errores:
// - No se está reproduciendo la primera canción cuando se ha llegado al final de la lista.
// - No se está parando las canciones iniciadas con el botón de nextSong

// Debería agregar un botón también para tirar atrás, y así que el slider esté en otra parte!

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
        this.previousSongButton = document.querySelector(".music-previous-song-button")
        this.volumeSlider = document.querySelector(".volume-slider")

        this.playButton.addEventListener('click', () => {
            if (!this.songIsPlaying) {
              console.log("The song starts!");
              this.songBeingPlayed.play();
              this.songIsPlaying = true;
            } else {
              console.log("The song stops!");
              this.songBeingPlayed.pause();
              this.songIsPlaying = false;
            }
        });

        this.nextSongButton.addEventListener('click', () => {
          this.changeToNextSong()
        });

        this.previousSongButton.addEventListener('click', () => {
          this.changeToPreviousSong()
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

      // Si el índice es igual o mayor al número de canciones existentes, se pone en marcha la primera:
      if (index >= this.songsList.length) {
        this.songBeingPlayed = this.songsList[0];
        this.songBeingPlayed.play();
        console.log("Se reproduce la primera canción de la lista!")

        if (this.songIsPlaying) {
          this.songBeingPlayed.play()
        };
      } else {
        this.songBeingPlayed = this.songsList[index + 1];

        // Si estaba sonando otra canción:
        if (this.songIsPlaying) {
          this.songBeingPlayed.play()
        };

        console.log("Empieza a sonar la siguiente canción!")
      }
    }

    changeToPreviousSong() {
      // Se detiene la canción que sonaba hasta ahora:
      this.songBeingPlayed.pause();

      // Se obtiene el índice de la siguiente canción:
      const index = this.songsList.indexOf(this.songBeingPlayed);

      // Si el índice es igual o menor a 0, se pone en marcha la última:
      if (index <= 0) {
        this.songBeingPlayed = this.songsList.pop();
        console.log("Se reproduce la última canción de la lista!")

        if (this.songIsPlaying) {
          this.songBeingPlayed.play()
        };

      } else {
        this.songBeingPlayed = this.songsList[index - 1];

        // Si estaba sonando otra canción:
        if (this.songIsPlaying) {
          this.songBeingPlayed.play()
        };

        console.log("Empieza a sonar la siguiente canción!")
      }
    }
}

const musicPlayer = new MusicPlayer()