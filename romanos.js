const convertRomanNumerals = (numeral) => {
  var conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const numArray = numeral.split("");
  const newA = [];

  for (let y = 0; y < numArray.length; ++y) {
    newA.push(conversion[numArray[y]]);
  }

  let rta = 0;

  for (let i = 0; i < newA.length; ++i) {
    rta += newA[i];
  }

  return rta;
};

console.log(convertRomanNumerals("V"));
