function fib(n) {
  if (!n) return 0
  let a = 0, b = 1
  while (--n > 0) {
    [a, b] = [b, a + b]
  }
  return b
}

for (let i = 0; i <= 20; i++) {
  console.log(i, fib(i))
}