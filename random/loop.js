// for (var i = 0; i < 5; i++) {
//   console.log(i)
// }

// var o = {
//   a: 123,
//   foo: function() {
//     console.log(this.a)
//   }
// }

// var a = 321
// let x = o.foo

// x()

// function Animal() {
//   console.log("animal")
// }

// var x = new Animal()

// console.log(Animal.__proto__, x, x.__proto__)

// var foo = {
//   smthng() {
//     console.log(123)
//   }
// }

// var bar = Object.create(foo)
// bar.smthng()
// console.log(foo.prototype, bar.__proto__.smthng())

// const Animal = {
//   scream(str) {
//     console.log("XxXXxX", str)
//   }
// }

// const Cat = Object.create(Animal)

// Cat.meow = () => console.log("meow")

// const Dog = Object.create(Animal)

// Dog.bark = () => console.log("woof")
// Dog.screamN = function() {
//   this.scream(123)
// }

// let c = Object.create(Cat)
// let d = Object.create(Dog)

// c.meow()
// c.scream()
// d.bark()
// d.screamN()

// function x() {}
// x.a = 1
// x.prototype.a = 2

// let y = new x()
// console.log(y.a, y.prototype, x.prototype)

// const { inspect } = require("util")
// const show = any => console.log(inspect(any, true, 5, true))
// show(Function.prototype)
