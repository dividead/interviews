module.exports = {
  cons: (a, b) => m => m(a, b),
  car: p => p((a, _) => a),
  cdr: p => p((_, b) => b),
  utils: {
    print: console.log,
    square: x => x * x
  }
}

const mu = x => f(x(x))
const mucomb = mu(mu)

const Y = f => x => f(x(x))(x => f(x(x)))