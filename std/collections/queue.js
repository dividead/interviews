class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.n = 0
  }
  isEmpty() {
    return this.first == null
  }
  enqueue(value) {
    let n = {
      value,
      next: null
    }
    if (this.isEmpty()) {
      this.last = n
      this.first = n
    } else {
      let prev = this.last
      prev.next = n
      this.last = n
    }
    this.n++
  }
  dequeue() {
    if (this.isEmpty()) return null
    let { value, next } = this.first
    this.first = next
    if (this.isEmpty()) this.last = null
    this.n--
    return value
  }
  [Symbol.iterator]() {
    let x = this.first
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

// module.exports = Queue

let q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(...q)
