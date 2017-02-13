'use strict';

const assert = require('assert');
const howdy = require('../lib/howdy.js')

describe('Howdy Module', function() {
  describe('#greeting', function() {
    it('should return hello Dana', function() {
      var printout = howdy.greeting('Dana');
      assert.ok(printout === 'hello Dana', 'not equal to hello Dana');
    });
  });
});
