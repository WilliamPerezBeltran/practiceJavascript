separate = function (num) {
  output = [];
  while (num > 0) {
    output.push(num % 10);
    // num = parseInt(num/10)
    num = Math.floor(num / 10);
  }
  return output.reverse();
};
module.exports = separate;
