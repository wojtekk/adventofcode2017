const solution = require('./solution');
const assert = require('assert');
fs = require('fs');

const input = fs.readFileSync('./../input.test.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => l.split('/').map(c => parseInt(c, 10)));

const answer = solution(input);
assert(answer === 19, answer);
