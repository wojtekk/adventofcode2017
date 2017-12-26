function solution(input) {
  const half = input.length / 2;
  return input
    .slice(0, half)
    .filter((e, i) => e === input[ i + half ])
    .reduce((a, b) => a + 2 * b, 0);
}

module.exports = solution;
