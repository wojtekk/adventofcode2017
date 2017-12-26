function strength(b) {
  return b.reduce((a, c) => a + c[ 0 ] + c[ 1 ], 0);
}

function canBeConnected(a, b) {
  return a[ 1 ] === b[ 0 ];
}

function reverse(a) {
  return a.concat().reverse();
}

function removeByIndex(a, c) {
  return a.slice(0, c).concat(a.slice(c + 1));
}

function last(a) {
  return a[ a.length - 1 ];
}

function max(a, b) {
  if (a.length > b.length)
    return a;
  else if (a.length < b.length)
    return b;
  else
    return strength(a) > strength(b) ? a : b
}

function buildBridges(path, connections) {
  let m = [];
  for (let c = 0, next; c < connections.length; c += 1, next = undefined) {
    if (canBeConnected(last(path), connections[ c ]))
      next = connections[ c ];
    else if (canBeConnected(last(path), reverse(connections[ c ])))
      next = reverse(connections[ c ]);
    if (next)
      m = max(m, buildBridges(path.concat([ next ]), removeByIndex(connections, c)));
  }

  return max(m, path);
}

function solution(connections) {
  return strength(buildBridges([ [ 0, 0 ] ], connections));
}

module.exports = solution;
