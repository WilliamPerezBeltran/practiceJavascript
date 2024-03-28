/*


1. Can you explain how JavaScript handles asynchronous operations?

La forma en la que se maneja asincornismoe en las operaciones de 
javascript son los 

	- callback 
	- promesas 
	- async await 


callback: 
son funciones que se pasan como argumentos a otras funciones 
y se ejecutan despues de que se complete una operacion asincrona 


promesas:
Las promesas son objectos que representan la terminacion de 
una operacion asincrona exitosa o fallida 


Las promesas son objectos que represntan la terminacion de una o
operacion sincronoca exitosa o fallida 

pendiente(Pending)
Cumplida(fulfilled)
Rechazada(Rejected)


asyncOperacion()
.then()
.catch()



async / await

esta es una forma mas limpia de utilizar las promesas 

async: se usa para declarar una funcion asincrona 
await: se usa para esperar el resultado de una promesa 
en una operacion asincrona 


*/
console.log("=========== callback =================");

function operacionAsincrona(callback) {
  let acco = 0;
  for (var i = 0; i < 10; ++i) {
    console.log(i);
    acco += i;
  }
  callback(acco);
}

function callback(resultado) {
  console.log(resultado);
}

console.log("inicion de callback");
console.log(operacionAsincrona(callback));

console.log("=========== promise =================");
function SimulationAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 2000);
  });
}

SimulationAsyncOperation()
  .then((data) => console.log(data))
  .catch((error) => console.log(`Something Wrong in the operation_: ${error}`))
  .finally(() => console.log("This is the end of the operation"));

// Function to fetch data from an API
function fetchData() {
  return new Promise((resolve, reject) => {
    // Fetch data from an API endpoint
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // Check if the response was successful
        if (!response.ok) {
          // If not, reject the promise with the status text
          reject("Error: " + response.statusText);
        }
        // If successful, parse the JSON response and resolve the promise with the data
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        // If an error occurs during the fetch, reject the promise with the error message
        reject("Error fetching data: " + error.message);
      });
  });
}

// Using the promise to fetch data
fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

console.log("=========== async/await =================");
function AsincrOperation(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const suma = a + b;
      resolve(suma);
    }, 2024);
  });
}

async function operation() {
  try {
    console.log("start the synchronous operation process");
    const result = await AsincrOperation(2000, 24);
    console.log(`resultado: ${result}`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

operation();

/*



console.log(``)
1. explique que es una operacion sincrona y asincronica

las oepraciones sincronicas y asincronicas hace referencia a 
como se ejecuta el programa y la interaciones entre estos mismos. 

operacion asincrona: 
  En una operacion asincrona las tareas se ejecutan una tras de otra 
  es decir la tareas deben esperar a finalizar para que continue la siguiente 
  operacion en terminar su tarea. 
  - Estas operaciones son predecibles y una puede predecir su comportamiento 
  y sigue un orden predeterminado 

operacion Asyncronica:

  En una operacion asincrona las operaciones se ejecutan en forma independiente
  En lugar de esperar activamente la finalizacion de la tarea , el programa
  puede termina ejecutando otras tareas y esperar las respuestas de las demas demas 
  sin interrumpir su hilo principal de ejecucion 



*/

console.log(`

  2. explique que es una operacion sincrona y asincronica

las oepraciones sincronicas y asincronicas hace referencia a 
como se ejecuta el programa y la interaciones entre estos mismos. 

operacion asincrona: 
  En una operacion asincrona las tareas se ejecutan una tras de otra 
  es decir la tareas deben esperar a finalizar para que continue la siguiente 
  operacion en terminar su tarea. 
  - Estas operaciones son predecibles y una puede predecir su comportamiento 
  y sigue un orden predeterminado 

operacion Asyncronica:

  En una operacion asincrona las operaciones se ejecutan en forma independiente
  En lugar de esperar activamente la finalizacion de la tarea , el programa
  puede termina ejecutando otras tareas y esperar las respuestas de las demas demas 
  sin interrumpir su hilo principal de ejecucion 


`);

/*


1.What is the difference between "==" and "===" in JavaScript? give me examples



*/

console.log(`

  concepto: tipy coercion o tipo de coercion

  3.What is the difference between "==" and "===" in JavaScript? 


"==" y "===" Son operadores de comparacion la diferencia radia en que 
"==" evalua solamente el valor que contiene la valiable    
"===" evalua solamente el valor que contiene la valiable y el tipo     

La coercion de tipo se maneja y esto es que el el motor de javascript
automaticamente convierte un tipo de dato en otro durante una operacion
comparacion o asignacion.


`);

/*


4. Can you explain closures in JavaScript?

Las cl


*/

console.log(`

 4. Can you explain closures in JavaScript?

 Las clausuras en javascript es un importante concepto que hace
 reference a al acceso que tienes las funciones 
 internas a varaibles externas fuera de su entorno lexico o 
 lexical enviroment.   






`);

function outer() {
  let myVariable =
    "clouser ============> I am a exterval variable   <====================";

  function inner() {
    console.log(myVariable);
  }
  return inner;
}

let myClosure = outer();
console.log(myClosure());

console.log("================== otro ejemplo de closure==================");

function operacionesMatematicas(a, b) {
  // Función interna para sumar dos números
  function suma(a, b) {
    return a + b;
  }

  // Función interna para restar dos números
  function resta(a, b) {
    return a - b;
  }

  // Función interna para multiplicar dos números
  function multiplicacion(a, b) {
    return a * b;
  }

  // Función interna para dividir dos números
  function division(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("No se puede dividir por cero");
    }
  }

  // Llamamos a las funciones internas para realizar las operaciones
  const resultadoSuma = suma(a, b);
  const resultadoResta = resta(a, b);
  const resultadoMultiplicacion = multiplicacion(a, b);
  const resultadoDivision = division(a, b);

  // Devolvemos un objeto con los resultados de todas las operaciones
  return {
    suma: resultadoSuma,
    resta: resultadoResta,
    multiplicacion: resultadoMultiplicacion,
    division: resultadoDivision,
  };
}

// Ejemplo de uso de la función operacionesMatematicas
const resultados = operacionesMatematicas(10, 5);
console.log(resultados);

let { suma, resta, multiplicacion, division } = resultados;
console.log("****************************");
console.log(`suma:${suma} `);
console.log(`resta:${resta} `);
console.log(`multiplicacion:${multiplicacion} `);
console.log(`division:${division} `);
console.log("****************************");

function operations(a, b) {
  function suma(a, b) {
    return a + b;
  }

  function resta(a, b) {
    return a - b;
  }

  function multiplicacion(a, b) {
    return a * b;
  }
  function divison(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Zero is not possible in the denominator ");
    }
  }

  let suma_ = suma(a, b);
  let resta_ = resta(a, b);
  let multiplicacion_ = multiplicacion(a, b);
  let division_ = divison(a, b);

  return {
    suma_,
    resta_,
    multiplicacion_,
    division_,
  };
}

let { suma_, resta_, multiplicacion_, division_ } = operations(2000, 24);
console.log(`${suma_} ${resta_} ${multiplicacion_} ${division_}  `);

console.log("========= another example closure============00");
function crearContador() {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log("Contador incrementado:", contador);
  }

  function decrementar() {
    contador--;
    console.log("Contador decrementado:", contador);
  }

  function obtenerValor() {
    console.log("Valor del contador:", contador);
  }

  return {
    incrementar: incrementar,
    decrementar: decrementar,
    obtenerValor: obtenerValor,
  };
}

