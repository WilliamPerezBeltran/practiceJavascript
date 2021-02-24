function diffArray(arr1, arr2) {
  let newArr_1 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) === false) {
      newArr_1.push(arr1[i]);
    }
  }

  let newArr_2 = [];
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.includes(arr2[j]) === false) {
      newArr_2.push(arr2[j]);
    }
  }
  return newArr_1.concat(newArr_2);
}
module.exports = diffArray;
