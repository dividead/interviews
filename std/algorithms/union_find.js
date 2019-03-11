class QuickFindUF {
  // O(n)
  constructor(n) {
    this.x = Array(n)
      .fill(0)
      .map((_, i) => i)
  }

  // O(n)
  union(a, b) {
    let v = this.x[a]
    let z = this.x[b]
    this.x = this.x.map(i => (i == v ? z : i))
    console.log(a, b, this.x)
  }

  // O(1)
  connected(a, b) {
    return this.x[a] == this.x[b]
  }
}

class QuickUnionUF {
  // O(n)
  constructor(n) {
    this.x = Array(n)
      .fill(0)
      .map((_, i) => i)
  }

  root(i) {
    while (i != this.x[i]) i = this.x[i]
    return i
  }

  // O(n)
  union(a, b) {
    this.x[this.root(a)] = this.root(b)
    console.log(a, b, this.x)
  }

  // O(n)
  connected(a, b) {
    return this.root(a) == this.root(b)
  }
}

class QuickUnionUFi1 {
  // O(n)
  constructor(n) {
    this.x = Array(n)
      .fill(0)
      .map((_, i) => i)
    this.sz = Array(n).fill(1)
  }

  root(i) {
    while (i != this.x[i]) i = this.x[i]
    return i
  }

  // O(lg n)
  union(a, b) {
    let i = this.root(a)
    let j = this.root(b)
    if (i == j) return
    if (this.sz[i] < this.sz[j]) {
      this.x[i] = j
      this.sz[j] += this.sz[i]
    } else {
      this.x[j] = i
      this.sz[i] += this.sz[j]
    }
    console.log(a, b, this.x)
  }

  // O(lg n)
  connected(a, b) {
    return this.root(a) == this.root(b)
  }
}

class QuickUnionUFi2 {
  // O(n)
  constructor(n) {
    this.x = Array(n)
      .fill(0)
      .map((_, i) => i)
    this.sz = Array(n).fill(1)
  }

  root(i) {
    while (i != this.x[i]) {
      this.x[i] = this.x[this.x[i]]
      i = this.x[i]
    }
    return i
  }

  // O(lg n)
  union(a, b) {
    let i = this.root(a)
    let j = this.root(b)
    if (i == j) return
    if (this.sz[i] < this.sz[j]) {
      this.x[i] = j
      this.sz[j] += this.sz[i]
    } else {
      this.x[j] = i
      this.sz[i] += this.sz[j]
    }
    console.log(a, b, this.x)
  }

  // O(lg n)
  connected(a, b) {
    return this.root(a) == this.root(b)
  }
}

let uf = new QuickUnionUFi2(10)

uf.union(4, 3)
uf.union(3, 8)
uf.union(6, 5)
uf.union(9, 4)
uf.union(2, 1)
uf.union(8, 9)
console.log(uf.connected(5, 4))
uf.union(5, 0)
uf.union(7, 2)
uf.union(6, 1)
uf.union(7, 3)
// uf.union(1, 0)
// uf.union(6, 7)
