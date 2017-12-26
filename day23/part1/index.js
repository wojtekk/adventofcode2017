fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => l.split(' '))
  .map(r => r.map(c => isNaN(c) ? c : parseInt(c) ));

console.log(solution(input));
