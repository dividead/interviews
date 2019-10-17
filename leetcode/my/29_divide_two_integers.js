// var divide = function (dividend, divisor) {
//   let sign1 = divisor > 0
//   let sign2 = dividend > 0
//   let did = Math.abs(dividend)
//   let dir = Math.abs(divisor)
//   let n = 0
//   while (did >= dir) {
//     did -= dir
//     n++
//   }
//   n = sign1 ^ sign2 ? -n : n
//   n = n > 2 ** 31 - 1 ? 2 ** 31 - 1 : n
//   n = n < -(2 ** 31) ? -(2 ** 31) : n
//   console.log(n)
//   return n
// };

const divide = (a, b) => {
  let sign1 = a > 0
  let sign2 = b > 0
  let a1 = Math.abs(a)
  let b1 = Math.abs(b)
  let x = div(a1, b1, 1)
  console.log(x)
}
// broken
const div = (a, b, c) => {
  let x = a - b
  let b2 = b << 1
  console.log({ a, b, b2, c })
  if (x < 0) return 0
  if (x == b2) return c + c
  if (x > b2) {
    return c + c + div(x, b2, c + c)
  }
  return 1 + div(x, b, 1)
}

divide(10, 3)
divide(15, 3)
divide(7, -3)
// divide(-2147483648, 1)
