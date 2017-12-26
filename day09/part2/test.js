const solution = require('./solution');
const assert = require('assert');

const input = [
  [ '<>', 0 ],
  [ '<random characters>', 17 ],
  [ '<<<<>}', 3 ],
  [ '<{!>}>', 2 ],
  [ '<!!>', 0 ],
  [ '<!!!>>', 0 ],
  [ '<{o"i!a,<{i<a>', 10 ],
];

input.forEach(test => {
  const answer = solution(test[ 0 ]);
  assert(answer === test[ 1 ], `${answer} != ${test[ 1 ]} group: ${test[ 0 ]}`);
});
