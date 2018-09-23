const Stack = require('./../util/Stack');

// Approach, keep an additional stack that keeps the mins
class StackMin {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
    this.minValue = undefined;
  }
  push(value) {
    this.stack.push(value);
    if (value <= this.minValue || this.minValue === undefined) {
      this.minValue = value;
      this.minStack.push(value);
    }
  }
  pop() {
    const buffer = this.stack.pop();
    if (buffer === this.minValue) {
      this.minStack.pop();
      this.minValue = this.minStack.peek();
    }
    return buffer;
  }
  peek() {
    return this.stack.peek();
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  min() {
    return this.minValue;
  }
};

module.exports = StackMin;
/* TEST */

// var s = new stackMin();
// s.push(9);
// s.push(8);
// s.push(1);
// s.push(2);
// s.push(1);
// s.push(9);

// console.log(s.min(), 1);
// s.pop();
// s.pop();
// console.log(s.peek(), 2);
// console.log(s.min(), 1);
// s.pop();
// s.pop();
// console.log(s.peek(), 8);
// console.log(s.min(), 8);
// s.pop();
// s.pop();
// console.log(s.isEmpty(), true);
// console.log(s.min(), undefined);
