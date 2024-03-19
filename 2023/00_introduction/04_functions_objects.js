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

function x(bla) {
  console.log("la pre");
}

function x(bla) {
  console.log("la pre");
}

//There are two ways to creating a simple object in javascript

let obj = new Object();
let obj1 = {};

// =================

function Book(id, title, pages) {
  this.id = id;
  this.title = title;
  this.pages = pages;
}

let book = new Book(1, "mi book", 23);
console.log(book.id);
console.log(book.title);
console.log(book.pages);

//use function

Book.prototype.printTitle = function () {
  console.log(this.title);
};

console.log(book.printTitle());

Book.prototype.printId = function () {
  console.log(this.id);
};
console.log(book.printId());

Book.prototype.printPages = function () {
  console.log(this.pages);
};
console.log(book.printPages());
