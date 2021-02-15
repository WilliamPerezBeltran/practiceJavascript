// ===========TEORIA===========
// ===========TEORIA===========

/*
La idea es filter un array de objetos que me los unicos
valores de un determinado valor 
*/

/*
retornar un array con los valores unicos de la edad
Filtrar  los unicos valores de la edad 
*/

let array = [
  { name: "Joe", age: 17 },
  { name: "Bob", age: 17 },
  { name: "Carl", age: 35 },
];

// 1. Se hace en dos pasos con map y con filter

let a = array.map((item) => item.age); //=> da como resultado [ 17, 17, 35 ]
// --filtrar los unicos valores--
console.log(a);

let b = a.filter((value, index, array) => array.indexOf(value) === index); //=> da como resultado [ 17, 17, 35 ]

console.log(b);

// ===========CASO-REAL===========
// ===========CASO-REAL===========

let tagsOfArray = [
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 4,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 4,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 4,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 4,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 2,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 4,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 3,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 3,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
  {
    codeName: "codigo_1",
    code_id: 3,
    id: 47,
    productId: 1,
    productName: "producto_1",
    tagName: "E280689400004002BD11A468",
  },
];

let result = tagsOfArray
  .map((map) => map.code_id)
  .filter(
    (currentValue, index, array) => array.indexOf(currentValue) === index
  );

console.log("result");
console.log(result);
