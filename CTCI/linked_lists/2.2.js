const { LinkedList } = require("../itsy-bitsy-data-structures")

const list = new LinkedList()
list.add(1, 0)
list.add(2, 1)
list.add(3, 2)
list.add(4, 3)

function fromEnd(list, k) {
  let p1 = list.head
  let p2 = list.head
  for (let i = 0; i < k; i++) {
    p1 = p1.next
  }
  while (p1) {
    p1 = p1.next
    p2 = p2.next
  }
  return p2.value
}

// function fromEndRec(list, k) {
//   if (list.next == null) return 0
//   let index = fromEndRec(list.next, k) + 1
//   console.log("i", index)
//   if (index == k) console.log(index)
//   return index
// }

console.log(fromEnd(list, 3))
// fromEndRec(list.head, 3)