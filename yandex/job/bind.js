function bind(method, context) {
  // в args попадет все, что передано после method и context
  var args = Array.prototype.slice.call(arguments, 2);
  // возвращается новая функция
  return function () {
    // новые аргументы добавляются к замыканию
    var a = args.concat(Array.prototype.slice.call(arguments, 0));
    // выпонляентся функция с указанным контекстом и аргументами
    return method.apply(context, a);
  }
}
// Используется для возможности каррирования, которой нет в языке
const bindES = (m, c, ...args) => (...extra) => m.apply(c, [...args, ...extra])

let x = bindES(Math.max, null, 9, 2, 3)
console.log(x(4, 11, 7))