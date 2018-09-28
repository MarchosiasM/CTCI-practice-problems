const groupAnagrams = (strArray) => {
  if (strArray === undefined || strArray === null) {
    return 'Where is your anagram?';
  }
  const sortingArray = strArray.slice(0).map((string) => {
    return {
      original: string,
      sorted: string.split('').sort(),
    };
  });
  const sortedArray = sortingArray.sort((a, b) => {
    if (a.sorted < b.sorted) {
      return 1;
    }
    if (a.sorted > b.sorted) {
      return -1;
    }
  });

  return sortedArray.map(object => {
    return object.original;
  });
};

module.exports = groupAnagrams;