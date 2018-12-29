const Stack = require('../util/Stack')

 module.exports = class MyQueue {
    constructor() {
        this.stackFront = new Stack();
        this.stackBack = new Stack();
        this.stackState = 'FRONT';
    }

    flipState() {
        if (this.stackState === 'FRONT') {
            console.log('Flipping from front to back');
            while (!this.stackFront.isEmpty()) {
                this.stackBack.push(this.stackFront.pop());
            }
            this.stackState = 'BACK';
        } else {
            while (!this.stackBack.isEmpty()) {
                this.stackFront.push(this.stackBack.pop());
            }
            this.stackState = 'FRONT';
        }
    }

    add(item) {
        if (this.stackState === 'BACK') {
            this.flipState();
        }
        this.stackFront.push(item);
    }

    remove() {
        console.log('Current state ', this.stackState);
        if (this.stackState === 'FRONT') {
            console.log('Flipping state')
            this.flipState();
        }
        console.log('stackBack looks like ', this.stackBack);
        console.log('stackFront looks like ', this.stackFront);
        return this.stackBack.pop();
    }

    peek() {
        if (this.stackState === 'FRONT') {
            this.flipState();
        }
        return this.stackBack.peek();
    }

    isEmpty() {
        return this.stackBack.isEmpty() && this.stackFront.isEmpty();
    }
}