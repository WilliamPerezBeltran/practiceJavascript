let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  let uniqueNumbers = ar.filter(
    (current, index, array) => array.indexOf(current) == index
  );
  let pivote;
  let pair = 0;
  for (let i = 0; i < uniqueNumbers.length; i++) {
    pivote = 0;

    for (let j = 0; j < ar.length; j++) {
      if (uniqueNumbers[i] === ar[j]) {
        pivote++;
        if (pivote === 2) {
          pair++;
          pivote = 0;
        }
      }
    }
  }
  return pair;
}

module.exports = sockMerchant;
