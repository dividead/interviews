function count(short, long, k) {
  const len = new Set()
  for (let ns = 0; ns <= k; ns++) {
    let nl = k - ns
    let l = ns * short + nl * long
    len.add(l)
  }
  return len
}

console.log(count(10, 15, 5))

// нужно использовать к планок, минимальная возможная длина - к коротких, максимальная к длинных
// [k short, 0 long], [k -1 short, 1 long], ..., [0 short, k long]