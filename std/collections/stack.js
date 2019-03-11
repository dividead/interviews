const LinkedList = require('./linked_list')

class Stack extends LinkedList {
  constructor() {
    super()
    this.push = super.insert
  }
  pop() {
    if (!this.head) return null
    const { value, next } = this.head
    this.head = next
    return value
  }
}

module.exports = Stack

// class StackFixedCapacity {
//   constructor(cap) {
//     this.stack = Array(cap)
//     this.n = 0
//   }
//   isEmpty() {
//     return this.n == 0
//   }
//   push(item) {
//     this.stack[this.n++] = item
//   }
//   pop() {
//     return this.stack[--this.n]
//   }
// }
