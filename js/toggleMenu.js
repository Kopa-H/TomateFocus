

function toggleMenu() {
    var element = document.getElementById("toggleMenu");
    var elementStyles = window.getComputedStyle(element)
    var displayType = elementStyles.display
    console.log(displayType)
    
    if(displayType === "none") {
        element.style.display = "flex"
    }
    else {
        element.style.display = "none"
    }    
}



// This function works perfectly. It's very simple too.
let gear = document.getElementById("settings-icon")
gear.onclick = function() {
    toggleMenu()
}