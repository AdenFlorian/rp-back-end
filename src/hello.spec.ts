import {expect} from 'chai'
import {getHello} from './hello'

describe('getHello', () => {
    it('should return hello', () => {
        expect(getHello()).to.equal('hello R&P!')
    })
})
