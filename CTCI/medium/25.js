class LRU {
  constructor(len) {
    this.len = len
    this.cache = new Map()
    this.head = null
    this.tail = null
  }
  add(k, v) {
    if (this.cache.size >= this.len) {
      this.remove(this.tail.key)
    }
    let node = LinkedListNode(k, v)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.cache.set(k, node)
  }
  remove(k) {
    let node = this.cache.get(k)
    if (node) {
      console.log("remove", node.value)
      if (node.prev) node.prev.next = node.next
      if (node.next) node.next.prev = node.prev
      if (k == this.tail.key) this.tail = node.prev
      this.cache.delete(k)
    }
  }
}

const LinkedListNode = (key, value) => ({
  prev: null,
  next: null,
  key,
  value
})

const lru = new LRU(3)

lru.add(5, "five")
lru.add(3, "three")
lru.add(2, "two")
lru.add(4, "four")


console.log(lru.cache)