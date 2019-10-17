// Sliding Window 
// -> два курсора определяют границы окна
// Two Pointers
// -> второй может идти с конца или от первого, помогает уменьшить сложность
// Fast and Slow Pointers 
// -> i+=1, j+=2 (циклы, конец/середина списка)
// Merge Intervals
// -> отсортировать
// -> если начало текущего интервала больще последнего, то добавить текущий // начался новый
// -> или конец последнего выбрать из максимума между концами текущего и последнего // объединились или новый оказался внутри
// Cyclic Sort
// -> при итерации текущий элемент меняется со своим правильным индексом, если уже на месте, то дальше
// In-place reversal of linked list
// -> две ноды(предыдущая П и текущая Т)
// -> дальше в цикле -> сохранить следующую С, Т направить на П, П = Т, Т = С
// -> вернуть П, т.к. Т = null
// BFS 
// -> добавить рут очередь, потом в цикле брать из очереди и добавлять в нее детей (level order)
// DFS 
// -> рекурсивно обрабатывать значение и детей в нужном порядке (pre/in/postorder)
// Two Heaps 
// -> 2 мин и макс кучи
// Subsets
// -> начать с пустого множества и каждый элемент добавлять во все подмножества
// Binary Search
// -> оптимальный поиск в отсортированном списке/массиве/матрице
// Top K Elements
// -> добавлять каждый элемент в heap(K)
// K-way Merge
// -> минимальный элемент из каждого списка добавить в heap(K), 
// -> потом убрать мин из кучи и добавить следующий элемент из того же списка
// Topological Sort
// -> DAG
// -> reverse DFS postorder
// -> 
// Search
// Knuth - Morris - Pratt
// -> DFA (стейт машина + поток без бектрекинига)
// Boyer - Moore
// -> skip table (сравнение последнего символа и прыжок на длину)
// Rabin - Karp
// -> modulo hash function

const log = console.log

function merge(intervals) {
    let x = []
    intervals.sort((a, b) => a[0] - b[0])
    for (let i of intervals) {
        // if the list of merged intervals is empty or if the current
        // interval does not overlap with the previous, simply append it.
        if (!x.length || x[x.length - 1][1] < i[0])
            x.push(i)
        // otherwise, there is overlap, so we merge the current and previous intervals.
        else
            x[x.length - 1][1] = Math.max(x[x.length - 1][1], i[1])
    }
    return x
}

function subsets(a) {
    let sets = [[]]
    for (let x of a) {
        let y = sets.map(s => s.concat(x))
        sets.push(...y)
    }
    return sets
}

// log(subsets([1, 3, 5]))

function cyclic(a) {
    let i = 0
    while (i < a.length) {
        let c = a[i]
        if (c == i) i++
        else {
            a[i] = a[c]
            a[c] = c
        }
    }
    return a
}

// log(cyclic([5, 1, 4, 0, 3, 2]))

function reverseLL(head) {
    let prev = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
const l = { v: 1, next: { v: 2, next: { v: 3, next: null } } }
// log(reverseLL(l))

function BFS(root) {
    let q = [root]
    while (q.length) {
        let node = q.pop()
        if (!node) continue
        log(node.v)
        q.unshift(node.l)
        q.unshift(node.r)
    }
}

const tree = { v: 1, l: { v: 2 }, r: { v: 3, r: { v: 4 } } }
//     1
//    / \
//   2   3
//      /
//     4
// BFS(tree) // 1 2 3 4

// DFS
function preorder(root) {
    if (!root) return
    log(root.v)
    preorder(root.l)
    preorder(root.r)
}
function inorder(root) {
    if (!root) return
    inorder(root.l)
    log(root.v)
    inorder(root.r)
}
function postorder(root) {
    if (!root) return
    postorder(root.l)
    postorder(root.r)
    log(root.v)
}
function reversedpostorder(root) {
    if (!root) return
    postorder(root.r)
    postorder(root.l)
    log(root.v)
}

// preorder(tree) // 1 2 3 4
// inorder(tree) // 2 1 3 4
// postorder(tree) // 2 4 3 1
// reversedpostorder(tree) // 4 3 2 1

function binary_search(a, v) {
    let s = 0
    let e = a.length - 1
    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2)
        let x = a[m]
        if (x == v) return m
        if (x < v) s = m + 1
        else e = m - 1
    }
    return -1
}

// log(binary_search([1, 2, 3, 7, 8, 11], 11))

const Graph = new Map()
Graph.set(0, [1, 2, 5])
Graph.set(3, [2, 4, 5, 6])
Graph.set(5, [2])
Graph.set(6, [0, 4])
Graph.set(1, [4])

function topologicalSort(g) {
    const s = []
    const m = new Set()

    function dfs(v) {
        m.add(v) // отметить посещенной
        for (let w of g.get(v) || []) {
            if (!m.has(w)) dfs(w)
        }
        s.push(v) // обратный порядок, т.к. сначала посещаются дети
    }

    for (let v of g.keys()) {
        if (!m.has(v)) dfs(v) // поиск по всем непосещенным
    }

    return s
}

// log(topologicalSort(Graph))

function dfs(g) {
    let s = new Set()
    const _dfs = n => {
        if (s.has(n)) return
        s.add(n)
        for (let c of g.get(n) || [])
            _dfs(c)
    }
    for (let n of g.keys())
        if (!s.has(n)) _dfs(n)
    return s
}

// log(dfs(Graph)) // 0 1 4 2 5 3 6

function rotate(a, n) { // [1, 2, 3, 4, 'a', 'b']
    a.reverse() // [ 'b', 'a', 4, 3, 2, 1 ]
    let left = a.slice(0, n).reverse() // [ 'b', 'a' ] -> [ 'a', 'b'] 
    let right = a.slice(n).reverse() // [ 4, 3, 2, 1 ] -> [ 1, 2, 3, 4 ]
    return left.concat(right) // [ 'a', 'b', 1, 2, 3, 4 ]
}

// log(rotate([1, 2, 3, 4, 'a', 'b'], 2))

function logN(n, x) {
    return Math.log(n) / Math.log(x)
}

// log(logN(8, 2))

function buyAndSell(a) {
    let min = Infinity, profit = 0
    for (let price of a) {
        let t = price - min
        profit = Math.max(profit, t)
        min = Math.min(min, price)
    }
    return profit
}

// log(buyAndSell([310, 315, 275, 295, 260, 270, 290, 230, 255, 250])) // 30

function polish(str) {
    let m = new Map([
        ['*', (a, b) => a * b],
        ['+', (a, b) => a + b],
        ['-', (a, b) => a - b],
        ['/', (a, b) => a / b],
    ])
    let s = []
    for (let c of str.split(',')) {
        if (m.has(c)) {
            s.push(m.get(c)(s.pop(), s.pop()))
        } else {
            s.push(parseInt(c))
        }
    }
    return s[0]
}

// log(polish('2,3,+,5,*,5,-,-1,*,2,/'))