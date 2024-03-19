function appendSumOfValues(entryArray) {
  const total = entryArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  entryArray.push(total);
  return entryArray;
}

const original = [3, 2];

console.log(appendSumOfValues(original));
console.log(appendSumOfValues(original));
console.log(appendSumOfValues(original));
console.log(appendSumOfValues(original));

console.log("=========================================================");
console.log("=========================================================");

function appendSumOfValues_1(entryArray) {
  const total = entryArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const result = entryArray.concat(total);
  return result;
}

const original_1 = [3, 2];

console.log(appendSumOfValues_1(original_1));
console.log(appendSumOfValues_1(original_1));
console.log(appendSumOfValues_1(original_1));
console.log(appendSumOfValues_1(original_1));
console.log(appendSumOfValues_1(original_1));
console.log(appendSumOfValues_1(original_1));
console.log(appendSumOfValues_1(original_1));
console.log(appendSumOfValues_1(original_1));

console.log("=========================================================");
console.log("=========================================================");
// Decorador unario
const unary = (fn) => {
  console.log("args");
  console.log(args);
  return (...args) => fn(args[0]);
};

const rta = ["1", "2", "3"].map(unary(parseInt)); //=> [1, 2, 3]

console.log(rta);
