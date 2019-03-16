const A = (i: number, f: number | number[] = 0) => Array(i).fill(f)

const print = console.log

const sext = (i: string): string => {
    const x = parseInt(i, 10)
    if (x < 0) {
        return (x >>> 0).toString(2)
    } else {
        const v = x.toString(2)
        return '0'.repeat(32 - v.length) + v
    }
}

const bit = (n: number, i: any): string => sext(i.toString()).slice(32 - n)

export { A, print, sext, bit }