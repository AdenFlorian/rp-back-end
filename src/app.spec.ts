import {expect} from 'chai'
import {getHello, DeckOfCards, Card, Suit, Rank} from './app';
import {List} from 'immutable';

const defaultCards = List<Card>([
    {suit: Suit.Clubs, rank: Rank.Ace},
    {suit: Suit.Clubs, rank: Rank.Two},
    {suit: Suit.Clubs, rank: Rank.Three},
    {suit: Suit.Clubs, rank: Rank.Four},
    {suit: Suit.Clubs, rank: Rank.Five},
    {suit: Suit.Clubs, rank: Rank.Six},
    {suit: Suit.Clubs, rank: Rank.Seven},
    {suit: Suit.Clubs, rank: Rank.Eight},
    {suit: Suit.Clubs, rank: Rank.Nine},
    {suit: Suit.Clubs, rank: Rank.Ten},
    {suit: Suit.Clubs, rank: Rank.Jack},
    {suit: Suit.Clubs, rank: Rank.Queen},
    {suit: Suit.Clubs, rank: Rank.King},
    {suit: Suit.Diamonds, rank: Rank.Ace},
    {suit: Suit.Diamonds, rank: Rank.Two},
    {suit: Suit.Diamonds, rank: Rank.Three},
    {suit: Suit.Diamonds, rank: Rank.Four},
    {suit: Suit.Diamonds, rank: Rank.Five},
    {suit: Suit.Diamonds, rank: Rank.Six},
    {suit: Suit.Diamonds, rank: Rank.Seven},
    {suit: Suit.Diamonds, rank: Rank.Eight},
    {suit: Suit.Diamonds, rank: Rank.Nine},
    {suit: Suit.Diamonds, rank: Rank.Ten},
    {suit: Suit.Diamonds, rank: Rank.Jack},
    {suit: Suit.Diamonds, rank: Rank.Queen},
    {suit: Suit.Diamonds, rank: Rank.King},
    {suit: Suit.Hearts, rank: Rank.Ace},
    {suit: Suit.Hearts, rank: Rank.Two},
    {suit: Suit.Hearts, rank: Rank.Three},
    {suit: Suit.Hearts, rank: Rank.Four},
    {suit: Suit.Hearts, rank: Rank.Five},
    {suit: Suit.Hearts, rank: Rank.Six},
    {suit: Suit.Hearts, rank: Rank.Seven},
    {suit: Suit.Hearts, rank: Rank.Eight},
    {suit: Suit.Hearts, rank: Rank.Nine},
    {suit: Suit.Hearts, rank: Rank.Ten},
    {suit: Suit.Hearts, rank: Rank.Jack},
    {suit: Suit.Hearts, rank: Rank.Queen},
    {suit: Suit.Hearts, rank: Rank.King},
    {suit: Suit.Spades, rank: Rank.Ace},
    {suit: Suit.Spades, rank: Rank.Two},
    {suit: Suit.Spades, rank: Rank.Three},
    {suit: Suit.Spades, rank: Rank.Four},
    {suit: Suit.Spades, rank: Rank.Five},
    {suit: Suit.Spades, rank: Rank.Six},
    {suit: Suit.Spades, rank: Rank.Seven},
    {suit: Suit.Spades, rank: Rank.Eight},
    {suit: Suit.Spades, rank: Rank.Nine},
    {suit: Suit.Spades, rank: Rank.Ten},
    {suit: Suit.Spades, rank: Rank.Jack},
    {suit: Suit.Spades, rank: Rank.Queen},
    {suit: Suit.Spades, rank: Rank.King},
])

describe('getHello', () => {
    it('should return hello', () => {
        expect(getHello()).to.equal('hello R&P!')
    })
})

describe('DeckOfCards', () => {
    describe('constructor', () => {
        it('should correctly create a deck of 52 cards', () => {
            const newDeck = new DeckOfCards()

            expect(newDeck.getCards().count()).to.equal(52)
            expect(newDeck.getCards().toJS()).to.deep.equal(defaultCards.toJS())
        })
    })
    describe('shuffle', () => {
        it('should put the cards in a different order than before', () => {
            const deck = new DeckOfCards()

            deck.shuffle()

            const shuffledCards = deck.getCards().toJS()

            expect(shuffledCards).to.not.deep.equal(defaultCards.toJS())

            deck.shuffle()

            const shuffledCards2 = deck.getCards().toJS()

            expect(shuffledCards2).to.not.deep.equal(defaultCards.toJS())
            expect(shuffledCards2).to.not.deep.equal(shuffledCards)
        })
    })
    describe('dealOneCard', () => {
        it('should remove card from top of deck and return it', () => {
            const deck = new DeckOfCards()

            const dealtCard = deck.dealOneCard()

            expect(dealtCard).to.deep.equal(defaultCards.last())
            expect(deck.getCards().count()).to.equal(51)
        })
        it('should return null if no cards', () => {
            const deck = new DeckOfCards()

            for (let i = 0; i <= 53; i++) {
                deck.dealOneCard()
            }

            const dealtCard = deck.dealOneCard()

            expect(dealtCard).to.be.null
            expect(deck.getCards().count()).to.equal(0)
        })
    })
})
