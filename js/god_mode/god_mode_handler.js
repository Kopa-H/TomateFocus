class GodModeHandler {
    constructor() {
        this.godModeIsActive = false;
    }

    allowCycleTransitions() {
        console.log("Se activan las transiciones de ciclos!")
    }

    allowCounterModifications() {
        console.log("Se activan las modificaciones del contador!")
    }
}

window.GodModeHandler = GodModeHandler;
const godModeHandler = new GodModeHandler();