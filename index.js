let counterRunning = false;
let counterNumber = 0;
let timerStart;
const timerDiv = document.getElementById("timer");

const updateCounter = () => {
    // increment number on counter
    let msElapsed = Date.now() - timerStart;
    let secondsElapsed = Math.floor(msElapsed / 1000);
    if (secondsElapsed < 60) {
        counterNumber = secondsElapsed;
    } else {
        counterNumber = "you've wasted so much time :) congrats";
        counterRunning = false;
    }
    timerDiv.innerText = counterNumber;
}

const run = () => {
    updateCounter();
    if (counterRunning) {
        requestAnimationFrame(() => run());
    }
}

window.onload = () => {
    counterRunning = true;
    timerStart = Date.now(); 
    run();
}