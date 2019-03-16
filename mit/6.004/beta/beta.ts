import { V } from './symbol_table'
import { A, print, sext, bit } from './utils'

// CPU state
let PC: number = 0x0

// General registers
const R: any[] = A(32)
// const Rx = (i: number, f: Function): void => {
//     if (i > 31 || i < 0) throw Error()
//     if (i === 31) return
//     R[i] = f(R[i])
// }

// Main Memory
const M: any[] = A(64 * 8, A(4)) // (n words) * (32 bit)
const ST = (v: string) => {
    // const l = M.length
    // if (v === '') { return M[i] }
    // M[i] = v
    PC += 4
}

//================
const enum OP {
    ADDC = '110000',
    MUL = '100010'

}

const ADDC = (a: string, y: any, c: string): void => {
    const s = []
    s.push(OP.ADDC)
    s.push(bit(5, V(c)))
    s.push(bit(5, V(a)))
    s.push(bit(16, Number.isInteger(y) ? y : V(y)))
    print('ADDC', s.join(' '), PC.toString(16))
    ST(s.join())
}

const LABEL = (l: string) => V(l, PC)

const MUL = (a: string, b: string, c: string): void => {
    const s = []
    s.push(OP.MUL)
    s.push(bit(5, V(c)))
    s.push(bit(5, V(a)))
    s.push(bit(5, V(b)))
    s.push(bit(11, '0'))
    print('MUL ', s.join(' '), PC.toString(16))
    ST(s.join())
}

let x = `
N = 12
ADDC(r31, N, r1)
ADDC(r31, 1, r0)
loop: MUL(r0, r1, r0)
SUBC(r1, 1, r1)
BNE(r1, loop, r31)
`

V('N', 12)
ADDC('r31', 'N', 'r1') // [0x00]
ADDC('r31', 1, 'r0') // [0x04]
LABEL('loop'); MUL('r0', 'r1', 'r0') // [0x08]
