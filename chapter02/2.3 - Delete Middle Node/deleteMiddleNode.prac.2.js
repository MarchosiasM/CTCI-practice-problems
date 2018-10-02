
const deleteMiddleNode = (middle) => {
  if (middle === null || middle.next === null) {
    return false;
  }
  const nextNode = middle.next;
  middle.value = nextNode.value;
  middle.next = nextNode.next;
};

module.exports = deleteMiddleNode;