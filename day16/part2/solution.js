function solution(dancers, input) {
  const firstMove = dancers.join('');
  const numOfDances = 1000000000;
  for (let j = 0; j < numOfDances; j += 1) {
    if (j && firstMove === dancers.join('')) j = Math.floor(numOfDances / j) * j;
    input
      .forEach(move => {
        switch (move[ 0 ]) {
          case 's':
            for (let i = 0; i < move[ 1 ]; i += 1) dancers.unshift(dancers.pop());
            break;
          case 'p':
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
  }
  return dancers.join('');
}

module.exports = solution;
