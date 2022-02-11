let binaryNumber = function (decimalNumber) {
  return parseInt(decimalNumber, 10).toString(2);
};

let getPosition = function (stringChain) {
  let getPosition = stringChain.split("").reduce((accu, current, index) => {
    if (current === "1") accu.push(index);
    return accu;
  }, []);

  return getPosition;
};

var possibleSubsets = function (arrayOfNums) {
  let cardinality = arrayOfNums.length;
  let powerSetSize = Math.pow(2, arrayOfNums.length);
  let resultNumber;
  let result = [];
  for (let i = 0; i < powerSetSize; i++) {
    if (binaryNumber(i).length < cardinality) {
      let zeros = cardinality - binaryNumber(i).length;
      let zerosArray = [];
      for (let j = 0; j < zeros; j++) {
        zerosArray.push(0);
      }
      resultNumber = zerosArray.join("").concat(binaryNumber(i));
    } else {
      resultNumber = binaryNumber(i);
    }
    let set = [];

    for (let x in getPosition(resultNumber)) {
      set.push(arrayOfNums[getPosition(resultNumber)[x]]);
    }
    result.push(set);
  }
  return result;
};
// possibleSubsets([1, 2, 3]);
module.exports = possibleSubsets;
