function solution(steps, iterations = 50000000) {
  let pos = 0;
  let second = null;
  for (let i = 1; i <= iterations; i += 1) {
    pos = (pos + 1 + steps) % i;
    if (pos === 0) second = i;
  }

  return second;
}

module.exports = solution;
