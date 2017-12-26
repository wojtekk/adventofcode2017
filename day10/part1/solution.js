function solution(n, input) {
  let pos = 0;
  let skip = 0;

  const arr = [];
  for (let i = 0; i < n; i += 1) arr.push(i);

  input.forEach(len => {
    for (let i = 0; i < Math.floor(len / 2); i += 1) {
      const y = (pos + i) % arr.length;
      const x = (pos + len - 1 - i) % arr.length;
      const a = arr[ y ];
      arr[ y ] = arr[ x ];
      arr[ x ] = a;
    }
    pos += len + skip;
    skip += 1;
  });

  return arr[ 0 ] * arr[ 1 ];
}

module.exports = solution;
