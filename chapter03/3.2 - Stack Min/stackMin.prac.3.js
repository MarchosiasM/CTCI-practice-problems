var Stack = require('./../util/Stack');

// Approach, keep an additional stack that keeps the mins
class stackMin {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
        this.minValue = undefined;
    }
    push(item) {
        this.stack.push(item);
        if (item <= this.minValue || this.minValue === undefined) {
            this.minStack.push(item);
            this.minValue = item;
        }
    }
    pop() {
        const value = this.stack.pop();
        if (value === this.minValue) {
            this.minStack.pop();
            this.minValue = this.minStack.peek();
        }
        return value;
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
/* TEST */

module.exports = stackMin;
