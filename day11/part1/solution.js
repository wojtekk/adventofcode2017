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

function move(pos, dir) {
  return add(pos, directions[dir]);
}

function solution(input) {
  const dest = input.reduce((p, m) => move(p, m), [0, 0, 0]);
  return (Math.abs(dest[0]) + Math.abs(dest[1]) + Math.abs(dest[2])) / 2;
}

module.exports = solution;
