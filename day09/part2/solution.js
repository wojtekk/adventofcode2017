function solution(input) {
  const stream = input.split('');

  let garbage = false;
  let count = 0;
  let ignoreNext = false;

  stream.forEach(c => {
    if (ignoreNext) {
      ignoreNext = false;
      return;
    }
    switch (c) {
      case '<':
        if (garbage) {
          count += 1;
        }
        garbage = true;
        break;
      case '>':
        garbage = false;
        break;
      case '!':
        ignoreNext = true;
        break;
      default:
        if (garbage) {
          count += 1;
        }
    }
  });

  return count;
}

module.exports = solution;
