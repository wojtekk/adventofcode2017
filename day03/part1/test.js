const solution = require('./solution');
const assert = require('assert');

[
  [ 1, 0 ],
  [ 12, 3 ],
  [ 23, 2 ],
  [ 1024, 31 ],
]
  .map(test => assert(solution(test[ 0 ]) === test[ 1 ], test[ 0 ]));
