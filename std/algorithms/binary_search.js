function binary_search(key, a) {
  let low = 0
  let hi = a.length - 1
  while (low <= hi) {
    let mid = low + ((hi - low) >> 2)
    if (key < a[mid]) hi = mid - 1
    else if (key > a[mid]) low = mid + 1
    else return mid
  }
  return -1
}

function binary_search_rec(key, a) {
  function rec(key, a, low, hi) {
    if (low > hi) return -1
    let mid = low + ((hi - low) >> 2)
    if (key < a[mid]) return rec(key, a, low, mid - 1)
    if (key > a[mid]) return rec(key, a, mid + 1, hi)
    return mid
  }
  return rec(key, a, 0, a.length - 1)
}

for (let i = 0; i < 10; i++) {
  console.log(binary_search_rec(i, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
}
