https://github.com/idcmardelplata/functional-programming-jargon/tree/master
https://stackoverflow.com/questions/37763828/javascript-es6-double-arrow-functions

# Currying

- El proceso de convertir una funcion que toma multiples argumentos, en una funcion que los toma uno a la vez.
  -Cada vez que la funcion es llamada, esta solamente acepta un argumento y retorna una funcion que toma el siguiente argumento y asi continua hasta que se pasen todos los argumentos.

```bash
const sum = (a, b) => a + b

const curriedSum = (a) => (b) => a + b

curriedSum(40)(2) // 42.

const add2 = curriedSum(2) // (b) => 2 + b

add2(10) // 12
```

# ejempli

```bash
let add = (a,b)=>a+b
let add = (a) => (b) => a+b

let add3 =add(3)
let seven = add3(4); // 7


```

# ejempli

```bash


export default function applyMiddleware(...middlewares) {
	return (createStore) => (reducer, preloadedState, enhancer) => {
		return { ...store, dispatch }
	}
}



```

# ejempli

```bash



export default function applyMiddleware(...middlewares) {
  	return (createStore) => (reducer, preloadedState, enhancer) => {
        // snip actual enhancer logic
        return {
            ...store,
            dispatch
        }
    }
}

/*lo de arriba es  los mismo que esto:*/

function applyMiddleware(...middlewares) {
	return function(createStore){
		return function (reducer, preloadedState, enhancer){
			return { ...store, dispatch }
		}

	}
}


/*lo de arriba es  los mismo que esto:*/

const applyMiddleware = (...middlewares) => (createStore) => (reducer, preloadedState, enhancer) =>{return{...store, dispatch}}





```
