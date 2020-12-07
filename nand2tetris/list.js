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

  parse(str) {
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

  eval(str) {
    const vm = new VM();
    const stack = vm.parse(str);
    const reversed = new List(); // TODO: parse reversed?
    for (let node of stack) reversed.push(node);
    for (let cmd of reversed) vm.add(cmd);
    this.add(vm.result);
  }
}

const vm = new VM();
vm.add(1);
vm.eval('(+ 5 (+  2 (- 5 8)))'); // 4
vm.add('+');
console.log(vm.result);