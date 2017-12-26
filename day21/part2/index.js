const fs = require('fs');
const solution = require('./solution');

const rules = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => l.split('=>'))
  .map(r => r.map(i => i.trim().split('/').map(j => j.split(''))));

console.log(solution(rules, 18));
