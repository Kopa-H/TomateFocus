class AudioHandler {
    constructor() {
        this.clockAlarmSound = document.querySelector('.clock-alarm-sound');
        this.clockAlarmSound.volume = 0.5;

        this.clockStartSound = document.querySelector('.clock-start-sound');
        this.clockStartSound.volume = 0.5;
    }
}

window.AudioHandler = AudioHandler;
const audioHandler = new AudioHandler();