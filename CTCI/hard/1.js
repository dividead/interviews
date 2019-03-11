function add(a, b) {
  if (b == 0) return a
  let sum = a ^ b
  let curry = (a & b) << 1
  return add(sum, curry)
}

function sub(a, b) {
  if (b == 0) return a
  let m = a ^ b
  let curry = (a & b) >> 1
  return sub(m, curry)
}

console.log(add(256, 1))
console.log(sub(1, 1))
console.log(sub(256, 1))
console.log(0b1110 - 0b0001)
// 1110
// 0001
// 1101