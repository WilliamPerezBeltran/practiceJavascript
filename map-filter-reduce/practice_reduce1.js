// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

let beforeInputs = [
  {
    id: 39,
    quantity: 1,
    code_id: 1,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "x",
  },
  {
    id: 40,
    quantity: 2,
    code_id: 6,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "y,a",
  },
  {
    id: 41,
    quantity: 1,
    code_id: 7,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "z",
  },
  {
    id: 42,
    quantity: 2,
    code_id: 5,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "w,s",
  },
  {
    id: 43,
    quantity: 2,
    code_id: 3,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "q,b",
  },
  {
    id: 44,
    quantity: 2,
    code_id: 4,
    dateTime: "1/6/2021 11:37 AM",
    movementType: "entrada",
    tags: "e,h",
  },
];
beforeInputs = beforeInputs.map((item) => {
  return {
    quantityBefore: item.quantity,
    code_id: item.code_id,
    tagsBefore: item.tags,
  };
});

console.log("beforeInputs");
console.log(beforeInputs);

let currentDataConverted = [
  { code_id: 3, quantity: 1, tags: "q,b" },
  { code_id: 4, quantity: 1, tags: "e,h,l,ñ" },
  { code_id: 5, quantity: 1, tags: "c,v,n" },
  { code_id: 6, quantity: 1, tags: "u,o,p,j,a" },
  // {code_id: 6, quantity: 1, tags: "E280689400005002BD11A45C"},
  { code_id: 7, quantity: 1, tags: "" },
];

console.log("currentDataConverted");
console.log(currentDataConverted);

let found = null;
// let outputItemsByCodeid = []

let arrayOfInputs = [];
let arrayOfOutputs = [];

for (var i = 0; i < beforeInputs.length; i++) {
  found = false;
  // let arrayOfInputs = []
  // let arrayOfOutputs = []

  for (var j = 0; j < currentDataConverted.length; j++) {
    if (beforeInputs[i].code_id === currentDataConverted[j].code_id) {
      let codeId = beforeInputs[i].code_id;
      found = true;
      console.log(`code_id  `);
      console.log(
        `${beforeInputs[i].code_id}===${currentDataConverted[j].code_id} `
      );
      let before = beforeInputs[i].tagsBefore.split(",");
      let current = currentDataConverted[j].tags.split(",");
      console.log("before");
      console.log(before);
      console.log("current");
      console.log(current);

      console.log("-----------------------entro-----------------------");
      let intersectionAB = before.filter((x) => current.includes(x));
      // differenceAB
      let outputArray = before.filter((x) => !current.includes(x)); //salidas
      // differenceBA
      let inputArray = current.filter((x) => !before.includes(x)); //entradas

      console.log("intersectionAB");
      console.log(intersectionAB);
      console.log("outputArray", outputArray);
      console.log("inputArray", inputArray);
      // if ((inputArray.length === 1) && (inputArray[0] === '')){
      // 	inputArray = []

      // }
      let inputObject = {
        quantity:
          inputArray.length === 1 && inputArray[0] === ""
            ? 0
            : inputArray.length,
        // quantity:inputArray.length ,
        code_id: codeId,
        dateTime: "la feccha ",
        movementType: "entrada",
        tags: inputArray.concat(intersectionAB).toString(),
      };

      let outputObject = {
        quantity: outputArray.length,
        code_id: codeId,
        dateTime: "la feccha ",
        movementType: "salida",
        // tags: inputArray.concat(intersectionAB),
      };

      arrayOfInputs.push(inputObject);
      arrayOfOutputs.push(outputObject);
    }
  }

  if (found === false) {
    // let inputObject = {
    // 			quantity:inputArray.length ,
    // 			code_id:  codeId ,
    // 			dateTime: "la feccha ",
    // 			movementType:"entrada" ,
    // 			tags: [],

    // 		}

    let outputObject = {
      quantity: beforeInputs[i].quantityBefore,
      code_id: beforeInputs[i].code_id,
      dateTime: "la feccha ",
      movementType: "salida",
      // tags: inputArray.concat(intersectionAB),
    };
    // outputItemsByCodeid.push(beforeInputs[i])
    arrayOfOutputs.push(outputObject);
  }
}

// console.log('outputItemsByCodeid')
// console.log(outputItemsByCodeid)

console.log("----arrayOfInputs-----");
console.log(arrayOfInputs);

// console.log('-----arrayOfOutputs-----')
// console.log(arrayOfOutputs)

let outputstoDb = arrayOfOutputs.filter((item) => item.quantity > 0);
let inputtoDb = arrayOfOutputs;
console.log("----outputstoDb----");
console.log(outputstoDb);
