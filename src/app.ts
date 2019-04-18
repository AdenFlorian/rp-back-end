import {getHello} from './hello'
import {DeckOfCards} from './card-types'

console.log(getHello())

const deck = new DeckOfCards()

console.log('cards: ', deck.getCards().toJS())

deck.shuffle()

console.log('shuffled cards: ', deck.getCards().toJS())

console.log('dealtCard: ', deck.dealOneCard())
