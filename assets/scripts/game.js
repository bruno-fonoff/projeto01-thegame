const winTable = document.querySelectorAll(".winTable");
const pokeName2 = document.querySelectorAll(".pokeName2");

class Game {
  constructor(gameBoard) {
    this.round = 0;
    this.gameBoard = gameBoard;
    this.backCard = "./assets/images/back-card.jpg"; //lado de tras da carta
    this.totalCards = [
      new Cards("Charizard", "Fire", "./assets/images/charizardvmax.jpg", 330),
      new Cards("Gyarados", "Water", "./assets/images/gyarados.jpg", 230),
      new Cards("Jolteon", "Eletric", "./assets/images/jolteonvmax.jpg", 300),
      new Cards("Blastoise", "Water", "./assets/images/blastoise.jpg", 240),
      new Cards("Pikachu", "Eletric", "./assets/images/pikachu.jpg", 190),
      new Cards("Vaporeon", "Water", "./assets/images/vaporeon.jpg", 210),
      new Cards("Ninetales", "Fire", "./assets/images/ninetales.jpg", 200),
      new Cards("Flareon", "Fire", "./assets/images/flareon.jpg", 210),
      new Cards("Electrode", "Eletric", "./assets/images/electrode.jpg", 190),
    ];

    this.drawnCards = []; //cartas embaralhadas

    this.cardsRandom = []; //img criadas no FOR

    this.cardsCover = []; //cartas desviradas Player 2

    this.battleCardPlayer1 = []; //array de objetos

    this.battleCardPlayer2 = []; //array de objetos

    this.cardsPlayer1 = []; //array de imagens

    this.cardsPlayer2 = []; //array de imagens

    this.placarWin = 0;
    this.placarLose = 0;
  }

  boardGenerator() {
    this.drawnCards = this.totalCards.sort(() => Math.random() - 0.5); //algoritmo para embaralhar as cartas

    for (let i = 0; i < this.drawnCards.length; i++) {
      const image1 = document.createElement("img"); //cria um elemento IMG e armazena na const image1
      image1.setAttribute("src", this.drawnCards[i].src); //"seta" o atributo da img "src" adicionado uma carta ja embaralhada
      this.cardsRandom.push(image1); // faz o push da carta para cardsRandom
      this.cardsPlayer1 = this.cardsRandom.slice(5, 8); //index 7 e 8 do array ja embaralhado e criado as tag img
    }
    this.battleCardPlayer1 = this.drawnCards.slice(5, 8); //array com cartas completas, embaralhadas e selecionadas pra mao do player 1

    // console.log(this.battleCardPlayer1);
  }

  boardGeneratorP2() {
    this.drawnCards = this.totalCards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < this.drawnCards.length; i++) {
      const image = document.createElement("img");
      image.setAttribute("src", this.backCard);
      this.cardsCover.push(image);
      this.cardsPlayer2 = this.cardsCover.slice(0, 3);
    }
  }

  flipCard(image, index) {
    image.setAttribute("src", this.drawnCards[index].src);
    this.battleCardPlayer2.push(this.drawnCards[index]);
  }

  battle(index) {
    this.player1Choise = this.battleCardPlayer1[index];
    this.player2Choise = this.battleCardPlayer2[this.round];
    pokeName2[this.round].innerText = this.player2Choise.name; //=====>>> Insere nome Pokemon CPU no placar;

    if (this.player1Choise.strength > this.player2Choise.strength) {
      console.log(`${this.player1Choise.name} WIN!!!`);
      winTable[this.round].innerText = this.player1Choise.name;

      this.placarWin++;
      console.log(this.placarWin);
    }
    // if (
    //   (this.player1Choise.strength == this.player2Choise.strength &&
    //     this.player1Choise.type === "Water" &&
    //     this.player2Choise.type === "Fire") ||
    //   (this.player1Choise.type === "Eletric" &&
    //     this.player2Choise.type === "Water") ||
    //   (this.player1Choise.type === "Fire" &&
    //     this.player2Choise.type === "Eletric")
    // ) {
    //
    //  this.placarWin++;
    //   winTable[this.round].innerText = this.player1Choise.name;
    //   console.log("desempate por tipo");

    //   console.log(`${this.placarWin}WIN`);
    // }
    // else if (
    //   (this.player1Choise.strength === this.player2Choise.strength &&
    //     this.player1Choise.type === "Fire" &&
    //     this.player2Choise.type === "Water") ||
    //   (this.player1Choise.type === "Water" &&
    //     this.player2Choise.type === "Eletric") ||
    //   (this.player1Choise.type === "Eletric" &&
    //     this.player2Choise.type === "Fire")
    // ) {
    //
    //  this.placarLose++;
    //   winTable[this.round].innerText = this.player2Choise.name;
    //   console.log("desempate por tipo");

    //   console.log(`${this.placarWin}WIN`);
    // }
    else {
      console.log(`${this.player1Choise.name} LOSE!!!`);
      this.placarLose++;
      winTable[this.round].innerText = this.player2Choise.name;
      // console.log(this.placarLose);
    }
  }
}
