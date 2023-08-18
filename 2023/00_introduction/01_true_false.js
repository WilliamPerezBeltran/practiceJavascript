function testTrufy(param) {
  return param ? console.log("trufy") : console.log("falsy");
}

console.log("string:        ", testTrufy("string"));

console.log("undefined:     ", testTrufy(undefined));
console.log("null:          ", testTrufy(null));
console.log("boolean true:  ", testTrufy(true));
console.log("boolean false: ", testTrufy(false));
console.log("Object:        ", testTrufy({}));
console.log("Number 10:        ", testTrufy(10));
console.log("Number -10:        ", testTrufy(-10));
console.log("Number NaN:        ", testTrufy(NaN));
console.log("Number 1:        ", testTrufy(1));
console.log("Number -1:        ", testTrufy(-1));
