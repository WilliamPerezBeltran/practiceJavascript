const possibleSubsets = require("./powerSet");

test("powerSets of [1, 2, 3]", () => {
  expect(possibleSubsets([1, 2, 3])).toEqual([
    [],
    [3],
    [2],
    [2, 3],
    [1],
    [1, 3],
    [1, 2],
    [1, 2, 3],
  ]);
});

test("powerSets of [0]", () => {
  expect(possibleSubsets([0])).toEqual([[], [0]]);
});
