/* CLASS */
const LinkedList = function (value) {
  this.value = value;
  this.next = null;
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

module.exports = { removeDups };