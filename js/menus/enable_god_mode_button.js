class EnableGodModeButton {
	constructor() {
		this.enableGodModeButton = document.querySelector(".enable-god-mode-button");
		this.enableGodModeX = document.querySelector(".enable-god-mode-x");
		this.enableGodModeButton.classList.add("hidden");

		this.enableGodModeButton.addEventListener("click", () => {
			if (godModeHandler.godModeIsActive) {
				console.log("el botón se desactiva")
				godModeHandler.godModeIsActive = false;
			} else {
				console.log("el botón se activa")
				godModeHandler.godModeIsActive = true;
			}
			this.toggleX();
		});
	}

	toggleX() {
		if (this.enableGodModeX.classList.contains("hidden")) {
			this.enableGodModeX.classList.remove("hidden");
		} else {
			this.enableGodModeX.classList.add("hidden");
		}
	}
}

window.EnableGodModeButton = EnableGodModeButton;
const enableGodModeButton = new EnableGodModeButton();