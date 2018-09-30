var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};


const copyList = (head) => {
  const cloneHead = new LinkedList(head.value);
  let currClone = cloneHead;
  let currNode = head;
  while (currNode != null) {
    let newClone;
    if (currNode.next != null) {
      newClone = new LinkedList(currNode.next.value);
    } else {
      newClone = null;
    }
    currClone.next = newClone;
    currClone = newClone;
    currNode = currNode.next;
  }
  return cloneHead;
};

const deleteMidNode = (head) => {
  const immutList = copyList(head);
  const buffer = {
    head: head,
    middle: undefined,
    end: undefined,
    nodeCount: 0,
    nodeList: [],
  };
  let currNode = immutList;

  while (currNode != null) {
    buffer.nodeList[buffer.nodeCount] = currNode;
    buffer.nodeCount += 1;
    currNode = currNode.next;
  };

  const length = buffer.nodeCount;
  const midNodeMinusOne = buffer.nodeList[length / 2 - 1];
  midNodeMinusOne.next = midNodeMinusOne.next.next;
  return immutList;

};

module.exports = deleteMidNode;