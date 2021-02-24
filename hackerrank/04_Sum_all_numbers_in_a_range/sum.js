var sumAll = function (arr) {
  let mayor = arr[0];
  let menor = arr[1];
  if (arr[0] < arr[1]) {
    mayor = arr[1];
    menor = arr[0];
  }
  let accu = 0;
  for (let i = menor; i <= mayor; i++) {
    accu += i;
  }
  return accu;
};

module.exports = sumAll;
