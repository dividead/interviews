function intervals(arr, index = 0, memo = []) {
  if (index >= arr.length) return 0
  if (!memo[index]) {
    let bestWith = arr[index] + intervals(arr, index + 2)
    let bestWithout = intervals(arr, index + 1)
    memo[index] = Math.max(bestWith, bestWithout)
  }
  return memo[index]
}

function intervals_iter(arr) {
  let one = 0, two = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    let bestWith = arr[i] + two
    let bestWithout = one
    let curr = Math.max(bestWith, bestWithout)
    two = one
    one = curr
  }
  return one
}

const input = [30, 15, 60, 75, 45, 15, 15, 45]

console.log(intervals_iter(input))