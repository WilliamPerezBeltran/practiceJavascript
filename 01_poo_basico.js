//funcion creando un objecto retornandolo
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function () {
    return "hola " + this.name;
  };
  return obj;
}

var salsa = createNewPerson("william");
console.log(salsa.name);
console.log(salsa.greeting());

console.log("-----------");

function Person(name) {
  this.name = name;
  this.greeting = function () {
    return "hola greeting " + name;
  };
}

var person1 = new Person("william");
console.log(person1.name);
console.log(person1.greeting());

var person2 = new Person("oscar");
var person3 = new Person("rocio");
console.log("-------");
console.log(person2);
console.log(person3);
