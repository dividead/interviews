let G = new Map()

// orig, dest, rate
const rates = [
    ['ly', 'km', 9.461e+12], ['km', 'm', 1000], ['m', 'cm', 100], ['cm', 'in', 2.54],
    ['in', 'ha', 0.25], ['ft', 'in', 12], ['ml', 'ft', 5280], ['ml', 'km', 1.6],
]

// init

const add = (orig, dest, rate) => {
    if (!G.has(orig)) G.set(orig, new Map())
    G.get(orig).set(dest, rate)
}

rates.forEach(r => add(...r))

console.log(G)

const dfs = (node, end, z, visited) => {
    if (node === end) return z
    visited.add(node)

    for (let [unit, rate] of G.get(node).entries()) {
        if (!visited.has(unit)) rate = dfs(unit, end, z * rate, visited)
        return rate
    }
}

const x = dfs('ly', 'ha', 1, new Set())
// const x = dfs('km', 'm', 1, new Set())
console.log(x)