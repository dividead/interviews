const print = console.log
const assert = (a, b) => a !== b && print(`${a} !== ${b}`)
const context = sep => {
  let log = []
  return function x(e) {
    if (!e) {
      return log.length ? print(log.join(sep)) : null
    }
    log.push(e)
    return x
  }
}

module.exports = {
  print,
  assert,
  context
}