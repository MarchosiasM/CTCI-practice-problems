const Queue = require('./Queue');

class BST {
  constructor(n) {
    this.value = n;
    this.right = null;
    this.left = null;
  }

  insert(input) {
    if (typeof input !== 'number') {
      return null;
    } else {
      if (this.value === undefined) {
        this.value = input;
      } else {
        if (input <= this.value) {
          if (this.left === null) {
            this.left = new BST(input);
          } else {
            this.left.insert(input);
          }
        } else {
          if (this.right === null) {
            this.right = new BST(input);
          } else {
            this.right.insert(input);
          }
        }
      }
    }
  }

  find(searchValue) {
    if (searchValue === this.value) {
      return this;
    }
    if (searchValue < this.value) {
      if (this.left === null) {
        return null;
      } else {
        return this.left.find(searchValue);
      }
    }
    if (searchValue > this.value) {
      if (this.right === null) {
        return null;
      } else {
        return this.right.find(searchValue);
      }
    }
  }

  bundle(...args) {
    let array = ['['];
    args.forEach((entry) => {
      array.push(entry);
    });
    array.push(']');
    return array;
  }

  gatherLevel(...args) {
    let array = [];
    args.forEach((entry) => {
      entry.forEach((nestedEntry) => {
        array = array.concat(nestedEntry);
      });
    });
    return array;
  }

  print() {
    let currQ = new Queue();
    let nextQ = new Queue();
    currQ.add(this);
    let currNode;
    let level = [];
    while (!currQ.isEmpty()) {
      currNode = currQ.remove();
      for (let child in currNode) {
        if (child !== null) {
          nextQ.add(child);
        }
      }
      level.push(this.bundle(currNode.left, currNode.right));
      if (currQ.isEmpty()) {
        if (!nextQ.isEmpty()) {
          currQ = nextQ;
          nextQ = new Queue();
        }
        level = [];
      }
    }
  }
}

module.exports = BST;