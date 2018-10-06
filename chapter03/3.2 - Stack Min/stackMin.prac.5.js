const Stack = require('../util/Stack');

class StackMin {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
        this.currMin = undefined;
    }

    push(val) {
        if (val <= this.currMin || this.currMin === undefined) {
            this.currMin = val;
            this.minStack.push(val);
        }
        this.stack.push(val);
    }

    pop() {
        const bucket = this.stack.pop();
        if (bucket === this.currMin) {
            this.minStack.pop();
            this.currMin = this.minStack.peek();
        }
        return bucket;
    }

    peek() {
        return this.stack.peek();
    }

    min() {
        return this.currMin;
    }

    isEmpty() {
        return this.stack.isEmpty();
    }
}

module.exports = StackMin;