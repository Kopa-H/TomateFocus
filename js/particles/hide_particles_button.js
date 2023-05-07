class HideParticlesButton {
	constructor() {
		this.hideParticlesButton = document.querySelector(".hide-particles-button");
		this.hideParticlesX = document.querySelector(".hide-particles-x");

		this.hideParticlesButton.addEventListener("click", () => {
			if (particlesHandler.particlesAreActive) {
				particlesHandler.hideParticles();
				this.toggleX();
			} else {
				particlesHandler.changeParticlesNumberAndColor("none", 50);
				this.toggleX();
			}
		});
	}

	toggleX() {
		if (this.hideParticlesX.classList.contains("hidden")) {
			this.hideParticlesX.classList.remove("hidden");
		} else {
			this.hideParticlesX.classList.add("hidden");
		}
	}
}

window.HideParticlesButton = HideParticlesButton;
const hideParticlesButton = new HideParticlesButton();