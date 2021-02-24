var possibleSubsets = function (nums) {
  return nums.reduce((a, v) => a.concat(a.map((d) => [v].concat(d))), [[]]);
};

possibleSubsets([1, 2, 3]);
