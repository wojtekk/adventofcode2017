function solution(map) {
  const directions = [
    [ 1, 0 ], // 0 v
    [ 0, 1 ], // 1 >
    [ -1, 0 ], // 2 ^
    [ 0, -1 ],  // 3 <
  ];
  const path = [];
  let position = [ 0, map[ 0 ].indexOf('|') ];
  let direction = 0;
  let prevDirection = 0;

  function add(a, b) {
    return [ a[ 0 ] + b[ 0 ], a[ 1 ] + b[ 1 ] ];
  }

  function get(pos) {
    return map[ pos[ 0 ] ] && map[ pos[ 0 ] ][ pos[ 1 ] ] ? map[ pos[ 0 ] ][ pos[ 1 ] ] : ' ';
  }

  function isLetter(char) {
    const code = char.toUpperCase().charCodeAt(0);
    return code >= 65 && code <= 90;
  }

  function canMove(pos, dir) {
    const nextPos = add(pos, directions[ dir ]);
    return get(nextPos).trim() !== '';
  }

  function nextDir(pos, dir) {
    for (let i = 0; i < directions.length; i += 1) {
      const nextDir = (dir + i) % 4;
      if (canMove(pos, nextDir) && nextDir !== oppositDir(dir))
        return nextDir;
    }
    return oppositDir(dir);
  }

  function oppositDir(dir) {
    return (dir + 2) % 4;
  }

  do {
    if (isLetter(get(position)))
      path.push(get(position));
    prevDirection = direction;
    direction = nextDir(position, direction);
    position = add(position, directions[ direction ]);
  } while (prevDirection !== oppositDir(direction));

  return path.join('');
}

module.exports = solution;
