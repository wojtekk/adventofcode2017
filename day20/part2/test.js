const solution = require('./solution');
const assert = require('assert');

const test = [
  {id: 0, p: [ -6, 0, 0 ], v: [ 3, 0, 0 ], a: [ 0, 0, 0 ]},
  {id: 1, p: [ -4, 0, 0 ], v: [ 2, 0, 0 ], a: [ 0, 0, 0 ]},
  {id: 2, p: [ -2, 0, 0 ], v: [ 1, 0, 0 ], a: [ 0, 0, 0 ]},
  {id: 3, p: [ 3, 0, 0 ], v: [ 1, 0, 0 ], a: [ 0, 0, 0 ]},
];

const answer = solution(test);
assert(answer === 1, answer);
