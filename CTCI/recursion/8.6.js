function hanoi(n, origin, dest, buffer) {
  if (n == 0) {
    console.log(origin, dest, buffer)
    return
  }
  hanoi(n - 1, origin, buffer, dest)
  dest.push(origin.pop())
  hanoi(n - 1, buffer, dest, origin)
}

const x = 3
const origin = [3, 2, 1]
const buffer = []
const dest = []

hanoi(x, origin, dest, buffer)
