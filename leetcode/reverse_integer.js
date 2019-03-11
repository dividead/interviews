var reverse = function (x) {
  let sign = x >= 0 ? 1 : -1
  x *= sign
  let res = 0
  while (x > 0) {
    let n = x % 10
    res = res * 10 + n
    x = x >= 10 ? (x - n) / 10 : 0
  }
  return res * sign
};

console.log(reverse(-123))