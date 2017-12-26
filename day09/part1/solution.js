function solution(input) {
  const stream = input.split('');

  let garbage = false;
  let level = 0;
  let score = 0;
  let ignoreNext = false;

  stream.forEach(c => {
    if (ignoreNext) {
      ignoreNext = false;
      return;
    }
    switch (c) {
      case '{':
        if (!garbage) {
          level += 1;
          score += level;
        }
        break;
      case '}':
        if (!garbage) {
          level -= 1;
        }
        break;
      case '<':
        garbage = true;
        break;
      case '>':
        garbage = false;
        break;
      case '!':
        ignoreNext = true;
        break;
    }
  });

  return score;
}

module.exports = solution;
