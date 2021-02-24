const seekDestroy = require("./destroyer");

test("destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]", () => {
  expect(seekDestroy([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
});
