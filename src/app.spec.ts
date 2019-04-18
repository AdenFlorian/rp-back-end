import {expect} from 'chai'
import {sayHello} from './app';

describe('sayHello', () => {
    it('should return hello', () => {
        expect(sayHello()).to.equal('hello R&P!')
    })
})

describe('DeckOfCards', () => {
    describe('shuffle', () => {
        it('should put the cards in a different order than before', () => {
            // TODO
            //expect(sayHello()).to.equal('hello R&P!')
        })
    })
})
