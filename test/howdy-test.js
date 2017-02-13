'use strict';

const assert = require('assert');
const howdy = require('../lib/howdy.js')

describe('Howdy Module', function() {
  describe('#greeting', function() {
    it(`should return hello ${process.argv[2]}`, function() {
      var printout = howdy.greeting(process.argv[2]);
      assert.ok(printout === `hello ${process.argv[2]}`, 'not equal to hello Dana');
    });
  });
});
