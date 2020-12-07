class List {
  constructor({ verbose = false } = {}) {
    this.head = null;
    this.v = verbose ?? false;
  }

  push(val) {
    const node = { val, next: this.head };
    this.head = node;
    this.v && console.log(this.pretty + ' -> null');
    return node;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const { val, next } = this.head;
    this.head = next;
    this.v && console.log(`${val} | ` + this.pretty + ' -> null');
    return val;
  }

  get pretty() {
    return [...this].join(' -> ');
  }

  *[Symbol.iterator]() {
    let n = this.head;
    while (n) {
      const x = n.val;
      n = n.next;
      yield x;
    }
  }
}

class VM {
  constructor({ verbose = false } = {}) {
    this.stack = new List({ verbose });
  }
  add(val) {
    switch (val) {
      case '+':
        this.plus();
        break;
      case '-':
        this.minus();
        break;
      default:
        this.stack.push(val);
    }
  }
  plus() {
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(b + a);
  }
  minus() {
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(b - a);
  }

  get result() {
    return this.stack?.head?.val;
  }

  eval(stack) {
    const vm = new VM();
    console.log(stack.pretty);
    const reversed = new List();
    for (let node of stack) {
      reversed.push(node);
    }
    console.log(reversed.pretty);
    for (let cmd of reversed) {
      vm.add(cmd);
    }
    this.add(vm.result);
  }
}

// const vm = new VM();
// vm.add(2);
// vm.add(5);
// vm.add(8);
// vm.add('-');
// vm.add('+');

const parse = str => {
  const s = new List();
  const ops = new List();
  let op = null;
  for (let c of str) {
    if (c === ' ') continue;
    if (c === '(') {
      op = null;
      continue;
    };
    if (c === ')') {
      s.push(ops.pop());
      continue;
    }
    if (!op) {
      ops.push(c);
      op = c;
    } else {
      s.push(+c);
    }
  }

  return s;
};

// const ast = parse('(+  2 (- 5 8))'); // 2 + (5 - 8) = -1
const ast = parse('(+ 5 (+  2 (- 5 8)))');
const vm = new VM();
vm.eval(ast);
console.log(vm.result);