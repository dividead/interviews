const a1 = [1, 2, 3, 9]
const a2 = [1, 2, 4, 4]

function pair_with_sum(a, sum) {
  const seen = new Set()
  for (let i of a) { // O(n)
    const diff = sum - i
    if (seen.has(diff)) return true // O(1)
    seen.add(i) // O(1)
  }
  return false
}

console.log(pair_with_sum(a1, 8))
console.log(pair_with_sum(a2, 8))
