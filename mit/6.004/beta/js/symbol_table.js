"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const init = () => utils_1.A(32, 0).map((_, i) => [`r${i}`, i.toString()]);
const T = new Map(init());
const V = (s, v) => {
    if (v) {
        if (T.has(s))
            throw Error(`constant ${s} already exists -> (${s}: ${T.get(s)})`);
        T.set(s, v);
        return v;
    }
    else {
        if (!T.has(s))
            throw Error(`constant ${s} doesn't exist`);
        return T.get(s);
    }
};
exports.V = V;
