import CardDeck from './card-deck';

export default class PokerHand {
  #cardDeck;
  #players;
  #actions;
  #communityCards;

  constructor(players, dealerButton) {
    this.#cardDeck = new CardDeck();
    this.#players = players;
    this.#communityCards = [];
  }

  dealPlayerCards() {

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
}