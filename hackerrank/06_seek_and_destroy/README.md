# Seek and Destroy

## source

- [Seek and Destroy-freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy)

## Technical bases to answer the problem

- [The arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## Run test

```bash
$ npm run test
```

## Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

### Examples:

- **destroyer([1, 2, 3, 1, 2, 3], 2, 3)** should **return [1, 1]**
- **destroyer(["tree", "hamburger", 53], "tree", 53)** should return **["hamburger"]**
