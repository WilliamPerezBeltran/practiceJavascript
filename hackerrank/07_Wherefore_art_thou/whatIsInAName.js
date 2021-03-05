function whatIsInAName(collection, source) {
  let newArray = [];
  let rta;
  let keys = Object.keys(source);
  for (var i = 0; i < collection.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (collection[i].hasOwnProperty(keys[j])) {
        if (collection[i][keys[j]] === source[keys[j]]) {
          rta = true;
        } else {
          rta = false;
          break;
        }
      } else {
        rta = false;
        break;
      }
    }
    if (rta) newArray.push(collection[i]);
  }
  return newArray;
}

module.exports = whatIsInAName;
