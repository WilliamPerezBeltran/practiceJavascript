const repeatedString = require("./repeatedString");

test("Number of a's occurrences equal 4", () => {
  expect(repeatedString("abcac", 10)).toBe(4);
});

test("Number of a's occurrences equal 4", () => {
  expect(repeatedString("aba", 10)).toBe(7);
});

test("Number of a's occurrences equal 1000", () => {
  expect(repeatedString("a", 1000000000000)).toBe(1000000000000);
});
