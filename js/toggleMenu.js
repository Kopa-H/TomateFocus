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
    let textMinutes = document.querySelector(".pomodoro .menu-text")
    // the match(/\d+/g) is a regex. It matches numbers
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    textMinutes.textContent = `${--textMinutesValue} minutes`

    // Call the function that is inside counter.js
    callChangeDuration("pomodoro", textMinutesValue*60)
    console.log(textMinutesValue)
})
pomoPlus.addEventListener('click', function () {
    let textMinutes = document.querySelector(".pomodoro .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    textMinutes.textContent = `${++textMinutesValue} minutes`

    callChangeDuration("pomodoro", textMinutesValue*60)
})


function callChangeDuration(timerType, time) {
    logicHandler.changeTimeElapse(timerType, time)
}