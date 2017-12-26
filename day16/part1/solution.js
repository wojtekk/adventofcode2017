function solution(dancers, input) {
  input
    .forEach(move => {
      switch (move[ 0 ]) {
        case 's':
          for (let i = 0; i < move[ 1 ]; i += 1) dancers.unshift(dancers.pop());
          break;
          const a = dancers.indexOf(move[ 1 ]);
          const b = dancers.indexOf(move[ 2 ]);
          dancers[ a ] = move[ 2 ];
          dancers[ b ] = move[ 1 ];
          break;
        case 'x':
          const t = dancers[ move[ 1 ] ];
          dancers[ move[ 1 ] ] = dancers[ move[ 2 ] ];
          dancers[ move[ 2 ] ] = t;
          break;
      }
    });
  return dancers.join('');
}

module.exports = solution;
