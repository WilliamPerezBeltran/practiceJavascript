// LIFO (Last In First Out) ultimo en entrar primero en salir, como una pila de libros

function Stack() {
  var items = [];
  this.push = function (element) {
    items.push(element);
  };
  this.pop = function () {
    return items.pop();
  };
  this.peek = function () {
    return items[item.length - 1];
  };
  this.isEmpty = function () {
    return item.length === 0;
  };
  this.size = function () {
    return items.length;
  };
  this.clear = function () {
    items = [];
  };
  this.print = function () {
    return items.toString();
  };
}
let instancia = new Stack();
instancia.push(1);
console.log(instancia);
