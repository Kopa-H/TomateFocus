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


const pomoMinus = document.querySelector(".pomodoro .minus-button")
const pomoPlus = document.querySelector(".pomodoro .plus-button")
pomoMinus.addEventListener('click', function () {
    console.log("The minus button of the pomo is being pressed")
    let textMinutes = document.querySelector(".pomodoro .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    console.log("text minutes value" + textMinutesValue)
    --textMinutesValue
    textMinutes.textContent = textMinutesValue
    
    callChangeDuration("pomodoro", textMinutesValue*60)
    console.log(textMinutesValue)
})
pomoPlus.addEventListener('click', function () {
    console.log("The plus button of the pomo is being pressed")
})


function callChangeDuration(timerType, time) {
    logicHandler.changeTimeElapse(timerType, time)
}