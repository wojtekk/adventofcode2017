const LONG_TERM = 1000;

function solution(points) {
  function add(a, b) {
    return [ a[ 0 ] + b[ 0 ], a[ 1 ] + b[ 1 ], a[ 2 ] + b[ 2 ] ]
  }

  function distance(p) {
    return Math.abs(p[ 0 ]) + Math.abs(p[ 1 ]) + Math.abs(p[ 2 ]);
  }

  let prevClosest = points[ 0 ];
  let counter = 0;
  do {
    let closest = prevClosest;
    for (let i = 0; i < points.length; i += 1) {
      const point = points[ i ];
      point.v = add(point.v, point.a);
      point.p = add(point.p, point.v);
      point.d = distance(point.p);
      if (point.d < closest.d) closest = point;
    }
    if (closest.id === prevClosest.id) counter++;
    prevClosest = closest;
  } while (counter < LONG_TERM);

  return prevClosest.id;
}

module.exports = solution;
