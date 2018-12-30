const Stack = require('../util/Stack');

class StackMin {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
        this.currMin = undefined;
    }

    push(value) {
        this.stack.push(value);
        if (value <= this.currMin || this.currMin == undefined) {
            console.log('Adding ', value, ' to the minstack');
            this.currMin = value;
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.currMin === this.stack.peek()) {
            console.log('Popping from minstack ', this.minStack.peek());
            this.minStack.pop();
            this.currMin = this.minStack.peek();
        }
        return this.stack.pop();
    }

    min() {
        return this.currMin;
    }

    peek() {
        return this.stack.peek();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }
}

module.exports = StackMin;