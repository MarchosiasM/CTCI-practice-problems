const LinkedList = require('../util/LinkedList');
const Stack = require('../util/Stack');

const listOfDepths = (head) => {
  const listOfLists = [];
  let stackA = new Stack();
  let stackB = new Stack();
  let currNode;
  let currList = null;
  stackA.push(head);
  while (!stackA.isEmpty()) {
    currNode = stackA.pop();
    let nodeClone = new LinkedList(currNode.value);
    nodeClone.next = currList;
    if (currNode.left != null) {
      stackB.push(currNode.left);
    }
    if (currNode.right != null) {
      stackB.push(currNode.right);
    }
    currList = nodeClone;
    if (stackA.isEmpty()) {
      listOfLists.push(currList);
      currList = null;
      if (!stackB.isEmpty()) {
        stackA = stackB;
        stackB = new Stack();
      } else {
        return listOfLists;
      }
    }
  }
};

module.exports = listOfDepths;

