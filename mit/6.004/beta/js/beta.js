"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symbol_table_1 = require("./symbol_table");
const utils_1 = require("./utils");
// CPU state
let PC = 0x0;
// General registers
const R = utils_1.A(32);
const Rw = (i, v) => {
    if (i > 31 || i < 0)
        throw Error();
    if (i === 31)
        return;
    R[i] = v;
};
const Rd = (i) => {
    if (i > 31 || i < 0)
        throw Error();
    return R[i];
};
// Main Memory
const M = utils_1.A(64, 0); // (n words) * (32 bit)
const ST = (v) => {
    // const l = M.length
    // if (v === '') { return M[i] }
    // M[i] = v
    PC += 4;
};
const OPRT = (op) => (a, b, c) => {
    const s = [op];
    s.push(utils_1.bit(5, symbol_table_1.V(c)));
    s.push(utils_1.bit(5, symbol_table_1.V(a)));
    s.push(utils_1.bit(5, symbol_table_1.V(b)));
    s.push(utils_1.bit(11, 0));
    utils_1.print(s.join(' '), PC);
    ST();
};
const COPR = (op) => (a, y, c) => {
    const s = [op];
    s.push(utils_1.bit(5, symbol_table_1.V(c)));
    s.push(utils_1.bit(5, symbol_table_1.V(a)));
    s.push(utils_1.bit(16, Number.isInteger(y) ? y : symbol_table_1.V(y)));
    utils_1.print(s.join(' '), PC);
    ST();
};
const ADDC = COPR("110000" /* ADDC */);
const SUBC = COPR("110001" /* SUBC */);
const MUL = OPRT("100010" /* MUL */);
const LABEL = (l) => symbol_table_1.V(l, PC);
const BNE = (a, b, c) => {
    const NPC = PC + 4;
    const offset = ((symbol_table_1.V(b) - PC) / 4 - 1);
    Rw(symbol_table_1.V(c), NPC);
    if (Rd(symbol_table_1.V(a)) !== 0) {
        PC = NPC + 4 * offset;
    }
    else {
        PC = NPC;
    }
    const s = ["011101" /* BNE */];
    s.push(utils_1.bit(5, symbol_table_1.V(c)));
    s.push(utils_1.bit(5, symbol_table_1.V(a)));
    s.push(utils_1.bit(16, offset));
    utils_1.print(s.join(' '), PC.toString(16));
};
let x = `
N = 12
ADDC(r31, N, r1)
ADDC(r31, 1, r0)
loop: MUL(r0, r1, r0)
SUBC(r1, 1, r1)
BNE(r1, loop, r31)
`;
symbol_table_1.V('N', 12);
ADDC('r31', 'N', 'r1'); // [0x00]
ADDC('r31', 1, 'r0'); // [0x04]
LABEL('loop');
MUL('r0', 'r1', 'r0'); // [0x08]
SUBC('r1', 1, 'r1');
BNE('r1', 'loop', 'r31');
console.log(R.join('-'));
