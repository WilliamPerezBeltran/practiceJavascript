var nums = ["one", "two", "three", "four", "ten"];
nums.pop();
console.log(nums);

var letters = ["a", "b", "c", "d"];
letters.push("e");
console.log(letters);
var vehicles = ["lollipop", "car", "truck", "tank"];
vehicles.shift();
console.log(vehicles);
var sports = ["football", "baseball", "hockey"];
sports.unshift("rugby");
console.log(sports);
var years = [1990, 2015, 1066, 43, 90, 1607];

console.log(years);

years.splice(0, 2);

console.log(years);
years.splice(0, 0, 123, 123, 123, 123, 123, 123, 878);
console.log(years);
years.splice(0, 6);
console.log(years);
years.splice(0, 0, 12, 12, 12, 12, 12, 21);
console.log(years);
years.splice(0, 5, 10);
console.log(years);

// reduce

let numbers = [1, 2, 3, 4, 5, 6, 6];
const testSumAListOfNumers = function () {
  let numbers = [1, 2, 3, 4, 5, 6, 6];
  let sumArr = [];
  let sum = 0;
  numbers.forEach((element, index, array) => {
    console.log(`${element} , ${index}[ ${array}]`);
    sum += element;
  });

  return sum;
};
console.log(testSumAListOfNumers());

console.log(numbers.reduce((acco, item) => acco + item));

let a = [1],
  b = [2];
let c = a.concat(b);
console.log(c);
//=====every====
const r = [1, 30, 39, 29, 10, 13];
let rr = r.every((currentValu) => currentValu > 10);
console.log(rr);

// ==== filter===
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let ee = words.filter((ele) => ele.length > 7);
console.log(ee.map((element) => element.length));
console.log(ee);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];
let filterItems = (fruits, query) => {
  return fruits.filter((element) =>
    element.toLowerCase().includes(query.toLowerCase())
  );
};
console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

var total = [1, 2, 3, 4].reduce((accu, item) => accu + item, 0);
console.log(total);

const entradas = ["apple", "banana", "orange"];
let entra = entradas.entries();

for (let entry of entra) {
  console.log(entry);
}
for (let [key, value] of entradas.entries()) {
  console.log(`${key} ${value}`);
}
console.log("====");
console.log(entra);
for (let [key, value] of entra) {
  console.log(`${key} ${value}`);
}

const array1 = [1, 2, 3, 4];
console.log(array1.fill(10, 1, 3));

const cha = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
// ===== map ======

//Get an array of all names
console.log(cha.map((item) => item.name));
console.log(
  cha.map(function (item) {
    return item.name;
  })
);
function getName(item) {
  return item.name;
}
console.log(cha.map(getName));
// Get an array of all heights
console.log(cha.map((item) => item.height));
//Get an array of objects with just name and height properties
console.log(
  cha.map((item) => {
    return { name: item.name, height: item.height };
  })
);

console.log("==================");
//Get an array of all first names
console.log(cha.map((item) => item.name.split(" ")[0]));

// ===== reduce ======
//Get the total mass of all charactersc
console.log(cha.reduce((accu, item) => accu + parseInt(item.height), 0));
//Get the total height of all characters
console.log(cha.reduce((accu, item) => accu + parseInt(item.height), 0));
//Get the total number of characters in all the character names
console.log("=========ljkjk");
let totalNames = cha.reduce(
  (accu, item) => accu + item.name.split(" ").join("").length,
  0
);
//Get the total number of characters by eye color (hint. a map of eye color to count
console.log(totalNames);
console.log(cha[0].name.split(" ").join("").length);
console.log(cha.map((item) => item.name.split(" ").join("").length));
console.log(
  cha
    .map((item) => item.name.split(" ").join("").length)
    .reduce((accu, item) => accu + item, 0)
);

// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?
