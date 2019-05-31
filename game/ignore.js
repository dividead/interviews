function init() {
  const step = 10
  const columns = 150
  const rows = 80
  const width = step * columns
  const height = step * rows
  const canvas = document.getElementById('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  let cursor = 0
  let offset = 10
  // λ→
  // const GRID = []
  // const row = l => Array(l).fill(false)
  // const times = n => f => {
  //   for (let i = 0; i < n; i++) {
  //     f()
  //   }
  // }
  // times(rows)(() => GRID.push(row(columns)))
  function box(x, y, item) {
    const a = item.split('')
    ctx.strokeRect(x * step, y * step, step * a.length, step)
    a.forEach((v, i) => {
      ctx.fillText(v, (x + i) * step + step / 5, y * step + step * 0.85)
    })
  }

  function print(...args) {
    let x = offset
    for (let v of args) {
      ctx.font = `${step}px courier`
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(255,0,0,1)'
      ctx.fillStyle = 'rgba(255,255,255,1)'
      if (Array.isArray(v)) {
        v.forEach((value, index) => {
          let str = value.toString()
          box(x + index, cursor, str)
          x += str.length - 1
        })
      } else {
        v = v.toString()
        box(x, cursor, v)
        x += v.length - 1
      }
      x += 2
    }
    offset = x
    // cursor++
  }

  function bkg() {
    function line(xs, ys, xe, ye) {
      ctx.beginPath()
      ctx.moveTo(xs, ys)
      ctx.lineTo(xe, ye)
      ctx.stroke()
    }
    ctx.lineWidth = 1
    ctx.strokeStyle = 'rgba(255,255,255,0.1)'
    for (let x = step; x < width; x += step) {
      line(x, 0, x, height)
      line(0, x, width, x)
    }
  }

  function clear() {
    cursor = 0
    ctx.clearRect(0, 0, width, height)
    bkg()
  }

  function br() {
    cursor++
    offset = 10
  }

  return { box, print, ctx, clear, br }
}

const { box, print, ctx, clear, br } = init()
const BUFFER = {}

const Lambda = f => {
  let str = f.toString().replace(/\s/g, '')
  let [op, body] = str.split('=>')
  return {
    str() {
      return `λ${op}.${body}`
    },
    ap(i) {
      return `λ${i}.${body.replace(new RegExp(op, 'g'), i)}→${f(i)}`
    }
  }
}

function map(f, list) {
  const l = Lambda(f)
  print('map', l.str(), list)
  let res = Array(list.length).fill('*')
  for (let i in list) {
    res[i] = f(list[i])
    print(res)
  }
  br()
  return res
}

function filter(f, list) {
  const l = Lambda(f)
  print('filter', l.str(), list)
  let res = []
  for (let i of list) {
    if (f(i)) {
      res.push(i)
      print(res)
    }
  }
  br()
  return res
}

function reduce(f, list) {
  const l = Lambda(f)
  print('reduce', l.str(), list)
  let acc = list.shift()
  for (let i of list) {
    let x = f(acc, i)
    print(`${acc}+${i}=${x}`)
    acc = x
  }
  print(acc)
  br()
  return acc
}

function fibonacci(n) {
  if (n < 2) {
    return node(n)
  }
  let l = fibonacci(n - 1)
  let r = fibonacci(n - 2)
  return node(l.value + r.value, [l, r])
}

function factorial(n) {
  if (n == 1) return 1
  let res = n * factorial(n - 1)
  print(res)
  return res
}

function update() {
  clear()
  let f = fibonacci(10)
  printTree(f)
  // factorial(20)
  // let squared = map(x => x * x, [11, 12, 13, 14, 15])
  // let odd = filter(x => x % 2 == 0, squared)
  // let even = filter(x => x % 2 != 0, squared)
  // let doubled = map(x => x + x, squared)
  // let summed = reduce((p, c) => (p += c), doubled)
  // requestAnimationFrame(update)
  // setTimeout(() => update(), 100)
}

function node(value, children = []) {
  return {
    value,
    children
  }
}

function printTree(head) {
  let q = [head, null]
  while (q.length) {
    let first = q.shift()
    if (first == null) {
      br()
      if (q.length) q.push(null)
    } else {
      print(first.value)
      for (let ch of first.children) {
        q.push(ch)
      }
    }
  }
}

update()
