const array = [4, 8, 15, 16, 23, 42, 47]
const width = 1200
const height = 600
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = width
canvas.height = height
ctx.font = `25px courier`
ctx.shadowColor = '#d53'
ctx.shadowBlur = 2
ctx.lineJoin = 'bevel'
ctx.lineWidth = 3
ctx.fillStyle = 'rgba(255,255,255,1)'
ctx.strokeStyle = 'rgba(255,0,0,1)'
const p = console.log
let N = 0

function box(i, v) {
    const l = 50
    ctx.strokeRect(0, 10, l, l)
    ctx.font = `12px courier`
    ctx.fillText(i, 5, 25)
    ctx.font = `25px courier`
    ctx.fillText(v, 5, 50)
}

function open(t) {
    ctx.translate(0, N * 60)
    ctx.font = `50px courier`
    const text = `${t}( `
    const tl = text.length * 25
    ctx.fillText(text, 5, 50)
    ctx.translate(tl, 0)
}

function close() {
    ctx.font = `50px courier`
    ctx.fillText(' )', 15, 50)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    N++
}

const print_list = a => {
    open('init')
    for (let i = 0; i < a.length; i++) {
        ctx.translate(i && 60, 0)
        box(i, a[i])
    }
    close()
}

const print_fn = fn => {
    ctx.font = '50px courier'
    // const t = `\\${fn.toString().replace('=>', '->')}`
    ctx.translate(50, 0)
    const t = `,${fn.toString().replace(/\s/g, '')}`
    ctx.fillText(t, 0, 50)
    ctx.translate(t.length * 22, 0)
}

const map_list = (a, fn) => {
    open('map')
    for (let i = 0; i < a.length; i++) {
        ctx.translate(i && 60, 0)
        box(i, a[i])
    }
    print_fn(fn)
    close()
    ctx.font = '50px courier'
    ctx.translate(50, N * 60)
    ctx.fillText('λ→', 0, 50)
    ctx.translate(75, 0)
    for (let i = 0; i < a.length; i++) {
        ctx.translate(i && 60, 0)
        box(i, fn(a[i]))
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    N++
}

// function mouse(evt) {
//     var rect = canvas.getBoundingClientRect()
//     ctx.font = `50px courier`
//     const s = JSON.stringify({
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     })
//     ctx.fillText(s, 10, 550)
// }

function update() {
    N = 0
    ctx.clearRect(0, 0, width, height)
    // print_list(array)
    map_list(array, x => x + 1)
    map_list(array, x => x * 2)
    map_list(array, x => x - 1)
    // requestAnimationFrame(update)
    // setTimeout(() => update(), 100)
}

update()
