const solution = require('./solution');
const assert = require('assert');

const input = [
  [ 'b', 'inc', 5, 'a', '>', 1 ],
  [ 'a', 'inc', 1, 'b', '<', 5 ],
  [ 'c', 'dec', -10, 'a', '>=', 1 ],
  [ 'c', 'inc', -20, 'c', '==', 10 ],
];

const answer = solution(input);

assert(answer === 10, answer);
