const returnKthToLast = (n, head) => {

    if (head.next === null) {
        payload = {
            count: 1,
            payload: null,
        };
        if (n === 1) {
            payload.payload = head.value;
        }
        return payload;
    }

    const returnObj = returnKthToLast(n, head.next);
    returnObj.count += 1;

    if (returnObj.count === n && returnObj.payload === null) {
        returnObj.payload = head.value;
    }
    return returnObj;
};

module.exports = returnKthToLast;