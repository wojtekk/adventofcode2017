const solution = require('./solution');
const assert = require('assert');

const blueprint = {
  start: 'A',
  steps: 6,
  states:
    {
      A: [           // Begin in state A.
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //    - Write the value 1.
          move: 1,   //    - Move one slot to the right.
          next: 'B', //    - Continue with state B.
        },
        {
          check: 1,  //   If the current value is 1:
          write: 0,  //    - Write the value 0.
          move: -1,  //    - Move one slot to the left.
          next: 'B', //    - Continue with state B.
        },
      ],
      B: [           // In state B:
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //    - Write the value 1.
          move: -1,  //    - Move one slot to the left.
          next: 'A', //    - Continue with state A.
        },
        {
          check: 1,  //  If the current value is 1:
          write: 1,  //   - Write the value 1.
          move: 1,   //   - Move one slot to the right.
          next: 'A', //   - Continue with state A.
        },
      ],
    },
};

const answer = solution(blueprint);
assert(answer === 3, answer);
