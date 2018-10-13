const LinkedList = require('../util/LinkedList');
const Queue = require('../util/Queue');

const listOfDepths = (head) => {
  // Takes in a tree and then splits up each level into its own 
  // linked list in an array.
  // need our variables for the loop
  let currNode;
  let currLink;
  const arrayOfLists = [];
  let currQueue = new Queue();
  let nextQueue = new Queue();
  currQueue.add(head);
  let levelList = null;
  while (!currQueue.isEmpty()) {
    currNode = currQueue.remove();
    currLink = new LinkedList(currNode.value);
    currLink.next = levelList;
    levelList = currLink;
    currLink = null;
    if (!(currNode.left === null)) {
      nextQueue.add(currNode.left);
    }
    if (!(currNode.right === null)) {
      nextQueue.add(currNode.right);
    }
    if (currQueue.isEmpty()) {
      arrayOfLists.push(levelList);
      levelList = null;
      if (!nextQueue.isEmpty()) {
        currQueue = nextQueue;
        nextQueue = new Queue();
      } else {
        console.log('I\'m exiting for some reason ', arrayOfLists);
        return arrayOfLists;
      }

    }
  }

  return arrayOfLists;
};

module.exports = listOfDepths;
