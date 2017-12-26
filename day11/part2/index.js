fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split(',');

console.log(solution(input));
