const placarPokemon = document.querySelector(".pokemonName");
const pokeName1 = document.querySelectorAll(".pokeName1");
const rodada2 = document.querySelectorAll(".rodada2");

//=================================>>> <<<=================================\\

const gameBoard = document.getElementById("gameboard"); //linka elemento html ao JS
const player1 = document.getElementById("player1"); //linka elemento html ao JS
const player2 = document.getElementById("player2"); //linka elemento html ao JS
const poke1player1 = document.getElementById("poke1player1");
const startBtn = document.getElementById("start"); //linka elemento html ao JS

const gameP1 = new Game(player1);

//=================================>>> EVENTO AO CLICAR NO BOTAO "START"  <<<=================================\\

startBtn.addEventListener("click", () => {
  gameP1.boardGenerator();

  for (let i = 0; i < gameP1.cardsPlayer1.length; i++) {
    gameP1.gameBoard.appendChild(gameP1.cardsPlayer1[i]);
    //===============================teste tabela
    let name = gameP1.battleCardPlayer1[i].name;
    pokeName1[i].innerText = name;
  }

  gameP1.boardGeneratorP2();

  for (let i = 0; i < gameP1.cardsPlayer2.length; i++) {
    gameP1.gameBoard.appendChild(gameP1.cardsPlayer2[i]);
  }

  for (let i = 0; i < gameP1.cardsPlayer1.length; i++) {
    gameP1.cardsPlayer1[i].addEventListener("click", () => {
      //========== IMAGEM CRESCER CLICADA!
      gameP1.cardsPlayer1[i].setAttribute("class", "imageSelect");
      setTimeout(() => {
        gameP1.cardsPlayer1[i].classList.remove("imageSelect");
      }, 500);

      //================================================================
      //========== IMAGEM CRESCER CPU!

      gameP1.cardsPlayer2[gameP1.round].setAttribute("class", "imageSelect");
      setTimeout(() => {
        gameP1.cardsPlayer2[gameP1.round - 1].classList.remove("imageSelect");
      }, 500);
      //=====================================================
      console.log(gameP1.cardsPlayer2[gameP1.round]);
      gameP1.flipCard(gameP1.cardsPlayer2[gameP1.round], i);
      gameP1.battle(i);
      gameP1.round++;
      if (gameP1.placarWin === 2) {
        setTimeout(() => {
          alert("CONGRATULATIONS! YOU WIN!");
          return location.reload();
        }, 2500);
      }
      if (gameP1.placarLose === 2) {
        setTimeout(() => {
          alert("YOU LOSE!!!");
          return location.reload();
        }, 2500);
      }
    });
  }

  startBtn.setAttribute("style", "display: none");

  // startBtn.setAttribute("disabled", true);

  //=================================>>>   <<<=================================\\
});

//======================================================= teste de tabela

// console.log(placarPokemon);

// console.log(rodada2);
