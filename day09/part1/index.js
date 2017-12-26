fs = require('fs');
solution = require('./solution');

const input = fs.readFileSync('./../input.txt', 'ascii').trim();

console.log(solution(input));
