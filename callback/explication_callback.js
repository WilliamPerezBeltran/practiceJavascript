function greet(name, callback) {
  console.log(`hi ${name}`);
  callback();
}

function callMe() {
  console.log("I am callback function");
}

greet("pepito", callMe);

function ole(parameters) {}
