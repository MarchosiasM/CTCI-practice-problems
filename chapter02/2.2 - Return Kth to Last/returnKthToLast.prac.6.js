
// 1st to the last is the last
// Print out when you found the right node's value
const findKthToLast = (k, head) => {
  if (head === null) {
    return ({
      iterable: 0,
      payload: null,
    });
  }

  const returnObj = findKthToLast(k, head.next);
  returnObj.iterable++;

  if (returnObj.iterable != k) {
    return returnObj;
  }
  if (returnObj.iterable === k && returnObj.payload === null) {
    returnObj.payload = head.value;
  }
  return returnObj;
};

module.exports = findKthToLast;