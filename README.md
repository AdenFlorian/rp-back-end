## Required Software
Requires yarn v1.15.2+ and node.js v10.15.1+

(Would probably work with npm as well if you don't want to install yarn)

## Setup
`yarn install`

## Running
`yarn start`

## Running Tests
`yarn test`

## API Usage
`const deck = new DeckOfCards()` to create a new deck which is populated as a standard un-shuffled 52 card deck.

`const cards = deck.getCards()` to get the internal cards collection.

`deck.shuffle()` to randomize the card positions in the deck.

`const dealtCard = deck.dealOneCard()` to take the top card from the deck. This removes that card from the internal state.
