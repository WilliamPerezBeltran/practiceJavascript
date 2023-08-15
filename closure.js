<<<<<<< HEAD
/*
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript


https://tania.dev/front-end-tables-sort-filter-paginate/

https://tania.dev/front-end-tables-sort-filter-paginate/

https://tania.dev/understanding-generators-in-javascript/
https://tania.dev/default-parameters-javascript/

*/
var nombre ="william"
function saludar(){
	return `hola ${nombre}`;
}

const rasta = saludar()

console.log(rasta)
console.log("=============================================")

function contador(){
  let value = 0;
  function incrementar() {
    value++;
    console.log(value)
  }
  function decrementar() {
    value--;
    console.log(value)
  }
  const mensaje = `El valor actual es ${value}`
  function log(){
    console.log(mensaje)
  }
  return [incrementar, decrementar, log]
}
const [incrementar, decrementar, log] = contador()
incrementar(); // logs 1
incrementar(); // logs 2
decrementar(); // logs 1
// No funciona
log();       // logs "El valor actual es 0"
=======
function foo() {
  const secret = Math.trunc(Math.random() * 100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`


const myFunc = ()=>{
	const secret = Math.trunc(Math.random() * 100)
	return ()=>console.log(`The secret number is ${secret}.`)
}

const w = myFunc()
w()


// =================================0
// =================================0
// =================================0
// =================================0




function crearContador(){
	let contador = 0
	function incrementar(){
		contador = contador+1
		return contador
	}
	return incrementar
}

const contador1 = crearContador()
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())

for (var i = 0; i < 10; ++i) {
	console.log(contador1())
}
>>>>>>> 26c91fe3ed32dca300c14246ce246186078a1957
