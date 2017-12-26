function solution(banks) {
  const memory = [];
  const occurrences = [];
  while (occurrences.length < 2) {
    memory.push(banks.join(''));
    let i = banks.indexOf(Math.max(...banks));
    let b = banks[ i ];
    banks[ i ] = 0;
    while (b-- > 0) banks[ ++i % banks.length ]++;
    if (memory.includes(banks.join(''), occurrences[ 0 ] ? occurrences[ 0 ] : 0)) {
      occurrences.push(memory.length);
    }
  }
  return occurrences[ 1 ] - occurrences[ 0 ];
}

module.exports = solution;
