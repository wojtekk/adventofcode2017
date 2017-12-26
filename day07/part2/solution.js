//overcomplicated :(
function solution(input, cb) {

  function getDisk(id) {
    return input.filter(d => d[ 0 ] === id).shift();
  }

  const roots = new Set(input.map(r => r[ 0 ]));
  const childrens = new Set(input.map(r => r[ 2 ]).reduce((x, y) => x.concat(y), []));
  const root = Array.from(roots).filter(e => !childrens.has(e))[ 0 ];

  function calculate(id) {
    const disk = getDisk(id);

    if (!disk[ 2 ].length) {
      return [ disk[ 1 ], disk[ 1 ] ];
    }

    const w = disk[ 2 ]
      .map(c => calculate(c, cb))
      .sort((a, b) => a[ 1 ] - b[ 1 ]);

    const l = w.length;
    if (l && w[ 0 ][ 1 ] !== w[ l - 1 ][ 1 ]) {
      if (w[ 0 ][ 1 ] === w[ 1 ][ 1 ]) {
        cb(w[ l - 1 ][ 0 ] - (w[ l - 1 ][ 1 ] - w[ l - 2 ][ 1 ]));
      } else {
        cb(w[ 0 ][ 0 ] + (w[ 0 ][ 1 ] - w[ 1 ][ 1 ]));
      }
    }

    return [ disk[ 1 ], disk[ 1 ] + w.map(c => c[ 1 ]).reduce((a, b) => a + b) ];
  }

  calculate(root);
}

module.exports = solution;
