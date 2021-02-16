/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

Constraints

 where 
Sample Input

STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
Sample Output

3

*/

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  let uniqueNumbers = ar.filter(
    (current, index, array) => array.indexOf(current) == index
  );
  let pivote;
  let pair = 0;
  for (let i = 0; i < uniqueNumbers.length; i++) {
    pivote = 0;

    for (let j = 0; j < ar.length; j++) {
      if (uniqueNumbers[i] === ar[j]) {
        pivote++;
        if (pivote === 2) {
          pair++;
          pivote = 0;
        }
      }
    }
  }
  return pair;
}

module.exports = sockMerchant;
