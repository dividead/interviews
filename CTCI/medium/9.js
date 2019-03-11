const neg = a => {
  let n = 0
  const sign = a > 0 ? -1 : 1
  while (a != 0) {
    n += sign
    a += sign
  }
  return n
}

const sub = (a, b) => a + neg(b)

const prod = (a, b) => {
  let c = 0
  while (b > 0) {
    c += a
    b = sub(b, 1)
  }
  return c
}

const div = (a, b) => {
  let c = 0
  while (a > 0) {
    c++
    a = sub(a, b)
  }
  return c
}

console.log(prod(2, 2))
console.log(prod(3, 5))
console.log(div(22, 2))
console.log(div(12, 2))
console.log(div(30, 3))
console.log(sub(22, 2))
console.log(sub(12, 2))
console.log(sub(30, 3))