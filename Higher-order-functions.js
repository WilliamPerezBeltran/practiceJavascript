function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(11);
console.log(greaterThan10());

// =========================================
// =========================================
// =========================================
// =========================================
// ===========================00
function multiplyBy(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

var multiplyByTwo = multiplyBy(2);

var arr = [1, 2, 3, 4, 5];

var arrDoubled = arr.map(multiplyByTwo);

console.log(arrDoubled); // [ 2, 4, 6 ]

let x = [1, 2, 3, 4].map((x) => x * 2);
let t = [1, 2, 3, 4].map(function (x) {
  return x * 3;
});
console.log(x);
console.log(t);

// =========================================
// =========================================
// =========================================
// =========================================

// ==========================00

function multiplyBy(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

var multiplyByTwo = multiplyBy(2);

var arr = [1, 2, 3];

var arrDoubled = arr.map(multiplyByTwo);

console.log(arrDoubled); // [ 2, 4, 6 ]

// =========================================
// =========================================
// =========================================
// =========================================

// ==========================00
const square = function (x) {
  return x * x;
};
// prints 25
square(5);
const foo = square;
// prints 36
foo(6);

// =========================================
// =========================================
// =========================================
// =========================================

function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}
// prints 'What's up?'
greet("casual", formalGreeting, casualGreeting);

// =========================================
// =========================================
// =========================================
// =========================================
// =========================================
// Without Higher-order function

const arr = [1, 2, 3];
const ar = [];
for (let i = 0; i < arr.length; i++) {
  ar.push(arr[i] * 2);
}
// prints [ 2, 4, 6 ]
console.log(ar);
// With Higher-order function map

const arr = [1, 2, 3];
const ar = arr.map(function (item) {
  return item * 2;
});
console.log(ar);
// We can make this even shorter using the arrow function syntax:

const arr = [1, 2, 3];
const ar = arr.map((item) => item * 2);
console.log(ar);

// =========================================
// =========================================
// =========================================
// =========================================
// =========================================
