const str1 = "для двух строк определите является ли одна перестановкой другой"

function pali(s1, s2) {
  // compare length
  // sort -> compare = n*log(n)
  const store = {}
  for (let s of s1) {
    if (store[s]) {
      store[s]++
    } else {
      store[s] = 1
    }
  }

  for (let s of s2) {
    if (store[s]) {
      store[s]--
    } else {
      return false
    }
  }

  return Object.values(store).every(e => e == 0)
}

console.log(pali('qqqww', 'wqwqq'))
console.log(pali('qqaww', 'wqwqq'))