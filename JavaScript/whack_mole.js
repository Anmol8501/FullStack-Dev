let game = document.getElementById("game");
        let scoreText = document.getElementById("score");
        let timeText = document.getElementById("time");
        let startButton = document.getElementById("start");

        let score = 0;
        let time = 30;

        let moleTimer;
        let gameTimer;

        for (let i = 0; i < 9; i++) {

            let cell = document.createElement("div");

            cell.classList.add("cell");

            game.appendChild(cell);
        }

        startButton.addEventListener("click", function () {

            score = 0;
            time = 30;

            scoreText.innerText = score;
            timeText.innerText = time;

            startButton.disabled = true;
            moleTimer = setInterval(function () {

                let cells = document.querySelectorAll(".cell");

                for (let i = 0; i < cells.length; i++) {

                    cells[i].classList.remove("mole");
                }

                let random = Math.floor(Math.random() * 9);

                cells[random].classList.toggle("mole");

            }, 800);

            gameTimer = setInterval(function () {

                time--;
                timeText.innerText = time;
                if (time === 0) {

                    clearInterval(moleTimer);
                    clearInterval(gameTimer);

                    let cells = document.querySelectorAll(".cell");

                    for (let i = 0; i < cells.length; i++) {
                        cells[i].classList.remove("mole");
                    }

                    alert("Game Over! Score: " + score);

                    startButton.disabled = false;
                }

            }, 1000);

        });

        game.addEventListener("click", function (event) {

            if (event.target.classList.contains("mole")) {
                score++;
                scoreText.innerText = score;
                event.target.classList.remove("mole");
            }

        });