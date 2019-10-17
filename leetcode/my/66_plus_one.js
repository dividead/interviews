var plusOne = function (d) {
  let curry = 1
  for (let i = d.length - 1; i >= 0; i--) {
    let s = d[i] + curry
    curry = s >= 10 ? 1 : 0
    d[i] = s % 10
    if (!curry) {
      return d
    }
  }
  return curry ? [1, ...d] : d
};

console.log(plusOne([1, 2, 3]))