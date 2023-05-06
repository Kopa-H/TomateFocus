class HideParticlesButton {
	constructor() {
		this.hideParticlesButton = document.querySelector(".hide-particles-button");

		this.hideParticlesButton.addEventListener("click", () => {
			if (particlesHandler.particlesAreActive) {
				particlesHandler.hideParticles();
			} else {
				particlesHandler.showParticles();
			}

			this.pushTransition();
		});
	}

	pushTransition() {
		// Mover el botón con una animación suave
		this.hideParticlesButton.style.transition = 'transform 1s';
		this.hideParticlesButton.style.transform = 'translate(-2px, -2px)';

		// Esperar 3 segundos y volver a la posición original con una transición suave
		setTimeout(() => {
		this.hideParticlesButton.style.transition = 'transform 1s';
		this.hideParticlesButton.style.transform = 'translate(0px, 0px)';
		}, 1000);
	}

}

const hideParticlesButton = new HideParticlesButton();