// ==========================================================================
// https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/
// ==========================================================================

// ==========================================================================
// https://medium.com/@vmarchesin/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
// ==========================================================================

// ==========================================================================
// https://viblo.asia/p/reduce-javascript-Eb85oxW0K2G
const numbers = [5, 10, 15];
const total = numbers.reduce((accumulator, item) => accumulator + item);
console.log(total);
//Result total = 60
const players = [
  { id: 11, name: "entrada", age: 33 },
  { id: 12, name: "entrada", age: 34 },
  { id: 13, name: "entrada", age: 35 },
  { id: 14, name: "salida", age: 21 },
  { id: 15, name: "salida", age: 24 },
];

const getMapFromArray = (data) => {
  return data.reduce((obj, item) => {
    obj[item.id] = { name: item.name, age: item.age };
    return obj;
  }, {});
};

// {
//   '11': { name: 'Messi', age: 33 },
//   '12': { name: 'Ronaldo', age: 34 },
//   '13': { name: 'Young', age: 35 },
//   '14': { name: 'Mane', age: 21 },
//   '15': { name: 'Salah', age: 24 }
// }

console.log(getMapFromArray(players));
// ==========================================================================

// https://codereview.stackexchange.com/questions/112813/reduce-array-of-objects-into-object-of-arrays
const rows = [
  {
    k: "a",
    v: 0,
  },
  {
    k: "a",
    v: 1,
  },
  {
    k: "b",
    v: 2,
  },
];
console.log("rows");
console.log(rows);
let rowss = rows.reduce(
  (result, item) => ({
    ...result,
    [item.k]: [...(result[item.k] || []), item.v],
  }),
  {}
);
console.log("rowss");
console.log(rowss);

var result = rows.reduce(function (result, item) {
  result[item.k] = (result[item.k] || []).concat(item);
  return result;
}, {});

console.log("result");
console.log(result);
// ==========================================================================
// https://putaindecode.io/articles/array-reduce-par-l-exemple/
// ==========================================================================

// ==========================================================================
// https://www.iditect.com/how-to/52937022.html
// ==========================================================================

// ==========================================================================
// https://cloudstack.ninja/northernwind/reduce-array-of-objects-with-deeply-literals-keys-in-js/
// ==========================================================================

// ==========================================================================
// https://stackoverflow.com/questions/65277252/reduce-array-of-objects-with-deeply-literals-keys-in-js
// ==========================================================================

// ==========================================================================
// https://cmsdk.com/javascript/reduce-array-of-objects-with-dynamic-keys.html
let data = [
  { A: 4, B: 2 },
  { A: 2, B: 1 },
  { A: 3, B: 1 },
  { A: 2, B: 1, C: 1 },
];

result4 = data.reduce(
  (r, o) => (
    Object.entries(o).forEach(([k, v]) => (r[k] = (r[k] || 0) + v)), r
  ),
  {}
);

console.log("result4");
console.log(result4);
// ==========================================================================

// ==========================================================================
// ==========================================================================

// ==========================================================================
// ==========================================================================

// ==========================================================================
// ==========================================================================

// ==========================================================================
// https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
// ==========================================================================

console.log("==========");
console.log("==========");
console.log("==========");
console.log("==========");
console.log("==========");
const array1 = [1, 2, 3, 4];

let x = array1.reduce((accu, value) => {
  return accu + value;
});
x = array1.reduce(function (accu, value) {
  return accu + value;
});
console.log(x);

const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" },
];

let result5 = pokemon.reduce(function (accu, item) {
  accu[item.name] = { type: item.type };
  return accu;
}, {});

console.log("result5");
console.log("result5");
console.log("result5");
console.log(result5);

const playersl = [
  { id: 11, name: "entrada", age: 33 },
  { id: 12, name: "entrada", age: 34 },
  { id: 13, name: "entrada", age: 35 },
  { id: 14, name: "salida", age: 21 },
  { id: 15, name: "salida", age: 24 },
];

let adf = playersl.reduce(
  (accu, item, index) => {
    item.name === "entrada"
      ? (accu[item.id] = item.name)
      : (accu[item.id] = item.name);
    return accu;
  },
  {},
  {}
);

console.log("adf");
console.log(adf);

const arraydsfds = [
  { id: 11, name: "entrada", age: 33 },
  { id: 12, name: "entrada", age: 34 },
  { id: 13, name: "entrada", age: 35 },
  { id: 14, name: "salida", age: 21 },
  { id: 15, name: "salida", age: 24 },
];

let akafjalf = arraydsfds.reduce(
  (accumulator, current) => ({
    ...accumulator,
    [current.movementType]: [accumulator[current.movementType], current],
  }),
  {
    entrada: [],
    salida: [],
  }
);

console.log(akafjalf);

const entrada10 = [
  {
    id: 1,
    quantity: 10,
    code_id: 1,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
  {
    id: 2,
    quantity: 20,
    code_id: 2,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
  {
    id: 3,
    quantity: 30,
    code_id: 3,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
  {
    id: 4,
    quantity: 40,
    code_id: 4,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
  {
    id: 5,
    quantity: 50,
    code_id: 5,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
  {
    id: 6,
    quantity: 60,
    code_id: 6,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
  {
    id: 7,
    quantity: 60,
    code_id: 6,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
  {
    id: 8,
    quantity: 60,
    code_id: 6,
    movementType: "entrada",
    tags: "[a,v,c,d,f,r]",
  },
];
console.log("entrada10");
console.log(entrada10);

let result10 = entrada10.reduce((accu, item, index) => {
  accu[item.code_id] = {
    id: item.id,
    quantity: item.quantity,
    code_id: item.code_id,
    movementType: item.movementType,
    tags: item.tags,
  };
  return accu;
}, {});

console.log("result10");
console.log(result10);

let result11 = entrada10.reduce((accu, item, index) => {
  // accu[ item.code_id] = { id: item.id, quantity: item.quantity, code_id:item.code_id, movementType: item.movementType, tags:item.tags }
  return item.code_id;
}, []);

console.log("result11");
console.log(result11);
