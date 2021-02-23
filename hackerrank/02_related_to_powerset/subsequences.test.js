const threeDivSubsequences = require("./subsequences");

test("Numers of substrings divisible by 3 of 456 is equal 3", () => {
  expect(threeDivSubsequences(456)).toBe(3);
});

test("Numers of substrings divisible by 3 of 303 is equal 5", () => {
  expect(threeDivSubsequences(303)).toBe(5);
});
