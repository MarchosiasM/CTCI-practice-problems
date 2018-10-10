const deleteMiddleNode = (node) => {

  const nodeVal = node.next.value;
  const nextNode = node.next.next;
  node.value = nodeVal;
  node.next = nextNode;

};

module.exports = deleteMiddleNode;