function Person(first, last, age, gender, interests) {
  (this.name = {
    first: first,
    last: last,
  }),
    (this.age = age),
    (this.gender = gender),
    (this.interests = interests),
    (this.bio = function () {
      return "olleee bio";
    }),
    (this.ole = function (name) {
      return "hola " + name;
    });
}

var person1 = new Person(
  "william",
  "perez",
  23,
  "masculino",
  "mat4ematicas y programación"
);
console.log(person1.name.first);
console.log(person1.name["first"]);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.interests);
console.log(person1.bio());
console.log(person1.ole("william"));
