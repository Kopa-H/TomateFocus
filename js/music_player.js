class MusicPlayer {
    constructor() {
        this.song = document.querySelector(".music-player-song");
        this.playButton = document.querySelector(".music-player-play-button");

        this.songIsPlaying = false;

        this.playButton.addEventListener('click', () => {
            if (this.songIsPlaying) {
              console.log("En teoría se detiene la canción!");
              this.song.pause();
              this.songIsPlaying = false;
            } else {
              console.log("En teoría se empieza a reproducir la canción!");
              this.song.play();
              this.songIsPlaying = true;
            }
        });
    }
}

const musicPlayer = new MusicPlayer()