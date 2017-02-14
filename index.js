'use strict';

const welcome = require('./lib/howdy.js');

if (process.argv.length < 2) throw new Error('please enter a name!');
// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(process.argv[3]);
console.log(process.argv.length);
if (process.argv.length === 3) welcome.greeting(process.argv[2]);

if (process.argv.length > 3) welcome.multipleGreetings(process.argv);
