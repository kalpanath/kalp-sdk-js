const { expect } = require('chai');
const unit = require('./index');

describe('Test npm', () => {
    it('Should print hello on console', () => {
      const result = unit.hello();
      expect(result).to.be.equal(undefined);
    });
})
