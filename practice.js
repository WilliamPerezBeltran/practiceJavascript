
var myArray = [1,2,1,3,3,1,2,1,5,1];

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var unique = myArray.filter(onlyUnique);
console.log(unique)

function count(arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}
let obj = count(myArray)
console.log('obj')
console.log(obj)
for (var data of unique){
	 var array = [];

	for (var i = 0; i < obj[data]; ++i) {
		array.push("*");
	}
	console.log(`${data}: ${array.join('')}`)

}


