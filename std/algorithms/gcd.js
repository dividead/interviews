const gcd = (p, q) => {
  if (q == 0) return p
  let r = p % q
  return gcd(q, r)
}

console.log(gcd(60, 40))