let miContador = crearContador(); // Se devuelven las funciones internas y se asignan a miContador

miContador.incrementar(); // Salida: "Contador incrementado: 1"
miContador.incrementar(); // Salida: "Contador incrementado: 2"
miContador.decrementar(); // Salida: "Contador decrementado: 1"
miContador.obtenerValor(); // Salida: "Valor del contador: 1"

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

console.log(`
 5. Explain the difference between null and undefined in JavaScript

undefined: representa que fue declarada pero nunca se le asigno
           un valor.  
          Represent a variable that has been declared but has not 
          been assigned a value 

null: represets the intentional absence of any vlaue or the absence 
      of an object value 
      `);

let variable;
console.log(variable);
let variableNull = null;
console.log(variableNull);

/*


5. How does JavaScript's event loop work?


*/


console.log(`
5. How does JavaScript's event loop work?



      `);


/*

/*

Create a function that adds 2 numbners and works the same for 
the following scenarios using closure

add(1,2) => 3
add(1)(2) => 3

*/

function add(a){
  if(arguments.length == 1){
    return function(b){
      return a +b

    }

  }

  if(arguments.length == 2){
    const b = arguments[1]
    return a + b

  }

}

console.log(add(1,2) )
console.log(add(1)(2) )




function main(a) {
  return function(b) {
    if (b !== undefined) {
      return a + b;
    }
    return a;
  };
}

console.log("=========")
console.log(main(1,2) )
console.log(main(1)(2) )

console.log("============")
const ad = (a,b)=> a+b
console.log(ad(1,5))
const x = (a)=>(b)=>a+b
console.log(x(1)(4))

console.log("============")
function addd(a,b){
  if(arguments[1] !== undefined){
    return a + b
  }
  return (b)=>{
    return a+b

  }
}

console.log(addd(1,6))
console.log(addd(1,)(6))

console.log("============")
function adddd(a,b){
  console.log(typeof b)
  if(typeof b === "undefined"){
    return function(b){
      return a + b
    }
  }

  return a+b
}
console.log(adddd(10,6))
console.log(adddd(10)(6))



function main(a) {
  return function(b) {
    if (b !== undefined) {
      return a + b; 
    }
    return a;
  };
}
function addd(a,b){
  if(arguments[1] !== undefined){
    return a + b
  }
  return (b)=>{
    return a+b
  }
}

function adddd(a,b){
  console.log(typeof b)
  if(typeof b === "undefined"){
    return function(b){
      return a + b
    }
  }
  return a+b
}




/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/

/*


1. Can you explain how JavaScript handles asynchronous operations?



*/
