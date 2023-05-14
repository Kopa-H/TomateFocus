class MusicButton {
  constructor() {
    this.musicPlayerButton = document.querySelector(".music-icon");
    this.musicPlayerContainer = document.querySelector(".music-player-flex");

    this.musicPlayerButton.addEventListener('click', () => {
      this.musicPlayerTrigger();
    });

    this.musicPlayerIsShown = false;

    // Para que no se superponga el toggleMenu y el musicPlayer:
    this.cursorHasCrossedRight = false; // Bandera para seguimiento del cursor
    window.addEventListener('mousemove', (event) => {
      const cursorX = event.clientX;
      const windowWidth = window.innerWidth;
      // Verificar si el cursor ha cruzado la mitad de la ventana hacia la derecha
      if (cursorX > windowWidth / 2 && !this.cursorHasCrossedRight) {
        this.musicPlayerContainer.style.zIndex = "1";
        // Ejecutar las instrucciones deseadas
        this.cursorHasCrossedRight = true; // Actualizar la bandera para evitar ejecución repetida
      } else if (cursorX <= windowWidth / 2 && this.cursorHasCrossedRight) {
        this.musicPlayerContainer.style.zIndex = "2";
        // Reiniciar la bandera si el cursor vuelve a la mitad de la pantalla
        this.cursorHasCrossedRight = false;
      }
    });
  }

  musicPlayerTrigger() {
    // Verificar si el reproductor NO está desplegado (clase slideOut aplicada)
    if (!this.musicPlayerIsShown) {
      this.musicPlayerContainer.classList.remove("slideOut");
      this.musicPlayerContainer.classList.add("slideIn");
      this.musicPlayerContainer.style.display = "flex";
      this.musicPlayerIsShown = true;
    }
    // Verificar si el reproductor SÍ está desplegado (clase slideIn aplicada)
    else {
      this.musicPlayerContainer.classList.remove("slideIn");
      this.musicPlayerContainer.classList.add("slideOut");

      this.musicPlayerContainer.addEventListener("animationend", () => {
        this.musicPlayerContainer.style.display = "none";
        this.musicPlayerIsShown = false;
      }, { once: true });
    }
  };
}

class VolumeSlider {
  constructor() {
    this.sliderThumb = document.querySelector('.slider-thumb');
    this.sliderTrack = document.querySelector('.slider-track');
    this.sliderContainer = document.querySelector('.slider-container');
    this.trackHeight = 93;

    // Se requiere conocer el volumen inicial del slider para las transiciones, por lo que se calcula al instanciar la clase:
    this.volumePercentage = 0.6;

    // This variable will be used to know if the slider-thumb is being pressed:
    this.isDragging = false;

    // When the thumb is pressed, the movement is enabled:
    this.sliderThumb.addEventListener('mousedown', function() {
      this.isDragging = true;
    }.bind(this));

    // When the slider container is pressed, it calls the updateSlider() method and the movement is enabled:
    this.sliderContainer.addEventListener('mousedown', function(event) {
      this.updateSlider(event);
      this.isDragging = true;
    }.bind(this));

    // When the mouse is moved (across all the page), if the movement is enabled, it calls the updateSlider() method:
    document.addEventListener('mousemove', function(event) {
      if (this.isDragging) {
        this.updateSlider(event);
      }
    }.bind(this));
    // When the thumb stops being pressed, the movement is disabled:
    document.addEventListener('mouseup', function() {
      this.isDragging = false;
    }.bind(this));
  }

  updateSlider(event) {
    // Se calcula la altura del slider track a partir de la del contenedor:
    this.trackHeight = event.clientY - this.sliderContainer.getBoundingClientRect().top;

    // Se obtiene el límite superior e inferior del slider container:
    let containerTop = this.sliderContainer.getBoundingClientRect().top;
    let containerBottom = this.sliderContainer.getBoundingClientRect().bottom;

    // Se valida que la altura del track esté dentro de los límites del slider container:
    if (this.trackHeight <= containerBottom - containerTop && this.trackHeight >= 0) {
        // Se establece la altura del track:
        this.sliderTrack.style.height = this.trackHeight + 'px';
        // Se establece la posición del thumb:
        this.sliderThumb.style.top = this.trackHeight - (this.sliderThumb.offsetHeight / 2) + 'px';
        this.changeVolume();
    }
  }

  changeVolume() {
    // The thumb position is used in order to calculate the volume of the music player.
    this.thumbPosition = parseInt(this.sliderThumb.style.top);
    // Calcula el porcentaje de la posición del thumb dentro del rango total de desplazamiento del slider
    this.thumbPercentage = this.thumbPosition / (this.sliderContainer.offsetHeight - this.sliderThumb.offsetHeight);
    // Calcula el volumen linealmente del máximo al mínimo
    this.volumePercentage = 1 - this.thumbPercentage;
    // Asegúrate de que el valor del volumen esté dentro del rango válido (0 a 1)
    this.volumePercentage = Math.max(0, Math.min(1, this.volumePercentage));
    // Actualiza el volumen del reproductor de música
    musicPlayer.songBeingPlayed.volume = this.volumePercentage;
  }

  changeVolumeViaKeyboard(changeValue) {
    let containerTop = this.sliderContainer.getBoundingClientRect().top;
    let containerBottom = this.sliderContainer.getBoundingClientRect().bottom;

    this.trackHeight += (changeValue === "up" ? -20 : 20);

    if (this.trackHeight <= 0) {
      this.trackHeight = 0;
    } else if (this.trackHeight >= containerBottom - containerTop) {
      this.trackHeight = 200;
    }

    this.sliderTrack.style.height = this.trackHeight + 'px';
    this.sliderThumb.style.top = this.trackHeight - (this.sliderThumb.offsetHeight / 2) + 'px';

    this.changeVolume()
  }
}

