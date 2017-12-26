function turnRight(dir) {
  return (dir + 1) % 4;
}

function turnLeft(dir) {
  return (4 + dir - 1) % 4;
}

function reverse(dir) {
  return (dir + 2) % 4;
}

function add(a, b) {
  return [ a[ 0 ] + b[ 0 ], a[ 1 ] + b[ 1 ] ];
}

function get(map, pos) {
  return map[ pos[ 0 ] ] && map[ pos[ 0 ] ][ pos[ 1 ] ] ? map[ pos[ 0 ] ][ pos[ 1 ] ] : '.';
}

function set(map, pos, val) {
  map[ pos[ 0 ] ] = map[ pos[ 0 ] ] || [];
  map[ pos[ 0 ] ][ pos[ 1 ] ] = val;
}

function solution(map, iterations) {
  const directions = [
    [ -1, 0 ],
    [ 0, 1 ],
    [ 1, 0 ],
    [ 0, -1 ],
  ];
  let pos = [ Math.floor(map.length / 2), Math.floor(map.length / 2) ];
  let dir = 0;
  let infectedCounter = 0;
  for (let i = 0; i < iterations; i += 1) {
    switch (get(map, pos)) {
      case '.':
        dir = turnLeft(dir);
        set(map, pos, 'W');
        break;
      case '#':
        dir = turnRight(dir);
        set(map, pos, 'F');
        break;
      case 'F':
        set(map, pos, '.');
        dir = reverse(dir);
        break;
      case 'W':
        infectedCounter += 1;
        set(map, pos, '#');
        break;
    }

    pos = add(pos, directions[ dir ]);
  }
  return infectedCounter;
}

module.exports = solution;
