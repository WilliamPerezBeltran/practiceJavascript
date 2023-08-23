// ====== Objects ======
const obj = {
  a: "something",
  b: 234,
  c: false,
};

console.log(Object.keys(obj));

for (item in Object.keys(obj)) {
  console.log(item);
}

console.log(Object.values(obj));
console.log(Object.entries(obj));

for (let x in Object.entries(obj)) {
  console.log(x);
}

// simple array
const arr = [1, 2, 3];
console.log(Object.keys(arr));

const person4 = {
  name: "brayan",
  last: "peptito",
};
console.log(person4);
console.log(typeof person4);

const person2 = new Object();
person2.name = "pepito";
person2.last = "apllediod ";

console.log(person2);
console.log(typeof person2);

function Person3(name, last) {
  this.name = name;
  this.last = last;
}
console.log(Person3);

const personOne = new Person3("perez", "beltran");
console.log(personOne);

const x = {};

x.name = "walter mercado";
console.log(x.name);

class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

const person = new Person("testFirstName", "testLastName");

console.log(person.firstName); // testFirstName
console.log(person.lastName); // testLastName

class Rectangulo {
  constructor(lado) {
    this.lado = lado;
  }
}

let instanciaLado = new Rectangulo(23);
console.log(instanciaLado.lado);

//=======hh=
console.log("=====");
const myObject = {
  a: "something",
  b: 234,
  c: false,
};

for (let item in myObject) {
  console.log(`${item}`);
}

console.log("=====");
console.log(Object.keys(myObject));
for (let item in Object.keys(myObject)) {
  console.log("keys");
  console.log(item);
}

console.log("=====");
console.log(Object.values(myObject));
for (let item in Object.values(myObject)) {
  console.log("values");
  console.log(item);
}

for (let elemento in myObject) {
  console.log(`=====>   ${elemento}  ${myObject[elemento]}`);
}

console.log("=====  ==============");

const arr101 = ["a", "e", "r"];
console.log(Object.keys(arr101));
const obj100 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj100));

const anObj = { 100: "a", 2: "b", 7: "c" };

console.log(Object.keys(anObj));
console.log(Object.getOwnPropertyNames(anObj));

const anotherObject = Object.assign(myObject);
console.log("=====  ==============");
console.log(anotherObject);

const one = Object.assign({}, myObject);
console.log(one);
