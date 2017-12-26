fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => l.split(':'))
  .map(r => r.map(c => parseInt(c.trim())));

console.log(solution(input));
