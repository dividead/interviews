import { V } from './symbol_table'
import { A, print, sext, bit } from './utils'

// CPU state
let PC: number = 0x0

// General registers
const R: any[] = A(32)
const Rw = (i: number, v: number): void => {
    if (i > 31 || i < 0) throw Error()
    if (i === 31) return
    R[i] = v
}
const Rd = (i: number): number => {
    if (i > 31 || i < 0) throw Error()
    return R[i]
}

// Main Memory
const M: any[] = A(64, 0) // (n words) * (32 bit)
const ST = (v?: string) => {
    // const l = M.length
    // if (v === '') { return M[i] }
    // M[i] = v
    PC += 4
}

//================
const enum OP {
    ADDC = '110000',
    SUBC = '110001',
    MUL = '100010',
    BNE = '011101',
}

const OPRT = (op: OP) => (a: string, b: string, c: string): void => {
    const s: string[] = [op]
    s.push(bit(5, V(c)))
    s.push(bit(5, V(a)))
    s.push(bit(5, V(b)))
    s.push(bit(11, 0))
    print(s.join(' '), PC)
    ST()
}

const COPR = (op: OP) => (a: string, y: any, c: string): void => {
    const s: string[] = [op]
    s.push(bit(5, V(c)))
    s.push(bit(5, V(a)))
    s.push(bit(16, Number.isInteger(y) ? y : V(y)))
    print(s.join(' '), PC)
    ST()
}

const ADDC = COPR(OP.ADDC)
const SUBC = COPR(OP.SUBC)
const MUL = OPRT(OP.MUL)

const LABEL = (l: string) => V(l, PC)

const BNE = (a: string, b: string, c: string): void => {
    const NPC = PC + 4
    const offset = ((V(b) - PC) / 4 - 1)
    Rw(V(c), NPC)
    if (Rd(V(a)) !== 0) {
        PC = NPC + 4 * offset
    } else {
        PC = NPC
    }
    const s: string[] = [OP.BNE]
    s.push(bit(5, V(c)))
    s.push(bit(5, V(a)))
    s.push(bit(16, offset))
    print(s.join(' '), PC)
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
SUBC('r1', 1, 'r1')
BNE('r1', 'loop', 'r31')
console.log(R.join('-'))