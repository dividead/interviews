function power(a, n) {
  if (n == 0) return 1
  let x = power(a, Math.floor(n / 2))
  return n % 2 == 0 ? x * x : a * x * x
}

let x = [1, 2, 3, 4, 5]

console.log(x.map(i => power(i, 10)))
console.log(x.map(i => i ** 10))
console.log(x.map(i => power(i, 3)))
console.log(x.map(i => i ** 3))