

let obj1 = {}

Object.assign(obj1,{name:"name", isFalse:false, setOtra:()=>{}})
console.log('obj1',obj1)

function oe(a,...rest){
	return {a,rest}

}

console.log('something',oe(1,2,3,4,5,6,7,8,9))

function returnArgArray(...args) { return args }
console.log('returnArgArray: ',returnArgArray(...['x', 'y', 'z']))


/*---------call backs--------------------*/


export default function applyMiddleware(...middlewares) {
	return (createStore) => (reducer, preloadedState, enhancer) => {
		return { ...store, dispatch }
	}
}



export default function applyMiddleware(...middlewares) { 
	(createStore) => (reducer, preloadedState, enhancer) => return { ...store, dispatch }
}

