import CardDeck from "./card-deck.js";

const cardDeck = new CardDeck();
cardDeck.shuffle();
while (cardDeck.cardsLeft > 0) {
  console.log(cardDeck.take(1));
}
