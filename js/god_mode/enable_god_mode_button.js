class EnableGodModeButton {
	constructor() {
		this.timesGodModeActivated = 0;

		this.enableGodModeButton = document.querySelector(".enable-god-mode-button");
		this.enableGodModeX = document.querySelector(".enable-god-mode-x");

		this.enableGodModeButton.addEventListener("click", () => {
			this.activateGodMode();
		});
	}

	activateGodMode() {
		if (godModeHandler.godModeIsActive) {
			godModeHandler.godModeIsActive = false;

			// Se desactiva la función de cambiar entre Cycles
			changeBetweenCyclesContainer.toggleChangeBetweenCyclesFeature();
		} else {
			godModeHandler.godModeIsActive = true;

			// Se activa la función de cambiar entre Cycles:
			changeBetweenCyclesContainer.toggleChangeBetweenCyclesFeature();

			// Se cuentan las veces que se activa el god mode:
			this.timesGodModeActivated++;
		}
		this.toggleX();
	}

	toggleX() {
		// If god mode is enabled:
		if (this.enableGodModeX.classList.contains("shown")) {
			this.enableGodModeX.classList.remove("shown");
			circleAnimation.toggleCirclesInteractivity();
		} else {
			this.enableGodModeX.classList.add("shown");
			circleAnimation.toggleCirclesInteractivity();
		}
	}
}

window.EnableGodModeButton = EnableGodModeButton;
const enableGodModeButton = new EnableGodModeButton();