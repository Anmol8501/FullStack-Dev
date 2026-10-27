const moves = ["rock", "paper", "scissors"];
const winningMoves = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

let playerOneMove = null;
let scores = {
    playerOne: 0,
    playerTwo: 0
};

const playerOneSection = document.getElementById("player-one");
const playerTwoSection = document.getElementById("player-two");
const playerOneButtons = document.querySelectorAll("[data-player='1']");
const playerTwoButtons = document.querySelectorAll("[data-player='2']");
const result = document.getElementById("result");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset-game");

function getWinner(playerTwoMove) {
    if (playerOneMove === playerTwoMove) {
        return "draw";
    }

    return winningMoves[playerOneMove] === playerTwoMove ? "playerOne" : "playerTwo";
}

function updateScore() {
    score.textContent = `Player 1: ${scores.playerOne} | Player 2: ${scores.playerTwo}`;
}

function selectPlayerOneMove(move) {
    if (!moves.includes(move)) {
        return;
    }

    playerOneMove = move;
    playerOneSection.hidden = true;
    playerTwoSection.hidden = false;
    result.textContent = "Player 2, choose your move.";
}

function playRound(playerTwoMove) {
    const winner = getWinner(playerTwoMove);

    if (winner === "draw") {
        result.textContent = `Both players chose ${playerTwoMove}. It is a draw!`;
    } else if (winner === "playerOne") {
        scores.playerOne++;
        result.textContent = `Player 1 wins! ${playerOneMove} beats ${playerTwoMove}.`;
    } else {
        scores.playerTwo++;
        result.textContent = `Player 2 wins! ${playerTwoMove} beats ${playerOneMove}.`;
    }

    updateScore();
    playerOneMove = null;
    playerTwoSection.hidden = true;
    playerOneSection.hidden = false;
}

playerOneButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectPlayerOneMove(button.dataset.move);
    });
});

playerTwoButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.move);
    });
});

resetButton.addEventListener("click", () => {
    scores = { playerOne: 0, playerTwo: 0 };
    playerOneMove = null;
    playerTwoSection.hidden = true;
    playerOneSection.hidden = false;
    result.textContent = "Player 1, choose your move.";
    updateScore();
});

updateScore();