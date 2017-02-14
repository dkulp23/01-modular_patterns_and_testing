'use strict';

const assert = require('assert');
const howdy = require('../lib/howdy.js')

describe('Howdy Module', function() {
  describe('#greeting', function() {
    it(`should return hello ${process.argv[2]}`, function() {
      var printout = howdy.greeting(process.argv[2]);
      assert.ok(printout === `hello ${process.argv[2]}`, 'incorrect result');
    });
  });
  describe('#multipleGreetings', function() {
    it(`should return all names entered in command line`, function() {
      var printout = howdy.multipleGreetings(process.argv);
      assert.ok(printout === `Hey there ${process.argv.slice(2).join(' and ')}`, 'not quite right');
    });
  });
});
