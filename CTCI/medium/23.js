function rand5() {
  return Math.floor(Math.random() * 5)
}

function rand7() {
  while (true) {
    let x = 5 * rand5() + rand5() // 0 - 24
    if (x < 21) {
      return x % 7
    }
  }
}

let i = 0
const m = {}

while (i++ < 1000000) {
  const x = rand7()
  m[x] = m[x] ? m[x] + 1 : 1
}

console.log(m)