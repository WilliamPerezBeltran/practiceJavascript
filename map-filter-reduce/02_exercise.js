// Chaining Map, Filter, & Reduce
// Consider the following data:
data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

/*
The goal of this article is going to be to write some 
JavaScript that will sum all of the dogs ages in dog years.

Our process might look something like this:

1. Select only the dogs
2. Translate their ages into dog years (multiply them by seven)
3. Sum the results
4. The result must be 94

*/

let result = data
  .filter((animal) => animal.type == "dog")
  .map((animal) => animal.age * 7)
  .reduce((pre, current) => pre + current, 0);

// console.log(result)
let result2 = data
  .filter(function (animal) {
    return animal.type == "dog";
  })
  .map(function (task) {
    return task.age * 7;
  })
  .reduce(function (pre, current) {
    return pre + current;
  }, 0);
console.log(result2);
