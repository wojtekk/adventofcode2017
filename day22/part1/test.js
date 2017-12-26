const solution = require('./solution');
const assert = require('assert');
const fs = require('fs');

const map = fs.readFileSync('./../input.test.txt', 'ascii')
  .trim()
  .split('\n')
  .map(r => r.split(''));

const answer = solution(map, 70);
assert(answer === 41, answer);
