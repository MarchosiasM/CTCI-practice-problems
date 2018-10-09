const Stack = require('../util/Stack');

class myQueue {
    constructor() {
        this.frontStack = new Stack();
        this.backStack = new Stack();
        this.status = 'front';
    }

    moveToFront() {
        if (this.status === 'front') {
            return;
        }
        while (!this.backStack.isEmpty()) {
            this.frontStack.push(this.backStack.pop());
        }
        this.status = 'front';
    }

    moveToBack() {
        if (this.status === 'back') {
            return;
        }

        while (!this.frontStack.isEmpty()) {
            this.backStack.push(this.frontStack.pop());
        }

        this.status = 'back';
    }

    add(value) {
        this.moveToFront();
        this.frontStack.push(value);

    }

    remove() {
        this.moveToBack();
        return this.backStack.pop();
    }

    peek() {
        this.moveToBack();
        return this.backStack.peek();
    }

    isEmpty() {
        return this.frontStack.isEmpty() && this.backStack.isEmpty();
    }

}

module.exports = myQueue;