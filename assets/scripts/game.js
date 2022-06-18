const winTable = document.querySelectorAll(".winTable");
const pokeName2 = document.querySelectorAll(".pokeName2");

class Game {
  constructor(gameBoard) {
    this.round = 0;
    this.gameBoard = gameBoard;
    this.backCard = "./assets/images/back-card.jpg";
    this.totalCards = [
      new Cards("Mr. Mime", "Psychic", "./assets/images/mrmime.jpg", 150),
      new Cards("Eevee", "Normal", "./assets/images/eevee.jpg", 160),
      new Cards("Articuno", "Water", "./assets/images/articuno.jpg", 170),
      new Cards("Tauros", "Normal", "./assets/images/tauros.jpg", 180),
      new Cards("Pikachu", "Eletric", "./assets/images/pikachu.jpg", 190),
      new Cards("Ninetales", "Fire", "./assets/images/ninetales.jpg", 200),
      new Cards("Flareon", "Fire", "./assets/images/flareon.jpg", 210),
      new Cards("Venusaur", "Grass", "./assets/images/venusaur.jpg", 220),
      new Cards("Melmetal", "Metal", "./assets/images/melmetalgx.jpg", 220),
      new Cards("Gyarados", "Water", "./assets/images/gyarados.jpg", 230),
      new Cards("Blastoise", "Water", "./assets/images/blastoise.jpg", 240),
      new Cards("Dragonite", "Dragon", "./assets/images/dragonite.jpg", 250),
      new Cards("Leafeon", "Grass", "./assets/images/leafeon.jpg", 260),
      new Cards("Jolteon", "Eletric", "./assets/images/jolteonvmax.jpg", 300),
      new Cards("Mew", "Psychic", "./assets/images/mew.jpg", 310),
      new Cards("Vaporeon", "Water", "./assets/images/vaporeon.jpg", 320),
      new Cards("Charizard", "Fire", "./assets/images/charizardvmax.jpg", 330),
      new Cards("Snorlax", "Normal", "./assets/images/snorlax.jpg", 340),
    ];

    this.drawnCards = [];

    this.cardsRandom = [];

    this.cardsCover = [];

    this.battleCardPlayer1 = [];

    this.battleCardPlayer2 = [];

    this.cardsPlayer1 = [];

    this.cardsPlayer2 = [];

    this.placarWin = 0;
    this.placarLose = 0;
  }

  boardGenerator() {
    this.drawnCards = this.totalCards.sort(() => Math.random() - 0.5);

    for (let i = 0; i < this.drawnCards.length; i++) {
      const image1 = document.createElement("img");
      image1.setAttribute("src", this.drawnCards[i].src);
      this.cardsRandom.push(image1);
      this.cardsPlayer1 = this.cardsRandom.slice(5, 8);
    }
    this.battleCardPlayer1 = this.drawnCards.slice(5, 8);
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
    pokeName2[this.round].innerText = this.player2Choise.name;

    if (this.player1Choise.strength > this.player2Choise.strength) {
      console.log(`${this.player1Choise.name} WIN!!!`);
      winTable[this.round].innerText = this.player1Choise.name;

      this.placarWin++;
    } else if (this.player1Choise.strength === this.player2Choise.strength) {
      console.log(`The Battle Was Hard! There Are NO Winners! `);
      winTable[this.round].innerText = "'Tech Draw'";

      this.placarWin++;
      this.placarLose++;
    } else {
      console.log(`${this.player1Choise.name} LOSE!!!`);
      this.placarLose++;
      winTable[this.round].innerText = this.player2Choise.name;
    }
  }
}
