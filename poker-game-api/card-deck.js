import { Readable } from 'stream';
import Card from './card.js';
import cardRanks from './card-ranks.js';
import cardSuits from './card-suits.js';

export default class CardDeck {
    #cards = [];

    constructor() {
        this.#cards = Object.keys(cardSuits).reduce((cards, cardSuit) => [
            ...cards, 
            ...Object.keys(cardRanks).map((cardRank) => new Card(cardSuit, cardRank)),
        ], []);
    }

    shuffle() {
        for (let i = this.#cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
        }
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