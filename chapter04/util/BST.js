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
    let printArray = [];
    printArray = printArray.concat(this.bundle(this.value));
    console.log(printArray.join(''));
    let childCollection = [];
    let bundleCollection = [];
    while (!currQ.isEmpty()) {
      currNode = currQ.remove();
      for (let child in currNode) {
        if (child === null) {

        } else {
          childCollection.push(child);
          printArray.push(child.value);
          nextQ.add(child);
        }
      }
      bundleCollection.push(this.bundle(childCollection));
      childCollection = [];

      if (currQ.isEmpty()) {
        printArray = this.gatherLevel(...bundleCollection);
        console.log(printArray.join(''));
        printArray = [];
        currQ = nextQ;
        nextQ = new Queue();
      }
    }
  }
}

module.exports = BST;