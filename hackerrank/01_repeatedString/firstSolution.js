function repeatedString(s, n) {
  let bigString = s.split("");
  let counter = 0;
  let pivote = 0;
  let newArray = [];
  while (counter < n) {
    newArray.push(bigString[pivote]);
    counter++;
    pivote++;
    if (pivote === bigString.length) {
      pivote = 0;
    }
  }

  counter = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "a") {
      counter++;
    }
  }
  return counter;
}
