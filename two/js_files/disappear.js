var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function start(){
    setInterval(show, 100)
}

function fadeIn() {
    setTimeout(start, 10000);
    setTimeout(hat, 10000);
}

function show() {
    var body = document.getElementById("rhyme");
    opacity = Number(window.getComputedStyle(body)
                    .getPropertyValue("opacity"));
    if (opacity >0) {
        opacity = opacity - 0.3;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}

function hat(){
    document.getElementById("hat").style.animation = "move 1s ease-in";
    document.getElementById("peekaboo").classList.toggle("active");
}