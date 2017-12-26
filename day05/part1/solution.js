function solution(message) {
  let step = 0;
  for (let pos = 0, offset = 0; pos + offset < message.length; step++) {
    offset = message[ pos += offset ]++; // ;)
  }
  return step;
}

module.exports = solution;
