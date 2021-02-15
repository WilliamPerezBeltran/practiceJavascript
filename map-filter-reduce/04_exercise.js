let nums = [2, 7, 11, 15];
let target = 9;
var result = [];
for (let a = 0; a < nums.length; a++) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[a] + nums[i] === target) {
      result.push(a);
      result.push(i);
    }
  }
}

console.log(result);
