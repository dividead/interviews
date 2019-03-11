class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  add(value) {
    let n = { value, next: null }
    if (!this.head) {
      this.head = n
    } else {
      let last = this.head
      while (last.next) {
        last = last.next
      }
      last.next = n
    }
    this.length++
  }

  print() {
    let node = this.head
    while (node.next) {
      console.log(node)
      node = node.next
    }
  }
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.print()