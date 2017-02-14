'use strict';

module.exports = exports = {};

exports.greeting = function(name) {
  if (arguments.length === 0) throw new Error('no name given');
  console.log(`What's up, ${name}?!`);
  return `hello ${name}`;
};

exports.multipleGreetings = function(termInput) {
  var names = termInput.slice(2).join(' and ');
  console.log(`Hey there ${names}`);
  return `Hey there ${names}`;
};
