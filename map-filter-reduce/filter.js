/*
The syntax for filter is:

let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);

Just like map, filter passes your callback three arguments:

the current item 
the current index
the array you called filter on

*/

// ===============================

const words0 = ["Python", "Javascript", "Go", "Java", "PHP", "Ruby"];
const result0 = words0.filter(function (word) {
  return word.length < 4;
});
console.log(result0);
// ===============================

const words = ["Python", "Javascript", "Go", "Java", "PHP", "Ruby"];
const result = words.filter((word) => word.length < 4);
console.log(result);

// ===============================

const words1 = ["Python", "Javascript", "Go", "Java", "PHP", "Ruby"];
const result1 = words1.filter((word, index) => index >= 3);
console.log(words1);
console.log(result1);

// ===============================

const words3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const result3 = words1.filter((word, index) => index >= 5 && index <= 10);
console.log(words3);
console.log(result3);
