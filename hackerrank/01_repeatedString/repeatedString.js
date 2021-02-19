function counterAs1(bigString, n) {
  let counterAs = 0;
  for (var i = 0; i < n; i++) {
    if (bigString[i] === "a") {
      counterAs++;
    }
  }
  return counterAs;
}

function repeatedString(s, n) {
  let bigString = s.split("");
  let times = Math.floor(n / bigString.length);
  let remainder = n % bigString.length;

  let _asCount1 = counterAs1(bigString, bigString.length);
  let _asCount2 = counterAs1(bigString, remainder);
  return _asCount1 * times + _asCount2;
}

module.exports = repeatedString;
