function solution(S) {
  let binary = parseInt(S, 2);
  x = 0;
  while (binary > 0) {
    binary % 2 === 0 ? (binary = binary / 2) : (binary = binary - 1);
    x++;
  }
  return x;
}

console.log(solution("011100"));
// console.log( solution("111"))
// console.log( solution("1111010101111"))
