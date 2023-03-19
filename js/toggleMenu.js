function toggleMenu() {
    var x = document.getElementById("toggleMenu");
    
    if(x.style.display === "none") {
        x.style.display = "flex"
    }
    else {
        x.style.display = "none"
    }    
}

let gear = document.getElementById("settings-icon")
gear.onclick = function() {
    toggleMenu()
}