const findMagic = (array, beginning = 0, end = (array.length - 1)) => {
    if (end - beginning < 1) {
        if (array[end] != end) {
            return null;
        }
        return end;
    }
    const adjustedHalf = Math.floor(beginning + (end - beginning)/2);
    if (array[adjustedHalf] === adjustedHalf) {
        console.log('Found solution at pos ', adjustedHalf);
        return adjustedHalf;
    } else if (array[adjustedHalf] < adjustedHalf) {
        console.log('Found i < n, adjusting to the right of ', adjustedHalf);
        return findMagic(array, adjustedHalf + 1, end);
    }
    else {
        console.log('Found i > n, adjusting to the left of ', adjustedHalf);
        return findMagic(array, beginning, adjustedHalf);
    }
};

module.exports = findMagic;