const solution = require('./solution');
const assert = require('assert');

[
  [ [ 1, 1, 2, 2 ], 3 ],
  [ [ 1, 1, 1, 1 ], 4 ],
  [ [ 1, 2, 3, 4 ], 0 ],
  [ [ 9, 1, 2, 1, 2, 1, 2, 9 ], 9 ],
]
  .map(test => assert(solution(test[ 0 ]) === test[ 1 ], test[ 0 ]));
