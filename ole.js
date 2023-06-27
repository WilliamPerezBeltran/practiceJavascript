// const arr = [1,1,2,2,3,3,4,5,6];

// console.log(arr.filter((item,index)=>arr.indexOf(item)=== index))

// arr.filter((item,index)=>arr.indexOf(item)=== index);


// function add(x, y){
//     if (!y) return (y) => x + y;
//     return x + y;
// }

// console.log(add(1,2))
// console.log(add(1)(2))


// =======================

// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// Hoisting is not a term normatively defined in the E

console.log(x); // undefined
var x = 2;
console.log(x); // x 

console.log(y); // undefined
============

console.log(x); // undefined
var x = 2;
console.log(x); // 2 

console.log(y); // Reference error: y is not defined


===============

Promises vs async/await


fetch("url")
.then((res=>res.json()))
.then(res=>console.log(res))
.catch(error=>console.log(error))



try{
    let response = await (fetch("url"))
    let userData = await response.json()    
}catch(err){
    console.log(err)
}



