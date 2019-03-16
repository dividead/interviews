import { A } from './utils'

const init = () => A(32, 0).map((_, i) => ([`r${i}`, i.toString()] as any))
const T = new Map<string, number>(init())

const V = (s: string, v?: number): number => {
    if (v) {
        if (T.has(s)) throw Error(`constant ${s} already exists -> (${s}: ${T.get(s)})`)
        T.set(s, v)
        return v
    } else {
        if (!T.has(s)) throw Error(`constant ${s} doesn't exist`)
        return T.get(s) as number
    }
}

export { V }