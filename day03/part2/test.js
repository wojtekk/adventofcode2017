const solution = require('./solution');
const assert = require('assert');

[
  [ 1, 2 ],
  [ 2, 4 ],
  [ 3, 4 ],
  [ 4, 5 ],
  [ 5, 10 ],
]
  .map(test => assert(solution(test[ 0 ]) === test[ 1 ], test[ 0 ]));
