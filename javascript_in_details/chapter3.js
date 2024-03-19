entries = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < entries.length; ++i) {
  console.log(entries[i]);
  // code...
}
console.log("-----");

for (let entry of entries) {
  console.log(entry);
}
console.log("-----");

let array = [1, 2];

array.push(90);
console.log(array);
array.shift();
console.log(array);
array.shift();
console.log(array);

let theStack = [];

function remember(item) {
  theStack.push(item);
}

function getTask() {
  return theStack.shift();
}

function urgent(task) {
  theStack.unshift(task);
}
console.log("-----");

remember("la");
remember(10);
remember(20);
remember(30);
remember(40);
console.log(theStack);

console.log(getTask());
console.log(theStack);

console.log(urgent("in"));
console.log(urgent("in"));
console.log(urgent("in"));
console.log(urgent("in"));
console.log(urgent("in"));
console.log(theStack);
console.log("coconuts".slice(4, 7));

console.log("-----");

function max(...numbers) {
  console.log(numbers[0]);
  console.log(numbers);
  let result = numbers[0];
  for (number in numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}
console.log("-----");
console.log(max(1, 2, 3, 5, 8, 4, -1, -8));

console.log("-----");

function max(...numbers) {
  let result = numbers[0];
  for (let number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}
console.log("-----");
console.log(max(1, 2, 3, 5, 8, 4, -1, -8));
console.log(max(2, 5, 4, 3, 7, 10 - 54));
console.log(max(2, -7, 10 - 54));
console.log(max(12, 13, 14, 0.13, -54));

function mierda(a, ...parameters) {
  return parameters + a;
}
let o = [2, 3, 4, 5, 6, 7, 8, 21, 908];
console.log(mierda(1, 2, 3, ...o, 4, 5, 6));

let word = [1, 2, 3];
let x = [10, 20, word].flat();
console.log(x);
let xx = [10, 20, ...word];
console.log(xx);

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

console.log("-----");
console.log(userId(user));

console.log("-----");
console.log("-----");
console.log("-----");
console.log("-----");

const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for ({
  name,
  family: { father },
} of people) {
  console.log(father);
}
