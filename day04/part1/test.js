const solution = require('./solution');
const assert = require('assert');

const input = [
  [ 'aa', 'bb', 'cc', 'dd', 'ee' ],
  [ 'aa', 'bb', 'cc', 'dd', 'aa' ],
  [ 'aa', 'bb', 'cc', 'dd', 'aaa' ],
];

assert(solution(input) === 2, solution(input));
