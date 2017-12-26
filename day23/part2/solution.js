// https://www.reddit.com/r/adventofcode/comments/7lms6p/2017_day_23_solutions/dro1a4j/

function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n); i += 1)
    if (n % i === 0)
      return false;
  return n !== 1;
}

function solution() {
  let b = 109900;
  let c = b + 17000;
  let h = 0;
  for (let i = b; i <= c; i += 17)
    if (!isPrime(i))
      h += 1;
  console.log('Answer:', h);
}

solution();
