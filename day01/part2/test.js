const solution = require('./solution');
const assert = require('assert');

[
  [ [ 1, 2, 1, 2 ], 6 ],
  [ [ 1, 2, 2, 1 ], 0 ],
  [ [ 1, 2, 3, 4, 2, 5 ], 4 ],
  [ [ 1, 2, 3, 1, 2, 3 ], 12 ],
  [ [ 1, 2, 1, 3, 1, 4, 1, 5 ], 4 ],
]
  .map(test => assert(solution(test[ 0 ]) === test[ 1 ], solution(test[ 0 ])));
