# Subsets uses of powerSet (Number theory)

## source

- [source](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)

## Technical bases

- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Explication

- [stackoverflow-symmetric difference](https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript)

## Run test

```bash
$ npm run test
```

## Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

**Note:** You can return the array with its elements in any order.s

### Example 1:

For example:

**["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]** , **["diorite", "andesite", "grass", "dirt", "dead shrub"]** should return **["pink wool"]**

**[1, 2, 3, 5]** , **[1, 2, 3, 4, 5]** should return **[4]**
