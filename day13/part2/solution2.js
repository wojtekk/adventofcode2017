function solution(input) {
  root: for (let delay = 0; ; delay += 1) {
    for (let layer of input)
      if ((layer[ 0 ] + delay) % (2 * layer[ 1 ] - 2) == 0) continue root;
    return delay;
  }
}

module.exports = solution;
