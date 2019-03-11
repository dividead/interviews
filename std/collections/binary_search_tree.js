const node = (value, parent = null, left = null, right = null) => ({
  value,
  left,
  right,
  parent
})

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  search(x, tree = this.root) {
    if (!tree) return null
    let { value, left, right } = tree
    if (value == x) return tree
    return x > value ? this.search(x, right) : this.search(x, left)
  }
  limit(dir, tree = this.root, value = null) {
    if (!tree) return value
    return this.limit(dir, tree[dir], tree.value)
  }
  min() { return this.limit('left') }
  max() { return this.limit('right') }
  traverse(tree = this.root) {
    if (!tree) return
    this.traverse(tree.left)
    console.log(tree.value)
    this.traverse(tree.right)
  }
  insert(x, tree = this.root) {
    if (!tree) {
      this.root = node(x)
      return
    }
    let dir = x < tree.value ? 'left' : 'right'
    if (!tree[dir]) {
      tree[dir] = node(x, tree)
    } else {
      this.insert(x, tree[dir])
    }
  }
  // delete(x, tree = this.root) {
  //   if (!tree) return
  //   let n = this.search(x)
  // }
}

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(15)
tree.insert(1)
tree.insert(3)
tree.insert(10)
tree.insert(-21)
tree.traverse()
console.log('found', tree.search(10))
console.log(tree.min(), tree.max())
tree.delete(10)
tree.traverse()
console.log('found', tree.search(10))
console.log(tree.min(), tree.max())
// console.log(tree)

// module.exports = BinarySearchTree