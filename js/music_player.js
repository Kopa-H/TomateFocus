class MusicPlayer {
    constructor() {
        this.song1 = document.querySelector(".music-player-song");
        this.song2 = document.querySelector(".music-player-song-2");
        this.playButton = document.querySelector(".music-player-play-and-pause-button");
        this.nextSongButton = document.querySelector(".music-next-song-button")
        this.volumeSlider = document.querySelector(".volume-slider")

        this.songIsPlaying = false;

        this.playButton.addEventListener('click', () => {
            if (!this.songIsPlaying) {
              console.log("The song starts!");
              this.song1.play();
              this.songIsPlaying = true;
            } else {
              console.log("The song stops!");
              this.song1.pause();
              this.songIsPlaying = false;
            }
        });

        this.nextSongButton.addEventListener('click', () => {
          this.changeToNextSong()
        });

        this.volumeSlider.addEventListener('input', () => {
          this.song1.volume = this.volumeSlider.value;
        });
    }

    changeToNextSong() {
      this.song1.pause();
      this.song2.play();
    }
}

const musicPlayer = new MusicPlayer()