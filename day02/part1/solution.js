module.exports = input => input
  .map(row => row
    .reduce((acc, n) => [ Math.min(n, acc[ 0 ]), Math.max(n, acc[ 1 ]) ], [ row[ 0 ], row[ 0 ] ])
    .reduce((min, max) => max - min)
  )
  .reduce((a, b) => a + b);
