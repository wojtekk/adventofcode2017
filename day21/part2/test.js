const solution = require('./solution');
const assert = require('assert');
const fs = require('fs');

const rules = fs.readFileSync('./../input.test.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => l.split('=>'))
  .map(r => r.map(i => i.trim().split('/').map(j => j.split(''))));

const answer = solution(rules, 2);
assert(answer === 12, answer);
