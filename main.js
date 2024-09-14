const StartBtn = document.getElementById("StartBtn1");
const StopBtn = document.getElementById("StartBtn2");
const timeStamp = document.getElementById("timeStamp");

let seconds = 0;
let minutes = 0;

function updateDisplay() {
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    timeStamp.innerText = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    if (window.timerInterval) {
        clearInterval(window.timerInterval);
    }

    window.timerInterval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();
    }, 1000);
}

function stopTimer() {
    if (window.timerInterval) {
        clearInterval(window.timerInterval);
        window.timerInterval = null;
    }

    seconds = 0;
    minutes = 0;

    updateDisplay();
}

StartBtn.addEventListener("click", () => {
    startTimer();
});

StopBtn.addEventListener("click", () => {
    stopTimer();
});

updateDisplay();
