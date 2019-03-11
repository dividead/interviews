const { cons, car, cdr } = require('./lisp')

const list = (...l) => l.length ? cons(l.shift(), list(...l)) : null
const print_list = (l, str = '( ') => l ? print_list(cdr(l), str += car(l) + ' ') : console.log(str + ')')
const scale_list = (s, l) => l ? cons(car(l) * s, scale_list(s, cdr(l))) : null
const map = (p, l) => l ? cons(p(car(l)), map(p, cdr(l))) : null
const each = (p, l) => {
  if (!l) return
  p(car(l))
  each(p, cdr(l))
}

let x = list(1, 2, 3, 4)
print_list(x)
print_list(scale_list(10, x))
print_list(map(i => i * 10, x))
each(console.log, x)