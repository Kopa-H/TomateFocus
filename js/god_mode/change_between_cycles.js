class ChangeBetweenCyclesContainer {
    constructor() {
        this.godModeChangeCycleContainer = document.querySelector(".god-mode-change-cycle-container");

        this.godModeNextCycleButton = document.querySelector(".god-mode-next-cycle-button");
        this.godModePrevCycleButton = document.querySelector(".god-mode-prev-cycle-button");
    }

    toggleChangeBetweenCyclesFeature() {
		if (this.godModeChangeCycleContainer.classList.contains("shown")) {
			this.godModeChangeCycleContainer.classList.remove("shown");
		} else {
			this.godModeChangeCycleContainer.classList.add("shown");
		}
    }

    changeToNextCycle() {
        return;
    }

    changeToPrevCycle() {
        return;
    }
}

window.ChangeBetweenCyclesContainer = ChangeBetweenCyclesContainer;
const changeBetweenCyclesContainer = new ChangeBetweenCyclesContainer();