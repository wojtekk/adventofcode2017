fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split(',')
  .map(n => parseInt(n, 10));

console.log(solution(256, input));
