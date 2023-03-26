function toggleMenu() {
    const element = document.getElementById("toggleMenu");
    const elementStyles = window.getComputedStyle(element)
    const displayType = elementStyles.display
    console.log(displayType)
    
    // Ternary Operator
    element.style.display = displayType === "none" ? "flex" : "none"
}

// This function works perfectly. It's very simple too.
const gear = document.getElementById("settings-icon")
gear.onclick = () => {
    toggleMenu()
}

function testFunction() {
    logicHandler.changeTimeElapse(10)
}