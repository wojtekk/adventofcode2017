function solution(banks) {
  const memory = [];
  while (!memory.includes(banks.join(''))) {
    memory.push(banks.join(''));
    let i = banks.indexOf(Math.max(...banks));
    let b = banks[ i ];
    banks[ i ] = 0;
    while (b-- > 0) banks[ ++i % banks.length ]++; // ;)
  }
  return memory.length;
}

module.exports = solution;
