const sortedMerge = (arrayA, arrayB) => {
  // Create new arrays to avoid mutation
  const newA = arrayA.slice();
  const newB = arrayB.slice();
  const length = newA.length + newB.length;
  const resultArray = [];
  for (let i = 0; i < length; i+=1) {
    if (newA[0] <= newB[0] || newB.length < 1) {
      resultArray.push(newA.shift());
    } else {
      resultArray.push(newB.shift());
    }
  }
  return resultArray;
};

module.exports = sortedMerge;