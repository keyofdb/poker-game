import CardDeck from './card-deck';

export default class PokerHand {
  #cardDeck;
  #players;
  #communityCards;

  constructor(players) {
    this.#cardDeck = new CardDeck();
    this.#players = players;
    this.#communityCards = [];
  }

  dealPlayerCards() {
    this.#players.forEach((player) => {
      player.cards.push(...this.#cardDeck.deal(2));
    });
  }

  dealFlop() {
    this.#communityCards.push(...this.#cardDeck.deal(3));
  }

  dealTurn() {
    this.#communityCards.push(this.#cardDeck.deal(1));
  }

  dealRiver() {
    this.#communityCards.push(this.#cardDeck.deal(1));
  }

  start() {
    
  }

  
}