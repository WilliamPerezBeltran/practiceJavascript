/*


The syntax for the reduce array method in JavaScript is:

let newArray = arr.filter(callback(currentValue, accumulatedValue) {
  // return the accumulated value, given the current and previous  accumulated value
}, initialValue[, thisArg]);

map creates a new array by transforming every element in an array, individually. 
filter creates a new array by removing elements that don't belong. reduce, on the other hand, 
takes all of the elements in an array and reduces them into a single value.

Just like map and filter, reduce is defined on Array.prototype and so is available on any array, 
and you pass a callback as its first argument. But it also takes a second argument: the value to 
start combining all your array elements into. 

reduce passes your callback four arguments:

the current value
the previous value 
the current index
the array you called reduce on


*/

// reduce in Practice

let numbers0 = [1, 2, 3, 4, 5, 6],
  total0 = 0;

numbers0.forEach(function (number) {
  total0 += number;
});
console.log(total0);

const total1 = [1, 2, 3, 4, 5, 6].reduce(
  (previous, current) => previous + current,
  0
);
console.log(total1);

// ===============================

const total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
  const val = previous + current;
  console.log(
    "The previous value is " +
      previous +
      "; the current value is " +
      current +
      ", and the current iteration is " +
      (index + 1)
  );
  return val;
}, 0);

console.log("The loop is done, and the final value is " + total + ".");
// ===============================
const numbers = [5, 10, 15];

const total1 = numbers.reduce((accu, item) => accu + item);

console.log("total1");
console.log(total1);
