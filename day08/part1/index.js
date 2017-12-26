fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .trim()
  .split('\n')
  .map(l => /([a-z]+) (inc|dec) ([-0-9]+) if ([a-z]+) ([<>=!]+) ([-0-9]+)/ig.exec(l))
  .map(r => [].concat(r.slice(1, 3), [ parseInt(r[ 3 ], 10) ], r.slice(4, 6), [ parseInt(r[ 6 ], 10) ]));

console.log(solution(input));
