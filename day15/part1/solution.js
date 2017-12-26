function solution(a, b) {
  let counter = 0;
  for (let i = 0; i < 40000000; i += 1) {
    a = (a * 16807) % 2147483647;
    b = (b * 48271) % 2147483647;
    if ((a & 0xffff).toString(2) === (b & 0xffff).toString(2)) counter++;
  }
  return counter;
}

module.exports = solution;
