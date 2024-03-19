function action(i) {
  console.log(i);
}

function repeat(n, action) {
  for (let x = 0; x <= n; x++) {
    action(x);
  }
}

console.log(repeat(10, action));
console.log("--------------------");

let labels = [];
repeat(10, (i) => {
  labels.push(`Unit ${i}`);
});

console.log(labels);

console.log("--------------------");

function greaterThan(n) {
  return (m) => m > n;
}

let graterThan10 = greaterThan(20);
console.log(graterThan10(20));

console.log("--------------------");

function repeticion(n, action) {
  for (var i = 0; i <= n; ++i) {
    action1(i);
  }
}

function action1(n) {
  console.log(n);
}

console.log(repeticion(10, action1));
