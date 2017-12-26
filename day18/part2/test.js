const solution = require('./solution');
const assert = require('assert');

const tests = [
  [ 'snd', 1 ],
  [ 'snd', 2 ],
  [ 'snd', 'p' ],
  [ 'rcv', 'a' ],
  [ 'rcv', 'b' ],
  [ 'rcv', 'c' ],
  [ 'rcv', 'd' ],
];

const answer = solution(tests);
assert(answer === 3, answer);
