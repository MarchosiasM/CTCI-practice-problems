const deleteMiddleNode = (middle) => {
  const next = middle.next;
  // migrate the values from the next node into the current
  middle.next = next.next;
  middle.value = next.value;
};

module.exports = deleteMiddleNode;