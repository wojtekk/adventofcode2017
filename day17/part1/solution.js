function solution(steps) {
  let buffer = [ 0 ];
  let pos = 0;
  for (let i = 1; i <= 2017; i += 1) {
    pos = (pos + 1 + steps) % buffer.length;
    buffer.splice(pos, 0, i)
  }
  return buffer[ (pos + 1) % buffer.length ];
}

module.exports = solution;
