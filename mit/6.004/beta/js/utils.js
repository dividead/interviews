"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const A = (i, f = 0) => Array(i).fill(f);
exports.A = A;
const print = console.log;
exports.print = print;
const sext = (i) => {
    const x = parseInt(i, 10);
    if (x < 0) {
        return (x >>> 0).toString(2);
    }
    else {
        const v = x.toString(2);
        return '0'.repeat(32 - v.length) + v;
    }
};
exports.sext = sext;
const bit = (n, i) => sext(i.toString()).slice(32 - n);
exports.bit = bit;
