function getSquare(pattern, i, j, size) {
  const square = [];
  for (let k = 0; k < size; k += 1) {
    square[ k ] = pattern[ i * size + k ].slice(j * size, j * size + size);
  }

  return square;
}

function s(arr) {
  return arr.map(r => r.join('')).join('');
}

function rotate(matrix, times) {
  let newMatrix = matrix.map(r => Array.from(r));
  for (let t = 0; t < times; t += 1) {
    newMatrix = newMatrix.reverse();
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < i; j++) {
        let temp = newMatrix[ i ][ j ];
        newMatrix[ i ][ j ] = newMatrix[ j ][ i ];
        newMatrix[ j ][ i ] = temp;
      }
    }
  }
  return newMatrix;
}

function flipH(matrix) {
  let newMatrix = JSON.parse(JSON.stringify(matrix));
  return newMatrix.reverse();
}

function flipV(matrix) {
  return matrix.map(r => r.reverse());
}

const cache = [];

function apply(square, rules) {
  const n = s(square);
  if (cache[ n ]) {
    return cache[ n ];
  }
  for (let u = 0; u < rules.length; u += 1) {
    const rule = rules[ u ];
    if (rule[ 0 ].length !== square.length) continue;
    for (let r = 0; r < 4; r += 1) {
      const rotated = rotate(rule[ 0 ], r);
      if (n == s(rotated) || n === s(flipV(rotated)) || n === s(flipH(rotated))) {
        cache[ n ] = rule[ 1 ];
        return cache[ n ];
      }
    }
  }
}

function paste(res, i, j, square) {
  for (let k = 0; k < square.length; k += 1) {
    res[ i * square.length + k ] = res[ i * square.length + k ] || [];
    res[ i * square.length + k ].splice(j * square.length, 0, ...square[ k ]);
  }
}

function extend(pattern, size, rules) {
  let newPattern = [];
  for (let i = 0; i < pattern.length / size; i += 1) {
    for (let j = 0; j < pattern.length / size; j += 1) {
      const square = getSquare(pattern, i, j, size);
      const newSquare = apply(square, rules);
      paste(newPattern, i, j, newSquare);
    }
  }
  return newPattern;
}

function solution(rules, iterations) {
  let pattern = [ [ '.', '#', '.' ], [ '.', '.', '#' ], [ '#', '#', '#' ] ];
  for (let i = 0; i < iterations; i += 1) {
    console.log('iteration', i, pattern.length);

    if (pattern.length % 2 === 0) {
      pattern = extend(pattern, 2, rules);
    } else if (pattern.length % 3 === 0) {
      pattern = extend(pattern, 3, rules);
    }
  }
  return pattern.map(r => r.filter(c => c === '#').length).reduce((a, b) => a + b);
}

module.exports = solution;
