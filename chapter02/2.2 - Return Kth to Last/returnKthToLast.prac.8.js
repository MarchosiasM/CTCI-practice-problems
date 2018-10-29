const findKthToLast = (target, head) => {
  let instObject;
  if (head.next === null || head.next === undefined) {
    instObject = {
      payload: null,
      iterator: 1,
    };
  } else {
    instObject = findKthToLast(target, head.next);
    instObject.iterator += 1;
  }

  const { iterator } = instObject;
  if (iterator === target && instObject.payload == null) {
    instObject.payload = head.value;
  }
  return instObject;
};

module.exports = findKthToLast;