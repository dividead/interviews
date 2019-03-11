function point({ x, y, d = 3 }) {
  // ctx.fillStyle = `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},1)`
  ctx.beginPath()
  ctx.arc(x, y, d, 0, 2 * Math.PI)
  ctx.fill()

  // ctx.beginPath()
  // ctx.arc(x, y, d + 2, 0, 2 * Math.PI)
  // ctx.stroke()
}

function blink(x, y) {
  ctx.fillStyle = 'rgba(255,0,0,0.5)'
  ctx.fillRect(x * step, y * step, step, step)
}

const rand = n => Math.round(Math.random() * n)
