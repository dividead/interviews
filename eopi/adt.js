// @ts-check

/** 
 * @template T
 * @param {T} item
*/
const node = item => ({ item, next: null })

/** @template T */
class Bag {
    constructor() {
        this.first = null
        this.len = 0
    }
    /** @param {T} i */
    add(i) {
        let old = this.first
        let next = node(i)
        next.next = old
        this.first = next
        this.len++
        return this
    }
    isEmpty() { return this.len === 0 }
    size() { return this.len }
    *[Symbol.iterator]() {
        for (let n = this.first; n != null; n = n.next) {
            yield n
        }
    }
}


/** @template T */
class Stack {
    constructor() {
        this.first = null
        this.len = 0
    }
    /** @param {T} i */
    push(i) {
        let old = this.first
        let next = node(i)
        next.next = old
        this.first = next
        this.len++
        return this
    }
    pop() {
        if (this.isEmpty()) return
        let i = this.first.item
        this.first = this.first.next
        this.len--
        return i
    }
    isEmpty() { return this.len === 0 }
    size() { return this.len }
    *[Symbol.iterator]() {
        for (let n = this.first; n != null; n = n.next) {
            yield n
        }
    }
}

/** @template T */
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.len = 0
    }
    /** @param {T} i */
    enqueue(i) {
        let old_last = this.last
        let new_last = node(i)
        this.last = new_last
        if (this.isEmpty()) {
            this.first = new_last
        } else {
            old_last.next = new_last
        }
        this.len++
        return this
    }
    dequeue() {
        if (this.isEmpty()) return
        let i = this.first.item
        this.first = this.first.next
        if (this.isEmpty()) this.last = null
        this.len--
        return i
    }
    isEmpty() { return this.len === 0 }
    size() { return this.len }
    *[Symbol.iterator]() {
        for (let n = this.first; n != null; n = n.next) {
            yield n
        }
    }
}

module.exports = {
    Stack, Queue, Bag
}