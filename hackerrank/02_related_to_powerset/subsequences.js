function threeDivSubsequences(number) {
  let numberArray = number.toString().split("");
  let setOfSubsequences = numberArray.reduce(
    (a, v) => a.concat(a.map((d) => [v].concat(d))),
    [[]]
  );

  let contador = 0;
  for (var i = 0; i < setOfSubsequences.length; i++) {
    if (parseInt(setOfSubsequences[i].join(""), 10) % 3 === 0) {
      if (setOfSubsequences[i][0] !== "0") {
        contador++;
      }
    }
  }
  return contador;
}

module.exports = threeDivSubsequences;
