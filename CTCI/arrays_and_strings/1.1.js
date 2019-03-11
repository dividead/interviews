const bad = "реализуйте алгоритм все ли символы в строке встречаются один раз"
const good = "qwertyuio"
function only_once(str) {
  const seen = new Set()
  for (const s of str) {
    if (seen.has(s)) return false
    seen.add(s)
  }
  return true
}

console.log(only_once(bad))
console.log(only_once(good))

const worse = "запрещены структуры данных"

function without_ds(str) {
  // sort -> n*log(n)
  // compare pairs n
}