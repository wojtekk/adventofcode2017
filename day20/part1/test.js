const solution = require('./solution');
const assert = require('assert');

const test = [
  {id: 0, p: [ 3, 0, 0 ], v: [ 2, 0, 0 ], a: [ -1, 0, 0 ]},
  {id: 1, p: [ 4, 0, 0 ], v: [ 0, 0, 0 ], a: [ -2, 0, 0 ]},
];

const answer = solution(test);
assert(answer === 0, answer);
