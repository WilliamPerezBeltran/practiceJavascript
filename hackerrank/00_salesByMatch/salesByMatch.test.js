const sockMerchant = require("./salesByMatch");

test("Numbers of pairs to equal 3", () => {
  expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});

test("Numbers of pairs to equal 6", () => {
  expect(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])).toBe(
    6
  );
});

test("Numbers of pairs to equal 9", () => {
  expect(
    sockMerchant(20, [
      4,
      5,
      5,
      5,
      6,
      6,
      4,
      1,
      4,
      4,
      3,
      6,
      6,
      3,
      6,
      1,
      4,
      5,
      5,
      5,
    ])
  ).toBe(9);
});
