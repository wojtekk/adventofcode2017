const solution = require('./solution');
const assert = require('assert');

const tests = [
  [0, 3],
  [1, 2],
  [4, 4],
  [6, 4],
];

const answer = solution(tests);
assert(answer === 24, answer);
