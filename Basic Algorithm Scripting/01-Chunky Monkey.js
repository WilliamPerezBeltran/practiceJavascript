function chunkArrayInGroups(arr, size) {
  let smallArray = [];

  let numbersTime = arr.length / size;
  let conter = 0;
  for (let i = 0; i < numbersTime; i++) {
    let arrB = [];
    for (let x = 0; x < size; x++) {
      if (arr[conter] != undefined) {
        arrB.push(arr[conter]);
        conter++;
      }
    }
    smallArray.push(arrB);
  }

  return smallArray;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
