import CardDeck from './card-deck';
import PokerHandStatuses from './poker-hand-statuses';

export default class PokerHand {
  #cardDeck;
  #players;
  #communityCards;
  #status;

  constructor(players) {
    this.#status = PokerHandStatuses.PENDING;
  
    this.#cardDeck = new CardDeck();
    this.#players = players;
    this.#communityCards = [];
  }

  promptForBlinds() {
   this. 
  }

  dealPlayers() {
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
}