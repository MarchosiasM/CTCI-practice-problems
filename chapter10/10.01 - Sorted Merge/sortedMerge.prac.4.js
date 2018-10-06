const sortedMerge = (a, b) => {
    const aCopy = a.slice(0);
    const bCopy = b.slice(0);
    const total = aCopy.length + bCopy.length;
    let sortedArray = [];
    for (let i = 0; i < total; i += 1) {
        if (aCopy[0] < bCopy[0] && aCopy.length > 0 || bCopy.length < 1) {
            sortedArray.push(aCopy.shift());
        } else {
            sortedArray.push(bCopy.shift());
        }
    };
    return sortedArray;
};

module.exports = sortedMerge;