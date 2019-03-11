
const sqrt = x => {
  // const average = (x, y) => (x + y) / 2
  // const improve = (guess, x) => (guess + x / guess) / 2
  // const goodEnough = (guess, x) => Math.abs(guess ** 2 - x) < 0.001
  const iter = (guess, x) => Math.abs(guess ** 2 - x) < 0.001 ? guess : iter((guess + x / guess) / 2, x)
  return iter(1, x)
}

console.log(sqrt(137))
