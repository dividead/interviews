function max2(list) {
  const count = {}
  for (let [birth, death] of list) {
    for (let year = birth; year <= death; year++) {
      if (count[year]) {
        count[year]++
      } else {
        count[year] = 1
      }
    }
  }
  let m = Object.entries(count).sort((a, b) => a[1] - b[1]).pop()
  return m[0]
}

function max(list, min, max) {
  const delta = Array(max - min + 2).fill(0)
  for (let [birth, death] of list) {
    const b = birth - min
    delta[b]++
    const d = death - min + 1
    delta[d]--
  }
  let maxY = 0, maxA = 0, curA = 0
  for (let i in delta) {
    curA += delta[i]
    if (curA > maxA) {
      maxA = curA
      maxY = +i
    }
  }
  return [maxA, min + maxY]
}

console.log(max([[1900, 2000], [1940, 1965], [1960, 1999], [1964, 1965]], 1900, 2000))

// если есть два массива, то стоит попытаться обрабатывать их пареллельно -> O(n)
// и отсортировать, если поможет -> O(n*logn)