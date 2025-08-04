import CardDeck from './card-deck';
import PokerHandStatuses from './poker-hand-statuses';

export default class PokerHand {
  #cardDeck;
  #participants;
  #communityCards;
  #mainPot;
  #status;

  constructor(participants) {
    this.#status = PokerHandStatuses.PENDING;
  
    this.#cardDeck = new CardDeck();
    this.#participants = participants;
    this.#communityCards = [];
  }

  dealParticipants() {
    this.#participants.forEach((participant) => {
      participant.cards.push(...this.#cardDeck.deal(2));
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