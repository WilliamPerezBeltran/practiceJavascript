const separate = require("./separate");

test("", () => {
  expect(separate(12345)).toEqual([1, 2, 3, 4, 5]);
});
