const canvas = document.getElementById('cvs');
const ctx = canvas.getContext('2d');
const state = {
    graphs: [],
    slider: { start: 0.75, percent: 0.25, x: 0 },
    buttons: {},
};
async function init() {
    const raw = await fetch('chart_data.json');
    const data = await raw.json();
    console.log(data[4]);
    state.graphs = data;
    canvas.addEventListener("mousemove", evt => {
        var rect = canvas.getBoundingClientRect();
        const pos = {
            x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
            y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
        };
        // state.info.mouse = pos
        // console.log(pos)
    });
    render();
}
function point(x, y, d = 3) {
    ctx.fillStyle = 'rgba(255,0,255,1)';
    ctx.beginPath();
    ctx.arc(x, y, d, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, d + 2, 0, 2 * Math.PI);
    ctx.stroke();
}
function line(xs, ys, xe, ye) {
    ctx.beginPath();
    ctx.moveTo(xs, ys);
    ctx.lineTo(xe, ye);
    ctx.stroke();
}
// function grid() {
//     for (let x = 10; x < width; x += step) {
//         line(x, 0, x, height)
//         line(0, x, width, x)
//     }
// }
// function seed(n) {
//     const now = Date.now()
//     const day = 24 * 60 * 60 * 1000
//     for (let i = 0; i < n; i++) {
//         const date = new Date(now - i * day)
//         const leave = ~~(Math.random() * 150)
//         const join = ~~(Math.random() * 240) + 10
//         state.graph.data.join.unshift({ date, amount: join })
//         state.graph.data.leave.unshift({ date, amount: leave })
//     }
// }
function prepare() {
}
function graph(mtx, legend = true) {
    const m = 10;
    const cw = ctx.canvas.width;
    const gw = cw - m;
    const gh = Math.floor(ctx.canvas.height * 0.4);
    const { colors, columns, names, types } = state.graphs[4];
    const [x, ...ys] = columns;
    const max = Math.max(...ys.map(([name, ...values]) => Math.max(...values)));
    ctx.setTransform(...mtx);
    { // grid
        const grey = 'rgba(255,255,255,0.5)';
        ctx.strokeStyle = grey;
        ctx.fillStyle = grey;
        const step = Math.floor(gh / 5);
        for (let y = 5; y >= 0; y--) {
            const yy = gh - y * step;
            line(m, yy, gw, yy);
            if (legend) {
                const text = Math.floor(max * (y / 5)).toString();
                ctx.fillText(text, m, yy - 3);
            }
        }
    }
    { // graph
        function _graph(column) {
            const [name, ...rest] = column;
            const r = state.slider;
            const start = Math.ceil(rest.length * r.start);
            const end = start + Math.ceil(rest.length * r.percent);
            const data = rest.slice(start, end);
            const len = data.length;
            const step = Math.ceil(gw / len);
            ctx.strokeStyle = colors[name];
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = len - 1; i >= 0; i--) {
                const x1 = gw - step * (len - 1 - i);
                const y1 = Math.floor(gh * (1 - data[i] / max));
                ctx.moveTo(x1, y1);
                const prev = data[i - 1];
                if (prev) {
                    const x2 = x1 - step;
                    const y2 = Math.floor(gh * (1 - prev / max));
                    ctx.lineTo(x2, y2);
                }
                else {
                    ctx.stroke();
                }
            }
        }
        ys.forEach(_graph);
    }
    if (legend) { // dates
        const len = x.length;
        const step = Math.ceil(gw / len);
        let xt = gw;
        for (let i = len - 1; i >= 0; i--) {
            const date = x[i];
            const x1 = gw - step * (len - 1 - i);
            if (x1 <= xt) {
                const t = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
                const tw = Math.ceil(ctx.measureText(t).width);
                xt - tw > 0 && ctx.fillText(t, xt - tw, gh + 10);
                xt -= (tw + m);
            }
        }
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return [gh, gw];
}
function slider(y, h, w, percent = 0.25) {
    const wd = Math.floor(w * percent);
    const x = w - wd;
    ctx.lineWidth = 5;
    state.slider.x = x;
    state.slider.start = 1 - percent;
    state.slider.percent = percent;
    ctx.strokeStyle = 'rgba(0,255,255,0.2)';
    ctx.setTransform(1, 0, 0, 1, 0, y);
    ctx.strokeRect(x, 0, wd, h);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function render() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    // grid()
    const [h, w] = graph([1, 0, 0, 1, 0, 50]);
    graph([1, 0, 0, 0.2, 0, h + 100], false);
    slider(h + 100, h * 0.2, w);
    // requestAnimationFrame(render)
    // setTimeout(render, 125)
}
init();
// function info() {
//     const { box: { x, y, w, h }, mouse } = state.info
//     ctx.clearRect(x, y, w, h)
//     ctx.font = '20px';
//     ctx.fillText(`x:${~~mouse.x} y:${~~mouse.y}`, x + 5, y + 5)
// }
