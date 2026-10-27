let answer, tries;
const input = document.getElementById("guessInput");
const button = document.getElementById("submitGuess");
const again = document.getElementById("restartGame");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

function startGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    tries = 0;
    input.disabled = false;
    button.disabled = false;
    again.hidden = true;
    input.value = "";
    message.textContent = "";
    attempts.textContent = "Attempts remaining: 7";
}

function checkGuess() {
    const guess = Number(input.value);

    if (!guess || guess < 1 || guess > 100 || !Number.isInteger(guess)) {
        message.textContent = "Enter a whole number from 1 to 100.";
        return;
    }

    tries++;
    if (guess === answer) {
        message.textContent = `Correct! You won in ${tries} tries.`;
        endGame();
    } else if (tries === 7) {
        message.textContent = `Game over! The number was ${answer}.`;
        endGame();
    } else {
        message.textContent = guess < answer ? "Guess higher." : "Guess lower.";
        attempts.textContent = `Attempts remaining: ${7 - tries}`;
        input.value = "";
    }
}

function endGame() {
    input.disabled = true;
    button.disabled = true;
    again.hidden = false;
}

button.onclick = checkGuess;
again.onclick = startGame;
input.onkeydown = event => {
    if (event.key === "Enter") checkGuess();
};

startGame();