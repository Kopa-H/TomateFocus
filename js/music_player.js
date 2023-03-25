class MusicPlayer {
    constructor() {
        this.song = document.querySelector(".music-player-song");
        this.playButton = document.querySelector(".music-player-play-and-pause-button");
        this.volumeSlider = document.querySelector(".volume-slider")

        this.songIsPlaying = false;

        this.playButton.addEventListener('click', () => {
            if (!this.songIsPlaying) {
              console.log("The song starts!");
              this.song.play();
              this.songIsPlaying = true;
            } else {
              console.log("The song stops!");
              this.song.pause();
              this.songIsPlaying = false;
            }
        });

        this.volumeSlider.addEventListener('input', () => {
          this.song.volume = this.volumeSlider.value;
        });
    }
}

const musicPlayer = new MusicPlayer()