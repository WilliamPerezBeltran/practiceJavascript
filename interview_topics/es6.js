
//                                 source

// https://blog.stackademic.com/spread-operator-in-javascript-and-reactjs-a-quick-guide-8db6a19d5e37
// https://blog.stackademic.com/spread-operator-in-javascript-and-reactjs-a-quick-guide-8db6a19d5e37
// https://ponyfoo.com/articles/es6#introduction









//assignment destructuring:
var x = { bar: "ole", foo: "rastarasta" };
var { bar, foo } = x;
console.log(`${bar} - ${foo}`);

//rest parameter

function concat(...arg) {
  return arg.join(" ");
}

function words(...argments) {
  return argments.join(" ");
}

function sum(mult, base, ...numbers) {
  console.log(`first argument: ${mult}`);
  console.log(`second argument: ${base}`);
  console.log(`rest arguments: ${numbers}`); //<== array of numbers
  console.log(numbers);
}

console.log(concat(1, 2, 3, 4, 5, 6, 54));
console.log(words("hi", "word", "oe"));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

console.log("==========");

//spread opertor
function spread(...arg) {
  console.log(arg);
  let x = "first variable";
  return { x, ...arg };
}

console.log(spread(12, 2, 3));
console.log("==========");
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c);

console.log("==========");
function suma(sum1, sum2, sum3) {
  return sum1 + sum2 + sum3;
}

console.log(suma(1, 2, 34));

function sumaa(sum1, sum2, sum3) {
  return sum1 + sum2 + sum3;
}
let aaa = [1, 2, 3];

console.log(sumaa(...aaa));

console.log("==========");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);

console.log("==========");

// String manipulation

let string = "ole parcero";
console.log(string);
console.log(...string);

console.log("==========");

// Function Rest Parameters
function summaa(param1, param2, ...numbers) {
  console.log(`param1: ${param1}`);
  console.log(`param2: ${param2}`);
  console.log(`numbers resto: ${numbers}`);
}

console.log(summaa(1, 2));
console.log("==========");

function sum(param1, param2, ...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2)); // Result: 3
console.log("==========");

const ParentComponent = () => {
  const user = { name: "John", age: 35, gender: "Male" };

  return { ...user };
  // return {user}
};
console.log(ParentComponent());
console.log("==========");

// Parent Component

console.log("==========");

console.log("==========");

console.log("==========");

console.log("==========");

console.log("==========");

console.log("==========");

console.log("==========");

console.log("==========");

console.log("==========");
