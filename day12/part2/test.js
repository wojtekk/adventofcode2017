const solution = require('./solution');
const assert = require('assert');

const tests = [
  [ 0, 2 ],
  [ 1, 1 ],
  [ 2, 0, 3, 4 ],
  [ 3, 2, 4 ],
  [ 4, 2, 3, 6 ],
  [ 5, 6 ],
  [ 6, 4, 5 ],
];

const answer = solution(tests);
assert(answer === 2, answer);
