// the point to remember here is that state and mutable
// values are hard to follow, even in such a small example

class Flock {
  constructor(n) {
    this.seagulls = n;
  }
  conjoin(other) {
    this.seagulls += other.seagulls;
    return this;
  }
  breed(other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
  }
}
const flockA = new Flock(4);
const flockB = new Flock(2);
const flockC = new Flock(0);
const result = flockA
  .conjoin(flockC)
  .breed(flockB)
  .conjoin(flockA.breed(flockB)).seagulls;
console.log(result);

// ==========================================================

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const a = 4;
const b = 2;
const c = 0;
const result1 = add(multiply(b, add(a, c)), multiply(a, b));
console.log(result1);

// ==========================================================

const hi = (name) => `hi ${name}`;
const greeting = (name) => hi(name);

// const map1 = new Map()
// map1.set("a",1)
// map1.set("b",2)

// ==========================================================

function curry(fn) {
  console.log("fn: ", fn());
  const arity = fn.length;
  console.log(arity);

  return function $curry(...args) {
    if (args.length < arity) {
      console.log($curry.bind(null, ...args));
      return $curry.bind(null, ...args);
    }

    console.log(fn.call(null, ...args));
    return fn.call(null, ...args);
  };
}

let numeros = [
  { name: "william", elemento: "hombre" },
  { name: "oscar", elemento: "hombre" },
];

let hasElement = (obj, element) => numeros.elemento === element;

let hombrespregunta = numeros.filter((x) => hasElement(numeros, "hombre"));

console.log(hombrespregunta);
