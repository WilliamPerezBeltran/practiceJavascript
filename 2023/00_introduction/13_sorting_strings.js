var names = ["Ana", "ana", "john", "John", "z", "b", "c", "d"];
var numeros = [1, 2, 3, 34, 5, 6, 7, 78];
console.log(names);
const namessorted = names.sort((a, b) => a - b);

console.log("====");
var numerosSorted = numeros.sort((a, b) => a - b);
console.log(numerosSorted);
console.log("====");
var numerosSorted1 = numeros.sort(function (a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }

  return 0;
});

console.log("====");
const palabras = ["amarillo", "banana", "uva", "pera", "kiwi", "zapato"];
console.log(palabras);
palabras.sort((a, b) => a.localeCompare(b));
console.log(palabras);
palabras.sort((a, b) => b.localeCompare(a));
console.log(palabras);

const anotherNumbers = [
  1,
  2,
  3,
  4,
  54,
  23,
  4234,
  23,
  6,
  679,
  8,
  545,
  321,
  5,
  654,
];
const anotherNumbers1 = [
  1,
  2,
  3,
  4,
  54,
  23,
  4234,
  23,
  6,
  679,
  8,
  545,
  321,
  5,
  654,
];
anotherNumbers.sort((a, b) => a - b);

const values = [1, 10, 21, 2];
const sortedValues = [...values].sort((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]

//ordenar ascendentemente el array siguiente [1,32,,45,4,67,45,3,23,45,34,7,45,574,557,45,35,46,0]
const num = [
  1,
  32,
  ,
  45,
  4,
  67,
  45,
  3,
  23,
  45,
  34,
  7,
  45,
  574,
  557,
  45,
  35,
  46,
  0,
];
num.sort((a, b) => b - a);
console.log(num);

//ordenar descendetemente el array siguiente [1,32,,45,4,67,45,3,23,45,34,7,45,574,557,45,35,46,0]
const num1 = [
  1,
  32,
  ,
  45,
  4,
  67,
  45,
  3,
  23,
  45,
  34,
  7,
  45,
  574,
  557,
  45,
  35,
  46,
  0,
];
num1.sort((a, b) => a - b);
console.log(num1);

//ordenar alfebeticamente  de a - z el array siguiente [1,32,,45,4,67,45,3,23,45,34,7,45,574,557,45,35,46,0]
const palabras2 = `comida
bebida
vegetal
planta
pasto, césped
flor
fruta
semilla
árbol
hoja
raíz
tallo
hongo
ciruela
pino
bambú
nuez
almendra
castaña
arroz
avena
cebada
trigo
verdura`;
console.log("====");
console.log(palabras2);
console.log("====");

var p = palabras2.split(/\r\n|\r|\n/).sort((a, b) => a.localeCompare(b));
console.log(p);
//ordenar alfebeticamente de z-a el array siguiente [1,32,,45,4,67,45,3,23,45,34,7,45,574,557,45,35,46,0]
var pp = palabras2.split(/\r\n|\r|\n/).sort((a, b) => b.localeCompare(a));
console.log(pp);
