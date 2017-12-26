function solution(instructions) {
  let lastSound;
  const buffer = {};

  function get(c) {
    return isNaN(c) ? buffer[ c ] : c;
  }

  function set(a, b) {
    buffer[ a ] = b;
  }

  for (let i = 0; i < instructions.length; i += 1) {
    const cmd = instructions[ i ];
    switch (cmd[ 0 ]) {
      case 'snd':
        lastSound = get(cmd[ 1 ]);
        break;
      case 'set':
        set(cmd[ 1 ], get(cmd[ 2 ]));
        break;
      case 'add':
        set(cmd[ 1 ], get(cmd[ 1 ]) + get(cmd[ 2 ]));
        break;
      case 'mul':
        set(cmd[ 1 ], get(cmd[ 1 ]) * get(cmd[ 2 ]));
        break;
      case 'mod':
        set(cmd[ 1 ], get(cmd[ 1 ]) % get(cmd[ 2 ]));
        break;
      case 'rcv':
        if (get(cmd[ 1 ])) return lastSound;
        break;
      case 'jgz':
        if (get(cmd[ 1 ]) > 0) i += get(cmd[ 2 ]) - 1;
        break;
    }
  }
}

module.exports = solution;
