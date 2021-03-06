function hash(input) {
  const n = 256;
  let pos = 0;
  let skip = 0;
  const lengths = input.split('')
    .map(c => c.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);

  const arr = [];
  for (let i = 0; i < n; i += 1) arr.push(i);

  for (let r = 0; r < 64; r += 1)
    lengths.forEach(len => {
      for (let i = 0; i < Math.floor(len / 2); i += 1) {
        const y = (pos + i) % arr.length;
        const x = (pos + len - 1 - i) % arr.length;
        const a = arr[y];
        arr[y] = arr[x];
        arr[x] = a;
      }
      pos += len + skip;
      skip += 1;
    });

  const hash = [];
  for (let i = 0; i < 16; i += 1) hash.push(i);
  return hash.map(g =>
    arr.slice(16 * g, 16 * (g + 1))
      .reduce((a, b) => a ^ b)
  )
    .map(n => `00${n.toString(16)}`.substr(-2,2))
    .join('');
}

function solution(input) {
  const disk = [];
  for (let i = 0; i < 128; i += 1)
    disk.push(`${input}-${i}`);

  return disk
    .reduce((a, b) => a + hash(b)
      .split('')
      .reduce((k, l) => k + parseInt(`0x${l}`).toString(2), 0)
      .match(/1/g).length, 0);
}

module.exports = solution;
