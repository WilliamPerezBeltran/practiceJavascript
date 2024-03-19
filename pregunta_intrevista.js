/*
create a function	 that adds 2 numbers and works the same 
for the following scenarios using closure
add(1,9) -> 3
add(1)(2) -> 3

*/

function add(x, y) {
  if (!y) return (y) => x + y;
  return x + y;
}

console.log(add(1, 2));
console.log(add(1)(2));
