let input = [
  {
    code_id: 4,
    dateTime: "1/9/2021 11:06:08 AM",
    id: 533,
    movementType: "entrada",
    quantity: 1,
    tags: "E280689400004002BD11A468",
  },
  {
    code_id: 2,
    dateTime: "1/9/2021 11:06:08 AM",
    id: 534,
    movementType: "entrada",
    quantity: 2,
    tags: "E280689400005002BD11A466,E280689400005002BD11A469",
  },
  {
    code_id: 1,
    dateTime: "1/9/2021 11:06:08 AM",
    id: 535,
    movementType: "entrada",
    quantity: 2,
    tags: "E280689400005002BD11A46A,E280689400005002BD11A465",
  },
  {
    code_id: 1,
    dateTime: "1/9/2021 11:06:08 AM",
    id: 535,
    movementType: "entrada",
    quantity: 2,
    tags: "E280689400005002BD11A46A,E280689400005002BD11A465",
  },
  {
    code_id: 1,
    dateTime: "1/9/2021 11:06:08 AM",
    id: 535,
    movementType: "entrada",
    quantity: 2,
    tags: "E280689400005002BD11A46A,E280689400005002BD11A465",
  },
  {
    code_id: 1,
    dateTime: "1/9/2021 11:06:08 AM",
    id: 535,
    movementType: "entrada",
    quantity: 2,
    tags: "E280689400005002BD11A46A,E280689400005002BD11A465",
  },
];

console.log("input");
console.log(input);

// let output = []
// let output = []

// let uniqueCodesInput = input.map((item) => item.code_id).filter((currentValue, index, array) => array.indexOf(currentValue) === index)
// let sumInput = uniqueCodesInput.map((uniqueCode) => {
//     let count = 0
//     let date = null
//     let movement = null
//     for (var i = 0; i < input.length; i++) {
//         date = input[i].dateTime
//         movement = input[i].movementType
//         if (input[i].code_id === uniqueCode) {
//             count += input[i].quantity
//         }
//     }
//     return {
//         code_id: uniqueCode,
//         dateTime: date,
//         movementType: movement,
//         input: count,
//     }
// })
// console.log('sumInput')
// console.log(sumInput)

let uniqueCodesInput = input
  .map((item) => item.code_id)
  .filter((currentValue, index, array) => array.indexOf(currentValue) === index)
  .map((uniqueCode, index) => {
    let count = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].code_id === uniqueCode) {
        count += input[i].quantity;
      }
    }
    return {
      code_id: uniqueCode,
      dateTime: input[index].dateTime,
      movementType: input[index].movementType,
      input: count,
    };
  });
console.log("uniqueCodesInput");
console.log(uniqueCodesInput);
