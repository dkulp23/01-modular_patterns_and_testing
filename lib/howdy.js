'use strict';

module.exports = exports = {};

exports.greeting = function(name) {
  if (arguments.length === 0) throw new Error('no name given');
  return `hello ${name}`;
};
