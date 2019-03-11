class UnionFindUF {
  constructor (x) {
    this.id = new Array(x).fill(0).map((v, i) => v = i)
  }

  connected (p, q) {
    return this.id[p] === this.id[q]
  }

  union (p, q) {
    let pid = this.id[p]
    let qid = this.id[q]
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) this.id[i] = qid
    }
  }
}

let x = new UnionFindUF(10)

console.log(x, x.connected(1, 2))
x.union(2, 1)
console.log(x, x.connected(1, 2))
