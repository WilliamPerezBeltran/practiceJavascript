const intervalID = setInterval(myCallBack, 500, "parameter 1", "parameter 2");
let pivote = 0;
function myCallBack(a, b) {
  pivote = pivote + 1;
  console.log(pivote);
  console.log(a);
  console.log(a);
  console.log(b);
  if (pivote == 10) {
    clearInterval(intervalID);
  }
}

console.log(intervalID);

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const oe = {
  idle: false,
  started: false,
  init() {
    console.log("ole");
  },
};
oe.idle = true;
console.log(oe.idle);
