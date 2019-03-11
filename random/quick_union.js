class QuickUnionUF {
  constructor (x) {
    this.id = new Array(x).fill(0).map((v, i) => v = i)
    this.sz = new Array(x).fill(0)
  }

  root (i) {
    while (i !== this.id[i]) {
      this.id[i] = this.id[this.id[i]]
      i = this.id[i]
    }
    return i
  }

  connected (p, q) {
    return this.root(p) === this.root(q)
  }

  union (p, q) {
    let i = this.root(p)
    let j = this.root(q)
    console.log(i, j)
    if (i === j) {
      return
    }
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j
      this.sz[j] += this.sz[i]
    } else {
      this.id[j] = i
      this.sz[i] += this.sz[j]
    }
  }
}

let x = new QuickUnionUF(10)

console.log(x.connected(1, 2))
x.union(2, 1)
x.union(2, 5)
x.union(2, 9)
console.log(x.connected(5, 9))
