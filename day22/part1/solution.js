function turnRight(dir) {
  return (dir + 1) % 4;
}

function turnLeft(dir) {
  return (4 + dir - 1) % 4;
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

function infected(map, pos) {
  return get(map, pos) === '#';
}

function change(map, pos) {
  if (infected(map, pos)) {
    set(map, pos, '.');
    return 0;
  } else {
    set(map, pos, '#');
    return 1;
  }
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
    if (infected(map, pos))
      dir = turnRight(dir);
    else
      dir = turnLeft(dir);
    infectedCounter += change(map, pos);
    pos = add(pos, directions[ dir ]);
  }
  console.log(map.map(r => r.join('')).join("\n"));
  return infectedCounter;
}

module.exports = solution;
