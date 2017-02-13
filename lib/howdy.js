'use strict';

module.exports = exports = {};

exports.greeting = function(name) {
  if (arguments.length === 0) throw new Error('no name given');
  console.log(`What's up, ${name}?!`);
  return `hello ${name}`;
};

exports.multipleGreetings = function(processARGV) {
  // if (arguments.length < 4) throw new Error('use greeting function');
  var names = processARGV.slice(2);
  console.log(names);
}
