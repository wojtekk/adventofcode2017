function solution(input) {
  let delay = 0;
  for (let steps = 1; steps; delay += 1)
    steps = input
      .reduce((acc, layer) =>
        acc + (layer[ 0 ] + delay) * layer[ 1 ] * ((layer[ 0 ] + delay) % (2 * layer[ 1 ] - 2) == 0 ? 1 : 0), 0);
  return delay - 1;
}

module.exports = solution;
