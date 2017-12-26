function* calculate(a, b, c, d) {
  while (true) {
    a = (a * b) % c;
    if (a % d === 0) {
      yield a;
    }
  }
}

function solution(a, b) {
  let counter = 0;
  ga = calculate(a, 16807, 2147483647, 4);
  gb = calculate(b, 48271, 2147483647, 8);
  for (let i = 0; i < 5000000; i += 1) {
    a = ga.next();
    b = gb.next();
    if ((a.value & 0xffff).toString(2) === (b.value & 0xffff).toString(2)) counter++;
  }

  return counter;
}

module.exports = solution;
