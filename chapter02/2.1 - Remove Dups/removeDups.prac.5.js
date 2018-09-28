/* CLASS */
const LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

const cloneList = (node) => {
  const clonedHead = new LinkedList(node.value);
  let prevClone = clonedHead;
  let currNode = node.next;
  let currClone;
  while (currNode != null) {
    currClone = new LinkedList(currNode.value);
    if (prevClone != null) {
      prevClone.next = currClone;
    }
    currNode = currNode.next;
    prevClone = currClone;
  }
  return clonedHead;
};

/* FUNCTIONS */
const removeDups = function (head) {
  const buffer = new Set();
  const cloneHead = cloneList(head);
  let currNode = cloneHead;
  let prevNode = null;
  while (currNode != null) {
    if (buffer.has(currNode.value)) {
      prevNode.next = currNode.next;
      currNode = currNode.next;
    } else {
      buffer.add(currNode.value);
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
  return cloneHead;
};

module.exports = { removeDups, cloneList };