function solution(blueprint) {
  const memory = new Map();
  let state = blueprint.start;
  let pos = 0;
  for (let i = 0; i < blueprint.steps; i += 1) {
    const s = blueprint.states[ state ][ memory.get(pos) || 0 ];
    memory.set(pos, s.write);
    pos += s.move;
    state = s.next;
  }

  return Array.from(memory.values()).filter(a => a === 1).length;
}

module.exports = solution;
