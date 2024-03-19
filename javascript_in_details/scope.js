var z = 150;
let x = 10;
if (true) {
  console.log(z);

  let y = 20;
  var z = 30;
}
console.log(z);

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

console.log("---------------");
console.log(hummus(2));

let day2 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

day2.william = "ole";
console.log(day2["events"]);
console.log(day2["william"]);
console.log(day2.william);
console.log(day2);

delete day2.william;
console.log(day2);
console.log(Object.keys(day2));
console.log(Object.values(day2));
console.log("---------------");
console.log(Object.assign(day2, { william: "ole" }));
console.log(Object.assign(day2, { myArray: [1, 2, 3, 45] }));
console.log(Object.assign({}, { a: 1 }));

let score = { visitors: 0, home: 0 };
score.visitors = 11;
score.william = 23;

console.log(score);

console.log("---------------");

let journey = [];
function addEntry(events, squirrel) {
  journey.push({ events, squirrel });
}

/*
[ 
	{
		events: 'addkey', 
		squirrel: 'wili' 
	}
]

*/

addEntry("addkey", "wili");
console.log(journey);
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
console.log(journey);

a3 = [1, 2, 2, 3];
a3.includes(2);
console.log(a3.includes(2));
