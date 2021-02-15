//dev.to/ramonak/javascript-how-to-merge-multiple-objects-with-sum-of-values-43fd
//dev.to/ramonak/javascript-how-to-merge-multiple-objects-with-sum-of-values-43fd
// https: //dev.to/ramonak/javascript-how-to-merge-multiple-objects-with-sum-of-values-43fd
// https: //dev.to/ramonak/javascript-how-to-merge-multiple-objects-with-sum-of-values-43fd
// https: //dev.to/ramonak/javascript-how-to-merge-multiple-objects-with-sum-of-values-43fd
// https: //dev.to/ramonak/javascript-how-to-merge-multiple-objects-with-sum-of-values-43fd

// Assume we have an array of objects - baskets with fruits.
// https: https:
const fruits = [
  {
    apples: 4,
    pears: 6,
    oranges: 2,
  },
  {
    bananas: 2,
    oranges: 5,
  },
  {
    pears: 8,
    apples: 3,
    bananas: 10,
  },
  {},
  {
    pears: 7,
    apples: 5,
  },
  {
    mangos: 1,
  },
];

// Let’s create helper method.
const mergeFruits = (data) => {
  const result = {}; //(1)

  data.forEach((basket) => {
    //(2)
    for (let [key, value] of Object.entries(basket)) {
      //(3)
      if (result[key]) {
        //(4)
        result[key] += value; //(5)
      } else {
        //(6)
        result[key] = value;
      }
    }
  });
  return result; //(7)
};

const mergedObject = mergeFruits(fruits);

console.log(mergedObject);

// we’ll get the following output:
// { apples: 12, pears: 21, oranges: 7, bananas: 12, mangos: 1 }

// Discussion

// No need to reinvent the wheel; you can just use Array.reduce:

const basket = fruits.reduce((basket, fruit) => {
  for (const [fruitName, fruitCount] of Object.entries(fruit)) {
    if (!basket[fruitName]) {
      basket[fruitName] = 0;
    }

    basket[fruitName] += fruitCount;
  }

  return basket;
}, {});

// What you did is the same thing, but without taking advantage of reduce.
