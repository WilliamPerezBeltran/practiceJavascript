/*
push(element(s)) : This adds a new item (or several items) to the top of
the stack.
• pop() : This removes the top item from the stack. It also returns the removed
• peek() : This returns the top element from the stack. The stack is not
• isEmpty() : This returns true if the stack does not contain any elements
and false if the size of the stack is bigger than 0.
• clear() : This removes all the elements of the stack.
• size() : This returns how many elements the stack contains. It is similar
to the length property of an array.
*/

function stack() {
  let array = [];

  this.push = function (element) {
    array.push(element);
  };

  this.pop = function () {
    return array.pop();
  };

  this.peek = function () {
    return array[array.length - 1];
  };

  this.isEmpty = function () {
    return array.length === 0;
  };

  this.clear = function () {
    array = [];
  };

  this.size = function () {
    return array.length;
  };

  this.print = function () {
    return array.toString();
  };
}

let myStack = new stack();

console.log(myStack);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log(myStack.print()); // => 1,2,3,4
console.log(myStack.isEmpty()); // false
console.log(myStack.size()); // false
console.log(myStack.peek()); // 4
