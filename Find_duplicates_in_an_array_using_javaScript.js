//https://flexiple.com/javascript/find-duplicates-javascript-array/

const arry = ["producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4", "producto_5", "producto_6", "producto_7", "producto_8", "producto_9", "producto_1", "producto_2", "producto_3", "producto_1", "producto_2", "producto_3", "producto_4"]

let toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
console.log(toFindDuplicates(arry));

// Output: [1, 3]
/*const asd = ["producto_1","producto_2","producto_3","producto_4","producto_5","producto_6","producto_7","producto_8","producto_9","producto_1","producto_2",]
 toFindDuplicates = arry => asd.filter((item, index) => arry.indexOf(item) !== index)
console.log(toFindDuplicates(asd));*/



let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates