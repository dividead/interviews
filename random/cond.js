const cond = (b, c) => ((b - c) >>> 31) ^ 1
// const cond = (b, c) => (((b - c) ^ (1 << 31)) >>> 31)

console.log(cond(1, 2), 1 > 2)
console.log(cond(3, 2), 3 > 2)
console.log(cond(5, 6), 5 > 6)
console.log(cond(6, 2), 6 > 2)
console.log(cond(60000, 2), 6 > 2)