function findLongestWordLength(str) {
  let arrayStr = str.split(" ");
  let pivote;
  for (let i = 0; i < arrayStr.length; i++) {
    if (i == 0) {
      pivote = arrayStr[i].length;
    } else {
      if (arrayStr[i].length > pivote) {
        pivote = arrayStr[i].length;
      }
    }
  }
  return pivote;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
