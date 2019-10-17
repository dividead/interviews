var isValid = function (str) {
  let m = { "(": ")", "[": "]", "{": "}" }
  let s = []
  for (let c of str) {
    let y = m[c]
    if (y) {
      s.push(y)
    } else {
      let x = s.pop()
      if (x != c) return false
    }
  }
  return true
};


console.log(isValid("([)]"))
console.log(isValid("({})"))