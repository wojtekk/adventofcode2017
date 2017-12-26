const solution = require('./solution');
const assert = require('assert');

const tests = [
  ['s','1'],
  ['x','3','4'],
  ['p','e','b'],
];

const answer = solution('abcde'.split(''), tests);
assert(answer === 'baedc', answer);
