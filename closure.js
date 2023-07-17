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