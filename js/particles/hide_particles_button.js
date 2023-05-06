class HideParticlesButton {
	constructor() {
		this.hideParticlesButton = document.querySelector(".hide-particles-button");
		this.hideParticlesX = document.querySelector(".hide-particles-x");
		this.hideParticlesX.classList.add("hidden");

		this.hideParticlesButton.addEventListener("click", () => {
			if (particlesHandler.particlesAreActive) {
				particlesHandler.hideParticles();
				this.hideX();
			} else {
				particlesHandler.showParticles();
				this.showX();
			}
		});
	}

	showX() {
		this.hideParticlesX.classList.remove("hidden");
	}

	hideX() {
		this.hideParticlesX.classList.add("hidden");
	}

}

const hideParticlesButton = new HideParticlesButton();