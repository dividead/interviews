function smallest(a, k) {
  return a.sort((j, k) => j > k).slice(0, k)
}

const input = [4, 4, 1, 7, 9, 3, 4, 80, 10]


console.log(smallest(input, 6))