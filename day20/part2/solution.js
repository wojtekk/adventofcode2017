const LONG_TERM = 1000;

function solution(points) {
  function add(a, b) {
    return [ a[ 0 ] + b[ 0 ], a[ 1 ] + b[ 1 ], a[ 2 ] + b[ 2 ] ]
  }

  function id(point) {
    return point.p.join(',');
  }

  let prevLength = points.length;
  let counter = 0;
  do {
    const collisions = {};
    for (let i = 0; i < points.length; i += 1) {
      const point = points[ i ];
      point.v = add(point.v, point.a);
      point.p = add(point.p, point.v);
      const k = id(point);
      collisions[ k ] = collisions[ k ] || [];
      collisions[ k ].push(i);
    }

    points = points.filter(p => collisions[ id(p) ].length === 1);

    if (prevLength === points.length)
      counter += 1;
    else
      counter = 0;
    prevLength = points.length;
  } while (counter < LONG_TERM);

  return points.length;
}

module.exports = solution;
