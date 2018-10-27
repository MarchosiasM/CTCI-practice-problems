const findKthToLast = (head, count) => {
  if (head.next === null || head.next === undefined) {
    return {
      iteration: 1,
      payload: null
    };
  }
  let iterator = findKthToLast(head.next, count);
  if (iterator.iteration === count) {
    iterator.payload = head.value;
    iterator.iteration += 1;
    return iterator;
  } else {
    iterator.iteration += 1;
    return iterator;
  }
};

module.exports = findKthToLast;