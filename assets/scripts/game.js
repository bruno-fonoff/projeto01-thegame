class Game {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.backCard = "./assets/images/back-card.jpg"; //lado de tras da carta
    this.totalCards = [
      //todas cartas
      "./assets/images/charizardvmax.jpg",
      "./assets/images/gyarados.jpg",
      "./assets/images/jolteonvmax.jpg",
      "./assets/images/blastoise.jpg",
      "./assets/images/pikachu.jpg",
      "./assets/images/vaporeon.jpg",
      "./assets/images/ninetales.jpg",
      "./assets/images/flareon.jpg",
      "./assets/images/electrode.jpg",
    ];

    this.drawnCards = []; //cartas embaralhadas

    this.cardsRandom = []; //img criadas no FOR
  }

  boardGenerator() {
    this.drawnCards = this.totalCards.sort(() => Math.random() - 0.5); //algoritmo para embaralhar as cartas

    for (let i = 0; i < this.drawnCards.length; i++) {
      //itera sobre o array de cartas
      const image1 = document.createElement("img"); //cria um elemento IMG e armazena na const image1
      image1.setAttribute("src", this.drawnCards[i]); //"seta" o atributo da img "src" adicionado uma carta ja embaralhada
      this.cardsRandom.push(image1); // faz o push da carta para cardsRandom
      this.cardsPlayer1 = this.cardsRandom.slice(6, 8); //index 7 e 8 do array ja embaralhado e criado as tag img
      this.cardsPlayer2 = this.cardsRandom.slice(0, 2); //index 1 e 2 do array ja embaralhado e criado as tag img
    }

    console.log(this.cardsPlayer1);
  }

  //index 5 e 6 do array

  //   positionGenerator(){
  //     this.cardsPositions = [...this.cards]
  //   }

  flipCard() {}
}
