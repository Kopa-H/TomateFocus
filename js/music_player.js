class VolumeSlider {
  constructor() {
    this.sliderThumb = document.querySelector('.slider-thumb');
    this.sliderTrack = document.querySelector('.slider-track');
    this.sliderContainer = document.querySelector('.slider-container');
    this.sliderBoundaries = document.querySelector('.slider-boundaries');

    // This variable will be used to know if the slider-thumb is being pressed:
    this.isDragging = false;

    // When the mouse changes it's positions, if movement is enabled, it calls the updateSlider() method:
    this.sliderBoundaries.addEventListener('mousemove', function(event) {
      if (this.isDragging) {
        this.updateSlider(event);
      }
    }.bind(this));
    // When the mouse stops pressing, the movement is disabled:
    this.sliderBoundaries.addEventListener('mouseup', function() {
      this.isDragging = false;
    }.bind(this));
    // When the mouse leaves the slider boundaries, the movement is disabled:
    this.sliderBoundaries.addEventListener('mouseleave', function() {
      this.isDragging = false;
    }.bind(this));

    // When the slider container is pressed, it calls the updateSlider() method and the movement is enabled:
    this.sliderContainer.addEventListener('mousedown', function(event) {
      this.updateSlider(event);
      this.isDragging = true;
    }.bind(this));
    // When the mouse is moved, if the movement is enabled, it calls the updateSlider() method:
    this.sliderContainer.addEventListener('mousemove', function(event) {
      if (this.isDragging) {
        this.updateSlider(event);
      }
    }.bind(this));

    // When the thumb is pressed, the movement is enabled:
    this.sliderThumb.addEventListener('mousedown', function() {
      this.isDragging = true;
    }.bind(this));
    // When the thumb stops being pressed, the movement is disabled:
    this.sliderThumb.addEventListener('mouseup', function() {
      this.isDragging = false;
    }.bind(this));
  }

  updateSlider(event) {
    // Se calcula la altura del slider track a partir de la del contenedor:
    this.trackHeight = event.clientY - this.sliderContainer.getBoundingClientRect().top;

    // Si la altura del track es igual a mayor o igual a cero y es menor o igual a la altura del contenedor:
    if (this.trackHeight >= 24 &&  this.trackHeight <= this.sliderContainer.offsetHeight - 25) {
      // Se establece la altura del track:
      this.sliderTrack.style.height = this.trackHeight + 'px';
      // Se establece la posición del thumb:
      this.sliderThumb.style.top = this.trackHeight - (this.sliderThumb.offsetHeight / 2) + 'px';

      this.changeVolume();
    }
  }

  changeVolume() {
    // The thumb position is used in order to calculate the volume of the music player.
    let thumbPosition = parseInt(this.sliderThumb.style.top);
    let volumePercentage = 1 - (thumbPosition / this.trackHeight);
    volumePercentage = Math.max(0, Math.min(1, volumePercentage));

    musicPlayer.songBeingPlayed.volume = volumePercentage;
  }
}

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
        this.nextSongButton = document.querySelector(".music-next-song-button");
        this.previousSongButton = document.querySelector(".music-previous-song-button");

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
          this.changeToNextSong();
        });

        this.previousSongButton.addEventListener('click', () => {
          this.changeToPreviousSong();
        });
    }

    changeToNextSong() {
      // Se detiene la canción que sonaba hasta ahora:
      this.songBeingPlayed.pause();
      this.songBeingPlayed.currentTime = 0;

      // Se obtiene el índice de la siguiente canción:
      const index = this.songsList.indexOf(this.songBeingPlayed);

      // Si el índice es igual o mayor al número de canciones existentes, se pone en marcha la primera:
      if (index >= this.songsList.length - 1) {
        this.songBeingPlayed = this.songsList[0];
        this.songBeingPlayed.play();
        console.log("Se cambia a la primera canción!")

        if (this.songIsPlaying) {
          this.songBeingPlayed.play();
        };
      } else {
        this.songBeingPlayed = this.songsList[index + 1];

        // Si estaba sonando otra canción:
        if (this.songIsPlaying) {
          this.songBeingPlayed.play();
        };
        console.log("Se cambia a la siguiente canción!")
      }
    }

    changeToPreviousSong() {
      // Se detiene la canción que sonaba hasta ahora:
      this.songBeingPlayed.pause();
      this.songBeingPlayed.currentTime = 0;

      // Se obtiene el índice de la siguiente canción:
      const index = this.songsList.indexOf(this.songBeingPlayed);

      // Si el índice es igual o menor a 0, se pone en marcha la última:
      if (index <= 0) {
        this.songBeingPlayed = this.songsList.pop();
        console.log("Se cambia a la última canción!")

        if (this.songIsPlaying) {
          this.songBeingPlayed.play();
        };

      } else {
        this.songBeingPlayed = this.songsList[index - 1];

        // Si estaba sonando otra canción:
        if (this.songIsPlaying) {
          this.songBeingPlayed.play();
        };
        console.log("Se cambia a la anterior canción!")
      }
    }
}

const volumeSlider = new VolumeSlider()
const musicPlayer = new MusicPlayer()