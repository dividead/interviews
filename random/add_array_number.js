const input = Array(4).fill(0).map(() => Math.round(Math.random() * 9))

function addOne(a) {
  console.log(a)
  let i = a.length - 1
  for (; i >= 0; i--) {
    const next = a[i] + 1
    if (next < 10) {
      a[i] = next
      return a
    }
    a[i] = next % 10
  }
  return i == 0 ? a : [1, ...a]
}

console.log(addOne([9, 9, 9, 9]))