const { inspect } = require('util')
const print = x => console.log(inspect(x))
var mergeTwoLists = function (l1, l2) {
  let l3 = merge(l1, l2)
  while (l3.next) {
    print(l3.val)
    l3 = l3.next
  }
  return "done"
};

const merge = (l1, l2) => {
  if (!l2) return l1
  if (!l1) return l2
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2)
    return l1
  } else {
    l2.next = merge(l1, l2.next)
    return l2
  }
}

function node(val) {
  return { val, next: null }
}

const l1 = node(1)
l1.next = node(2)
l1.next.next = node(4)
const l2 = node(1)
l2.next = node(3)
l2.next.next = node(4)

print(mergeTwoLists(l1, l2))
