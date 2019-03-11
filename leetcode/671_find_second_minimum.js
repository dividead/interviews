var findSecondMinimumValue = function (root) {
  function rec(root, c) {
    if (!root) return c
    c.push(root.val)
    rec(root.left, c)
    rec(root.right, c)
    return c
  }
  let col = rec(root, [])
  if (!col.length) return -1
  col.sort((a, b) => b - a)
  let max = col.pop()
  while (col.length > 0) {
    let n = col.pop()
    if (n != max) {
      return n
    }
    n = max
  }
  return -1
};

console.log(findSecondMinimumValue([2, 2, 5, null, null, 5, 7]))