const rotate = n => +n.toString().split("").reverse().join("")
const swap = n => {
  let a = n.toString().split("")
  let first = a.shift()
  let last = a.pop()
  a.unshift(last)
  a.push(first)
  return +a.join("")
}
const magn = n => +new Array(n.toString().length).fill(1).join("")

let a = []
for (let i = 10; i < 99; i++) {
  // let k = rotate(i)
  let k = swap(i)
  let x = k - i
  let m = i / 11 // i / 9
  // let m = i % 11 * 9 + i // almost
  // a.push(x / 9)
  // a.push(x)
  console.log(i, "->", k, "->", x, "->", x / 9, "->", m)
}
// console.log(a.join())

const b11 = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8] // [9] -> 0
// console.log(b11.length) // 18
// 11 -> k = 11/11 - 1 = 0 -> b11[9 + k,]

///                   123
///           1        2        3
//          2   3    3   1    1   2
//         3     2  1     3  2     1

// 1 - 123, 132
// 2 - 231, 213
// 3 - 312, 321

//    3       1
//  2   1   3   2
// 1      2       3

//   1       2
//  2 3       1
// 3   2       3

// 1 2 3 1 2
// 2 1 3 2 1

// 1 2 3 1 2 1 3 2 1

// 12 13 14 15 16 17 18 19 20 21 22 23 24 25
// 21 31 41 51 61 71 81 91 __ 12 22 32 42 52
// _9 18 27 36 45 54 63 72 __
