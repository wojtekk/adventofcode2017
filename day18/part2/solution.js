function* app(id, instructions) {
  const buffer = {p: id};

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
        yield [ 'snd', get(cmd[ 1 ]) ];
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
        set(cmd[ 1 ], yield [ 'rcv' ]);
        break;
      case 'jgz':
        if (get(cmd[ 1 ]) > 0) i += get(cmd[ 2 ]) - 1;
        break;
    }
  }
}

function solution(instructions) {
  let cntLock = 0;
  const cntSnd = [ 0, 0 ];
  const apps = [ app(0, instructions), app(1, instructions) ];
  const buffer = [ [], [] ];
  const wait = [ false, false ];

  while (cntLock < 8) {
    for (let i = 0, result; i < apps.length; i += 1) {
      if (wait[ i ] && !buffer[ i ].length) {
        cntLock += 1;
        continue;
      }

      result = apps[ i ].next(wait[ i ] ? buffer[ i ].shift() : null);
      cntLock = 0;

      switch (result.value[ 0 ]) {
        case 'rcv':
          wait[ i ] = true;
          break;
        case 'snd':
          buffer[ i ? 0 : 1 ].push(result.value[ 1 ]);
          cntSnd[ i ] += 1;
          wait[ i ] = false;
          break;
      }
    }
  }

  return cntSnd[ 1 ];
}


module.exports = solution;
