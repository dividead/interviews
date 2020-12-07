const table = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
const p = (...xs) => (console.log(...xs.map(i => i ? 1 : 0)), xs);
const test = (f) => table.map(([a, b]) => p(f(a, b)));

const nand = (a, b) => a && b ? 0 : 1;
// test(nand);

const not = (a) => nand(a, a);
// p(not(1));
// p(not(0));

const and_ = (a, b) => not(nand(a, b));
// test(and_);

// const or_ = (a, b) => nand(not(a), not(b));
const or_ = (a, b) => nand(!a, !b);
// test(or_);

// const nor = (a, b) => not(or_(a, b));
const nor = (a, b) => !(a || b);
// test(nor);

// const xor = (a, b) => nand(nand(a, nand(a, b)), nand(b, nand(a, b)));
// const xor = (a, b) => or_(and_(a, not(b)), and_(b, not(a)));
// const xor = (a, b) => (a && !b) || (b && !a);
const xor = (a, b) => a ^ b;
test(xor);