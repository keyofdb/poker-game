import { Readable } from 'stream';
import cardRanks from './card-ranks.js';
import cardSuits from './card-suits.js';

export default class CardDeck {
    #cards = [];

    #generateNewDeck() {

    }

    constructor() {
        this.#cards = Object.keys(cardSuits).reduce((cards, cardSuit) => [
            ...cards, 
            ...Object.keys(cardRanks).map((cardRank) => ({ suit: cardSuit, rank: cardRank })),
        ], []);
    }

    shuffle() {
        this.#cards.sort(() => Math.random() - 0.5);
    }

    take(count) {
        if (count <= 0) {
            throw new Error('Invalid count requested.')
        }

        if (count > this.#cards.length) {
            throw new Error('Not enough cards left in the deck.')
        }

        return count === 1 
            ? this.#cards.shift()
            : this.#cards.splice(0, count);
    }

    get cardsLeft() {
        return this.#cards.length;
    }

    toJSON() {
        return this.#cards;
    }
}