const log = (...args) => console.log(args)
const cons = (x, y) => f => f(x, y)
const car = x => x((a, _) => a)
const cdr = x => x((_, b) => b)
const add = (list, el) => cons(el, list)
const inc = (x, y) => y(x)
const make = (list, from, to, step) => (from <= to ? make(add(list, from), inc(from, step), to, step) : list)
const each = (list, f) => {
  f(car(list))
  cdr(list) ? each(cdr(list), f) : null
}
let list = make(null, 1, 10, x => x + 2)
each(list, log)

const compose = (f, g) => g(f)
const y = i => (f => f(f))(f => i(v => f(f)(v)))
const fi = f => n => (n == 0 ? 1 : n * f(n - 1))
const fct = n => compose(y(fi)(n), log)

fct(15)
