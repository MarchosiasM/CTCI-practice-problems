var Stack = require('./../util/Stack');

// Approach, keep an additional stack that keeps the mins
class stackMin {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
    this.currMin = undefined;
  }
  push(entry) {
    this.stack.push(entry);
    if (this.currMin === undefined || entry < this.currMin) {
      this.minStack.push(this.currMin);
      this.currMin = entry;
    }
  }

  pop() {
    const answer = this.stack.pop();
    if (answer === this.currMin) {
      this.currMin = this.minStack.pop();
    }
    return answer;
  }

  peek() {
    return this.stack.peek();
  }
  min() {
    return this.currMin;
  }
  isEmpty() {
    if (this.stack.peek() != null) {
      return false;
    }
    return true;
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
