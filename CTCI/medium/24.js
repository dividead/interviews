function find_pair(a, sum) {
  const seen = new Set()
  const pairs = []
  for (let i of a) {
    let k = sum - i
    seen.has(k) ? pairs.push([i, k]) : seen.add(i)
  }
  return pairs
}

const input = [1, 2, 3, 4, 5, 7, 8]

console.log(find_pair(input, 10))