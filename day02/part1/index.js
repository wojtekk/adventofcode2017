fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(line => line.split(/[ \t]+/).map(c => parseInt(c)));

console.log(solution(input));
