'use strict';

const welcome = require('./lib/howdy.js');

if (process.argv.length > 2) welcome.greeting('Dana');

console.log(process.argv[2]);
