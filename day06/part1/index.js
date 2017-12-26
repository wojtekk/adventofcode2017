fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split(/[ \t]+/)
  .map(i => parseInt(i));

console.log(solution(input));
