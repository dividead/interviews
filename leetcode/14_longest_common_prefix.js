var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  let rs = '', i = 0
  let w = strs[0]
  while (true) {
    let curr = w[i]
    if (!curr) return rs
    if (!strs.map(s => s[i]).every(c => c === curr)) return rs
    rs += curr
    i++
  }
};
