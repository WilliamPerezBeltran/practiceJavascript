let inputs = [
  {
    code_id: 1,
    dateTime: "10/1/2022 8:58:30 AM",
    id: 1,
    movementType: "entrada",
    quantity: 4,
  },
  {
    code_id: 2,
    dateTime: "10/1/2022 8:58:30 AM",
    id: 2,
    movementType: "entrada",
    quantity: 4,
  },
  {
    code_id: 3,
    dateTime: "10/1/2022 8:58:30 AM",
    id: 3,
    movementType: "entrada",
    quantity: 4,
  },
  {
    code_id: 1,
    dateTime: "10/1/2022 8:58:54 AM",
    id: 4,
    movementType: "entrada",
    quantity: 2,
  },
];
let codes = [
  {
    codeName: "codigo_1",
    id: 1,
    productId: 1,
    productName: "producto_1",
  },

  {
    codeName: "codigo_2",
    id: 2,
    productId: 2,
    productName: "producto_2",
  },

  {
    codeName: "codigo_3",
    id: 3,
    productId: 3,
    productName: "producto_3",
  },
];

// 1. recorro inputs y dentro de inputs recorro los codigos filtrandolos por su codigo id
// 2. Una vez filtrados armo el objecto que es el mismo objecto iinput mas la clave del codeName

// let inputs = [
// {
// 	code_id: 1,
// 	dateTime: "10/1/2022 8:58:30 AM",
// 	id: 1,
// 	movementType: "entrada",
// 	quantity: 4,
// }]
// let codes = [
// {
// 	codeName: "codigo_1",
// 	id: 1,
// 	productId: 1,
// 	productName: "producto_1",
// }]
let result = inputs
  .map((itemInput) =>
    codes.filter((itemCode) => {
      if (itemInput.code_id === itemCode.id) {
        itemInput["codeName"] = itemCode.codeName;
      }
    })
  )
  .flat();

console.log(result);
