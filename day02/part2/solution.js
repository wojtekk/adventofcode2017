function solution(input) {
  return input
    .map(row => {
        for (let i = 0; i < row.length - 1; i++) {
          for (let j = i + 1; j < row.length; j++) {
            if (row[ i ] % row[ j ] === 0) {
              return row[ i ] / row[ j ];
            } else if (row[ j ] % row[ i ] === 0) {
              return row[ j ] / row[ i ];
            }
          }
        }
      }
    )
    .reduce((a, b) => a + b);
}

module.exports = solution;
