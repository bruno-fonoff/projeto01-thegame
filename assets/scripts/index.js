//=================================>>> <<<=================================\\

const gameBoard = document.getElementById("gameboard"); //linka elemento html ao JS
const player1 = document.getElementById("player1"); //linka elemento html ao JS
const player2 = document.getElementById("player2"); //linka elemento html ao JS

const startBtn = document.getElementById("start"); //linka elemento html ao JS

const gameP1 = new Game(player1);
const gameP2 = new Game(player2);

startBtn.addEventListener("click", () => {
  gameP1.boardGenerator();

  for (let i = 0; i < gameP1.cardsPlayer1.length; i++) {
    gameP1.gameBoard.appendChild(gameP1.cardsPlayer1[i]);
  }
  gameP2.boardGenerator();
  // console.log(gameP1);
  for (let i = 0; i < gameP2.cardsPlayer2.length; i++) {
    gameP2.gameBoard.appendChild(gameP2.cardsPlayer2[i]);
  }
  console.log(player1);
  console.log(player2);

  startBtn.setAttribute("disabled", true);
});
