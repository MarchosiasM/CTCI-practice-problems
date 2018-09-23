
// This function expects two sorted arrays, and should return a new array
// When testing, ensure that the test file is importing your current
// attempt
const sortedMerge = (a, b) => {
    const firstArr = a.slice(0, a.length);
    const secondArr = b.slice(0, b.length);
    const newArray = [];
    const length = a.length + b.length;
    for (let i = 0; i < length; i += 1) {
        if (firstArr[0] < secondArr[0] && firstArr.length > 0 || secondArr.length < 1) {
            newArray.push(firstArr.shift());
        } else {
            newArray.push(secondArr.shift());
        }
    }
    return newArray;
};

module.exports = sortedMerge;