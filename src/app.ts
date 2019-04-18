import {List} from 'immutable'

export const getHello = () => 'hello R&P!'

export enum Suit {
    Clubs = 'Clubs',
    Diamonds = 'Diamonds',
    Hearts = 'Hearts',
    Spades = 'Spades',
}

export enum Rank {
    Ace = 'Ace',
    Two = 'Two',
    Three = 'Three',
    Four = 'Four',
    Five = 'Five',
    Six = 'Six',
    Seven = 'Seven',
    Eight = 'Eight',
    Nine = 'Nine',
    Ten = 'Ten',
    Jack = 'Jack',
    Queen = 'Queen',
    King = 'King',
}

export interface Card {
    suit: Suit
    rank: Rank
}

export type Cards = List<Card>

export class DeckOfCards {
    private _cards: Cards = createCards()

    public getCards(): Cards {
        return this._cards
    }

    public shuffle() {
        let originalCards = this._cards.toJS()
        const shuffledCards = []

        const cardCount = originalCards.length

        for (let i = 0; i < cardCount; i++) {
            const randomIndex = randomRange(0, originalCards.length)
            const valueToMove = originalCards[randomIndex]
            shuffledCards.push(valueToMove)
            originalCards = originalCards.filter(x => x !== valueToMove)
        }

        this._cards = List<Card>(shuffledCards)
    }

    public dealOneCard(): Card | null {
        const cardToDeal = this._cards.last(null)
        this._cards = this._cards.pop()
        return cardToDeal
    }
}

console.log(getHello())

function createCards(): Cards {
    const deck = new Array<Card>()

    Object.keys(Suit).forEach(suit => {
        Object.keys(Rank).forEach(rank => {
            deck.push({
                suit: suit as Suit,
                rank: rank as Rank,
            })
        })
    })

    return List<Card>(deck)
}

function randomRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
