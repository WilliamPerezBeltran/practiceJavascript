const string1 = "this is a string";
const string2 = new String("this is a another string");

console.log(string1);
console.log(string2);

let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.pop(); //
console.log(arr);
arr.push(10);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(100);
console.log(arr);
var axn = ["Robby", "Bradley", "Wes", "Michael", "Zach"];
console.log(axn);
console.log(axn.slice(1));
console.log(axn.slice(2));
console.log(axn.slice(3));
console.log(axn.slice(4));
console.log(axn.slice(1, 4));
console.log(axn.map((x) => x.length).sort((a, b) => b - a));
b = "asdf";
c = "fdsa";
console.log(b.concat(c));
g = [1, 2, 3];
h = [4, 5, 6];
console.log(g.concat(h));
s = "asldkjafklj";
console.log(s.lastIndexOf("a"));
console.log(axn.join(""));
console.log(axn.indexOf("Wes"));
//==============================
