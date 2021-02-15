let array = [
  {
    quantity: 1,
    code_id: 1,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 1,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 1,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 2,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 2,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 2,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 2,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 3,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 3,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 3,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 3,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 3,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
  {
    quantity: 1,
    code_id: 2,
    dateTime: "12/30/2020 12:41 PM",
    movementType: "entrada",
  },
];

let codeIds = array
  .map((item) => item.code_id)
  .filter(
    (currentValue, index, array) => array.indexOf(currentValue) === index
  );

let arrayResult = codeIds.map((currentvalue, index) => {
  let count = 0;
  let movementType = "";
  for (var i = 0; i < array.length; i++) {
    // let movementType = array[i].movementType
    if (currentvalue === array[i].code_id) {
      count = count + array[i].quantity;
      movementType = array[i].movementType;
    }
  }

  return {
    movementType: movementType,
    code_id: currentvalue,
    quantity: count,
  };
});
console.log(codeIds);
// [ 1, 2, 3 ] me devuelve unicos items
console.log(arrayResult);

// cuenta las quantity que tiene code_id
// [
//   { movementType: 'entrada', code_id: 1, quantity: 3 },
//   { movementType: 'entrada', code_id: 2, quantity: 5 },
//   { movementType: 'entrada', code_id: 3, quantity: 5 }
// ]
