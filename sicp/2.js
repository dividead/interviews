const { cons, car, cdr } = require('./lisp')

const make_rat = (n, d) => cons(n, d)
const numer = rat => car(rat)
const denom = rat => cdr(rat)

const plus_rat = (x, y) => make_rat(
  numer(x) * denom(y) + numer(y) * denom(x),
  denom(x) * denom(y))

const prod_rat = (x, y) => make_rat(
  numer(x) * numer(y),
  denom(x) * denom(y))

let a = make_rat(1, 2)
let b = make_rat(1, 4)

const print_rat = rat => console.log(`${car(rat)}/${cdr(rat)}`)
print_rat(plus_rat(a, b))