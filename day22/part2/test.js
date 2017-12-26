const solution = require('./solution');
const assert = require('assert');
const fs = require('fs');

const map = fs.readFileSync('./../input.test.txt', 'ascii')
  .trim()
  .split('\n')
  .map(r => r.split(''));

const answer = solution(map, 100);
assert(answer === 26, answer);

// const answer = solution(map, 10000000);
// assert(answer === 2511944, answer);
