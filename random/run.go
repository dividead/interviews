package main

func main() {
	one := X{1}
	one.map_(add(6)).map_(sub(4)).map_(sqrt())
}

type X struct {
	v int
}

func (x *X) map_(f func(int) int) *X {
	n := X{f(x.v)}
	n.inspect()
	return &n
}

func (x *X) inspect() {
	println("x -> ", x.v)
}

func add(a int) func(int) int {
	return func(b int) int {
		return a + b
	}
}

func sub(a int) func(int) int {
	return func(b int) int {
		return b - a
	}
}

func sqrt() func(int) int {
	return func(a int) int {
		return a * a
	}
}
