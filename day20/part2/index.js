const fs = require('fs');
const solution = require('./solution');

let i = 0;
const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => l.match(/p=<([-0-9]+),([-0-9]+),([-0-9]+)>, v=<([-0-9]+),([-0-9]+),([-0-9]+)>, a=<([-0-9]+),([-0-9]+),([-0-9]+)>/))
  .map(r => r.slice(1, 10))
  .map(r => r.map(n => parseInt(n, 10)))
  .map(r => Object.assign({}, {id: i++, p: r.slice(0, 3), v: r.slice(3, 6), a: r.slice(6, 9), d: undefined}));

console.log(solution(input));
