var numJewelsInStones = function (J, S) {
  let set = new Set(J.split(''))
  let c = 0
  for (let s of S) {
    if (set.has(s)) c++
  }
  return c
};