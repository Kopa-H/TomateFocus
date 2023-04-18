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

        for (var i = 0; i < this.songsList.length; i++) {
          this.songsList[i].addEventListener('ended', (event) => {
            this.changeToNextSong();
          });
        }

        this.image1 = document.querySelector(".airballon-background-image");
        this.image2 = document.querySelector(".colors-background-image");
        this.image3 = document.querySelector(".colors2-background-image");
        this.image4 = document.querySelector(".colors3-background-image");
        this.image5 = document.querySelector(".dragon-background-image");
        this.image6 = document.querySelector(".temple-background-image");
        this.imagesList = [this.image1, this.image2, this.image3, this.image4];
        this.imageBeingDisplayed = this.imagesList[0];

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

        // Para las transiciones entre canciones:
        this.transitionTime = 5000; // Duración total de la transición en milisegundos
        this.intervalTime = 50; // Intervalo de tiempo entre cada iteración en milisegundos
        this.steps = this.transitionTime / this.intervalTime; // Número de iteraciones necesarias para completar la transición
        this.opacityStep = 0.6 / this.steps; // Cambio en la opacidad en cada iteración
        this.volumeStep = 0.6 / this.steps; // Cambio en el volumen en cada iteración

        this.transitionIsExecuting = false;
        this.overlappingTransition = false;
    }

    playSong() {
      // Se reproduce la nueva canción:
      if (this.songIsPlaying) {
        this.imageBeingDisplayed.style.position = "absolute";
        this.songBeingPlayed.play();

        // Inicio de la transición:
        for (let i = 1; i <= this.steps; i++) {
          this.transitionIsExecuting = true;
          setTimeout(() => {
            // Viejo
            this.lastImageBeingDisplayed.style.opacity = `${0.5 - i * this.opacityStep}`;
            this.lastSongBeingPlayed.volume = Math.min(Math.max(0, 0.4 - i * this.volumeStep), volumeSlider.volumePercentage);

            // Nuevo
            this.imageBeingDisplayed.style.opacity = `${0.5 + i * this.opacityStep}`;
            this.songBeingPlayed.volume = Math.min(Math.max(0, 0.5 + i * this.volumeStep), volumeSlider.volumePercentage);

            // Si la transición se ha completado o hay transiciones superpuestas:
            if (i === this.steps || this.overlappingTransition) {
              this.lastImageBeingDisplayed.style.opacity = "0";
              this.lastSongBeingPlayed.volume = "0";
              this.imageBeingDisplayed.style.opacity = "1";
              this.songBeingPlayed.volume = volumeSlider.volumePercentage;

              // Se detiene la canción que sonaba hasta ahora:
              this.lastSongBeingPlayed.volume = volumeSlider.volumePercentage;
              this.lastSongBeingPlayed.pause();
              this.lastSongBeingPlayed.currentTime = 0;

              // Se deja de mostrar la imagen de la canción anterior:
              this.lastImageBeingDisplayed.style.display = "none";
              // Se devuelve el valor de relative a position:
              this.imageBeingDisplayed.style.position = "relative";

              this.transitionIsExecuting = false;
              this.overlappingTransition = false;
              return;
            }
          }, i * this.intervalTime);
        }
        // Si no se está reproduciendo ninguna canción:
      } else {
        this.lastSongBeingPlayed.pause();
        this.lastSongBeingPlayed.currentTime = 0;

        // Se muestra la imagen de la nueva canción:
        this.lastImageBeingDisplayed.style.display = "none";
        this.imageBeingDisplayed.style.display = "block";
        this.imageBeingDisplayed.style.opacity = "1";
      }
    }

    changeToNextSong() {
      // Si NO se está ejecutando una transición:
      if (!this.transitionIsExecuting) {
        // Se recoge la imagen y el audio de la anterior canción:
        this.lastImageBeingDisplayed = this.imageBeingDisplayed;
        this.lastSongBeingPlayed = this.songBeingPlayed;

        // Se obtiene el índice de la anterior canción:
        const index = this.songsList.indexOf(this.songBeingPlayed);

        // Si la siguiente canción es la última:
        if (index + 1 <= this.songsList.length-1) {
          this.songBeingPlayed = this.songsList[index + 1];
          this.imageBeingDisplayed = this.imagesList[index + 1];
        } else {
          this.songBeingPlayed = this.songsList[0];
          this.imageBeingDisplayed = this.imagesList[0];
        }
        // Se muestra la imagen de la nueva canción:
        this.imageBeingDisplayed.style.display = "block";
        this.playSong();
      // Si SÍ se está ejecutando una transición:
      } else {
        this.overlappingTransition = true;

        // Se quita lo de la canción anterior:
        this.lastSongBeingPlayed.pause();
        this.lastSongBeingPlayed.currentTime = 0;
        this.lastImageBeingDisplayed.style.display = "none";

        this.lastImageBeingDisplayed = this.imageBeingDisplayed;
        this.lastSongBeingPlayed = this.songBeingPlayed;
        // Se obtiene el índice de la siguiente canción:
        const index = this.songsList.indexOf(this.songBeingPlayed);

        // Si la siguiente canción es la última:
        if (index + 1 <= this.songsList.length-1) {
          this.songBeingPlayed = this.songsList[index + 1];
          this.imageBeingDisplayed = this.imagesList[index + 1];
        } else {
          this.songBeingPlayed = this.songsList[0];
          this.imageBeingDisplayed = this.imagesList[0];
        }

        // Se muestra la imagen de la nueva canción:
        this.imageBeingDisplayed.style.display = "block";
        this.imageBeingDisplayed.style.opacity = "1";
        this.songBeingPlayed.play();
        console.log("Se realiza una transición forzada!");
        return;
      }
    }

    changeToPreviousSong() {
      // Si NO se está ejecutando una transición:
      if (!this.transitionIsExecuting) {
        // Se recoge la imagen y el audio de la anterior canción:
        this.lastImageBeingDisplayed = this.imageBeingDisplayed;
        this.lastSongBeingPlayed = this.songBeingPlayed;

        // Se obtiene el índice de la anterior canción:
        const index = this.songsList.indexOf(this.songBeingPlayed);

        // Si el índice es igual o menor a 0, se pone en marcha la última:
        if (index <= 0) {
          this.songBeingPlayed = this.songsList[this.songsList.length - 1];
          this.imageBeingDisplayed = this.imagesList[this.imagesList.length - 1];
        } else {
          this.songBeingPlayed = this.songsList[index - 1];
          this.imageBeingDisplayed = this.imagesList[index - 1];
        }

        // Se muestra la imagen de la nueva canción:
        this.imageBeingDisplayed.style.display = "block";
        this.playSong();
      // Si SÍ se está ejecutando una transición:
      } else {
        this.overlappingTransition = true;

        // Se quita lo de la canción anterior:
        this.lastSongBeingPlayed.pause();
        this.lastSongBeingPlayed.currentTime = 0;
        this.lastImageBeingDisplayed.style.display = "none";

        this.lastImageBeingDisplayed = this.imageBeingDisplayed;
        this.lastSongBeingPlayed = this.songBeingPlayed;
        // Se obtiene el índice de la siguiente canción:
        const index = this.songsList.indexOf(this.songBeingPlayed);

        // Si el índice es igual o menor a 0, se pone en marcha la última:
        if (index <= 0) {
          this.songBeingPlayed = this.songsList[this.songsList.length - 1];
          this.imageBeingDisplayed = this.imagesList[this.imagesList.length - 1];
        } else {
          this.songBeingPlayed = this.songsList[index - 1];
          this.imageBeingDisplayed = this.imagesList[index - 1];
        };

        // Se muestra la imagen de la nueva canción:
        this.imageBeingDisplayed.style.display = "block";
        this.imageBeingDisplayed.style.opacity = "1";
        this.songBeingPlayed.play();
        console.log("Se realiza una transición forzada!");
        return;
      }
    }
}

const musicButton = new MusicButton()
const volumeSlider = new VolumeSlider()
const musicPlayer = new MusicPlayer()