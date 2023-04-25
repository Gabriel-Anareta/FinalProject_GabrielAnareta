let headerVar = document.querySelector("header");
let transitionVar = document.getElementById("transitionBox");
let imageProgressVar = document.getElementById("backgroundProgress");
let progress1Var = document.getElementById("progress1");
let progress2Var = document.getElementById("progress2");
let progress3Var = document.getElementById("progress3");
let progress4Var = document.getElementById("progress4");
let imageState = 0;
let fadeState = 0;
let interval = setInterval(backgroundSequence, 7500);
interval;

headerVar.addEventListener('click', handleClick);
transitionVar.style.transition = "background-color 0.4s ease-in"

function handleClick() {
    clearInterval(interval);
    backgroundSequence();
    interval = setInterval(backgroundSequence, 7500);
    interval;
}

function backgroundSequence() {
    fade();
    setTimeout(function() {
        changeImage();
        fade();
    }, 450);
}

function fade() {
    if (fadeState == 0)
        transitionVar.style.backgroundColor = "rgba(0, 0, 0, 1)";
    if (fadeState == 1)
        transitionVar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    fadeState == 1 ? fadeState = 0 : fadeState = 1;
}

function changeImage() {
    if (imageState == 0) {
        progress1Var.style.backgroundColor = "var(--dark-greyish)";
        progress2Var.style.backgroundColor = "var(--minty)";
        progress3Var.style.backgroundColor = "var(--dark-greyish)";
        progress4Var.style.backgroundColor = "var(--dark-greyish)";
        headerVar.style.backgroundImage = "url('../Images/30.jpg')";
    }
    if (imageState == 1) {
        progress1Var.style.backgroundColor = "var(--dark-greyish)";
        progress2Var.style.backgroundColor = "var(--dark-greyish)";
        progress3Var.style.backgroundColor = "var(--minty)";
        progress4Var.style.backgroundColor = "var(--dark-greyish)";
        headerVar.style.backgroundImage = "url('../Images/34.jpg')";
    }
    if (imageState == 2) {
        progress1Var.style.backgroundColor = "var(--dark-greyish)";
        progress2Var.style.backgroundColor = "var(--dark-greyish)";
        progress3Var.style.backgroundColor = "var(--dark-greyish)";
        progress4Var.style.backgroundColor = "var(--minty)";
        headerVar.style.backgroundImage = "url('../Images/29.jpg')";
    }
    if (imageState == 3) {
        progress1Var.style.backgroundColor = "var(--minty)";
        progress2Var.style.backgroundColor = "var(--dark-greyish)";
        progress3Var.style.backgroundColor = "var(--dark-greyish)";
        progress4Var.style.backgroundColor = "var(--dark-greyish)";
        headerVar.style.backgroundImage = "url('../Images/backyard_fireplace.jpg')";
    }
    imageState == 3 ? imageState = 0 : imageState++;
}