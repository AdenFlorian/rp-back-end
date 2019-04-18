export const sayHello = () => 'hello R&P!'

enum Suit {
    Clubs = 'Clubs',
    Diamonds = 'Diamonds',
    Hearts = 'Hearts',
    Spades = 'Spades',
}

enum Rank {
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

interface Card {
    suit: Suit
    rank: Rank
}

export class DeckOfCards {
    public readonly _cards: Readonly<Card[]> = createCards()

    public shuffle() {

    }
}

console.log(sayHello())

const myDeck = new DeckOfCards()

console.log(myDeck._cards)
console.log(myDeck._cards.length)

function createCards(): Readonly<Card[]> {
    const deck = new Array<Card>()

    Object.keys(Suit).forEach(suit => {
        Object.keys(Rank).forEach(rank => {
            deck.push({
                suit: suit as Suit,
                rank: rank as Rank,
            })
        })
    })

    return Object.freeze(deck)
}
