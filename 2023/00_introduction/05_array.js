let dayOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thrusday",
  "friday",
  "saturday",
  "sunday",
];
for (let i = 0; i < dayOfWeek.length; i++) {
  console.log(dayOfWeek[i]);
}

// Methods that we can use
let numbers = [0, 1, 2, 3, 4, 5, 6];
console.log(numbers);

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(numbers[i]);
  }
}

let array = [];
console.log(array);
console.log(array.push(1));

console.log(array);

for (let i = array.length; i >= 0; i--) {
  array[i] = array[i - 1];
}
array[0] = 0;
console.log(array);
array.unshift(10);
console.log(array);
array.unshift(20, 40);
console.log(array);

array.shift();
console.log(array);
array.unshift(100, 200, 300);
console.log(array);
array.shift();
console.log(array);

//===========
//concat method
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];
let rta = arr1.concat(arr2);

console.log(rta);

const animals = ["dog", "cat", "lion", "elephant", "pulpo", "dodo"];
console.log(animals);
console.log(animals.slice(1));
console.log(animals.slice(1, 4));
console.log(animals.slice(2, 4));
console.log(animals.slice(-1));
console.log(animals.slice(-2));
//===========
//every
arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr4 = arr3.every((x) => x <= 10);
console.log(arr4);
//===========
let arr5 = [1, 2, 3, 4, 56, 7, 8, 8, 6, 4, 3, 6];
function positivos(x) {
  return x >= 10;
}
let arr6 = arr5.filter(positivos);
console.log(arr6);
//===========
//foreach
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 3, 2, 5, 6, 5];
let arr8 = [];

arr7.forEach((element) => {
  arr8.push(`<a>${element}</a>`);
});
console.log(arr8);
//===========
//indexOf
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison", 2));
console.log(beasts.indexOf("noExist"));
//===========
//===========
const beasts1 = [
  "ant",
  "bison",
  "camel",
  "duck",
  "bison",
  "duck",
  "duck",
  "bison",
];
console.log(beasts1.indexOf("bison"));
console.log(beasts1.lastIndexOf("bison"));
//===========
//map
arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr9.map((element) => element + 10));
//===========
arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr10.some((x) => x % 2 === 0));

//===========
// sort methd

let ani = ["Z", "B", "K", "G", "L", "Tr", "D"];

console.log(ani.sort());

let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
numeros.sort((a, b) => {
  console.log(`comparing ${a},${b}`);
  return a > b ? 1 : a === b ? 0 : -1;
});
console.log(numeros);
