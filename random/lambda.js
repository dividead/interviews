// ∆x. x -> (∆x. x)
const id = x => x
// ∆s.(s s)
// const self_apply = s => s(s)
// const apply = func => arg => func(arg(func(arg)))

// const id2 = x => apply(id)(x)

// console.log(id(id))

console.log((x => x)(3))
