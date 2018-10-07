const Stack = require('../util/Stack');
const LinkedList = require('../util/LinkedList');

const listOfDepths = (head) => {

  const listOfLists = [];
  let stackA = new Stack();
  stackA.push(head);
  let stackB = new Stack();
  let currNode;
  let currLL;
  let list = null;
  while (!stackA.isEmpty()) {
    currNode = stackA.pop();
    currLL = new LinkedList(currNode.value);
    if (currNode.left !== null) {
      stackB.push(currNode.left);
    }
    if (currNode.right !== null) {
      stackB.push(currNode.right);
    }
    currLL.next = list;
    list = currLL;

    if (stackA.isEmpty()) {
      listOfLists.push(list);
      if (stackB.isEmpty()) {
        return listOfLists;
      }
      stackA = stackB;
      stackB = new Stack();
      list = null;
    }
  }
  return listOfLists;
};


module.exports = listOfDepths;