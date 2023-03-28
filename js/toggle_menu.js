function toggleMenu() {
    const element = document.getElementById("toggleMenu");
    const elementStyles = window.getComputedStyle(element);
    const displayType = elementStyles.display;

    if (displayType == "none") {
        element.classList.remove("slideOut");
        element.classList.add("slideIn");       
        element.style.display = "flex";

    } else {
        element.classList.remove("slideIn");
        element.classList.add("slideOut");
        element.addEventListener("animationend", () => {
            element.style.display = "none"
        }, { once: true })
    }
}


// This function works perfectly. It's very simple too.
const gear = document.getElementById("settings-icon")
gear.onclick = () => {
    toggleMenu()
}


const pomoMinus = document.querySelector(".pomodoro .minus-button")
const pomoPlus = document.querySelector(".pomodoro .plus-button")
const shortMinus = document.querySelector(".short-break .minus-button")
const shortPlus = document.querySelector(".short-break .plus-button")
const longMinus = document.querySelector(".long-break .minus-button")
const longPlus = document.querySelector(".long-break .plus-button")

pomoMinus.addEventListener('click', function () {
    let textMinutes = document.querySelector(".pomodoro .menu-text")
    // the match(/\d+/g) is a regex. It matches numbers
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue != 0) {
        textMinutes.textContent = `${--textMinutesValue} minutes`
        callChangeDuration("pomodoro", textMinutesValue*60) 
    }
})
pomoPlus.addEventListener('click', function () {
    let textMinutes = document.querySelector(".pomodoro .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue != 0) {
        textMinutes.textContent = `${++textMinutesValue} minutes`
        callChangeDuration("pomodoro", textMinutesValue*60)
    }
})
shortMinus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".short-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue != 0) {
        textMinutes.textContent = `${--textMinutesValue} minutes`
        callChangeDuration("shortbreak", textMinutesValue*60)
    }
})
shortPlus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".short-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue != 0) {
        textMinutes.textContent = `${++textMinutesValue} minutes`
        callChangeDuration("shortbreak", textMinutesValue*60)
    }
})
longMinus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".long-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue != 0) {
        textMinutes.textContent = `${--textMinutesValue} minutes`
        callChangeDuration("longbreak", textMinutesValue*60)
    }
})
longPlus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".long-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue != 0) {
        textMinutes.textContent = `${++textMinutesValue} minutes`
        callChangeDuration("longbreak", textMinutesValue*60)
    }
})

function callChangeDuration(timerType, time) {
    logicHandler.changeTimeElapse(timerType, time)
}