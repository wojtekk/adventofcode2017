const solution = require('./solution');
const assert = require('assert');

const tests = [
  [ 'set', 'a', 1 ],
  [ 'add', 'a', 2 ],
  [ 'mul', 'a', 'a' ],
  [ 'mod', 'a', 5 ],
  [ 'snd', 'a' ],
  [ 'set', 'a', 0 ],
  [ 'rcv', 'a' ],
  [ 'jgz', 'a', -1 ],
  [ 'set', 'a', 1 ],
  [ 'jgz', 'a', -2 ],
];

const answer = solution(tests);
assert(answer === 4, answer);
