import {expect} from 'chai'
import {sayHello} from './app';

describe('sayHello', () => {
    it('should return hello', () => {
        expect(sayHello()).to.equal('hello R&P!')
    })
})
