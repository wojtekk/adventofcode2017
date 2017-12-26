fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('')
  .map(c => parseInt(c));

console.log(solution(input));
