class EnableGodModeButton {
	constructor() {
		this.enableGodModeButton = document.querySelector(".enable-god-mode-button");
		this.enableGodModeX = document.querySelector(".enable-god-mode-x");

		this.enableGodModeButton.addEventListener("click", () => {
			if (godModeHandler.godModeIsActive) {
				godModeHandler.godModeIsActive = false;
				console.log("el botón se desactiva")

				// Se activa la función de cambiar entre Cycles
				changeBetweenCyclesContainer.toggleChangeBetweenCyclesFeature();
			} else {
				godModeHandler.godModeIsActive = true;
				console.log("el botón se activa")

				// Se activa la función de cambiar entre Cycles:
				changeBetweenCyclesContainer.toggleChangeBetweenCyclesFeature();
			}
			this.toggleX();
		});
	}

	toggleX() {
		if (this.enableGodModeX.classList.contains("shown")) {
			this.enableGodModeX.classList.remove("shown");
		} else {
			this.enableGodModeX.classList.add("shown");
		}
	}
}

window.EnableGodModeButton = EnableGodModeButton;
const enableGodModeButton = new EnableGodModeButton();