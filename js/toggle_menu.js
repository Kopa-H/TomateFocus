function toggleMenu() {
    const element = document.querySelector(".toggleMenu-flex");
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
    toggleMenu();
};

const pomoMinus = document.querySelector(".pomodoro .minus-button");
const pomoPlus = document.querySelector(".pomodoro .plus-button");
const shortMinus = document.querySelector(".short-break .minus-button");
const shortPlus = document.querySelector(".short-break .plus-button");
const longMinus = document.querySelector(".long-break .minus-button");
const longPlus = document.querySelector(".long-break .plus-button");
const delayMinus = document.querySelector(".delay-break .minus-button");
const delayPlus = document.querySelector(".delay-break .plus-button");

pomoMinus.addEventListener('click', function () {
    let textMinutes = document.querySelector(".pomodoro .menu-text")
    // the match(/\d+/g) is a regex. It matches numbers
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue > 10) {
        textMinutes.textContent = `${--textMinutesValue} minutes`
        callChangeDuration("pomodoro", textMinutesValue*60)
    }
})
pomoPlus.addEventListener('click', function () {
    let textMinutes = document.querySelector(".pomodoro .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue < 60) {
        textMinutes.textContent = `${++textMinutesValue} minutes`
        callChangeDuration("pomodoro", textMinutesValue*60)
    };
})
shortMinus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".short-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue > 1) {
        textMinutes.textContent = `${--textMinutesValue} minutes`
        callChangeDuration("shortbreak", textMinutesValue*60)
    }
})
shortPlus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".short-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue < 30) {
        textMinutes.textContent = `${++textMinutesValue} minutes`
        callChangeDuration("shortbreak", textMinutesValue*60)
    };
})
longMinus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".long-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue > 5) {
        textMinutes.textContent = `${--textMinutesValue} minutes`
        callChangeDuration("longbreak", textMinutesValue*60)
    };
})
longPlus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".long-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue < 60) {
        textMinutes.textContent = `${++textMinutesValue} minutes`
        callChangeDuration("longbreak", textMinutesValue*60)
    };
})
delayMinus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".delay-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue > 1) {
        textMinutes.textContent = `${--textMinutesValue} minutes`
        callChangeDuration("delaybreak", textMinutesValue)
    };
})
delayPlus.addEventListener("click", function () {
    let textMinutes = document.querySelector(".delay-break .menu-text")
    let textMinutesValue = +textMinutes.textContent.match(/\d+/g)
    if (textMinutesValue < 5) {
        textMinutes.textContent = `${++textMinutesValue} minutes`
        callChangeDuration("delaybreak", textMinutesValue)
    };
})

function callChangeDuration(timerType, time) {
    logicHandler.changeTimeElapse(timerType, time)
}

// Reset Preferences Button
const resetPreferencesButton = document.querySelector(".reset-preferences-button")
resetPreferencesButton.addEventListener('click', () => {
    resetPreferences();
});
function resetPreferences() {
    let pomodoroMinutes = document.querySelector(".pomodoro .menu-text");
    let shortMinutes = document.querySelector(".short-break .menu-text");
    let longMinutes = document.querySelector(".long-break .menu-text");
    let delayMinutes = document.querySelector(".delay-break .menu-text");

    pomodoroMinutes.textContent = `${25} minutes`;
    shortMinutes.textContent = `${5} minutes`;
    longMinutes.textContent = `${15} minutes`;
    delayMinutes.textContent = `${1} minutes`;
};