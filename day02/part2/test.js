const solution = require('./solution');
const assert = require('assert');

const test = [
  [ 5, 9, 2, 8 ],
  [ 9, 4, 7, 3 ],
  [ 3, 8, 6, 5 ],
];

assert(solution(test) === 9);
