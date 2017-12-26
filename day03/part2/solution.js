const moves = [
  [ 1, 0 ],
  [ 0, -1 ],
  [ -1, 0 ],
  [ 0, 1 ],
];

const neighbours = [
  [ 1, 1 ],
  [ 0, 1 ],
  [ 1, 0 ],
  [ 0, -1 ],
  [ -1, 0 ],
  [ -1, -1 ],
  [ -1, 1 ],
  [ 1, -1 ],
];

function solution(input) {
  for (let r = 1, n = 1, point = [ 0, 0 ], cache = {0: {0: 1}}; n <= input; r++) {
    for (let move of moves) {
      do {
        if (n > input) return n;

        point = [ point[ 0 ] + move[ 0 ], point[ 1 ] + move[ 1 ] ];

        n = neighbours
          .map(n => (cache[ point[ 0 ] + n[ 0 ] ] || [])[ point[ 1 ] + n[ 1 ] ] || 0)
          .reduce((a, b) => a + b);

        cache[ point[ 0 ] ] = cache[ point[ 0 ] ] || [];
        cache[ point[ 0 ] ][ point[ 1 ] ] = n;
      } while (move[ 0 ] && Math.abs(point[ 0 ]) < r || move[ 1 ] && Math.abs(point[ 1 ]) < r);
    }
  }
};

module.exports = solution;
