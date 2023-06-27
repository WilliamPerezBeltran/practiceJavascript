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