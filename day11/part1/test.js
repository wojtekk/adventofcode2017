const solution = require('./solution');
const assert = require('assert');

const tests = [
  [['ne', 'ne', 'ne'], 3],
  [['ne', 'ne', 'sw', 'sw'], 0],
  [['ne', 'ne', 's', 's'], 2],
  [['se', 'sw', 'se', 'sw', 'sw'], 3],
];

tests.forEach(test => {
  const answer = solution(test[0]);
  assert(answer === test[1], answer);
});

