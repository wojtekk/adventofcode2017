function solution(input) {
  const connected = new Set();

  function isConnected(prog) {
    connected.add(prog[ 0 ]);
    prog.forEach(i => {
      if (!connected.has(i))
        isConnected(input[ i ]);
    });
  }

  let groups = 0;
  input.forEach(prog => {
    if (!connected.has(prog[ 0 ])) {
      groups += 1;
      isConnected(input[ prog[ 0 ] ]);
    }
  });

  return groups;
}

module.exports = solution;