class MusicPlayer {
    constructor() {
      this.song1 = document.querySelector(".music-player-song-1");
      this.song2 = document.querySelector(".music-player-song-2");
      this.song3 = document.querySelector(".music-player-song-3");
      this.song4 = document.querySelector(".music-player-song-4");
      this.song5 = document.querySelector(".music-player-song-5");
      this.song6 = document.querySelector(".music-player-song-6");
      this.song7 = document.querySelector(".music-player-song-7");
      this.songsList = [this.song1, this.song2, this.song3, this.song4, this.song5, this.song6, this.song7];
      this.songBeingPlayed = this.songsList[0];
      this.songIsPlaying = false;

      for (var i = 0; i < this.songsList.length; i++) {
        this.songsList[i].addEventListener('ended', (event) => {
          this.changeToNextSong();
        });
      }

      this.image1 = document.querySelector(".song-image-1");
      this.image2 = document.querySelector(".song-image-2");
      this.image3 = document.querySelector(".song-image-3");
      this.image4 = document.querySelector(".song-image-4");
      this.image5 = document.querySelector(".song-image-5");
      this.image6 = document.querySelector(".song-image-6");
      this.image7 = document.querySelector(".song-image-7");
      this.imagesList = [this.image1, this.image2, this.image3, this.image4, this.image5, this.image6, this.image7];
      this.imageBeingDisplayed = this.imagesList[0];

      this.playButton = document.querySelector(".music-player-play-button");
      this.pauseButton = document.querySelector(".music-player-pause-button");
      this.pauseButton.classList.add("hidden");
      this.nextSongButton = document.querySelector(".music-next-song-button");
      this.previousSongButton = document.querySelector(".music-previous-song-button");

      // EventListener del playButton y pauseButton
      this.togglePlayPause = () => {
        if (!this.songIsPlaying) {
            this.songBeingPlayed.play();
            this.songIsPlaying = true;
            this.pauseButton.classList.remove("hidden");
            this.playButton.classList.add("hidden");
            this.pauseButton.style.zIndex = "1";
        } else {
            this.songBeingPlayed.pause();
            this.songIsPlaying = false;
            this.playButton.classList.remove("hidden");
            this.pauseButton.classList.add("hidden");
            this.pauseButton.style.zIndex = "0";
        }
      };
      // Asignar el evento al botón de reproducción
      this.playButton.addEventListener('click', this.togglePlayPause);
      // Asignar el mismo evento al botón de pausa
      this.pauseButton.addEventListener('click', this.togglePlayPause);

      // Para que al terminarse una canción suene la siguiente: (habrá que ver si esto se mantiene más allá de la primera)
      this.songBeingPlayed.addEventListener('ended', () => {
        this.changeToNextSong();
      });

      this.nextSongButton.addEventListener('click', () => {
        this.changeToNextSong();
      });

      this.previousSongButton.addEventListener('click', () => {
        this.changeToPreviousSong();
      });
    }

    changeToNextSong() {
      // Se obtiene el índice de la anterior canción:
      const index = this.songsList.indexOf(this.songBeingPlayed);
      // Se recoge la imagen y el audio de la anterior canción:
      this.lastImageBeingDisplayed = this.imageBeingDisplayed;
      this.lastSongBeingPlayed = this.songBeingPlayed;
      // Se consigue la siguiente canción junto a la siguiente imagen:
      if (index + 1 <= this.songsList.length-1) {
        this.songBeingPlayed = this.songsList[index + 1];
        this.imageBeingDisplayed = this.imagesList[index + 1];
      } else {
        this.songBeingPlayed = this.songsList[0];
        this.imageBeingDisplayed = this.imagesList[0];
      }

      this.lastSongBeingPlayed.pause();
      this.lastSongBeingPlayed.currentTime = 0;
      this.lastImageBeingDisplayed.style.display = "none";

      this.imageBeingDisplayed.style.display = "block";
      this.imageBeingDisplayed.style.opacity = "1";

      if (this.songIsPlaying) {
        this.songBeingPlayed.play();
      }
    }

    changeToPreviousSong() {
      // Se obtiene el índice de la anterior canción:
      const index = this.songsList.indexOf(this.songBeingPlayed);
      // Se recoge la imagen y el audio de la anterior canción:
      this.lastImageBeingDisplayed = this.imageBeingDisplayed;
      this.lastSongBeingPlayed = this.songBeingPlayed;

      // Si el índice es igual o menor a 0, se pone en marcha la última:
      if (index <= 0) {
        this.songBeingPlayed = this.songsList[this.songsList.length - 1];
        this.imageBeingDisplayed = this.imagesList[this.imagesList.length - 1];
      } else {
        this.songBeingPlayed = this.songsList[index - 1];
        this.imageBeingDisplayed = this.imagesList[index - 1];
      }

      this.lastSongBeingPlayed.pause();
      this.lastSongBeingPlayed.currentTime = 0;
      this.lastImageBeingDisplayed.style.display = "none";

      this.imageBeingDisplayed.style.display = "block";
      this.imageBeingDisplayed.style.opacity = "1";

      if (this.songIsPlaying) {
        this.songBeingPlayed.play();
      }
    }
  }

const musicButton = new MusicButton()
const volumeSlider = new VolumeSlider()
const musicPlayer = new MusicPlayer()