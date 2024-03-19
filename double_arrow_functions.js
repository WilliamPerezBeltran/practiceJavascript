const doubleArrowFunc = (param1) => (param2) => {
  console.log(param1);
  console.log(param2);
};

const executeFunc = doubleArrowFunc("Hello");

console.log(executeFunc("world"));
