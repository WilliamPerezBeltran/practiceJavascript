function seekDestroy(arr) {
  let fullarray = Array.from(arguments);
  let restArgument = fullarray.slice(1);
  return fullarray[0].filter((item) =>
    restArgument.includes(item) ? false : true
  );
}

module.exports = seekDestroy;
