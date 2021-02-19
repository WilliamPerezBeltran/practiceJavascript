# Exercise Sales By Match (easy)

Explication

- [Explication](https://www.youtube.com/watch?v=CwbT90-9OuA&ab_channel=KuldipGhotane)

source

- [source](https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

## Run test

```bash
$ npm run test
```

## Exercise's statement

```bash
There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first  n letters of the infinite string.

Example
s = "abcac"
n = 10


The substring we consider is abcacabcac , the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring
Input Format

The first line contains a single string, .
The second line contains an integer, .

Constraints

For  of the test cases, .
Sample Input

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0
The first n=10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we return 7.

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1
Because all of the first n=1000000000000 letters of the infinite string are a, we return 1000000000000.
```
