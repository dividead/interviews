const make = n => {
  let x = []
  for (let i = 0; i < n; i++) {
    x[i] = Array(n).fill(false)
  }
  x[3][3] = true
  x[3][4] = true
  x[3][5] = true
  x[3][6] = true
  return x
}

function find(m) {
  let start
  for (let col = 0; col < 10; col++) {
    for (let i = 0; i < 9; i++) {
      if (!m[col][i] ^ m[col][i + 1]) continue
      if (start) return [start, [col, i]]
      start = [col, i + 1]
    }
  }
}

function find2(m) {
  let x = m.findIndex(row => row.includes(true))
  return [[x, m[x].indexOf(true)], [x, m[x].lastIndexOf(true)]]
}

function find3(m) {
  let y1, y2
  let x = m.findIndex(row => {
    y1 = row.indexOf(true)
    if (y1 != -1) {
      y2 = row.lastIndexOf(true)
      return true
    }
    return false
  })
  return [[x, y1], [x, y2]]
}

console.log(find(make(10)))
console.log(find2(make(10)))
console.log(find3(make(10)))
