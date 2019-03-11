const flip = bit => 1 ^ bit
const sign = a => flip((a >> 32) & 1)


function max(a, b) {
  const k = sign(a - b)
  const q = flip(k)
  return a * k + b * q
}

console.log(max(1, 2))
console.log(max(5, 200))
console.log(max(1231, 2123)) // broken
console.log(max(12, 2123))