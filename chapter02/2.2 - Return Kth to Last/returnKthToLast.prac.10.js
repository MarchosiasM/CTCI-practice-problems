const findKthToLast = (k, head) => {
    if (head.next == null) {
        const bundle = {
            payload: null,
            count: 1,
        }
        if (k === 1) {
            bundle.payload = head.value;
        }
        return bundle;
    }
    const kthBundle = findKthToLast(k, head.next);
    kthBundle.count += 1;
    if (kthBundle.payload == undefined) {
        if (kthBundle.count === k) {
            kthBundle.payload = head.value;
        }
    }
    return kthBundle;
};

module.exports = findKthToLast;