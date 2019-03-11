function change(array, total) {
  return dp(array, 0, total, {})
}

let count = 0

function dp(array, i, total, memo) {
  count++
  let key = `${total}::${i}`
  if (memo[key]) return memo[key]
  if (i > array.length) return 0
  if (total == 0) return 1
  let x = dp(array, i + 1, total, memo)
  if (total >= array[i]) {
    x += dp(array, i, total - array[i], memo)
  }
  memo[key] = x
  return x
}

console.log(change([1, 5, 10, 50, 25], 100), count)
// 1 201
// 2 301 
// 3 436
// 4 456
 // 5 488
 // 6 511
 // 7 515