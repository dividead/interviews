const X = v => ({
  v,
  inspect () {
    console.log('->', this.v)
  },
  map (f) {
    const n = X(f(this.v))
    n.inspect()
    return n
  }
})

const one = X(1)

const add = a => b => a + b
const sub = a => b => b - a
const sqrt = a => a ** 2

one.map(add(4)).map(sub(3)).map(sqrt)
