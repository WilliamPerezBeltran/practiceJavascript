/*
I have 2 arrays:

var a = [1, 2, 3]
var b = [a, b, c]
What I want to get as a result is:

[[1, a], [2, b], [3, c]]



*/

var a = [1, 2, 3];
var b = ["a", "b", "c"];

// [[1, a], [2, b], [3, c]]

let result = a.map((item, index) => {
  return [item, b[index]];
});
console.log(result);
