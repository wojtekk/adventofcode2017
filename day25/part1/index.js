const solution = require('./solution');

const blueprint = {
  start: 'A',
  steps: 12134527,
  states:
    {
      A: [           // In state A:
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //     - Write the value 1.
          move: 1,   //     - Move one slot to the right.
          next: 'B', //     - Continue with state B.
        },
        {
          check: 1,  //   If the current value is 1:
          write: 0,  //     - Write the value 0.
          move: -1,  //     - Move one slot to the left.
          next: 'C', //     - Continue with state C.
        },
      ],
      B: [           // In state B:
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //     - Write the value 1.
          move: -1,  //     - Move one slot to the left.
          next: 'A', //     - Continue with state A.
        },
        {
          check: 1,  //   If the current value is 1:
          write: 1,  //     - Write the value 1.
          move: 1,   //     - Move one slot to the right.
          next: 'C', //     - Continue with state C.
        },
      ],
      C: [           // In state C:
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //     - Write the value 1.
          move: 1,   //     - Move one slot to the right.
          next: 'A', //     - Continue with state A.
        },
        {
          check: 1,  //   If the current value is 1:
          write: 0,  //     - Write the value 0.
          move: -1,  //     - Move one slot to the left.
          next: 'D', //     - Continue with state D.
        },
      ],
      D: [           // In state D:
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //     - Write the value 1.
          move: -1,  //     - Move one slot to the left.
          next: 'E', //     - Continue with state E.
        },
        {
          check: 1,  //  If the current value is 1:
          write: 1,  //    - Write the value 1.
          move: -1,  //    - Move one slot to the left.
          next: 'C', //    - Continue with state C.
        },
      ],
      E: [           // In state E:
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //     - Write the value 1.
          move: 1,   //     - Move one slot to the right.
          next: 'F', //     - Continue with state F.
        },
        {
          check: 1,  //   If the current value is 1:
          write: 1,  //     - Write the value 1.
          move: 1,   //     - Move one slot to the right.
          next: 'A', //     - Continue with state A.
        },
      ],
      F: [           // In state F:
        {
          check: 0,  //   If the current value is 0:
          write: 1,  //     - Write the value 1.
          move: 1,   //     - Move one slot to the right.
          next: 'A', //     - Continue with state A.
        },
        {
          check: 1,  //   If the current value is 1:
          write: 1,  //     - Write the value 1.
          move: 1,   //     - Move one slot to the right.
          next: 'E', //     - Continue with state E.
        },
      ]
    },
};

console.log(solution(blueprint));
