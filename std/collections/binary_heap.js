class BinaryHeap {
  constructor() {
    this.heap = [null]
    this.size = 0
  }
  insert(item) {
    this.heap.push(item)
    this.size++
    this.balance()
  }
  balance() {
    let i = this.size
    if (i <= 1) return
    let p = Math.floor(i / 2)
    let curr = this.heap[i]
    let parent = this.heap[p]
    if (parent < curr) return
    while (parent > curr) {
      // todo
    }
    this.balance()
  }
  min() {
    return this.heap[1]
  }
  print() {
    console.log(this.heap.slice(1))
    let i = 1
    while (i < this.size) {
      console.log({ val: this.heap[i], left: this.heap[i * 2], right: this.heap[i * 2 + 1] })
      i++
    }
  }
}

const heap = new BinaryHeap()

heap.insert(5)
heap.insert(1)
heap.insert(10)
heap.insert(4)
heap.insert(8)
heap.insert(2)
heap.insert(0)

heap.print()