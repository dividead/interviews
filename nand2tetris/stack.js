class Stack {
  constructor(memory = {}) {
    this.m = memory;
    this.s = [];
  }

  push(segment, i) {
    if (segment == 'const') {
      this.s.push(i);
    } else {
      const val = this.m[segment][i];
      this.s.push(val);
    }
    return this;
  }
  pop(segment, i) {
    if (segment == 'const') {
      return this;
    }
    const [val] = this.#pop(1);
    this.m[segment][i] = val;
    return this;
  }

  print() {
    console.log(this.s);
    return this;
  }

  #push(x) {
    this.s.push(x);
    return this;
  }
  #pop(n = 1) {
    let x = [];
    while (n-- > 0) {
      x.push(this.s.pop());
    }
    return x;
  }

  add() {
    const [y, x] = this.#pop(2);
    return this.#push(x + y);
  }
  sub() {
    const [y, x] = this.#pop(2);
    return this.#push(x - y);
  }
  neg() {
    const [y] = this.#pop(1);
    return this.#push(-y);
  }
  eq() {
    const [y, x] = this.#pop(2);
    return this.#push(x == y);
  }
  gt() {
    const [y, x] = this.#pop(2);
    return this.#push(x > y);
  }
  lt() {
    const [y, x] = this.#pop(2);
    return this.#push(x < y);
  }
  and() {
    const [y, x] = this.#pop(2);
    return this.#push(x && y);
  }
  or() {
    const [y, x] = this.#pop(2);
    return this.#push(x || y);
  }
  not() {
    const [y] = this.#pop(1);
    return this.#push(!y);
  }
};

const m = { local: [7, 12] };
const s = new Stack(m);

s.push('const', 2).push('local', 0).sub()
  .push('local', 1).push('const', 9).add()
  .add()
  .print()
  .pop('local', 2);

console.log(m);