var aboutme = document.getElementById("aboutme");
var aboutmeinfo = document.getElementById("aboutmeinfo");
var body = document.getElementById("body");
var clicked = false;

function onAboutMeClick() {
    
    
    //aboutme.style.setProperty("--background-color", "rgba(255,255,255,0.5)");
    
    if (!clicked) {
    aboutmeinfo.style.setProperty("--visibility", "visible");
        clicked = true;
    } else {
    aboutmeinfo.style.setProperty("--visibility", "hidden");
        clicked = false;
    }   
}

function onBodyClick() {
    aboutmeinfo.style.setProperty("--visibility", "hidden");
}