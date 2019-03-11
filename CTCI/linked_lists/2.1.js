const { LinkedList } = require("../itsy-bitsy-data-structures")

const list = new LinkedList()
list.add(1, 0)
list.add(2, 1)
list.add(2, 2)
// list.add(4, 3)

function uniq(list) {
  const set = new Set()
  for (let i = 0; i < list.length; i++) {
    let v = list.get(i).value
    if (set.has(v)) {
      list.remove(i)
    } else {
      set.add(v)
    }
  }
}

console.log(list)
uniq(list)
console.log(list)