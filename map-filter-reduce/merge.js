// https://stackoverflow.com/questions/47713659/merge-two-array-of-objects-with-same-keys-some-object-wont-have-the-same-value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

input = [
  { code_id: 1, quantityInput: 2 },
  { code_id: 2, quantityInput: 20 },
];
output = [
  { code_id: 1, quantityOutput: 3 },
  { code_id: 2, quantityOutput: 98 },
];

// result = [{code_id: 1, quantityInput: 2,quantityOutput: 3}]

// You could use a Map for keeping same id in the
// same object and Object.assign for creating
// independent objects.

(map = new Map()),
  (result = input.concat(output).reduce(function (r, o) {
    var temp;
    if (map.has(o.code_id)) {
      Object.assign(map.get(o.code_id), o);
    } else {
      temp = Object.assign({}, o);
      map.set(temp.code_id, temp);
      r.push(temp);
    }
    return r;
  }, []));

console.log(result);

/*

resultado 

[
  { code_id: 1, quantityInput: 2, quantityOutput: 3 },
  { code_id: 2, quantityInput: 20, quantityOutput: 98 }
]

*/
