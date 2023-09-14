class SessionEnding {
    constructor() {

    }

    endTheSession() {
        console.log("SESSION END")
        audioHandler.playEndSessionSound();
        audioHandler.playEndSessionMusic();
        this.cleanInterface();
        this.showSessionStatistics();
    }

    cleanInterface() {
        // The settings menu is hidden.
        if (settingsMenu.settingsMenuStyles.display != "none") {
            settingsMenu.showOrHideSettingsMenu();
        }

        // The music player menu is hidden.
        if (!musicPlayer.musicPlayerIsShown) {
            musicPlayer.musicPlayerTrigger();
        }

        // The music stops
        if (musicPlayer.songIsPlaying) {
            musicPlayer.togglePlayPause();
        }
    }

    showSessionStatistics() {
        Habrá que recoger de alguna forma las veces que se aprieta el delay button y este actúa (es decir, que el tiempo del ciclo no estaba al máximo)
        Luego sumaremos eso al tiempo total de la sesión.
        También se mostrará el total de tiempo de inactividad (en que el reloj ha estado parado)
        También se mostrará el número de veces que se ha usado el botón de pausa
    }
}

window.SessionEnding = SessionEnding;
const sessionEnding = new SessionEnding();
