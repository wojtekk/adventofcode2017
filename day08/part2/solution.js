function test(a, o, b) {
  switch (o) {
    case '>':
      return a > b;
    case '>=':
      return a >= b;
    case '<':
      return a < b;
    case '<=':
      return a <= b;
    case '==':
      return a == b;
    case '!=':
      return a != b;
  }
}

function solution(input) {
  const memory = {};
  let max = 0;

  function get(n) {
    return memory[ n ] || 0;
  }


  function set(n, v) {
    memory[ n ] = v;
    max = Math.max(memory[ n ], max);
  }

  for (let cmd of input)
    if (test(get(cmd[ 3 ]), cmd[ 4 ], cmd[ 5 ]))
      set(cmd[ 0 ], get(cmd[ 0 ]) + (cmd[ 1 ] === 'inc' ? 1 : -1) * cmd[ 2 ]);

  return max;
}

module.exports = solution;
