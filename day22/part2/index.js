const fs = require('fs');
const solution = require('./solution');

const map = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(r => r.split(''));

console.log(solution(map, 10000000));
