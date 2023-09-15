class AudioHandler {
    constructor() {
        this.clockAlarmSound = document.querySelector('.clock-alarm-sound');
        this.clockAlarmSound.volume = 0.5;

        this.clockStartSound = document.querySelector('.clock-start-sound');
        this.clockStartSound.volume = 0.5;

        this.sessionEndingSound = document.querySelector('.ending-session-sound');
        this.sessionEndingSound.volume = 0.5;

        this.sessionEndingMusic = document.querySelector('.ending-session-music');
        this.sessionEndingMusic.volume = 0.5;
    }
}

window.AudioHandler = AudioHandler;
const audioHandler = new AudioHandler();