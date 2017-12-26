const moves = [
  [ 1, 0 ],
  [ 0, -1 ],
  [ -1, 0 ],
  [ 0, 1 ],
];

function solution(input) {
  for (let r = 1, n = 1, point = [ 0, 0 ]; n <= input; r++) {
    for (let move of moves) {
      do {
        if (n === input) return Math.abs(point[ 0 ]) + Math.abs(point[ 1 ]);
        n++;
        point = [ point[ 0 ] + move[ 0 ], point[ 1 ] + move[ 1 ] ];
      } while (move[ 0 ] && Math.abs(point[ 0 ]) < r || move[ 1 ] && Math.abs(point[ 1 ]) < r);
    }
  }
};

module.exports = solution;
