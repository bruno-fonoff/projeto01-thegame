const gameBoard = document.getElementById("gameboard");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const startBtn = document.getElementById("start");
const placarPokemon = document.querySelector(".pokemonName");
const pokeName1 = document.querySelectorAll(".pokeName1");
const gameP1 = new Game(player1);

function openModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

function closeModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";
  location.reload();
}

startBtn.addEventListener("click", () => {
  gameP1.boardGenerator();

  for (let i = 0; i < gameP1.cardsPlayer1.length; i++) {
    gameP1.gameBoard.appendChild(gameP1.cardsPlayer1[i]);
  }

  gameP1.boardGeneratorP2();

  for (let i = 0; i < gameP1.cardsPlayer2.length; i++) {
    gameP1.gameBoard.appendChild(gameP1.cardsPlayer2[i]);
  }

  for (let i = 0; i < gameP1.cardsPlayer1.length; i++) {
    gameP1.cardsPlayer1[i].addEventListener(
      "click",
      () => {
        let name = gameP1.battleCardPlayer1[i].name;
        pokeName1[gameP1.round].innerText = name;

        gameP1.cardsPlayer1[i].setAttribute("class", "imageSelect");
        setTimeout(() => {
          gameP1.cardsPlayer1[i].classList.remove("imageSelect");
        }, 2000);

        gameP1.cardsPlayer2[gameP1.round].setAttribute("class", "imageSelect");
        setTimeout(() => {
          gameP1.cardsPlayer2[gameP1.round - 1].classList.remove("imageSelect");
        }, 2000);

        gameP1.flipCard(gameP1.cardsPlayer2[gameP1.round], i);
        gameP1.battle(i);
        gameP1.round++;
        if (gameP1.placarWin === 2) {
          setTimeout(() => {
            openModal("dv-modal");
            return;
          }, 2500);
        }
        if (gameP1.placarLose === 2) {
          setTimeout(() => {
            openModal("dv-modal-lose");
            return;
          }, 2500);
        }
      },
      { once: true }
    );
  }

  startBtn.setAttribute("style", "display: none");
});
