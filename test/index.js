var assert = require('assert')
const x = require('../index.js')


describe('pad-left should add chars to left', () => {
    it('adds 0s', () => {
        assert.equal(x.padLeft('asdf', 5, 0), "0asdf")
        assert.equal(x.padLeft('asdf', 5), " asdf")
        assert.equal(x.padLeft('asdf', 5, "a"), "sasdf")
    });
});
