const {
  utils: { print, square }
} = require('./lisp')

const tolerance = 0.0001
const average = (x, y) => (x + y) / 2
const mean_square = (x, y) => average(square(x), square(y))
const y = op => m => (...args) => args.reduce((a, b) => op(a, b), m)
const x = (...args) => (...ops) => ops.map(op => op(...args))
const plus = y((a, b) => a + b)(0)
const minus = y((a, b) => a - b)(0)
const abs = x => (x < 0 ? -x : x)
const good_enough = (a, x) => abs(square(a) - x) <= tolerance
const _try = (a, x) => (good_enough(a, x) ? a : _try(average(a, x / a), x))
const sqrt = x => _try(1, x)
const peano = (x, y) => (x ? peano(x - 1, y + 1) : y)
const peano2 = (x, y) => (x ? peano(x - 1, y) + 1 : y)
print(peano(10, 15), peano2(10, 15))
const fib = n => (n < 2 ? n : fib(n - 1) + fib(n - 2))
print(fib(10))
const fixed_point = (f, start) => {
  const close_enough = (a, b) => abs(a - b) <= tolerance
  const iter = (old, _new) => (close_enough(old, _new) ? _new : iter(_new, f(_new)))
  return iter(start, f(start))
}
const sqrtFP = x => fixed_point(y => average(x / y, y), 1)

const newton = (f, guess) => {
  const dx = tolerance
  const deriv = f => x => f(x + dx) - f(x) / dx
  const df = deriv(f)
  return fixed_point(x => x - f(x) / df(x), guess)
}
const sqrtNewton = x => newton(y => x - square(y), 1)
print(sqrt(2), sqrtFP(2), sqrtNewton(2))
