class Game {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.backCard = "./assets/images/back-card.jpg"; //lado de tras da carta
    this.totalCards = [
      //todas cartas
      new Cards("Charizard", "Fire", "./assets/images/charizardvmax.jpg"),
      new Cards("Gyarados", "Water", "./assets/images/gyarados.jpg"),
      new Cards("Jolteon", "Eletric", "./assets/images/jolteonvmax.jpg"),
      new Cards("Blastoise", "Water", "./assets/images/blastoise.jpg"),
      new Cards("Pikachu", "Eletric", "./assets/images/pikachu.jpg"),
      new Cards("Vaporeon", "Water", "./assets/images/vaporeon.jpg"),
      new Cards("Ninetales", "Fire", "./assets/images/ninetales.jpg"),
      new Cards("Flareon", "Fire", "./assets/images/flareon.jpg"),
      new Cards("Electrode", "Eletric", "./assets/images/electrode.jpg"),
    ];

    this.drawnCards = []; //cartas embaralhadas

    this.cardsRandom = []; //img criadas no FOR

    this.cardsCover = []; //cartas desviradas p2
  }

  boardGenerator() {
    this.drawnCards = this.totalCards.sort(() => Math.random() - 0.5); //algoritmo para embaralhar as cartas

    for (let i = 0; i < this.drawnCards.length; i++) {
      //itera sobre o array de cartas
      const image1 = document.createElement("img"); //cria um elemento IMG e armazena na const image1
      image1.setAttribute("src", this.drawnCards[i].src); //"seta" o atributo da img "src" adicionado uma carta ja embaralhada
      this.cardsRandom.push(image1); // faz o push da carta para cardsRandom
      this.cardsPlayer1 = this.cardsRandom.slice(5, 8); //index 7 e 8 do array ja embaralhado e criado as tag img
      // this.cardsPlayer2 = this.cardsRandom.slice(0, 3); //index 1 e 2 do array ja embaralhado e criado as tag img
    }
  }

  boardGeneratorP2() {
    this.drawnCards = this.totalCards.sort(() => Math.random() - 0.5); //algoritmo para embaralhar as cartas

    for (let i = 0; i < this.drawnCards.length; i++) {
      const image = document.createElement("img");
      image.setAttribute("src", this.backCard);
      this.cardsCover.push(image);
      this.cardsPlayer2 = this.cardsCover.slice(0, 3);
    }
  }

  flipCard(image, index) {
    image.setAttribute("src", this.drawnCards[index].src);
  }
}
