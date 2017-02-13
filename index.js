'use strict';

const welcome = require('./lib/howdy.js');

if (process.argv.length < 2) throw new Error('please enter a name!');

welcome.greeting(process.argv[2]);
