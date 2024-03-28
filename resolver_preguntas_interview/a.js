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
  // Retorna una función que espera el segundo argumento (b)
  return function(b) {
    // Si se proporciona el segundo argumento (b), realiza la operación deseada
    if (b !== undefined) {
      return a + b; // Por ejemplo, suma los dos argumentos
    }
    // Si no se proporciona el segundo argumento, devuelve el valor del primer argumento (a)
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
