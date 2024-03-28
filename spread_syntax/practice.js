function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 2, 3, 4];

// console.log(sum(numbers))
console.log(sum(...numbers));

let numberStore = [0, 1, 2, 3];
let newNumber = 12;
numberStore = [...numberStore, newNumber, 10];
console.log(numberStore);

let parts = ["one", "dos"];
let parts_1 = ["head", "dos", ...parts, "head", "tail"];
console.log(parts_1);

let arr = [1, 2, 3];
let arr2 = [...arr];
arr2.push(23);
console.log(arr2);

let arr1 = [1, 2, 3];
let arr3 = [10, 20, 30];

arr1 = arr1.concat(arr3);
console.log(arr1);gits

console.log([...arr1, ...arr3]);

let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

console.log("----objects------");
let cloneObject = { ...obj1 };
console.log(cloneObject);

let mergeObjects = { ...obj1, ...obj2 };
console.log(mergeObjects);

const merge = (...objects) => ({ ...objects });

console.log(merge);

let mergedObj1 = merge(obj1, obj2);
console.log(mergedObj1);
