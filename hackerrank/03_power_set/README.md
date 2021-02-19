# Subsets uses of powerSet (Number theory)

## source

- [source](https://leetcode.com/problems/subsets/)

## Explication

- [Explication in spanish](https://www.youtube.com/watch?v=9Li27IW9e84&ab_channel=CursosAbiertosUniversidad)
- [stackoverflow](https://stackoverflow.com/questions/28713858/generating-power-set-algorithm)
- [github code-example](https://gist.github.com/ricardotormo/2e1f5b97e70038d53405)
- [wikipedia-power-set](https://en.wikipedia.org/wiki/Power_set)
- [geeksforgeeks](https://www.geeksforgeeks.org/power-set/)

## Run test

```bash
$ npm run test
```

## Exercise's statement

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Example 1:

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### Example 2:

```
Input: nums = [0]
Output: [[],[0]]

```

### Constraints:

```
- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All the numbers of nums are unique.

```

### Explication:

1. Find the number of sets to create with the given set
2. create a function that passes from a decimal number to a binary number
3. go through the number of possible sets of 0 ... s ^ (number of elements in the set)
4. Establish a conditional inside the for that generates the binary number with the complete positions
   that is to say :
   if the given set is s = [1,2,3]
   the binary number will always be three digits

### example :

| Decimal | Binary |
| ------- | ------ |
| 0       | 000    |
| 1       | 001    |
| 2       | 010    |

the binary number must contain the same size as the given set s 5. Create a function that tells me the position where the number 1 is located in such a way that it will return an array of the position of the ones for all cases

6. generate a for to traverse the position of the 1 with respect to the given set
7. Create an empty array resultArray for
8. Add the subsets what is an array to the empty array that will be our resultArray
