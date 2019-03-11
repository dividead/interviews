function mergesort(a) {
  let l = a.length
  if (l == 1) return a
  let mid = Math.ceil(l / 2)
  return merge(mergesort(a.slice(0, mid)), mergesort(a.slice(mid)))
}

function merge(a, b) {
  const c = Array(a.length + b.length)
  let ai = 0, bi = 0
  while (ai + bi < c.length) {
    if (!a[ai]) {
      c[ai + bi] = b[bi++]
    } else if (!b[bi]) {
      c[ai + bi] = a[ai++]
    } else {
      c[ai + bi] = a[ai] > b[bi] ? b[bi++] : a[ai++]
    }
  }
  return c
}

console.log(mergesort([3, 6, 2, 7, 9, 1, 6, 9, 8]))