const solution = require('./solution');
const assert = require('assert');
const fs = require('fs');

const test = fs.readFileSync('./../input.test.txt', 'ascii')
  .split('\n')
  .map(l => l.split(''));

const answer = solution(test);
assert(answer === 'ABCDEF', answer);
