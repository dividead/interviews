function ponds(m) {
  const p = []
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m[0].length; y++) {
      if (m[x][y] == 0) {
        p.push(size(m, x, y))
      }
    }
  }
  return p
}

function size(m, r, c) {
  if (r < 0 || r >= m.length || c < 0 || c >= m[r].length || m[r][c] != 0) {
    return 0
  }
  let s = 1
  m[r][c] = -1
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      s += size(m, r + x, c + y)
    }
  }
  return s
}

console.log(ponds([
  [0, 2, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1]]))