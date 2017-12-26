const solution = require('./solution');
const assert = require('assert');

const input = [
  [ 'abcde', 'fghij' ],
  [ 'abcde', 'xyz', 'ecdab' ],
  [ 'a', 'ab', 'abc', 'abd', 'abf', 'abj' ],
  [ 'iiii', 'oiii', 'ooii', 'oooi', 'oooo' ],
  [ 'oiii', 'ioii', 'iioi', 'iiio' ],
];

assert(solution(input) === 3, solution(input));
