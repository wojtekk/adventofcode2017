function solution(input) {
  const connected = new Set();

  function isConnected(prog) {
    connected.add(prog[ 0 ]);
    prog.forEach(d => {
      if (!connected.has(d))
        isConnected(input[ d ]);
    });
  }

  isConnected(input[ 0 ]);

  return connected.size;
}


module.exports = solution;
