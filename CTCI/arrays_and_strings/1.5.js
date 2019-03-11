function modifications(a, b) {
  const dst = a.length - b.length
  if (dst == 0) return replace(a, b)
  if (dst == -1) return insert(a, b)
  if (dst == 1) return insert(b, a)
  return false
}

function replace(a, b) {
  let diff = 0
  for (let i in a) {
    if (a[i] != b[i]) diff++
  }
  return diff == 1
}

function insert(a, b) {
  const s = new Set(a.split(''))
  let diff = 0
  for (const c of b.split('')) {
    if (!s.has(c)) diff++
  }
  return diff == 1
}

console.log(modifications("pale", "ple"))
console.log(modifications("pales", "pale"))
console.log(modifications("pale", "bale"))
console.log(modifications("pale", "bake"))