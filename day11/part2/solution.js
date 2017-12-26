const directions = {
  se: [1, -1, 0],
  ne: [1, 0, -1],
  n: [0, 1, -1],
  nw: [-1, 1, 0],
  sw: [-1, 0, 1],
  s: [0, -1, +1],
};

function add(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function move(cube, dir) {
  return add(cube, directions[dir]);
}

function distance(a,b) {
  return (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2])) / 2;
}

function solution(input) {
  let maxDistance = 0;
  input.reduce((p, m) => {
    maxDistance = Math.max(maxDistance, distance([0,0,0], p));
    return move(p, m);
  }, [0, 0, 0]);

  return maxDistance;
}

module.exports = solution;
