class ChangeBetweenCyclesContainer {
    constructor() {
        this.godModeChangeCycleContainer = document.querySelector(".god-mode-change-cycle-container");

        this.godModeNextCycleButton = document.querySelector(".god-mode-next-cycle-button");
        this.godModePrevCycleButton = document.querySelector(".god-mode-prev-cycle-button");

        this.godModeNextCycleButton.addEventListener("click", () => {
            if (logicHandler.timeToElapse < logicHandler.initialTimeToElapse) {
                godModeHandler.changeToNextCycle();
            }
        });

        this.godModePrevCycleButton.addEventListener("click", () => {
            if (logicHandler.timeToElapse < logicHandler.initialTimeToElapse) {
                godModeHandler.changeToPrevCycle();
            }
        });
    }

    toggleChangeBetweenCyclesFeature() {
		if (this.godModeChangeCycleContainer.classList.contains("shown")) {
			this.godModeChangeCycleContainer.classList.remove("shown");
		} else {
			this.godModeChangeCycleContainer.classList.add("shown");
		}
    }
}

window.ChangeBetweenCyclesContainer = ChangeBetweenCyclesContainer;
const changeBetweenCyclesContainer = new ChangeBetweenCyclesContainer();