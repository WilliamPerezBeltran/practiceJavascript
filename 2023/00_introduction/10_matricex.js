function printMatric(myMatrix) {
  for (let x = 0; x <= 3; x++) {
    text = "";
    for (let y = 0; y <= 3; y++) {
      text += "";
    }
  }
}

// ==== iterator functions====
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var isEven = function (x) {
  return x % 2 == 0 ? true : false;
};

console.log(numbers.every(isEven));
