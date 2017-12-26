const solution = require('./solution');
const assert = require('assert');

const tests = [
  [ 'set', 'a', 1 ],
  [ 'set', 'b', 2 ],
  [ 'set', 'c', 0 ],
  [ 'jnz', 'c', 2 ],
  [ 'sub', 'b', 'a' ],
  [ 'jnz', 'b', 1 ],
  [ 'mul', 'a', 1 ],
];

const answer = solution(tests);
assert(answer === 1, answer);
