// ===============closure==================
let father = () => {
  let x = "secret";
  function inner() {
    return `devuelve ${x}`;
  }
  return inner;
};

let response = father();
console.log(response()); //devuelve secret

// ===============--callback--==================

/*

A callback function is a function that is passed to another function as an argument, 
which is then called inside the outer function to complete some sort of routine or action.

Una función de callback es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

*/

function myCallback(message) {
  console.log(message);
}

function welcome(name, callback) {
  let message = `welcome ${name}`;
  callback(message);
}

welcome("antonio", myCallback);

// ===============--destructuring assigment --==================
const user = { name: "John Doe", age: 34 };
const { name, age } = user;

// ===============--promise--==================

const miPromesa = new Promise((resolve, reject) => {
  let condicional = true;
  setTimeout(() => {
    condicional ? resolve("resolve") : reject("reject");
  }, 500);
});

miPromesa
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

const miPromesa2 = new Promise((resolve, reject) => {
  let condicional = false;
  if (condicional) {
    resolve("resolved");
  } else {
    reject("rejected");
  }
});

miPromesa2
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

/*
fetch("/robots.txt")
  .then(response => response.text())
  .then(data => console.log(data))
  .finally(() => console.log("Terminado."))
  .catch(error => console.error(data));

*/

// ===============--async-await--==================

// https://javascript.info/async-await

// ===========================
// ===========================

// ===============--_________--==================

// ===========================
// ===========================

// ===============--_________--==================

// ===========================
// ===========================

// ===============--_________--==================

// ===========================
// ===========================

// ===============--_________--==================

// ===========================
// ===========================

// ===============--_________--==================

// ===========================
// ===========================

// ===============--_________--==================

// ===========================
// ===========================
