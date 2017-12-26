const solution = require('./solution');
const assert = require('assert');

const input = [
  [ 'pbga', 66, [] ],
  [ 'xhth', 57, [] ],
  [ 'ebii', 61, [] ],
  [ 'havc', 66, [] ],
  [ 'ktlj', 57, [] ],
  [ 'fwft', 72, [ 'ktlj', 'cntj', 'xhth' ] ],
  [ 'qoyq', 66, [] ],
  [ 'padx', 45, [ 'pbga', 'havc', 'qoyq' ] ],
  [ 'tknk', 41, [ 'ugml', 'padx', 'fwft' ] ],
  [ 'jptl', 61, [] ],
  [ 'ugml', 68, [ 'gyxo', 'ebii', 'jptl' ] ],
  [ 'gyxo', 61, [] ],
  [ 'cntj', 57, [] ],
];

var done = false;

function cb(answer) {
  if (!done) {
    assert(answer === 60, answer);
    done = true;
  }
}

solution(input, cb);

if (!done) {
  console.error('Something wen wrong');
}
