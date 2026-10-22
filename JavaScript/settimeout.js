let timeLeft = 0;
let timerId = null;

function startTimer() {
    if (timerId !== null) {
        return;
    }

    if (timeLeft === 0) {
        timeLeft = Number(1000);
    }

    if (timeLeft <= 0) {
        alert("Enter a valid number of seconds");
        return;
    }

    updateTimer();

    timerId = setInterval(function () {
        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            alert("Time's up!");
        }
    }, 1000);
}


function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}