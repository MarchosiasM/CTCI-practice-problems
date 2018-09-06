const Queue = require('./Queue');

class BSTNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  insert(value) {
    if (value === null) {
      return;
    }
    // console.log(value instanceof BSTNode);
    if (value instanceof BSTNode) {
      if (this.value === undefined) {
        this.value = value.value;
        return;
      } else if (value.value < this.value) {
        if (this.left === null) {
          this.left = value;
        } else {
          this.left.insert(value);
        }
      } else if (value.value > this.value) {
        if (this.right === null) {
          this.right = value;
        } else {
          this.right.insert(value);
        }
      }
    } else {
      if (this.value === undefined) {
        this.value = value;
      } else if (value < this.value) {
        if (this.left === null) {
          this.left = new BSTNode(value);
        } else {
          this.left.insert(value);
        }
      } else if (value > this.value) {
        if (this.right === null) {
          this.right = new BSTNode(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  printTreeStruct() {
    let currQ = new Queue();
    let nextQ = new Queue();
    let currNode = this;
    currQ.add(currNode);
    let thisLevel = [];
    while (!currQ.isEmpty()) {
      currNode = currQ.remove();
      thisLevel.push(currNode.value);
      if (currNode.left !== null) {
        nextQ.add(currNode.left);
      }
      if (currNode.right !== null) {
        nextQ.add(currNode.right);
      }
      if (currQ.isEmpty()) {
        const printString = thisLevel.join(', ');
        console.log(printString);
        thisLevel = [];
        currQ = nextQ;
        nextQ = new Queue();
      }
    }
  }
}


module.exports = BSTNode;

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
// var bst = new BSTNode();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// bst.printTreeStruct();
