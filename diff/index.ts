interface slice<T> {
    item: T[],
    diff: {
        key: number,
        prev: T,
        value: T
    }
}

class array<T> {
    private history: slice<T>[] = []
    private a: T[]
    private gen = 0
    private name: string

    constructor(name: string, from: T[]) {
        this.a = from
        this.history.push({ item: [...from], diff: null })
        this.name = name
    }

    public set(key: number, value: T) {
        const prev = this.a[key]
        if (prev === value) return
        this.a[key] = value
        this.gen++
        this.history.push({ item: [...this.a], diff: { key, value, prev } })
    }

    public get(k: number): T {
        return this.a[k]
    }

    public print() {
        console.log(this.name, this.gen)
        this.history.forEach((v, i) => console.log(i, v))
    }
}

let xs = new array<number>('xs', [1, 1, 1])
xs.set(2, 9)
xs.set(2, 9)
xs.set(1, 5)
xs.set(0, 15)
xs.set(2, 2)
xs.print()





