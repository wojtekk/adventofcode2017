const solution = require('./solution');
const assert = require('assert');

const input = [ 0, 3, 0, 1, -3 ];

const answer = solution(input);

assert(answer === 5, answer);
