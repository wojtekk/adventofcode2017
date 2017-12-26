const fs = require('fs');
const solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .split('\n')
  .map(l => l.split(''));

console.log(solution(input));
