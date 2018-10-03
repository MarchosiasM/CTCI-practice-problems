const groupAnagrams = (strArray) => {
  if (strArray == null) {
    return 'Where is your anagram?';
  }
  const cloneArray = strArray.slice(0);
  const objArray = cloneArray.map((string) => {
    return ({
      original: string,
      sorted: string.split('').sort(),
    });
  });
  const sortedArray = objArray.sort((objA, objB) => {
    if (objA.sorted < objB.sorted) {
      return 1;
    } else if (objA.sorted > objB.sorted) {
      return -1;
    }
  });
  return sortedArray.map((obj) => {
    return obj.original;
  });
};

module.exports = groupAnagrams;