let mergeData = [
  {
    code_id: 1,
    quantity: 1,
    tags: "a",
  },
  {
    code_id: 3,
    quantity: 1,
    tags: "a",
  },
  {
    code_id: 3,
    quantityBefore: 1,
    tags: "a",
  },
  {
    quantityBefore: 1,
    code_id: 1,
    tagsBefore: "a",
  },
  {
    quantityBefore: 1,
    code_id: 2,
    tagsBefore: "b",
  },
];

let map = new Map();
let mergeDataById = mergeData.reduce(function (r, o) {
  var temp;
  if (map.has(o.code_id)) {
    Object.assign(map.get(o.code_id), o);
  } else {
    temp = Object.assign({}, o);
    map.set(temp.code_id, temp);
    r.push(temp);
  }
  return r;
}, []);
console.log("mergeDataById");
console.log(mergeDataById);

// ar3=[]
// ar5=[]
let ar3 = mergeDataById.map((item) => {
  console.log("item");
  console.log(item);
  if (Object.keys(item) === 3) {
    return item;
  }
});
let ar5 = mergeDataById.map((item) => {
  console.log("item");
  console.log(item);
  if (Object.keys(item) === 5) {
    return item;
  }
});

console.log("ar3");
console.log(ar3);
console.log("ar5");
console.log(ar5);

let x = [
  {
    code_id: 2,
    dateTime: "1/11/2021 7:58:40 PM",
    movementType: "salida",
    quantityBefore: 1,
    tagsBefore: "b",
  },
];
