const string_1 = "A string primitive ";
const string_2 = "B string primitive";
const string3 = new String("a new string");
const string4 = new String("a new string again");
const string5 = new String("a new string again and again");

console.log("cat".charAt(1)); // gives value "a" that means: hey string give the string at the position x

const areEqualInUpperCase = (string1, string2) =>
  string1.toUpperCase() === string2.toUpperCase();

const _areEqualInUpperCase = function (string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase();
};

console.log(areEqualInUpperCase("LLA", "LLA"));
console.log(areEqualInUpperCase("A", "B"));
console.log(_areEqualInUpperCase("Aabvdll", "Bkslsk"));

console.log("paratigunamiracuro".split(""));

const str = "MyLargeString";
console.log(str.substring(2, 7));
console.log(str);
/*
recomended methods 

str.charAt()
str.toUpperCase()
str.toLowerCase()
str.concat()
str.endsWith()
str.includes()
str.indexOf()
str.lastIndexOf()
str.replace()
str.replaceAll()
str.slice()
str.splice()
str.split()
str.substring()
str.toString()
str.trim()
str.trimEnd()
str.trimStart()
* */

const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

let newWord = "";
for (station of stations) {
  console.log(`${station.split(";")[0].slice(0, 3)} ${station.split(";")[1]}`);
}
