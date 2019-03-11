const input = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
// 3,9
function search(array) {
  let low = 0
  let hi = array.length - 1
  let m = low
  let n = hi
  let left_max = low
  let right_min = hi
  while (low < hi) {
    if (array[low] > left_max) {
      left_max = array[low]
    }
    if (array[low] > array[low + 1]) {
      m = low
      break
    }
    low++
  }
  while (hi > low) {
    if (array[hi] < right_min) {
      right_min = array[hi]
    }
    if (array[hi] < array[hi - 1]) {
      n = hi
      break
    }
    hi--
  }
  while (array[m] > right_min) {
    m--
  }
  while (array[n] < left_max) {
    n++
  }

  return { m: m + 1, n: n - 1 } //O(4 * n)
}

console.log(search(input))