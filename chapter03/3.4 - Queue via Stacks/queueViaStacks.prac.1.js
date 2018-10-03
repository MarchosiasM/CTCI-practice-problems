var Stack = require('../util/Stack');

class myQueue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
    this.state = 'front';
  }

  moveBack() {
    while (!this.front.isEmpty()) {
      this.back.push(this.front.pop());
    }
    this.state = 'back';
  }

  add(value) {
    if (this.state = 'back') {
      while (!this.back.isEmpty()) {
        this.front.push(this.back.pop());
      }
      this.state = 'front';
    }
    this.front.push(value);
  }

  remove() {
    if (this.state = 'front') {
      this.moveBack();
    }
    this.back.pop();
  }

  peek() {
    if (this.state = 'front') {
      this.moveBack();
    }
    return this.back.peek();
  }

  isEmpty() {
    return this.front.isEmpty() && this.back.isEmpty();
  }

}

module.exports = myQueue;