function solution(input) {
  const roots = new Set(input.map(r => r[ 0 ]));
  const childrens = new Set(input.map(r => r[ 2 ]).reduce((x, y) => x.concat(y), []));
  return Array.from(roots).filter(e => !childrens.has(e))[ 0 ];
}

module.exports = solution;
