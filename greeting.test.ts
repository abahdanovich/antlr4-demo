import { greet } from './greeting';
import { expect } from 'chai';


describe('parser', () => {
    it('should parse name', () => {
        expect(greet('hello world')).to.equal('world');
    });
});