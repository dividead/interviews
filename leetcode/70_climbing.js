var climbStairs = function (n) {
  if (n < 0) return 0
  if (n <= 1) return 1
  let a = 1, b = 2
  for (let i = 2; i < n; i++) {
    let c = b
    b += a
    a = c
  }
  return b
};

const rec = n => {
  if (n < 0) return 0
  if (n <= 1) return 1
  return rec(n - 1) + rec(n - 2)
}

const memo = (n, m = []) => {
  if (n < 0) return 0
  if (n <= 1) return 1
  if (!m[n]) {
    m[n] = memo(n - 1, m) + memo(n - 2, m)
  }
  return m[n]
}

console.log(climbStairs(5))
console.log(rec(5))
console.log(memo(5))
console.log(climbStairs(7))
console.log(rec(7))
console.log(memo(7))
