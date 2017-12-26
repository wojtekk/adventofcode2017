fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => l.split('/').map(c => parseInt(c, 10)));

console.log(solution(input));
