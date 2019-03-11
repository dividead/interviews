function count(arr, n) {
  return dp(arr, n, arr.length - 1, {})
}

function dp(arr, n, i, memo = {}) {
  let key = `${n}::${i}`
  if (memo[key]) {
    return memo[key]
  }
  if (n == 0) return 1
  if (n < 0) return 0
  if (i < 0) return 0
  let x = dp(arr, n, i - 1, memo)
  if (n >= arr[i]) {
    x += dp(arr, n - arr[i], i - 1, memo)
  }
  memo[key] = x
  console.log(memo)
  return x
}


console.log(count([2, 4, 6, 10], 16))