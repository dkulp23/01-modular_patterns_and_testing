'use strict';

module.exports = exports = {};

console.log('process.argv' + process.argv);
console.log('[2]' + process.argv[2]);

exports.greeting = function(name) {
  if (arguments.length === 0) throw new Error('no name given');
  return `hello ${name}`;
};
