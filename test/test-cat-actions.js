var catActions = require('../cat-actions');
var assert = require('assert');

describe('cat actions', function() {
  describe('.scratch()', function() {
    it('when called with couch, should return 😿', function() {
      assert.equal(catActions.scratch('couch'), "😿");
    });
    it('when called with my face, should return 💩', function() {
      assert.equal(catActions.scratch('my face'), "💩");
    });
    it('when called with nothing, should return 🤗', function() {
      assert.equal(catActions.scratch(), "🤗");
    });
    it('when called with dog, should return 🐶', function() {
      assert.equal(catActions.scratch('dog'), "🐶");
    });
    it('when called with grace, should return 🌈', function() {
      assert.equal(catActions.scratch('grace'), "🌈");
    });
  });
});