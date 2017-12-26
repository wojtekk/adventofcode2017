fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii')
  .split([ '\n' ])
  .map(l => l.replace(/([^a-z0-9 ]*)/gi, '').replace(/([ ]+)/gi, ' ').trim().split(' '))
  .map(r => [ r[ 0 ], parseInt(r[ 1 ]), r.slice(2) ]);

console.log(solution(input));
