const Queue = require('../util/Queue');
const LinkedList = require('../util/LinkedList');

type LinkedList = {
  value: number;
  next: null | object;
}

const listOfDepths = (head: object): LinkedList[] => {
  let currLevel = new Queue();
  let nextLevel = new Queue();
  currLevel.add(head);
  let currNode;
  let arrayOfLists: LinkedList[] = [];
  let levelList;
  while (!currLevel.isEmpty()) {
    currNode = currLevel.remove();
    if (levelList == null) {
      levelList = new LinkedList(currNode.value);
    } else {
      let newNode = new LinkedList(currNode.value);
      newNode.next = levelList;
      levelList = newNode;
    }
    if (currNode.right !== null) {
      nextLevel.add(currNode.right);
    }
    if (currNode.left !== null) {
      nextLevel.add(currNode.left);
    }
    if (currLevel.isEmpty()) {
      arrayOfLists.push(levelList);
      levelList = null;
      if (nextLevel.isEmpty()) {
        return arrayOfLists;
      }
      currLevel = nextLevel;
      nextLevel = new Queue();
    }
  }

  return arrayOfLists;
}

module.exports = listOfDepths;