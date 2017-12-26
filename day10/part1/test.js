const solution = require('./solution');
const assert = require('assert');

const input = [ 3, 4, 1, 5 ];

const answer = solution(5, input);
assert(answer === 12, answer);
