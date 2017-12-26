function solution(instructions) {
  let counter = 0;
  const buffer = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0};

  function get(c) {
    return isNaN(c) ? buffer[ c ] : c;
  }

  function set(a, b) {
    buffer[ a ] = b;
  }

  for (let i = 0; i < instructions.length; i += 1) {
    const cmd = instructions[ i ];
    switch (cmd[ 0 ]) {
      case 'set':
        set(cmd[ 1 ], get(cmd[ 2 ]));
        break;
      case 'sub':
        set(cmd[ 1 ], get(cmd[ 1 ]) - get(cmd[ 2 ]));
        break;
      case 'mul':
        counter += 1;
        set(cmd[ 1 ], get(cmd[ 1 ]) * get(cmd[ 2 ]));
        break;
      case 'jnz':
        if (get(cmd[ 1 ])) i += get(cmd[ 2 ]) - 1;
        break;
    }
  }

  return counter;
}

module.exports = solution;
