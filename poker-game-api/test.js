import CardDeck from "./card-deck.js";

const cardDeck = new CardDeck().shuffle();
while (cardDeck.length > 0) {
  console.log(cardDeck.deal(1));
}
