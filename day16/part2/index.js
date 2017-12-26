fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split(',')
  .map(l => [l[0]].concat(l.substr(1).split('/')));

console.log('Answer:', solution('abcdefghijklmnop'.split(''), input));
