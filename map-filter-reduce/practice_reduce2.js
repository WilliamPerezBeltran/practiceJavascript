const data = [
    { hand: "KdAhAsKs", checkPct: 28 },
    { hand: "KdAhAsKs", betPct: 72 },
    { hand: "KcAhAsKs", checkPct: 28 },
    { hand: "KcAhAsKs", betPct: 72 },
  ],
  result = Object.values(
    data.reduce((r, { hand, ...rest }) => {
      r[hand] = r[hand] || { hand };
      r[hand] = { ...r[hand], ...rest };
      return r;
    }, {})
  );
console.log(result);

let beforeInputs = [
  {
    id: 39,
    quantity: 1,
    code_id: 1,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400005002BD11A46A",
  },
  {
    id: 40,
    quantity: 2,
    code_id: 6,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400005002BD11A45C,E28068940000400589A1653B",
  },
  {
    id: 41,
    quantity: 1,
    code_id: 7,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A464",
  },
  {
    id: 42,
    quantity: 2,
    code_id: 5,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E28068940000400589A16540,E28068940000500589A1653F",
  },
  {
    id: 43,
    quantity: 2,
    code_id: 3,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A461,E280689400004002BD11A45B",
  },
  {
    id: 44,
    quantity: 2,
    code_id: 4,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A468,E28068940000500589A1653C",
  },
];

let currentDataConverted = [
  { code_id: 3, quantity: 1, tags: "E280689400004002BD11A461" },
  { code_id: 4, quantity: 1, tags: "E280689400004002BD11A468" },
  { code_id: 5, quantity: 1, tags: "E28068940000400589A16540" },
  { code_id: 6, quantity: 1, tags: "E280689400005002BD11A45C" },
  { code_id: 7, quantity: 1, tags: "E280689400004002BD11A464" },
];

let result1 = beforeInputs.reduce((accu, item, index) => {
  accu[item.code_id] = { quantityBefore: item.quantity, tagsBefore: item.tags };
  return accu;
}, {});

console.log("result1");
console.log(result1);

let result2 = currentDataConverted.reduce((accu, item, index) => {
  accu[item.code_id] = { quantity: item.quantity, tags: item.tags };
  return accu;
}, {});
console.log("result2");
console.log(result2);

let result2 = beforeInputs.map((item) => {
  return {
    quantityBefore: item.quantity,
    tagsBefore: item.tags,
    code_id: item.code_id,
  };
});
console.log("result2");
console.log(result2);

console.log([...result1, ...result2]);

function mergeArrayObjects(arr1, arr2) {
  return arr1.map((item, i) => {
    if (item.id === arr2[i].id) {
      //merging two objects
      return Object.assign({}, item, arr2[i]);
    }
  });
}

console.log(mergeArrayObjects(arr1, arr2));

array.reduce(
  (accumulator, current) => ({
    ...accumulator,
    [current.movementType]: [...accumulator[current.movementType], current],
  }),
  {
    entrada: [],
    salida: [],
  }
);

let beforeInputs = [
  {
    id: 39,
    quantity: 1,
    code_id: 1,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400005002BD11A46A",
  },
  {
    id: 40,
    quantity: 2,
    code_id: 6,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400005002BD11A45C,E28068940000400589A1653B",
  },
  {
    id: 41,
    quantity: 1,
    code_id: 7,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A464",
  },
  {
    id: 42,
    quantity: 2,
    code_id: 5,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E28068940000400589A16540,E28068940000500589A1653F",
  },
  {
    id: 43,
    quantity: 2,
    code_id: 3,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A461,E280689400004002BD11A45B",
  },
  {
    id: 44,
    quantity: 2,
    code_id: 4,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A468,E28068940000500589A1653C",
  },
];

let arr2 = [
  { code_id: 3, quantity: 1, tags: "E280689400004002BD11A461" },
  { code_id: 4, quantity: 1, tags: "E280689400004002BD11A468" },
  { code_id: 5, quantity: 1, tags: "E28068940000400589A16540" },
  { code_id: 6, quantity: 1, tags: "E280689400005002BD11A45C" },
  { code_id: 7, quantity: 1, tags: "E280689400004002BD11A464" },
];

let arr1 = beforeInputs.map((item) => {
  return {
    quantityBefore: item.quantity,
    tagsBefore: item.tags,
    code_id: item.code_id,
  };
});

console.log("arr1");
console.log(arr1);
console.log("arr2");
console.log(arr2);

function mergeArrayObjects(arr1, arr2) {
  return arr1.map((item, i) => {
    if (item.code_id === arr2[i].code_id) {
      //merging two objects
      return Object.assign({}, item, arr2[i]);
    }
  });
}

console.log(mergeArrayObjects(arr1, arr2));

let beforeInputs = [
  {
    id: 39,
    quantity: 1,
    code_id: 1,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400005002BD11A46A",
  },
  {
    id: 40,
    quantity: 2,
    code_id: 6,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400005002BD11A45C,E28068940000400589A1653B",
  },
  {
    id: 41,
    quantity: 1,
    code_id: 7,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A464",
  },
  {
    id: 42,
    quantity: 2,
    code_id: 5,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E28068940000400589A16540,E28068940000500589A1653F",
  },
  {
    id: 43,
    quantity: 2,
    code_id: 3,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A461,E280689400004002BD11A45B",
  },
  {
    id: 44,
    quantity: 2,
    code_id: 4,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "E280689400004002BD11A468,E28068940000500589A1653C",
  },
];

let currentDataConverted = [
  { code_id: 3, quantity: 1, tags: "E280689400004002BD11A461" },
  { code_id: 4, quantity: 1, tags: "E280689400004002BD11A468" },
  { code_id: 5, quantity: 1, tags: "E28068940000400589A16540" },
  { code_id: 6, quantity: 1, tags: "E280689400005002BD11A45C" },
  { code_id: 7, quantity: 1, tags: "E280689400004002BD11A464" },
];

let found = null;
let outputItemsByCodeid = [];
let analizeItems = [];

for (var i = 0; i < beforeInputs.length; i++) {
  found = false;
  // outputItemsByCodeid = []

  for (var j = 0; j < currentDataConverted.length; j++) {
    if (beforeInputs[i].code_id === currentDataConverted[j].code_id) {
      found = true;
      let before = beforeInputs[i].tagsBefore.split(",");
      let current = currentDataConverted[j].tags.split(",");
      console.log("before");
      console.log(before);
      console.log("current");
      console.log(current);

      for (let a = 0; a < before.length; a++) {
        //tagsBefore:
        for (let b = 0; b < current.length; b++) {
          //tags
          if (before[a].includes(current[b])) {
          } else {
          }
          // before[a].before ===
        }
      }
    }
  }

  if (found === false) {
    outputItemsByCodeid.push(beforeInputs[i]);
  }
}

console.log("outputItemsByCodeid");
console.log(outputItemsByCodeid);

let arr1 = ["E280689400005002BD11A45C", "E28068940000400589A1653B"];
let arr2 = ["E280689400005002BD11A45C"];

let intersection = arr1.filter((x) => arr2.includes(x));
console.log("intersection");
console.log(intersection);
let difference = arr1.filter((x) => !arr2.includes(x));
console.log("difference");
console.log(difference);
let differenceSimetrica = arr1
  .filter((x) => !arr2.includes(x))
  .concat(arr2.filter((x) => !arr1.includes(x)));
console.log("differenceSimetrica");
console.log(differenceSimetrica);
