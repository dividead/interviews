const a = [4, 1, 2, 1, 1, 2]
const b = [3, 6, 3, 3]
// const x = [1,3]

const sum = a => a.reduce((acc, e) => acc += e, 0)

function pair_switch(a, b) {
  // a - x + y = b - y + x
  // a - b = 2x - 2y
  // (a - b) / 2 = x - y
  const t = (sum(a) - sum(b)) / 2 // t = x - y
  const set = new Set(b)
  for (let x of a) {
    let y = x - t
    if (set.has(y)) {
      return { x, y, t, set }
    }
  }
  return {}
}

console.log(pair_switch(a, b))