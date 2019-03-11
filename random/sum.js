function sum(res = 0) {
  // let args = [res]
  function x(n = 0) {
    // args.push(n)
    res += n
    // console.log(args, res)
    return x
  }
  x.valueOf = () => res
  // x.toString = () => res
  return x
}

let s = sum(1)(2)(3)(4)(5)
console.log("s =>", s)
