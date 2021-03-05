const whatIsInAName = require("./whatIsInAName");

test("should return [{ 'apple': 1 }, { 'apple': 1 }, { 'apple': 1, 'bat': 2 }].", () => {
  expect(
    whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
      apple: 1,
    })
  ).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
});
