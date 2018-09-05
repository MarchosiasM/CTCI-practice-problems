
const sortedMerge = (a, b) => {
  if (a === undefined || b === undefined) {
    return 'Please enter strings';
  }
  // Clone your input arrays so we can rip them up as we go.
  const newA = a.slice(0, a.length);
  const newB = b.slice(0, b.length);
  // Accept two sorted arrays and then output a sorted array of merged
  // values. I'll iterate through both arrays and add
  const newArray = [];
  const combinedLength = a.length + b.length;
  for (let i = 0; i < combinedLength; i += 1) {
    // Iterate n times, and pull from each array the smaller of the two comparison values.
    if (newA[0] < newB[0] && newA[0].length !== 0 || newB.length === 0) {
      newArray.push(newA.shift());
    } else {
      newArray.push(newB.shift());
    }
  }
  return newArray;
};

module.exports = sortedMerge;