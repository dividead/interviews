const input = "2 * 3 + 5 / 6 * 3 + 15".split(' ') // 23.5
const input2 = "2 - 6 - 7 * 8 / 2 + 5".split(' ') // -27

const priorities = { "*": 1, "/": 1, "+": 0, "-": 0 }
const num = n => Number.isInteger(+n)


// broken
function calculate(a) {
  const numbers = []
  const operators = []
  for (let i of a) {
    if (num(i)) {
      numbers.push(+i)
    } else {
      let ops = operators.length
      if (ops > 0) {
        let top = operators[ops - 1]
        if (priority(i, top)) {
          operators.push(i)
        } else {
          let optop = operators.pop()
          while (priority(optop, i)) {
            let n2 = numbers.pop()
            let n1 = numbers.pop()
            let sum = op(n1, optop, n2)
            numbers.push(sum)
            console.log({ numbers, operators, sum, n1, n2, optop })
            optop = operators.pop()
          }
          operators.push(i)
        }
      } else {
        operators.push(i)
      }
    }
  }
  return { numbers, operators }
}

function priority(n, t) {
  return priorities[n] >= priorities[t]
}

function op(n1, o, n2) {
  if (o == "+") return n1 + n2
  if (o == "-") return n1 - n2
  if (o == "*") return n1 * n2
  if (o == "/") return n1 / n2
}

console.log(calculate(input2))