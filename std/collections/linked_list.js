class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  find(item, n = this.head) {
    if (!n) return false
    if (n.value == item) return true
    return this.find(item, n.next)
  }

  del(item) {
    let n = this.head
    let prev = n
    while (n) {
      if (n.value == item) {
        prev.next = n.next
        return
      }
      prev = n
      n = n.next
    }
  }

  insert(value) {
    this.head = { value, next: this.head }
    this.size++
  }

  [Symbol.iterator]() {
    let x = this.head
    return {
      next() {
        if (!x) return { done: true }
        let { value, next } = x
        x = next
        return { value, done: false }
      }
    }
  }
}

module.exports = LinkedList
