const width = 650
const height = 650
const step = 10
const R = width / step
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = width
canvas.height = height
ctx.fillStyle = 'rgba(255,0,255,1)'
ctx.strokeStyle = 'rgba(255,255,255,0.5)'

function point ({ x, y, d = 2 }) {
  ctx.beginPath()
  ctx.arc(x, y, d, 0, 2 * Math.PI)
  ctx.fill()

  // ctx.beginPath()
  // ctx.arc(x, y, d + 2, 0, 2 * Math.PI)
  // ctx.stroke()
}

function line (xs, ys, xe, ye) {
  ctx.beginPath()
  ctx.moveTo(xs, ys)
  ctx.lineTo(xe, ye)
  ctx.stroke()
}

function grid () {
  for (let x = 10; x < width; x += 10) {
    line(x, 0, x, height)
    line(0, x, width, x)
  }
}

function cells () {
  let c = []
  for (let x = 5; x < width; x += step) {
    let row = []
    for (let y = 5; y < height; y += step) {
      row.push({ x, y, alive: Math.random() < 0.44 })
    }
    c.push(row)
  }
  return c
}

function rules (cell, x, y, C) {
  const next = cell
  let alive = neighbours(x, y, C)
  if (alive < 2 || alive > 3) return { ...cell, alive: false }
  if (!cell.alive && alive === 3) return { ...cell, alive: true }
  return next
}

function neighbours (x, y, C) {
  let A = []
  if (x - 1 >= 0) A.push(C[x - 1][y])
  if (x + 1 < R) A.push(C[x + 1][y])
  if (y - 1 >= 0) A.push(C[x][y - 1])
  if (y + 1 < R) A.push(C[x][y + 1])
  if (x - 1 >= 0 && y - 1 >= 0) A.push(C[x - 1][y - 1])
  if (x + 1 < R && y - 1 >= 0) A.push(C[x + 1][y - 1])
  if (x + 1 < R && y + 1 < R) A.push(C[x + 1][y + 1])
  if (x - 1 >= 0 && y + 1 < R) A.push(C[x - 1][y + 1])
  return A.filter(c => c.alive).length
}

function update (C) {
  ctx.clearRect(0, 0, width, height)
  grid()
  let next = []
  C.forEach((row, x) => {
    next.push([])
    row.forEach((cell, y) => {
      next[x][y] = rules(cell, x, y, C)
      cell.alive && point(cell)
    })
  })
    // requestAnimationFrame(update)
  setTimeout(() => update(next), 100)
}

update(cells())
