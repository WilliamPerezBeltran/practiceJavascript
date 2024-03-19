// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end) {
  let count = start;
  let array = [];
  while (count <= end) {
    array.push(count);
    count++;
  }
  return array;
}

console.log(range(1, 10));

function range1(start, end) {
  let count = start;
  let array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

console.log(range1(1, 10));

function range2(...parameter) {
  let [start, end] = parameter;
  let count = start;
  let array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

console.log(range2(1, 10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function suma(parameter) {
  let result = 0;
  for (x of parameter) {
    result += x;
  }
  return result;
}

console.log(suma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log("-----------------");
console.log("-----------------");
console.log("-----------------");
console.log("-----------------");
console.log("-----------------");

function range22(x, y, step = x < y ? 1 : -1) {
  if (step > 0) {
    result = [];
    while (x <= y) {
      result.push(x);
      x++;
    }
    return result;
  } else {
    result = [];
    while (x >= y) {
      result.push(x);
      x--;
    }
    return result;
  }
}

console.log(range22(1, 10));
console.log(range22(5, 2, -1));

let array = [1, 2, 3, 4, 5];
for (var i = array.length - 1; i >= 0; i--) {
  console.log(i);
}
console.log("-----------------");

for (var i = array.length; i >= 0; --i) {
  console.log(i);
  // code...
}
