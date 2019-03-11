package main

import (
	"bufio"
	"fmt"
	"os"
)

type any = interface{}

type node struct {
	value any
	next  *node
	prev  *node
}

type linkedlist struct {
	size int
	head *node
	tail *node
}

// создать файл, если не существует
// горутина держит файл открытым и пишет в него через канал

func main() {
	list := new(linkedlist)
	file, err := os.Open("aof.txt")
	fatal(err)
	defer file.Close()
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		// list.rpush(scanner.Text())
		list.rpush(scanner.Bytes())
		list.print()
	}
	lprint(list.head)
}

func fatal(err error) {
	if err != nil {
		panic(err)
	}
}

func (l *linkedlist) rpush(value any) {
	n := &node{value, nil, nil}
	l.size++
	if l.head == nil {
		l.head = n
		l.tail = n
		return
	}
	temp := l.tail
	temp.next = n
	n.prev = temp
	l.tail = n
}

func (l *linkedlist) lpush(value any) {
	n := &node{value, nil, nil}
	l.size++
	if l.head == nil {
		l.head = n
		l.tail = n
		return
	}
	temp := l.head
	temp.prev = n
	n.next = temp
	l.head = n
}

func (l *linkedlist) print() {
	s := "( "
	n := l.head
	for {
		if n == nil {
			println(s + ")")
			return
		}
		s += fmt.Sprintf("%s ", n.value)
		n = n.next
	}
}

func lprint(n *node) {
	if n == nil {
		fmt.Println("•")
		return
	}
	fmt.Printf("%s -> ", n.value)
	lprint(n.next)
}
