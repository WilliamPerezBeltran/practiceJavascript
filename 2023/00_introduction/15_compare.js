function myFucntion() {
  let name = "rastacome";
  return name;
}

console.log(myFucntion);
console.log(myFucntion());

let a = "string";
let b = 23;
let c = [1, 2, 3, 4];
let d = { a: 1, b: 2 };
let e = {};
console.log(a);
console.log(`${a}: typeof == ${typeof a}`);
console.log(`${b}: typeof == ${typeof b}`);
console.log(`${c}: typeof == ${typeof c}`);
console.log(`${d}: typeof == ${typeof d}`);
console.log(`${e}: typeof == ${typeof e}`);

console.log("======");
console.log(d);
delete d["a"];

console.log(d);
b += 1;
b += 1;
b += 1;
b += 1;
b += 1;
b += 1;
b += 1;
console.log(b);

let testTruthy = (a) => {
  return a ? console.log("verdad") : console.log("falso");
};

console.log(testTruthy(true));
console.log(testTruthy(false));
console.log(testTruthy(new Boolean(false))); // => Object always is true
console.log(testTruthy({})); // => Object always is true
console.log(testTruthy(new Array())); // => Object always is true
console.log(testTruthy(1));
console.log(testTruthy(3));
console.log(testTruthy(-1));
console.log(testTruthy(-1));
console.log(testTruthy(-1));
console.log(testTruthy(NaN));

function sum3() {
  console.log(arguments);
}
console.log(sum3());
console.log(sum3(1, 2));
console.log(sum3([1, 3, 4]));

function sum(a, b, c) {
  return a + b + c;
}
a = [1, 2, 3];
console.log(sum(...a));

function sum1(...params) {
  console.log(params);
}
console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8));

let [x, y] = [1, 2];
console.log(x);
console.log(y);

let obj = { x, y };
console.log(obj);

const hello = {
  name: "rasputin",
  myFunction() {
    console.log("hello2");
  },
};

console.log(hello.name);
console.log(hello.myFunction());

const hello1 = {
  name: "rasputin 2",
  hello: function hello() {
    console.log("hello2");
  },
};
console.log(hello1.name);
console.log(hello1.hello());

class Book {
  constructor(title, name, isbn) {
    this.title = title;
    this.name = name;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn.toString());
  }
}

let myBook1 = new Book("title", "rasputin", 123);
console.log(myBook1);
console.log(myBook1.title);
console.log(myBook1.name);
console.log(myBook1.isbn);
console.log(myBook1.printIsbn());

class ITBook extends Book {
  constructor(title, name, isbn, tech) {
    super(title, name, isbn);
    this.tech = tech;
  }
  printTech() {
    console.log(this.tech);
  }
}
let myBook2 = new ITBook("title", "rasputin", 123, "tencologia");

console.log("=====");
console.log(myBook2);
console.log(myBook2.title);
console.log(myBook2.name);
console.log(myBook2.isbn);
console.log(myBook2.printIsbn());
console.log(myBook2.printTech());

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let myPerson = new Person("willy");

console.log(myPerson);
console.log(myPerson.name);
myPerson.name = "peterson";
console.log(myPerson.name);
