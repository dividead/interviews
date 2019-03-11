var rotateRight = function (head, k) {
  if (!head || !k) return head
  let map = []
  let n = head
  while (n) {
    map.push(n)
    n = n.next
  }
  let len = map.length // 2
  let rot = k >= len ? k % len : k // 1
  if (rot == 0) return head
  let x = map[0]
  head = map[len - rot] // 1
  map[len - 1].next = x // 1
  map[len - rot - 1].next = null
  return head
};