let game = document.getElementById("game");

let cards = [
    "🍎", "🍎",
    "🍌", "🍌",
    "🍇", "🍇",
    "🍊", "🍊",
    "🍉", "🍉",
    "🍓", "🍓",
    "🥝", "🥝",
    "🍍", "🍍"
];

cards.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let lock = false;

for (let i = 0; i < cards.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerText = "?";
    card.dataset.value = cards[i];
    game.appendChild(card);
}


game.addEventListener("click", function(event) {
    if (!event.target.classList.contains("card")) {
        return;
    }

    if (lock) {
        return;
    }

    if (event.target.classList.contains("open")) {
        return;
    }

    event.target.classList.add("open");
    event.target.innerText = event.target.dataset.value;

    if (firstCard === null) {
        firstCard = event.target;
        return;
    }

    secondCard = event.target;

    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard = null;
        secondCard = null;

    } else {
        lock = true;
        setTimeout(function() {

            firstCard.classList.remove("open");
            secondCard.classList.remove("open");

            firstCard.innerText = "?";
            secondCard.innerText = "?";

            firstCard = null;
            secondCard = null;

            lock = false;
        }, 1000);
    }

});