function reversePrint(linkedList) {
  if (!linkedList) return
  reversePrint(linkedList.next)
  console.log(linkedList.value)
}

function reversePrint2(node, res = []) {
  while (node) {
    res.unshift(node.value)
    node = node.next
  }
  console.log(res)
}

var someList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

reversePrint(someList);
reversePrint2(someList);