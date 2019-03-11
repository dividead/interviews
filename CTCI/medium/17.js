const input = [2, -8, 3, -2, 4, -10]

function biggest_sum(a) {
  let max = 0
  let sum = 0
  const len = a.length
  for (let i = 0; i < len; i++) {
    sum += a[i]
    if (max < sum) {
      max = sum
    } else if (sum < 0) {
      sum = 0
    }
  }
  return max
}

console.log(biggest_sum(input))

