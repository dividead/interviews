function compress(str) {
  let count = 0
  const result = []
  for (let i = 0; i < str.length; i++) {
    count++
    if (i + 1 >= str.length || str[i] != str[i + 1]) {
      result.push(str[i])
      result.push(count)
      count = 0
    }
  }
  const res = result.join('')
  return res < str ? res : str
}

console.log(compress('aabcccccaaa'))