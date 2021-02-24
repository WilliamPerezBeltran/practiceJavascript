const diffArray = require("./diffArray");

test("[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]", () => {
  expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
});

test('[1, "calf", 3, "piglet"], [1, "calf", 3, 4]', () => {
  expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toEqual([
    "piglet",
    4,
  ]);
});
