function solution(input) {
  return input
    .reduce((acc, layer) => acc + layer[ 0 ] * layer[ 1 ] * (layer[ 0 ] % (2 * layer[ 1 ] - 2) == 0 ? 1 : 0), 0);
}

module.exports = solution;
