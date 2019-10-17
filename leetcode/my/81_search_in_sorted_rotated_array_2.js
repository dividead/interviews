var search = function (nums, target) {
  let a = [...nums, ...nums]
  let hi = a.length
  for (let i = 0; i < hi; i++) {
    let x = Math.floor((i + hi) / 2)
    if (a[x] == target) return true
    if (a[x] < target) {
      i = x - 1
    } else {
      hi = x - 1
    }
    console.log({ i, hi })
  }
  return false
};

console.log(search([1, 3], 3))
console.log(search([2, 5, 6, 0, 0, 1, 2], 3))
console.log(search([1, 2, 1], 2))