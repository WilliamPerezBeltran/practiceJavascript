const sum = (a, b) => a + b;

const curriedSum = (a) => (b) => a + b;

curriedSum(40)(2); // 42.

const add2 = curriedSum(2); // (b) => 2 + b

add2(10); // 12

let add = (a, b) => a + b;
let add = (a) => (b) => a + b;

let add3 = add(3);
let seven = add3(4); // 7

/*---------call backs--------------------*/

export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    // snip actual enhancer logic
    return {
      ...store,
      dispatch,
    };
  };
}

/*lo de arriba es  los mismo que esto:*/

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      return { ...store, dispatch };
    };
  };
}

/*lo de arriba es  los mismo que esto:*/

const applyMiddleware = (...middlewares) => (createStore) => (
  reducer,
  preloadedState,
  enhancer
) => {
  return { ...store, dispatch };
};
