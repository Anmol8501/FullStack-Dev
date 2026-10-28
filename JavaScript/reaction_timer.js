let startButton = document.getElementById("startButton");
let message = document.getElementById("message");
let result = document.getElementById("result");
let best = document.getElementById("best");

let timer;
let startTime;
let gameStarted = false;

let bestTime = localStorage.getItem("bestTime");

if (bestTime != null) {
    best.innerText = bestTime + " ms";
}

startButton.addEventListener("click", function () {

    clearTimeout(timer);

    document.body.style.backgroundColor = "red";
    message.innerText = "Wait for green...";
    result.innerText = "-";
    gameStarted = false;

    let delay = Math.floor(Math.random() * 3000) + 200;

    timer = setTimeout(function () {

        document.body.style.backgroundColor = "green";
        message.innerText = "CLICK NOW!";

        startTime = Date.now();
        gameStarted = true;

    }, delay);
});

document.body.addEventListener("click", function (event) {

    if (event.target === startButton) {
        return;
    }

    if (gameStarted === false) {

        message.innerText = "Too early!";
        clearTimeout(timer);

        return;
    }

    let endTime = Date.now();
    let reactionTime = endTime - startTime;

    result.innerText = reactionTime + " ms";
    message.innerText = "Good job!";

    document.body.style.backgroundColor = "red";
    gameStarted = false;

    if (bestTime == null || reactionTime < Number(bestTime)) {

        bestTime = reactionTime;

        localStorage.setItem("bestTime", bestTime);

        best.innerText = bestTime + " ms";
    }
});