/*
The syntax for map is shown below.

let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);

When you call map on an array, it executes that callback on every element within it, returning a new array with all of the values that the callback returned.

Under the hood, map passes three arguments to your callback:

the current item in the array
the array index of the current item
the entire array you called map on 
Let's look at some code.

*/

// Durations are in minutes
const tasks = [
  {
    name: "Write for Envato Tuts+",
    duration: 120,
  },
  {
    name: "Work out",
    duration: 60,
  },
  {
    name: "Procrastinate on Duolingo",
    duration: 240,
  },
];

const task_names = [];
for (let i = 0, max = tasks.length; i < max; i++) {
  task_names.push(tasks[i].name);
}
// console.log(task_names)

const task_names1 = [];

tasks.forEach(function (task) {
  task_names1.push(task.name);
});

// console.log(task_names1)

const task_names2 = tasks.map(function (task, index, array) {
  // console.log("task")
  // console.log(task)
  // console.log("index")
  // console.log(index)
  // console.log("array")
  // console.log(array)
  return task.name;
});
// console.log(task_names2)

const task_names3 = tasks.map((task) => task.name);
console.log(task_names3);

const task_names4 = tasks.map((task, index, array) => task.name);
console.log(task_names4);

// Mapping an array of numbers to an array of square roots

let numbers = [1, 2, 3, 54, 6];

let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
console.log(roots);

// Using map to reformat objects in an array

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let reformattedArray = kvArray.map((obj) => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
console.log(reformattedArray);

let numbersString = ["1", "2", "3", "4", "5"];

let numbersNumber = numbersString.map((str) => parseInt(str));
console.log(numbersNumber);
