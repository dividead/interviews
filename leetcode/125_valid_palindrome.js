var isPalindrome = function (s) {
  s = s.replace(/\W/g, '').toLowerCase()
  let lo = 0
  let hi = s.length - 1
  while (lo < hi) {
    if (s[lo] != s[hi]) return false
    lo++
    hi--
  }
  return true
};