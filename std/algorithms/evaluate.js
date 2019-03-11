function evaluate(str) {
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  }
  let operands = []
  let operators = []
  let x = str.split('')
  for (let c of x) {
    if (c == '(') continue
    if (ops[c]) {
      operators.push(c)
      continue
    }
    if (c.match(/\d/)) {
      operands.push(+c)
      continue
    }
    let op = operators.pop()
    let a = operands.pop()
    let b = operands.pop()
    console.log(op, a, b)
    operands.push(ops[op](a, b))
  }
  console.log(operands.pop())
}

evaluate('(1+((2+3)*(4*5)))')
