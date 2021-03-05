function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  let newArray = collection.filter((obj) => {
    for (var i = 0; i < sourceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(sourceKeys[i]) ||
        obj[sourceKeys[i]] !== source[sourceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });

  return newArray;
}
