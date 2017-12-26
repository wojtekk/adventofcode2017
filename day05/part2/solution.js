function solution(message) {
  let step = 0;
  for (let pos = 0, offset = 0; pos + offset < message.length; step++) {
    offset = message[ pos += offset ];
    message[ pos ] += offset >= 3 ? -1 : 1;
  }
  return step;
}

module.exports = solution;
