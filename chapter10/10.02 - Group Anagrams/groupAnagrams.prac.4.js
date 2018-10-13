const groupAnagrams = (array) => {
  if (array === null || array === undefined) {
    return 'Where is your anagram?';
  }
  // Take in an array of strings
  // trim the strings, break them into arrays, and sort
  const sortPhaseOne = array.map(string => {
    return {
      original: string,
      sorted: string.trim().split('').sort().join('')
    };
  });
  // Sort the sorted strings
  sortPhaseOne.sort((a, b) => {
    if (a.sorted < b.sorted) {
      return 1;
    }
    return -1;
  });
  // return just an array with the original strings based on the
  const sortedArray = sortPhaseOne.map(obj => {
    return obj.original;
  });
  // meta sort.

  return sortedArray;
};

module.exports = groupAnagrams;
