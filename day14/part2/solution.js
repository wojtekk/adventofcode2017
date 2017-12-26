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
    .map(n => `00${n.toString(16)}`.substr(-2, 2))
    .join('');
}

function group(bits, x, y) {
  if (!bits[x] || !bits[x][y]) return;
  bits[x][y] = 0;
  group(bits, x - 1, y);
  group(bits, x, y - 1);
  group(bits, x + 1, y);
  group(bits, x, y + 1);
}

function solution(input) {
  const disk = [];
  for (let i = 0; i < 128; i += 1)
    disk.push(`${input}-${i}`);

  const bits = disk
    .map(r => hash(r)
      .split('')
      .reduce((k, l) => k + `0000${parseInt(`0x${l}`).toString(2)}`.substr(-4, 4), '')
      .split('')
      .map(i => parseInt(i)));

  let cntGroups = 0;
  for (let i = 0; i < 128; i += 1)
    for (let j = 0; j < 128; j += 1)
      if (bits[i][j]) {
        cntGroups++;
        group(bits, i, j);
      }

  return cntGroups;
}

module.exports = solution;
