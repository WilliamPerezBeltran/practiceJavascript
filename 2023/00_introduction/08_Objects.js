// ====== Objects ======
const obj = {
  a: "something",
  b: 234,
  c: false,
};

console.log(Object.keys(obj));

for (item in Object.keys(obj)) {
  console.log(item);
}

console.log(Object.values(obj));
console.log(Object.entries(obj));

for (x in Object.entries(obj)) {
  console.log(x);
}

// simple array
const arr = [1, 2, 3];
console.log(Object.keys(arr));
