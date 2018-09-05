var Stack = require('./../util/Stack');

// Approach, keep an additional stack that keeps the mins
class stackMin {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
    this.minValue = undefined;
  }
  // min
  min() {
    return this.minValue;
  }
  // peek
  peek() {
    return this.stack.peek();
  }
  // pop
  pop() {
    const value = this.stack.pop();
    if (value === this.minValue) {
      this.minStack.pop();
      this.minValue = this.minStack.peek();
    }
    return value;
  }
  // push
  push(value) {
    if (value <= this.minValue || this.minValue === undefined) {
      this.minValue = value;
      this.minStack.push(value);
    }
    this.stack.push(value);
  }
  // isEmpty
  isEmpty() {
    return this.stack.isEmpty();
  }
}

/* TEST */

var s = new stackMin();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), undefined);
