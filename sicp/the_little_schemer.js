const _null = l => Array.isArray(l) && l.length === 0
const _pair = p => Array.isArray(p)
const quote = i => _null(i) ? null : i.toString()
const and = (...args) => args.reduce((m, i) => m && i, true)
const or = (...args) => args.reduce((m, i) => m || i, true)
const not = b => !b 
const _atom = x => and(not(_pair(x), not(_null(x))))
const car = ([h, ...t]) => h
const cdr = ([h, ...t]) => t
const cons = (i, l) => [i, ...l]
const print = console.log

print(_atom("asdas"))
print(_atom([]))
print(quote([]))
print(car([1,2,3]))
print(cdr([1,2,3]))
