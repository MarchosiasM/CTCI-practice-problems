class Card {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
    this.value = `${this.number} ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.suits = ['\u2660', '\u2663', '\u2665', '\u2666'];
    this.numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.newDeck();
  }
  clear() {
    while (this.cards.length > 0) {
      cards.pop();
    }
  }

  shuffle() {
    this.cards.sort(() => Math.random() > 0.5 ? 1 : -1);
  }

  newDeck() {
    this.clear();
    this.suits.forEach((suit) => {
      this.numbers.forEach((number) => {
        this.cards.push(new Card(suit, number));
      });
    });
  }
}

class Person {
  constructor() {
    this.hand = [];
  }
  receiveCard(card) {
    this.hand.push(card);
  }
}

class BJDealer extends Person {
  constructor() {
    super();
    this.deck = new Deck();
    console.log(this.deck);
  }

  shuffleCards() {
    this.deck.shuffle();
    this.deck.shuffle();
    this.deck.shuffle();
  }

  dealCard() {
    return this.deck.cards.pop();
  }
}

class BJPlayer extends Person {
  constructor() {
    super();
    this.hand = [];
  }

  receive(card) {
    this.hand.pop(card);
  }

  discardHand() {
    while (this.hand.length > 0) {
      this.hand.pop();
    }
  }
}

class BJTable {
  constructor() {
    this.players = [];
    this.dealer = new BJDealer();
  }

  runGame() {
    const dealer = this.dealer;
    const players = this.players;
    if (this.players.length === 0) {
      console.log('No players on this table');
    } else {
      console.log('start blackjack game!');
      this.dealer.shuffleCards();
      for (let i = 0; i < 2; i += 1) {
        players.forEach((player) => {
          player.receiveCard(dealer.dealCard());
        });
        dealer.receiveCard(dealer.dealCard());
      }
      console.log('dealer hand', dealer.hand.map((card) => card.value));
      players.forEach((player) => {
        console.log('player hand', player.hand.map((card) => card.value));
      });
    }

  }

  join(player) {
    this.players.push(player);
    this.dealer.dealCard(player);
    this.dealer.dealCard(player);
  }
}

/* TEST */
var table = new BJTable();
var eugene = new BJPlayer();
var david = new BJPlayer();
var luis = new BJPlayer();
var eric = new BJPlayer();

table.join(eugene);
table.join(david);
table.join(luis);
table.join(eric);

/* build until dealing of first hand */
table.runGame();