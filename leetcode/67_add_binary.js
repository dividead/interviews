var addBinary = function (a, b) {
  let al = a.length - 1
  let bl = b.length - 1
  let sum = ""
  let curry = 0
  while (al >= 0 || bl >= 0) {
    let li = +a[al] || 0
    let si = +b[bl] || 0
    let s = li + si + curry
    if (s > 1) {
      curry = 1
    } else {
      curry = 0
    }
    if (s == 1 || s == 3) {
      sum = '1' + sum
    } else {
      sum = '0' + sum
    }
    console.log({ s, sum })
    al--
    bl--
  }
  let res = curry ? '1' + sum : sum
  console.log({ curry, res, a, b })
  return res
};

addBinary("11", "1")
addBinary("1010", "1011")
addBinary("1111", "1111")