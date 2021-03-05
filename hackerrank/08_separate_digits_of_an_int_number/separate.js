separate = function(num){
	output = [];
	while(num>0){
		output.push(num%10)
		// num = parseInt(num/10)
		num = Math.floor(num/10);
	}
	return output.reverse()

}
module.exports = separate

console.log(separate(12345))
// console.log(separate(234))
// console.log(separate(3465))
// console.log(separate(9875))
// console.log(separate(345676))
// console.log(separate(657656))

