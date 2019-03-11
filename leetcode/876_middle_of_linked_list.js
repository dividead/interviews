var middleNode = function (head) {
  let n1 = head
  let n2 = head.next
  while (n2) {
    console.log(n1, n2)
    n1 = n1.next
    if (!n2.next) return n1
    n2 = n2.next.next
  }
  return n1
};