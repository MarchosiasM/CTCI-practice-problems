const myQueue = require('./queueViaStacks.prac.3');

// var Stack = require('../util/Stack');

// var myQueue = function () {
//   this.front = new Stack();
//   this.back = new Stack();
//   this.backUp = true;
// };

// myQueue.prototype.add = function (value) {
//   if (!this.backUp) {
//     while (!this.front.isEmpty()) {
//       this.back.push(this.front.pop());
//     }
//     this.backUp = true;
//   }
//   this.back.push(value);
// };

// myQueue.prototype.remove = function () {
//   if (this.backUp) {
//     while (!this.back.isEmpty()) {
//       this.front.push(this.back.pop());
//     }
//     this.backUp = false;
//   }
//   return this.front.pop();
// };

// myQueue.prototype.peek = function () {
//   if (this.backUp) {
//     while (!this.back.isEmpty()) {
//       this.front.push(this.back.pop());
//     }
//     this.backUp = false;
//   }
//   return this.front.peek();
// };

// myQueue.prototype.isEmpty = function () {
//   return this.front.isEmpty() && this.back.isEmpty();
// };
var m = new myQueue();


/* TEST */
describe('Chapter 3, Problem 4: My Queue', () => {
  it('the `isEmpty()` method returns true when the queue is empty', () => {
    expect(m.isEmpty()).toBeTruthy();
  });
  it('correctly reveals the node added second when the first is removed', () => {
    m.add('a');
    m.add('b');
    m.add('c');
    m.add('d');
    m.add('e');
    m.remove();
    expect(m.peek()).toEqual('b');
  });
});
