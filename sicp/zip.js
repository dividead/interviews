function zip(a, b, c = []) {
  console.log(a,b,c)
  if (a.length == 0) return c
  let [a1, ...ax] = a
  let [b1, ...bx] = b
  return zip(ax, bx, [...c, a1+b1])
}

console.log(zip([1,2,3], [4,5,6]))
